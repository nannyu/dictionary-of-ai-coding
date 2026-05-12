---
description: Running a trained model to generate output — what happens on every model provider request. Parameters stay fixed.
description_zh: 运行已训练的模型以生成输出——每次模型提供商请求时发生的事情。参数保持不变。
---
Running a trained [model](./Model.md) to generate output — what happens on every [model provider request](./Model%20provider%20request.md). [Parameters](./Parameters.md) stay fixed; the model just does [next-token prediction](./Next-token%20prediction.md) over the [context](./Context.md) it's given. Cheap relative to [training](./Training.md), but billed per [token](./Token.md) and the dominant cost of using a model.

**中文：** 运行已训练的[模型](./Model.md)以生成输出——每次[模型提供商请求](./Model%20provider%20request.md)时发生的事情。[参数](./Parameters.md)保持不变；模型只是根据给定的[上下文](./Context.md)进行[下一个词元预测](./Next-token%20prediction.md)。相对于[训练](./Training.md)来说成本较低，但按[词元](./Token.md)计费，是使用模型的主要成本。

*Usage:*

"Why does the bill scale with usage instead of being a flat license?"

**中文：** "为什么账单是按使用量计费而不是固定许可证？"

"You're paying for inference — every model provider request runs the model on the provider's hardware. Training already happened, but inference costs accrue per request, and a single [turn](./Turn.md) can expand into many requests when [tools](./Tool.md) are called."

**中文：** "你在为推理付费——每次模型提供商请求都会在提供商的硬件上运行模型。训练已经完成，但推理成本按请求累积，而且当调用[工具](./Tool.md)时，单个[轮次](./Turn.md)可能扩展为多个请求。"
