---
description: Everything the model sees on each model provider request. Finite, model-specific, the only surface through which the model perceives.
description_zh: 模型在每次模型提供商请求时看到的一切。有限的、模型特定的，是模型感知外界的唯一界面。
---
Everything the [model](./Model.md) sees on each [model provider request](./Model%20provider%20request.md). Finite, model-specific, and the *only* surface through which the model perceives anything.

**中文：** [模型](./Model.md)在每次[模型提供商请求](./Model%20provider%20request.md)时看到的一切。有限的、模型特定的，是模型感知任何事物的*唯一*界面。

*Avoid:* "memory" — the context window is working state and doesn't persist across [sessions](./Session.md). [Memory](./Memory%20system.md) is a separate concept layered on top.

**中文：** 避免使用："memory"（记忆）——上下文窗口是工作状态，不会在[会话](./Session.md)之间持久化。[记忆](./Memory%20system.md)是叠加在其上的独立概念。

*Usage:*

**中文：** 用法：

"Can I just paste the whole monorepo into the prompt?"

**中文：** "我可以把整个monorepo贴到提示词里吗？"

"The context window's 200k [tokens](./Token.md) — that's maybe a fifth of the repo. Pick the files the task touches, leave the rest behind a [tool call](./Tool%20call.md)."

**中文：** "上下文窗口是20万[词元](./Token.md)——大概只有仓库的五分之一。挑选任务涉及的文件，其余的放在[工具调用](./Tool%20call.md)后面。"
