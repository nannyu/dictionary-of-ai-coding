---
description: One round-trip from the harness to the model provider. The harness sends context; the provider returns one response.
description_zh: 从 harness 到模型提供商的一次往返。Harness 发送上下文；提供商返回一个响应。
---
One round-trip from the [harness](./Harness.md) to the [model provider](./Model%20provider.md). The harness sends the current [context](./Context.md); the provider returns one response (a [tool call](./Tool%20call.md) or a final answer). A single user message can spawn many model provider requests if the [agent](./Agent.md) calls [tools](./Tool.md) — each [tool result](./Tool%20result.md) triggers another request.

**中文：** 从[harness](./Harness.md)到[模型提供商](./Model%20provider.md)的一次往返。Harness 发送当前[上下文](./Context.md)；提供商返回一个响应（一个[工具调用](./Tool%20call.md)或最终答案）。如果[智能体](./Agent.md)调用[工具](./Tool.md)，单个用户消息可能产生多个模型提供商请求——每个[工具结果](./Tool%20result.md)都会触发另一个请求。

*Usage:*

"One question burned forty thousand [tokens](./Token.md)?"

**中文：** "一个问题就消耗了四万[词元](./Token.md)？"

"Look at the tool calls — twelve grep, eight read, four edits. Each tool result spawns another model provider request, and the whole [session](./Session.md) prefix re-sends every time."

**中文：** "看看工具调用——十二次 grep、八次读取、四次编辑。每个工具结果都会产生另一个模型提供商请求，而且整个[会话](./Session.md)前缀每次都会重新发送。"
