---
description: One bounded run of interaction with an agent. Starts empty, accumulates, ends when cleared, closed, or compacted into a fresh session.
description_zh: 与智能体的一次有界交互运行。从空开始，逐步累积，在清空、关闭或压缩为全新会话时结束。
---
One bounded run of interaction with an [agent](./Agent.md). Starts empty, accumulates messages, [tool results](./Tool%20result.md), and files read, and ends when [cleared](./Clearing.md), closed, or [compacted](./Compaction.md) into a fresh session. The session is what *fills* the [context window](./Context%20window.md): if the context window is the box, the session is the stuff slowly filling it up. Work too large for a single context window must be split across sessions.

**中文：** 与[智能体](./Agent.md)的一次有界交互运行。从空开始，逐步累积消息、[工具结果](./Tool%20result.md)和已读文件，在[清空](./Clearing.md)、关闭或[压缩](./Compaction.md)为全新会话时结束。会话就是*填充*[上下文窗口](./Context%20window.md)的东西：如果上下文窗口是盒子，会话就是慢慢填满它的东西。单个上下文窗口容纳不下的工作必须拆分到多个会话中。

*Usage:*

"How long can one session run before it falls apart?"

**中文：** "一个会话能运行多久才会崩溃？"

"Depends on the work — a focused refactor stays sharp longer than open-ended research. Once the session bloats, [hand off](./Handoff.md) or compact, don't push through."

**中文：** "取决于工作内容——专注的重构比开放式的研究保持清醒的时间更长。一旦会话膨胀了，就[交接](./Handoff.md)或压缩，不要硬撑。"
