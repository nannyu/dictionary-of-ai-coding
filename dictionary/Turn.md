---
description: One user message plus everything the agent does in response, up until it yields back to the user. Contains one or more provider requests.
description_zh: 一条用户消息加上智能体对此做出的所有响应，直到将控制权交还给用户为止。包含一次或多次提供方请求。
---
One user message plus everything the [agent](./Agent.md) does in response, up until it yields back to the user. Contains one or more [model provider requests](./Model%20provider%20request.md) — many, if the agent calls [tools](./Tool.md). A clarifying question closes the turn; your reply opens the next one. The hierarchy is [session](./Session.md) **> Turn > Model provider request**.

**中文：** 一条用户消息加上[智能体](./Agent.md)对此做出的所有响应，直到将控制权交还给用户为止。包含一次或多次[模型提供方请求](./Model%20provider%20request.md)——如果智能体调用了[工具](./Tool.md)，可能有很多次。澄清问题会结束当前轮次；你的回复开启下一轮。层级关系为：[会话](./Session.md) **> 轮次 > 模型提供方请求**。

*Usage:*

"One turn took two minutes?"

**中文：** "一个轮次花了两分钟？"

"It made fourteen [tool calls](./Tool%20call.md) inside that turn — each one is a separate model provider request. Latency stacks up before the agent finally yields back to you."

**中文：** "它在这个轮次里做了十四次[工具调用](./Tool%20call.md)——每一次都是独立的模型提供方请求。在智能体最终将控制权交还给你之前，延迟累积起来了。"
