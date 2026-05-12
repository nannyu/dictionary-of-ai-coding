---
description: The parameters. Stateless — does next-token prediction and nothing else. Cannot do anything agentic on its own.
description_zh: 参数。无状态——只进行下一个词元预测，其他什么都不做。自身无法执行任何智能体行为。
---
The [parameters](./Parameters.md). [Stateless](./Stateless.md) — does [next-token prediction](./Next-token%20prediction.md) and nothing else. "Claude Opus 4.7" and "GPT-5" are models. On its own a model can't do anything agentic; it has to be [harnessed](./Harness.md).

**中文：** [参数](./Parameters.md)。[无状态](./Stateless.md)——只进行[下一个词元预测](./Next-token%20prediction.md)，其他什么都不做。"Claude Opus 4.7" 和 "GPT-5" 都是模型。模型自身无法执行任何智能体行为；它必须被[harnessed](./Harness.md)。

*Usage:*

"Should we switch the model from Sonnet to Opus for the planning step?"

**中文：** "规划步骤我们应该把模型从 Sonnet 换成 Opus 吗？"

"Try it — but the harness is doing most of the lifting on this task. The model swap won't help if the [system prompt](./System%20prompt.md) and [tools](./Tool.md) are wrong."

**中文：** "可以试试——但在这个任务上主要是 harness 在出力。如果[系统提示词](./System%20prompt.md)和[工具](./Tool.md)有问题，换模型也没用。"
