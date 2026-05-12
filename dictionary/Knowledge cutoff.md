---
description: The date past which a model has no parametric knowledge. Post-cutoff libraries and APIs are fabrication traps unless docs are loaded.
description_zh: 模型在此日期之后没有参数化知识。截止日期之后的库和 API 除非加载文档，否则都是编造陷阱。
---
The date past which a [model](./Model.md) has no [parametric knowledge](./Parametric%20knowledge.md). Libraries, APIs, and events from after the cutoff are fabrication traps unless their docs are loaded as [contextual knowledge](./Contextual%20knowledge.md). Each model release ships with its own cutoff.

**中文：** [模型](./Model.md)在此日期之后没有[参数化知识](./Parametric%20knowledge.md)。截止日期之后的库、API 和事件，除非将其文档加载为[上下文知识](./Contextual%20knowledge.md)，否则都是编造陷阱。每个模型版本都有自己的截止日期。

*Usage:*

"It keeps writing the v3 SDK syntax — we're on v5."

**中文：** "它一直在写 v3 的 SDK 语法——我们已经在用 v5 了。"

"v5 shipped after the knowledge cutoff. Load the v5 changelog as contextual knowledge, otherwise it'll keep fabricating from the older parametric version."

**中文：** "v5 是在知识截止日期之后发布的。把 v5 的更新日志加载为上下文知识，否则它会继续从旧的参数化版本中编造内容。"
