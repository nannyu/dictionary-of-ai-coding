---
description: The model's output naming a tool and its arguments — just structured text. The harness has to read it and execute.
description_zh: 模型输出的工具名称及其参数——只是结构化文本。harness需要读取并执行它。
---
The [model](./Model.md)'s output naming a [tool](./Tool.md) and its arguments — just structured text. It doesn't do anything on its own; the [harness](./Harness.md) has to read it and execute. Produced by the model in one [model provider request](./Model%20provider%20request.md).

**中文：** [模型](./Model.md)输出的[工具](./Tool.md)名称及其参数——只是结构化文本。它本身不会做任何事；[harness](./Harness.md)需要读取并执行它。由模型在一次[模型提供方请求](./Model%20provider%20request.md)中产生。

*Usage:*

"It said it ran the tests but the file timestamps haven't changed."

**中文：** "它说它运行了测试，但文件时间戳没有变化。"

"Look at the transcript — did it actually emit a tool call, or just describe running them? The model produces the call, but if the harness didn't execute it, nothing happened."

**中文：** "看对话记录——它真的发出了工具调用，还是只是描述了运行测试？模型产生调用，但如果harness没有执行它，就什么都不会发生。"
