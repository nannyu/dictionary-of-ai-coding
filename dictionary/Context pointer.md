---
description: A mention in one document that points to another, so the agent can pull it into context only when the task calls for it.
description_zh: 一个文档中指向另一个文档的引用，让智能体只在任务需要时才将其拉入上下文。
---

A mention in one document that points to another, so the [agent](./Agent.md) can pull it into the [context window](./Context%20window.md) only when the task calls for it. The unit [progressive disclosure](./Progressive%20disclosure.md) is built from.

**中文：** 一个文档中指向另一个文档的引用，让[智能体](./Agent.md)只在任务需要时才将其拉入[上下文窗口](./Context%20window.md)。这是构建[渐进式披露](./Progressive%20disclosure.md)的基本单元。

_Avoid:_ "reference" — too dry; doesn't convey that following it pulls more context in. "Portal" — too florid.

**中文：** 避免使用："reference"（引用）——太干巴巴；没有传达出跟随它会拉入更多上下文的意思。"Portal"（传送门）——太花哨。

_Usage:_

**中文：** 用法：

"AGENTS.md is getting huge."

**中文：** "AGENTS.md变得太大了。"

"Most of it should be context pointers, not content. Keep the always-on rules inline; turn the deploy runbook and the style guide into [skills](./Skill.md) and leave a context pointer behind."

**中文：** "其中大部分应该是context pointer，而不是内容。把常驻规则保留在行内；把部署运行手册和风格指南转成[技能](./Skill.md)，然后留下一个context pointer。"
