---
description: The numbers inside a model — often billions — tuned during training. Everything the model knows lives in them. Also called weights.
description_zh: 模型内部的数字——通常是数十亿个——在训练期间调整。模型知道的一切都存储在其中。也称为权重。
---
The numbers inside a [model](./Model.md) — often billions of them — tuned during [training](./Training.md). Everything the model "knows" lives in them. Training sets them; [inference](./Inference.md) uses them unchanged. Also called *weights*.

**中文：** [模型](./Model.md)内部的数字——通常是数十亿个——在[训练](./Training.md)期间调整。模型"知道"的一切都存储在其中。训练设定它们；[推理](./Inference.md)使用它们而不做改变。也称为*权重（weights）*。

*Usage:*

"Can we fine-tune it on our codebase?"

**中文：** "我们能在我们的代码库上微调它吗？"

"That'd update the parameters — different model afterwards. For one project it's almost always cheaper to load the codebase as [context](./Context.md) than to retrain."

**中文：** "那会更新参数——之后就变成不同的模型了。对于单个项目来说，把代码库加载为[上下文](./Context.md)几乎总是比重训练更便宜。"
