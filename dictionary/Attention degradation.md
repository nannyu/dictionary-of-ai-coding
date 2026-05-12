---
description: As a session grows, each token's attention budget spreads across more competitors; signal on meaningful relationships shrinks.
description_zh: 随着会话增长，每个词元的注意力预算被分摊到更多竞争者身上；有意义关系上的信号减弱。
---
As a [session](./Session.md) grows, each [token](./Token.md)'s [attention budget](./Attention%20budget.md) is spread across more competitors. The signal on any one [meaningful relationship](./Attention%20relationship.md) shrinks; noise from irrelevant [context](./Context.md) crowds in. Same [model](./Model.md), same [parameters](./Parameters.md) — just more mouths to feed from the same plate. Cause of the smart zone / dumb [zone effect](./Smart%20zone.md).

**中文：** 随着[会话](./Session.md)的增长，每个[词元](./Token.md)的[注意力预算](./Attention%20budget.md)被分摊到更多的竞争者身上。任何单个[有意义关系](./Attention%20relationship.md)上的信号都在减弱；无关[上下文](./Context.md)带来的噪音蜂拥而入。同一个[模型](./Model.md)，同一套[参数](./Parameters.md)——只是要从同一个盘子里喂更多的嘴。这就是smart zone / dumb [zone效应](./Smart%20zone.md)的成因。

*Usage:*

**中文：** 用法：

"It's deep in the dumb zone — inventing generics that aren't in the type file."

**中文：** "它已经深陷dumb zone了——在发明类型文件里根本不存在的泛型。"

"Attention degradation. The type definitions are still in context, but the signal on them is buried under everything we've added since. [Clear](./Clearing.md) and reload."

**中文：** "注意力退化。类型定义仍在上下文中，但它们的信号被之后添加的所有内容淹没了。[清除](./Clearing.md)并重新加载。"
