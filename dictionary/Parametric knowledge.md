---
description: What the model knows from training, stored in its parameters. Frozen at training time. Counterpart to contextual knowledge.
description_zh: 模型从训练中获得的知识，存储在其参数中。在训练时冻结。与上下文知识相对。
---
What the [model](./Model.md) "knows" from [training](./Training.md), stored in its [parameters](./Parameters.md). Frozen at training time — the model can't see its own parameters or update them. Detail is lost in the squeeze: billions of facts cram into a fixed number of parameters, and the rare ones blur. Source of fluency on common topics, and of fabrication on uncommon ones. Counterpart to [contextual knowledge](./Contextual%20knowledge.md).

**中文：** [模型](./Model.md)从[训练](./Training.md)中"知道"的东西，存储在其[参数](./Parameters.md)中。在训练时冻结——模型无法看到自己的参数或更新它们。细节在压缩中丢失：数十亿个事实挤进固定数量的参数中，稀有的事实变得模糊。对常见话题的流畅性来源于此，对不常见话题的编造也来源于此。与[上下文知识](./Contextual%20knowledge.md)相对。

*Usage:*

"It writes flawless React but invents methods on our internal SDK."

**中文：** "它写 React 毫无瑕疵，但会在我们的内部 SDK 上编造方法。"

"React is dense in the parametric knowledge — millions of training examples. Your SDK isn't, so the model fills in plausible-looking shapes. Load the SDK docs into [context](./Context.md)."

**中文：** "React 在参数化知识中很密集——有数百万个训练示例。你的 SDK 不是，所以模型会填充看起来合理的内容。把 SDK 文档加载到[上下文](./Context.md)中。"
