---
description: A deterministic verification that runs in the environment — tests, type checks, lints, build, pre-commit hooks. Pass/fail, no judgement.
description_zh: 在环境中运行的确定性验证——测试、类型检查、代码检查、构建、预提交钩子。通过/失败，不带判断。
---
A deterministic verification that runs in the [environment](./Environment.md) — tests, type checks, lints, build, pre-commit hooks. Pass/fail, no judgement. The signal an [agent](./Agent.md) can self-correct from without involving anyone else. A flaky test is a broken check, not a non-check; automated checks are deterministic *by design*.

**中文：** 在[环境](./Environment.md)中运行的确定性验证——测试、类型检查、代码检查（lint）、构建、预提交钩子。通过/失败，不带主观判断。[智能体](./Agent.md)可以据此自行修正，无需他人介入。一个不稳定（flaky）的测试是一个坏掉的检查，而不是"非检查"；自动化检查在设计上就是确定性的。

*Avoid:* "feedback loop" / "backpressure" — both lump checks together with [review](./Automated%20review.md). *Avoid:* "test" — tests are automated checks, but not all automated checks are tests.

**中文：** 避免使用："feedback loop"（反馈循环）/ "backpressure"（背压）——两者都把检查和[review](./Automated%20review.md)混为一谈。避免使用："test"（测试）——测试是自动化检查，但并非所有自动化检查都是测试。

*Usage:*

**中文：** 用法：

"The agent keeps shipping broken code in the [AFK](./AFK.md) runs."

**中文：** "智能体在[AFK](./AFK.md)运行中一直在提交有问题的代码。"

"What automated checks are wired into the [sandbox](./Sandbox.md)?"

**中文：** "[沙盒](./Sandbox.md)里接入了哪些自动化检查？"

"Just the unit tests."

**中文：** "只有单元测试。"

"Add typecheck and lint — it'll self-correct from those before the PR ever lands."

**中文：** "加上类型检查和代码检查——它会在PR提交前就根据这些自行修正。"
