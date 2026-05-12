---
description: Carries information forward. Sessions are stateful across turns; agents can be made stateful across sessions via a memory system.
description_zh: 携带信息向前传递。会话在轮次间是有状态的；智能体可以通过记忆系统实现跨会话的有状态。
---
Carries information forward. A [session](./Session.md) is stateful across [turns](./Turn.md) — [context](./Context.md) accumulates as the session runs, which is why long sessions drift into the [dumb zone](./Smart%20zone.md). An [agent](./Agent.md) can be made stateful across **sessions** by adding a [memory system](./Memory%20system.md) that persists information into the [environment](./Environment.md) and reloads it at the start of future sessions. The [model](./Model.md) is never stateful; any apparent continuity is the [harness](./Harness.md) re-feeding context. Counterpart to [stateless](./Stateless.md).

**中文：** 携带信息向前传递。[会话](./Session.md)在[轮次](./Turn.md)间是有状态的——[上下文](./Context.md)随着会话运行而累积，这就是为什么长会话会滑入[愚钝区](./Smart%20zone.md)。[智能体](./Agent.md)可以通过添加[记忆系统](./Memory%20system.md)实现跨**会话**的有状态——将信息持久化到[环境](./Environment.md)中，并在未来会话开始时重新加载。[模型](./Model.md)本身永远不是有状态的；任何看似连续的表现都是[harness](./Harness.md)重新投喂上下文的结果。[无状态](./Stateless.md)的反义词。

*Usage:*

"It remembered my preferences from yesterday — does that mean the model learned them?"

**中文：** "它记住了我昨天的偏好——这意味着模型学会了它们吗？"

"No, the agent's stateful because the harness wrote them to a memory file and reloaded them at session start. The model itself saw nothing of yesterday."

**中文：** "不，智能体是有状态的，因为harness把它们写入了记忆文件并在会话开始时重新加载。模型本身对昨天一无所知。"
