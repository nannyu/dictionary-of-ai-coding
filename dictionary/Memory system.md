---
description: A system that attempts to make an agent stateful across sessions by persisting to the environment and reloading at session start.
description_zh: 一种通过持久化到环境并在会话开始时重新加载，试图使智能体跨会话保持状态的系统。
---
A system that attempts to make an [agent](./Agent.md) [stateful](./Stateful.md) across [sessions](./Session.md). Persists information into the [environment](./Environment.md) during a session and reloads it into the [context window](./Context%20window.md) at the start of future ones, so the agent carries continuity beyond the user [clearing](./Clearing.md) the session.

**中文：** 一种试图使[智能体](./Agent.md)跨[会话](./Session.md)保持[有状态](./Stateful.md)的系统。在会话期间将信息持久化到[环境](./Environment.md)中，并在未来会话开始时重新加载到[上下文窗口](./Context%20window.md)中，从而使智能体在用户[清空](./Clearing.md)会话之后仍保持连续性。

*Usage:*

"I keep having to re-tell it I'm on Postgres, not MySQL."

**中文：** "我一直得反复告诉它我用的是 Postgres，不是 MySQL。"

"Wire up a memory system — write what it learns to the [filesystem](./Filesystem.md) on the first [turn](./Turn.md), reload it at session start. The [model](./Model.md) itself is [stateless](./Stateless.md); the memory layer fakes continuity."

**中文：** "接入一个记忆系统——在第一[轮次](./Turn.md)就把它学到的东西写到[文件系统](./Filesystem.md)中，在会话开始时重新加载。[模型](./Model.md)本身是[无状态](./Stateless.md)的；记忆层模拟出连续性。"
