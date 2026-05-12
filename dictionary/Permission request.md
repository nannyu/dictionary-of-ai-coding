---
description: What the harness shows the user before executing a tool call that isn't pre-approved. The mechanism for putting a human in the loop.
description_zh: 在执行未经预先批准的工具调用前，harness向用户展示的确认提示。将人类纳入决策循环的机制。
---
What the [harness](./Harness.md) shows the user before executing a [tool call](./Tool%20call.md) that isn't pre-approved. The [model](./Model.md) produces a tool call; instead of running it immediately, the harness pauses and asks. Approve and it runs; deny and the harness reports the denial back to the model as a [tool result](./Tool%20result.md). The mechanism by which a harness puts a human in the [loop](./Human-in-the-loop.md) for risky or sensitive actions.

**中文：** [harness](./Harness.md)在执行未经预先批准的[工具调用](./Tool%20call.md)前向用户展示的确认提示。[模型](./Model.md)生成了一个工具调用；harness不会立即执行，而是暂停并询问用户。批准则执行；拒绝则harness将拒绝信息作为[工具结果](./Tool%20result.md)返回给模型。这是harness将人类纳入[循环](./Human-in-the-loop.md)以处理风险或敏感操作的机制。

*Usage:*

"It's been blocked on a permission request for ten minutes — I was in a meeting."

**中文：** "它被一个权限请求卡了十分钟——我当时在开会。"

"That's the cost of human-in-the-loop. Pre-approve the safe [tools](./Tool.md) so the request only fires on the actually-risky calls."

**中文：** "这就是人类在循环中的代价。预先批准安全的[工具](./Tool.md)，这样权限请求只会在真正有风险的调用时触发。"
