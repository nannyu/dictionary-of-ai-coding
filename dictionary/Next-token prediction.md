---
description: What the model actually does. Samples one next token from the context, appends it, and runs again. Its only mode of operation.
description_zh: 模型实际做的事情。从上下文中采样下一个词元，追加它，然后再次运行。它唯一的操作模式。
---
What the [model](./Model.md) actually does. Given a [context](./Context.md), it samples one next [token](./Token.md), appends it, and runs again. Every output — a sentence, a [tool call](./Tool%20call.md), a thousand-line file — is built one token at a time. The model has no other mode of operation.

**中文：** [模型](./Model.md)实际做的事情。给定一个[上下文](./Context.md)，它采样下一个[词元](./Token.md)，追加它，然后再次运行。每一个输出——一句话、一个[工具调用](./Tool%20call.md)、一个千行文件——都是一个词元一个词元构建的。模型没有其他操作模式。

*Usage:*

"How does the [agent](./Agent.md) 'decide' to call a tool?"

**中文：** "[智能体](./Agent.md)是如何'决定'调用工具的？"

"It doesn't — it's next-token prediction all the way down. The tool call is just a structured string the [harness](./Harness.md) parses out of the output stream."

**中文：** "它并没有决定——从头到尾都是下一个词元预测。工具调用只是[harness](./Harness.md)从输出流中解析出的结构化字符串。"
