---
description: A handoff artifact scoping one session of work. Stands alone or hangs off a spec. Can block or be blocked by sibling tickets.
description_zh: 界定一个会话工作范围的交接产物。独立存在或依附于规格说明。可以被同级工单阻塞或阻塞同级工单。
---
A [handoff artifact](./Handoff%20artifact.md) scoping one [session](./Session.md) of work. Stands alone, or hangs off a [spec](./Spec.md) as one of its children. Tickets can block or be blocked by sibling tickets, so the order of work falls out of their dependency graph rather than a linear plan.

**中文：** 界定一个[会话](./Session.md)工作范围的[交接产物](./Handoff%20artifact.md)。独立存在，或作为子项依附于[规格说明](./Spec.md)。工单可以阻塞或被同级工单阻塞，因此工作顺序由它们的依赖图决定，而非线性计划。

*Usage:*

"Where do I start on the migration spec?"

**中文：** "迁移规格说明我该从哪里开始？"

"Look at the ticket graph — the schema change blocks the backfill, the backfill blocks the API switch. Pick a leaf and run a session on it."

**中文：** "看工单图——schema变更阻塞回填，回填阻塞API切换。选一个叶子节点，在上面运行一个会话。"
