---
description: An agent spawned by another agent via a tool call. Runs in its own session, reports a single tool result. Cannot spawn further subagents.
description_zh: 由另一个智能体通过工具调用派生的智能体。在自己的会话中运行，返回单个工具结果。不能进一步派生子智能体。
---
An [agent](./Agent.md) spawned by another agent via a [tool call](./Tool%20call.md). Runs in its own [session](./Session.md) with its own [context window](./Context%20window.md), and reports a single [tool result](./Tool%20result.md) back. Distinct from a [handoff](./Handoff.md) — the parent specifically expects a return; a handoff has no return path. **Cannot spawn further subagents** — the tree is one level deep. Subagents exist to isolate [context](./Context.md), not to compose hierarchies.

**中文：** 由另一个智能体通过[工具调用](./Tool%20call.md)派生的[智能体](./Agent.md)。在自己的[会话](./Session.md)中运行，拥有独立的[上下文窗口](./Context%20window.md)，并返回单个[工具结果](./Tool%20result.md)。与[交接](./Handoff.md)不同——父智能体明确期待返回值；交接没有返回路径。**不能进一步派生子智能体**——树只有一层深度。子智能体的存在是为了隔离[上下文](./Context.md)，而非构建层级结构。

*Usage:*

"The grep results are blowing out my context."

**中文：** "grep结果把我的上下文撑爆了。"

"Spawn a subagent to do the search — it'll burn its own context window on the noise and report back the two file paths you actually need."

**中文：** "派生一个子智能体来执行搜索——它会在自己的上下文窗口中消耗这些噪音，然后返回你真正需要的两个文件路径。"
