---
description: Each token has a finite amount of influence to distribute across the rest of the context. Per-token, doesn't grow when context does.
description_zh: 每个词元拥有有限的影响力预算，需要在上下文其余部分中分配。按词元计算，上下文增长时预算不会增加。
---
Each [token](./Token.md) has a finite amount of influence to distribute across the rest of the [context](./Context.md). Heavy influence on [one relationship](./Attention%20relationship.md) leaves less for others. The budget is per-token and doesn't grow when the context does, which is why long [sessions](./Session.md) dilute.

**中文：** 每个[词元](./Token.md)拥有有限的影响力预算，需要在[上下文](./Context.md)的其余部分中进行分配。对[某一个关系](./Attention%20relationship.md)投入过多影响力，留给其他关系的就更少。预算是按词元计算的，上下文增长时预算不会增加，这就是为什么长[会话](./Session.md)会导致注意力稀释。

*Usage:*

**中文：** 用法：

"Why does it keep ignoring the schema I pasted at the top?"

**中文：** "为什么它一直忽略我贴在顶部的schema？"

"We're well into the [dumb zone](./Smart%20zone.md) — every token's attention budget is fixed, but the context kept growing. The signal on the schema is now competing with thousands of newer tokens."

**中文：** "我们已经深入[dumb zone](./Smart%20zone.md)了——每个词元的注意力预算是固定的，但上下文一直在增长。schema上的信号现在要与数千个新词元竞争。"
