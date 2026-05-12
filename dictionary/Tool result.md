---
description: What the harness sends back after executing a tool call — file contents, output, or error. The agent's only window onto the environment.
description_zh: harness执行工具调用后返回的内容——文件内容、输出或错误。智能体观察环境的唯一窗口。
---
What the [harness](./Harness.md) sends back after executing a [tool call](./Tool%20call.md) — the file contents, the command output, the error. The [agent](./Agent.md)'s only window onto the [environment](./Environment.md). Travels back to the [model](./Model.md) in the *next* [model provider request](./Model%20provider%20request.md), where the model decides what to do with it. Tool call and tool result are two ends of the same exchange, both inside one [turn](./Turn.md).

**中文：** [harness](./Harness.md)执行[工具调用](./Tool%20call.md)后返回的内容——文件内容、命令输出或错误。[智能体](./Agent.md)观察[环境](./Environment.md)的唯一窗口。在*下一次*[模型提供方请求](./Model%20provider%20request.md)中返回给[模型](./Model.md)，模型据此决定如何处理。工具调用和工具结果是同一交换的两端，都在一个[轮次](./Turn.md)之内。

*Usage:*

"It's reasoning about the file like it's empty."

**中文：** "它在推理文件内容，好像文件是空的。"

"The tool result came back as a permission denial, not the contents. The model only saw the error string — it has no other window onto the file."

**中文：** "工具结果返回的是权限拒绝，而不是文件内容。模型只看到了错误字符串——它没有其他窗口来查看文件。"
