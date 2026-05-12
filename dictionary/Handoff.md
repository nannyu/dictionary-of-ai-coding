---
description: Transferring agent context from one session to another, with no return path. Carry mechanism varies — artifact, compaction, others.
description_zh: 将智能体上下文从一个会话转移到另一个会话，没有返回路径。携带机制各不相同——产物、压缩等。
---
Transferring [agent](./Agent.md) [context](./Context.md) from one [session](./Session.md) to another, with no return path. The carry mechanism varies — a written [handoff artifact](./Handoff%20artifact.md), an in-memory summary ([compaction](./Compaction.md)), and others. Distinct from [clearing](./Clearing.md) (no transfer at all). Reasons vary: switching roles (planner → implementer), kicking off an [AFK](./AFK.md) run, fanning out to parallel sessions, or freeing up [context window](./Context%20window.md) room.

**中文：** 将[智能体](./Agent.md)的[上下文](./Context.md)从一个[会话](./Session.md)转移到另一个会话，没有返回路径。携带机制各不相同——一份书面的[交接产物](./Handoff%20artifact.md)、内存中的摘要（[压缩](./Compaction.md)）等。与[清空](./Clearing.md)不同（完全不转移）。原因各不相同：切换角色（规划者 → 实现者）、启动[AFK](./AFK.md)（离开键盘）运行、分散到并行会话，或释放[上下文窗口](./Context%20window.md)空间。

*Usage:*

"Planning session is getting heavy — should I just keep going?"

**中文：** "规划会话越来越沉重了——我应该继续吗？"

"Do a handoff. Write the decisions to a doc, clear, start the implementation in a fresh session reading from it."

**中文：** "做一次交接。把决策写到文档里，清空，然后在一个新的会话中读取它并开始实现。"
