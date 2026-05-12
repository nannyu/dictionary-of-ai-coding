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
  --bg: #f5f2ed;
  --fg: #2c2926;
  --muted: #6e6860;
  --border: #d8d3cb;
  --accent: #3d7a6b;
  --accent-light: #e0ece8;
  --sidebar-bg: #ebe7e0;
  --code-bg: #e4e0d8;
  --zh-bg: #e8e4dc;
  --zh-border: #c4bfb6;
  --shadow: 0 2px 8px rgba(0,0,0,0.06);
  --radius: 10px;
}
[data-theme="dark"] {
  --bg: #1e1c1a;
  --fg: #e8e2d9;
  --muted: #a39b91;
  --border: #3a3530;
  --accent: #6db5a3;
  --accent-light: #2a3f3a;
  --sidebar-bg: #262320;
  --code-bg: #2e2b28;
  --zh-bg: #2a2724;
  --zh-border: #454038;
  --shadow: 0 2px 8px rgba(0,0,0,0.3);
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif;
  background: var(--bg);
  color: var(--fg);
  line-height: 1.75;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: background 0.3s ease, color 0.3s ease;
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
  padding: 10px 14px 10px 36px;
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg);
  color: var(--fg);
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.search-box input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-light);
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
  padding: 7px 14px;
  border: none;
  background: transparent;
  color: var(--muted);
  font-size: 0.8rem;
  cursor: pointer;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease;
}
.lang-toggle button:hover {
  color: var(--fg);
  background: rgba(0,0,0,0.04);
}
.lang-toggle button.active {
  background: var(--accent);
  color: #fff;
  box-shadow: var(--shadow);
}
[data-theme="dark"] .lang-toggle button:hover {
  background: rgba(255,255,255,0.06);
}

/* Theme toggle */
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg);
  color: var(--muted);
  cursor: pointer;
  font-size: 1.1rem;
  transition: all 0.2s ease;
  flex-shrink: 0;
}
.theme-toggle:hover {
  border-color: var(--accent);
  color: var(--accent);
}
.theme-toggle:focus {
  outline: none;
  box-shadow: 0 0 0 3px var(--accent-light);
}
.theme-icon-light,
.theme-icon-dark {
  display: none;
}
[data-theme="light"] .theme-icon-light,
:not([data-theme]) .theme-icon-light {
  display: inline;
}
[data-theme="dark"] .theme-icon-dark {
  display: inline;
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
  letter-spacing: 0.04em;
  padding: 7px 10px;
  cursor: pointer;
  border-radius: var(--radius);
  transition: background 0.15s ease, color 0.15s ease;
}
.toc-section summary:hover {
  background: var(--border);
  color: var(--fg);
}
.toc-terms {
  display: flex;
  flex-direction: column;
  padding-left: 6px;
}
.toc-term {
  padding: 6px 10px;
  font-size: 0.88rem;
  color: var(--fg);
  text-decoration: none;
  border-radius: var(--radius);
  line-height: 1.5;
  transition: background 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.toc-term:hover {
  background: var(--accent-light);
  color: var(--accent);
  transform: translateX(2px);
}
.toc-term.hidden {
  display: none;
}
.toc-term mark {
  background: #c4a85a;
  color: #2c2926;
  border-radius: 3px;
  padding: 1px 4px;
  font-weight: 600;
}
[data-theme="dark"] .toc-term mark {
  background: #8a7a4a;
  color: #e8e2d9;
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
  font-size: 1.35rem;
  font-weight: 700;
  margin: 48px 0 24px;
  padding-bottom: 10px;
  border-bottom: 2.5px solid var(--accent);
  color: var(--fg);
  letter-spacing: -0.01em;
}
.section-heading:first-of-type {
  margin-top: 0;
}

.entry {
  margin-bottom: 48px;
  scroll-margin-top: 72px;
}
.entry-title {
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0 0 14px;
  color: var(--fg);
  letter-spacing: -0.01em;
  line-height: 1.3;
}
.entry-description {
  background: var(--accent-light);
  border-left: 4px solid var(--accent);
  padding: 14px 18px;
  border-radius: 0 var(--radius) var(--radius) 0;
  margin-bottom: 18px;
}
.entry-description p {
  margin: 0 0 6px;
  font-size: 0.95rem;
  line-height: 1.6;
}
.entry-description p:last-child {
  margin-bottom: 0;
}
.entry-body p,
.entry-body ul,
.entry-body blockquote {
  margin: 0 0 14px;
}
.entry-body p {
  line-height: 1.75;
}
.entry-body ul {
  padding-left: 28px;
}
.entry-body li {
  margin-bottom: 6px;
  line-height: 1.7;
}
.entry-body blockquote {
  border-left: 3px solid var(--border);
  padding-left: 16px;
  color: var(--muted);
  font-style: italic;
  line-height: 1.7;
}
.entry-body code {
  background: var(--code-bg);
  padding: 2px 7px;
  border-radius: 5px;
  font-size: 0.88em;
  font-family: "SF Mono", Monaco, "Cascadia Code", "Fira Code", monospace;
}
.entry-body a {
  color: var(--accent);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.15s ease;
}
.entry-body a:hover {
  border-bottom-color: var(--accent);
}

.zh {
  color: var(--muted);
  border-left: 3.5px solid var(--zh-border);
  padding: 12px 16px;
  margin-top: 10px;
  margin-bottom: 14px;
  background: var(--zh-bg);
  border-radius: 0 var(--radius) var(--radius) 0;
  line-height: 1.75;
}
.entry-description .zh {
  background: transparent;
  border-left-color: var(--accent);
  padding: 6px 0 0 16px;
  margin-top: 8px;
  margin-bottom: 0;
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
    <button class="theme-toggle" id="theme-toggle" title="Toggle dark/light mode" aria-label="Toggle dark/light mode">
      <span class="theme-icon-light">☀️</span>
      <span class="theme-icon-dark">🌙</span>
    </button>
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

  // Theme management
  const THEME_KEY = 'dic-theme';
  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function getStoredTheme() {
    return localStorage.getItem(THEME_KEY);
  }
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }
  function setLangClass(lang) {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    document.body.className = 'lang-' + lang;
    if (current) html.setAttribute('data-theme', current);
  }

  // Init theme
  const stored = getStoredTheme();
  applyTheme(stored || getSystemTheme());

  // Theme toggle button
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  }

  // Listen for system theme changes (only if user hasn't manually set)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!getStoredTheme()) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

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
      setLangClass(btn.dataset.lang);
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
