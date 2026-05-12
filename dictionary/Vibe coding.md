---
description: A working pattern where the user accepts the agent's code without human review. The diff is treated as opaque.
description_zh: 一种工作模式，用户在没有人工审查的情况下接受智能体的代码。diff被视为黑箱。
---
A working pattern where the user accepts the [agent](./Agent.md)'s code without [human review](./Human%20review.md). The diff is treated as opaque — what matters is whether the program behaves, not what's inside. [Automated review](./Automated%20review.md) and [automated checks](./Automated%20check.md) may still run; vibe coding is silent on both.

**中文：** 一种工作模式，用户在没有[人工审查](./Human%20review.md)的情况下接受[智能体](./Agent.md)的代码。diff被视为黑箱——重要的是程序是否正常运行，而不是里面写了什么。[自动化审查](./Automated%20review.md)和[自动化检查](./Automated%20check.md)仍可能运行；Vibe编程对这两者不置可否。

*Avoid:* "vibe coding" as a synonym for "low-quality AI coding" — the term names the review stance, not the resulting code.

**中文：** *避免：* 将"Vibe编程"作为"低质量AI编程"的同义词——这个词命名的是审查立场，而非产出的代码质量。

*Usage:*

"Did you read what it changed in the auth flow?"

**中文：** "你看了它在认证流程里改了什么吗？"

"Vibe coded it — login still works, that's all I checked."

**中文：** "Vibe编程的——登录还能用，我就检查了这些。"

"Read the diff before you push, vibing on auth is how secrets leak into logs."

**中文：** "推送之前看看diff，在认证上搞Vibe编程就是密码泄露到日志里的原因。"
