#!/usr/bin/env -S npx tsx
// Generate index.html from dictionary/*.md + internal/Curriculum.md + internal/term-zh.json

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = dirname(HERE);
const CURRICULUM = join(HERE, "Curriculum.md");
const TERM_ZH = join(HERE, "term-zh.json");
const DICT_DIR = join(ROOT, "dictionary");
const OUTPUT = join(ROOT, "index.html");

const SECTION_RE = /^## Section \d+ — .+$/;
const BULLET_RE = /^- (.+)$/;

type Section = { heading: string; terms: string[] };
type Entry = {
  term: string;
  zhTitle: string;
  description: string | null;
  descriptionZh: string | null;
  html: string;
};

function fail(msg: string): never {
  console.error(msg);
  process.exit(1);
}

function headingSlug(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^\p{L}\p{N} -]/gu, "")
    .replace(/ /g, "-");
}

function parseCurriculum(text: string): Section[] {
  const sections: Section[] = [];
  let current: Section | null = null;

  text.split("\n").forEach((raw) => {
    const line = raw.trimEnd();
    if (line === "") return;

    if (line.startsWith("## ")) {
      if (!SECTION_RE.test(line)) {
        fail(`Invalid section heading: ${line}`);
      }
      current = { heading: line.slice(3), terms: [] };
      sections.push(current);
      return;
    }

    if (line.startsWith("- ")) {
      if (!current) fail("Bullet before section heading");
      const m = line.match(BULLET_RE);
      if (!m || !m[1]) fail(`Malformed bullet: ${line}`);
      current.terms.push(m[1]);
      return;
    }

    fail(`Unexpected line: ${line}`);
  });

  return sections;
}

function parseFrontmatter(body: string): {
  body: string;
  description: string | null;
  descriptionZh: string | null;
} {
  if (!body.startsWith("---\n")) return { body, description: null, descriptionZh: null };
  const end = body.indexOf("\n---\n", 4);
  if (end === -1) return { body, description: null, descriptionZh: null };
  const fm = body.slice(4, end);
  const rest = body.slice(end + 5).replace(/^\n+/, "");

  let description: string | null = null;
  let descriptionZh: string | null = null;
  for (const line of fm.split("\n")) {
    const dMatch = line.match(/^description:\s*(.*)$/);
    if (dMatch) description = dMatch[1].trim();
    const dzMatch = line.match(/^description_zh:\s*(.*)$/);
    if (dzMatch) descriptionZh = dzMatch[1].trim();
  }
  return { body: rest, description, descriptionZh };
}

