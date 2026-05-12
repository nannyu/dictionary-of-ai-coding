---
description: The process that sets a model's parameters by exposing it to vast amounts of text and adjusting to improve next-token prediction.
description_zh: 通过让模型接触海量文本并调整参数以改进下一个词元预测的过程，来设定模型参数。
---
The process that sets a [model](./Model.md)'s [parameters](./Parameters.md), by exposing it to vast amounts of text and adjusting parameters to improve [next-token prediction](./Next-token%20prediction.md). A one-time, expensive process done by the [model provider](./Model%20provider.md). Encompasses both pre-training (the bulk run) and post-training (later refinements like instruction-following and safety); the distinction doesn't matter at this glossary's level.

**中文：** 通过让[模型](./Model.md)接触海量文本并调整[参数](./Parameters.md)以改进[下一个词元预测](./Next-token%20prediction.md)的过程，来设定模型参数。由[模型提供方](./Model%20provider.md)执行的一次性、高成本过程。包括预训练（主体运行）和后训练（后续的指令遵循和安全等精调）；在本词汇表的层面，这种区分并不重要。

*Usage:*

"Can we get it to know our internal API?"

**中文：** "我们能让它了解我们的内部API吗？"

"Not via training — that's a months-long process by the model provider. Load the API docs into [context](./Context.md) instead, that's the lever you actually have."

**中文：** "不能通过训练——那是模型提供方需要数月完成的过程。把API文档加载到[上下文](./Context.md)中吧，这才是你实际能用的杠杆。"
