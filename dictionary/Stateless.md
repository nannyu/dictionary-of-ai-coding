---
description: Carries no information forward. The model is stateless across requests; an agent is stateless across sessions by default.
description_zh: 不携带信息向前传递。模型在请求间是无状态的；智能体默认在会话间是无状态的。
---
Carries no information forward. The [model](./Model.md) is stateless across [model provider requests](./Model%20provider%20request.md) — each request resends the full [context window](./Context%20window.md), because the model has no way to see anything else. An [agent](./Agent.md) is stateless across [sessions](./Session.md) by default: a new session starts empty, with no trace of prior ones. Counterpart to [stateful](./Stateful.md).

**中文：** 不携带信息向前传递。[模型](./Model.md)在[模型提供方请求](./Model%20provider%20request.md)间是无状态的——每个请求都会重新发送完整的[上下文窗口](./Context%20window.md)，因为模型无法看到其他任何东西。[智能体](./Agent.md)默认在[会话](./Session.md)间是无状态的：新会话从空开始，没有任何先前会话的痕迹。[有状态](./Stateful.md)的反义词。

*Usage:*

"Why does it forget the convention every time I [clear](./Clearing.md)?"

**中文：** "为什么每次我[清空](./Clearing.md)后它都会忘记约定？"

"The model's stateless — the new session starts empty. If you want it carried, write it to [AGENTS.md](./AGENTS.md.md) or a memory file the [harness](./Harness.md) loads at session start."

**中文：** "模型是无状态的——新会话从空开始。如果你想让它被记住，就把它写入[AGENTS.md](./AGENTS.md.md)或harness在会话开始时加载的记忆文件中。"