function inlineMdToHtml(text: string): string {
  // Escape HTML first
  text = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Code spans (must be first)
  text = text.replace(/`([^`]+)`/g, "<code>$1</code>");

  // Bold
  text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

  // Italic (not already bold)
  text = text.replace(/\*([^*]+)\*/g, "<em>$1</em>");

  // Links
  text = text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_: string, label: string, url: string) => {
      if (url.startsWith("http") || url.startsWith("//")) {
        return `<a href="${url}" target="_blank" rel="noopener">${label}</a>`;
      }
      if (url.startsWith("#")) {
        return `<a href="${url}">${label}</a>`;
      }
      const clean = url.replace(/^\.\//, "").replace(/\.md$/, "");
      const slug = headingSlug(decodeURIComponent(clean));
      return `<a href="#${slug}">${label}</a>`;
    },
  );

  return text;
}

function mdToHtml(md: string): string {
  const lines = md.split("\n");
  const out: string[] = [];
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trimEnd();

    if (trimmed === "") {
      if (inList) {
        out.push("</ul>");
        inList = false;
      }
      continue;
    }

    if (trimmed.startsWith("- ")) {
      if (!inList) {
        out.push("<ul>");
        inList = true;
      }
      out.push(`<li>${inlineMdToHtml(trimmed.slice(2))}</li>`);
      continue;
    }

    if (inList) {
      out.push("</ul>");
      inList = false;
    }

    if (trimmed.startsWith("> ")) {
      out.push(`<blockquote>${inlineMdToHtml(trimmed.slice(2))}</blockquote>`);
      continue;
    }

    if (trimmed.startsWith("**中文：**")) {
      const rest = trimmed.slice(7).trim();
      out.push(`<p class="zh" lang="zh-CN">${inlineMdToHtml(rest)}</p>`);
      continue;
    }

    out.push(`<p>${inlineMdToHtml(trimmed)}</p>`);
  }

  if (inList) out.push("</ul>");
  return out.join("\n");
}

function buildPage(sections: Section[], entries: Map<string, Entry>): string {
  // Sidebar HTML
  const sidebarItems: string[] = [];
  for (const section of sections) {
    const termLinks = section.terms
      .map((t) => {
        const e = entries.get(t);
        const slug = headingSlug(t);
        const label = e ? `${t} / ${e.zhTitle}` : t;
        return `<a href="#${slug}" class="toc-term" data-term="${t}">${label}</a>`;
      })
      .join("");
    sidebarItems.push(
      `<details class="toc-section" open>` +
        `<summary>${section.heading}</summary>` +
        `<div class="toc-terms">${termLinks}</div>` +
      `</details>`,
    );
  }

  // Content HTML
  const contentItems: string[] = [];
  for (const section of sections) {
    contentItems.push(`<h2 class="section-heading">${section.heading}</h2>`);
    for (const term of section.terms) {
      const e = entries.get(term);
      if (!e) continue;
      const slug = headingSlug(term);
      contentItems.push(
        `<article id="${slug}" class="entry" data-term="${term}">` +
        `<h3 class="entry-title">${term} / ${e.zhTitle}</h3>`,
      );
      if (e.description && e.descriptionZh) {
        contentItems.push(
          `<div class="entry-description">` +
          `<p>${inlineMdToHtml(e.description)}</p>` +
          `<p class="zh" lang="zh-CN">${inlineMdToHtml(e.descriptionZh)}</p>` +
          `</div>`,
        );
      }
      contentItems.push(`<div class="entry-body">${e.html}</div></article>`);
    }
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AI Coding Dictionary / AI 编程词典</title>
<style>
:root {
  --bg: #fafafa;
  --fg: #1a1a1a;
  --muted: #666;
  --border: #e0e0e0;
  --accent: #2563eb;
  --accent-light: #dbeafe;
  --sidebar-bg: #f5f5f5;
  --code-bg: #f0f0f0;
  --zh-bg: #f8f9fa;
  --zh-border: #d1d5db;
  --shadow: 0 1px 3px rgba(0,0,0,0.08);
  --radius: 8px;
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0f0f0f;
    --fg: #e5e5e5;
    --muted: #999;
    --border: #333;
    --accent: #60a5fa;
    --accent-light: #1e3a5f;
    --sidebar-bg: #171717;
    --code-bg: #262626;
    --zh-bg: #1a1a1a;
    --zh-border: #404040;
    --shadow: 0 1px 3px rgba(0,0,0,0.3);
  }
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans SC", sans-serif;
  background: var(--bg);
  color: var(--fg);
  line-height: 1.7;
}
.app {
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: "header header" "sidebar content";
  height: 100vh;
  overflow: hidden;
}
@media (max-width: 768px) {
  .app {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
    grid-template-areas: "header" "sidebar" "content";
    height: auto;
    overflow: visible;
  }
}

/* Header */
.header {
  grid-area: header;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  border-bottom: 1px solid var(--border);
  background: var(--bg);
  z-index: 10;
}
.header-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  white-space: nowrap;
}
.header-title a {
  color: var(--fg);
  text-decoration: none;
}
.search-box {
  flex: 1;
  max-width: 400px;
  position: relative;
}
.search-box input {
  width: 100%;
  padding: 8px 12px 8px 32px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg);
  color: var(--fg);
  font-size: 0.9rem;
  outline: none;
}
.search-box input:focus {
  border-color: var(--accent);
}
.search-box::before {
  content: "🔍";
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.85rem;
  opacity: 0.5;
}
.lang-toggle {
  display: flex;
  gap: 4px;
  background: var(--sidebar-bg);
  border-radius: var(--radius);
  padding: 2px;
  border: 1px solid var(--border);
}
.lang-toggle button {
  padding: 6px 12px;
  border: none;
  background: transparent;
  color: var(--muted);
  font-size: 0.8rem;
  cursor: pointer;
  border-radius: 6px;
  font-weight: 500;
}
.lang-toggle button.active {
  background: var(--accent);
  color: white;
}

/* Sidebar */
.sidebar {
  grid-area: sidebar;
  background: var(--sidebar-bg);
  border-right: 1px solid var(--border);
  overflow-y: auto;
  padding: 12px;
}
@media (max-width: 768px) {
  .sidebar {
    border-right: none;
    border-bottom: 1px solid var(--border);
    max-height: 40vh;
  }
}
.toc-section {
  margin-bottom: 8px;
}
.toc-section summary {
  font-weight: 600;
  font-size: 0.82rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  padding: 6px 8px;
  cursor: pointer;
  border-radius: var(--radius);
}
.toc-section summary:hover {
  background: var(--border);
}
.toc-terms {
  display: flex;
  flex-direction: column;
  padding-left: 4px;
}
.toc-term {
  padding: 5px 8px;
  font-size: 0.88rem;
  color: var(--fg);
  text-decoration: none;
  border-radius: var(--radius);
  line-height: 1.4;
}
.toc-term:hover {
  background: var(--accent-light);
  color: var(--accent);
}
.toc-term.hidden {
  display: none;
}
.toc-term mark {
  background: #fde047;
  color: #1a1a1a;
  border-radius: 2px;
  padding: 0 2px;
}

/* Content */
.content {
  grid-area: content;
  overflow-y: auto;
  padding: 24px 32px;
  max-width: 800px;
}
@media (max-width: 768px) {
  .content { padding: 16px; }
}

.section-heading {
  font-size: 1.3rem;
  font-weight: 700;
  margin: 40px 0 20px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--accent);
  color: var(--fg);
}
.section-heading:first-of-type {
  margin-top: 0;
}

.entry {
  margin-bottom: 40px;
  scroll-margin-top: 60px;
}
.entry-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 12px;
  color: var(--fg);
}
.entry-description {
  background: var(--accent-light);
  border-left: 4px solid var(--accent);
  padding: 12px 16px;
  border-radius: 0 var(--radius) var(--radius) 0;
  margin-bottom: 16px;
}
.entry-description p {
  margin: 0 0 4px;
  font-size: 0.95rem;
}
.entry-description p:last-child {
  margin-bottom: 0;
}
.entry-body p,
.entry-body ul,
.entry-body blockquote {
  margin: 0 0 12px;
}
.entry-body ul {
  padding-left: 24px;
}
.entry-body li {
  margin-bottom: 4px;
}
.entry-body blockquote {
  border-left: 3px solid var(--border);
  padding-left: 14px;
  color: var(--muted);
  font-style: italic;
}
.entry-body code {
  background: var(--code-bg);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9em;
  font-family: "SF Mono", Monaco, "Cascadia Code", monospace;
}
.entry-body a {
  color: var(--accent);
  text-decoration: none;
}
.entry-body a:hover {
  text-decoration: underline;
}

.zh {
  color: var(--muted);
  border-left: 3px solid var(--zh-border);
  padding-left: 14px;
  margin-top: 8px;
  background: var(--zh-bg);
  padding: 10px 14px;
  border-radius: 0 var(--radius) var(--radius) 0;
}
.entry-description .zh {
  background: transparent;
  border-left-color: var(--accent);
  padding: 4px 0 0 14px;
  margin-top: 6px;
}

/* Lang modes */
body.lang-en .zh { display: none; }
body.lang-zh .entry-body p:not(.zh) { display: none; }
body.lang-zh .entry-body ul:not(:has(+ .zh)) { display: none; }
body.lang-zh .entry-body blockquote:not(:has(+ .zh)) { display: none; }
body.lang-zh .entry-description p:first-child { display: none; }
body.lang-zh .entry-title { font-size: 1.3rem; }
body.lang-zh .toc-term {
  font-size: 0.95rem;
}

/* Scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--muted); }

/* No results */
.no-results {
  text-align: center;
  padding: 60px 20px;
  color: var(--muted);
}
</style>
</head>
<body class="lang-both">
<div class="app">
  <header class="header">
    <h1 class="header-title"><a href="#">AI Coding Dictionary / AI 编程词典</a></h1>
    <div class="search-box">
      <input type="text" id="search" placeholder="Search terms... / 搜索词条..." autocomplete="off">
    </div>
    <div class="lang-toggle">
      <button data-lang="both" class="active">EN+ZH</button>
      <button data-lang="en">EN</button>
      <button data-lang="zh">ZH</button>
    </div>
  </header>
  <nav class="sidebar">
    ${sidebarItems.join("\n")}
  </nav>
  <main class="content" id="content">
    ${contentItems.join("\n")}
  </main>
</div>
<script>
(function() {
  const searchInput = document.getElementById('search');
  const tocTerms = document.querySelectorAll('.toc-term');
  const entries = document.querySelectorAll('.entry');
  const tocSections = document.querySelectorAll('.toc-section');
  const langBtns = document.querySelectorAll('.lang-toggle button');

  // Search
  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (!q) {
      tocTerms.forEach(t => { t.classList.remove('hidden'); t.innerHTML = t.textContent; });
      entries.forEach(en => en.style.display = '');
      tocSections.forEach(s => s.open = true);
      return;
    }
    tocSections.forEach(s => s.open = true);
    tocTerms.forEach(t => {
      const text = t.textContent.toLowerCase();
      if (text.includes(q)) {
        t.classList.remove('hidden');
        const re = new RegExp('(' + q.replace(/[.*+?^\${}()|[\]\\]/g, '\\$&') + ')', 'gi');
        t.innerHTML = t.textContent.replace(re, '<mark>$1</mark>');
      } else {
        t.classList.add('hidden');
      }
    });
    entries.forEach(en => {
      const term = en.dataset.term.toLowerCase();
      const html = en.innerHTML.toLowerCase();
      en.style.display = (term.includes(q) || html.includes(q)) ? '' : 'none';
    });
  });

  // Language toggle
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      langBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.body.className = 'lang-' + btn.dataset.lang;
    });
  });

  // Click TOC to close on mobile
  tocTerms.forEach(t => {
    t.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        document.querySelector('.sidebar').scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();
</script>
</body>
</html>`;
}

