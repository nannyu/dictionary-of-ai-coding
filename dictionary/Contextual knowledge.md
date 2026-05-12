---
description: Facts the agent can read directly from the context right now. Counterpart to parametric knowledge.
description_zh: 智能体当前可以直接从上下文中读取到的事实。与参数化知识相对。
---
Facts the [agent](./Agent.md) can read directly from the [context](./Context.md) right now — the user's task, files the agent has read in, [tool results](./Tool%20result.md), [AGENTS.md](./AGENTS.md.md) content loaded at [session](./Session.md) start. Counterpart to [parametric knowledge](./Parametric%20knowledge.md): parametric is *recalled* from the parameters; contextual is *read* from the [window](./Context%20window.md). [Hallucinations](./Hallucination.md) are much less common when the agent works from contextual knowledge — the answer is right in front of it, not dredged up from a blurred memory.

**中文：** [智能体](./Agent.md)当前可以直接从[上下文](./Context.md)中读取到的事实——用户的任务、智能体已读入的文件、[工具结果](./Tool%20result.md)、[会话](./Session.md)开始时加载的[AGENTS.md](./AGENTS.md.md)内容。与[参数化知识](./Parametric%20knowledge.md)相对：参数化知识是从参数中*回忆*出来的；上下文知识是从[窗口](./Context%20window.md)中*读取*的。当智能体基于上下文知识工作时，[幻觉](./Hallucination.md)会少得多——答案就在它眼前，而不是从模糊的记忆中 dredge 出来的。

*Reach for this term* only when contrasting with parametric knowledge; otherwise just say **context**.

**中文：** 只有在与参数化知识对比时才使用这个术语；否则直接说**context**（上下文）。

*Avoid:* "working memory" — contextual knowledge is what's in the window *now*; a [memory system](./Memory%20system.md) is what gets cross-session content into it. Different scales, don't conflate.

**中文：** 避免使用："working memory"（工作记忆）——上下文知识是*此刻*窗口中的内容；[记忆系统](./Memory%20system.md)是将跨会话内容送入其中的机制。不同尺度，不要混淆。

*Usage:*

**中文：** 用法：

"Why does it nail the API when I paste the docs and fabricate it when I don't?"

**中文：** "为什么我贴文档时它能准确命中API，不贴时就胡编乱造？"

"With the docs in, it's contextual knowledge — reading off the page. Without, it's parametric and the rare endpoints blur."

**中文：** "有文档在，就是上下文知识——从页面上读取。没有的话，就是参数化的，那些不常见的端点就会模糊。"