function main(): void {
  const sections = parseCurriculum(readFileSync(CURRICULUM, "utf8"));
  let termZh: Record<string, string> = {};
  try {
    termZh = JSON.parse(readFileSync(TERM_ZH, "utf8")) as Record<string, string>;
  } catch {
    // no Chinese titles
  }

  const entries = new Map<string, Entry>();
  const onDisk = new Set(
    readdirSync(DICT_DIR).filter((n) => n.endsWith(".md")).map((n) => n.slice(0, -3)),
  );

  for (const section of sections) {
    for (const term of section.terms) {
      const entryPath = join(DICT_DIR, `${term}.md`);
      let body: string;
      try {
        body = readFileSync(entryPath, "utf8");
      } catch {
        fail(`Missing entry: ${entryPath}`);
      }
      const fm = parseFrontmatter(body);
      entries.set(term, {
        term,
        zhTitle: termZh[term] || term,
        description: fm.description,
        descriptionZh: fm.descriptionZh,
        html: mdToHtml(fm.body),
      });
      onDisk.delete(term);
    }
  }

  if (onDisk.size > 0) {
    fail(`Orphan entries: ${[...onDisk].join(", ")}`);
  }

  const html = buildPage(sections, entries);
  writeFileSync(OUTPUT, html);
  console.log(`Generated ${OUTPUT} (${(html.length / 1024).toFixed(1)} KB)`);
}

main();
