---
description: The user reading the code the agent produced and forming a judgement on it. Reading the diff counts; reading the summary doesn't.
description_zh: 用户阅读智能体生成的代码并对其进行评判。阅读 diff 算；阅读摘要不算。
---
The user reading the code the [agent](./Agent.md) produced and forming a judgement on it. Reading the diff or the changed files counts; reading the agent's *description* of what it did does not — narration is not the artifact.

**中文：** 用户阅读[智能体](./Agent.md)生成的代码并对其进行评判。阅读 diff 或修改后的文件才算；阅读智能体对自己所做工作的*描述*不算——叙述不是产物本身。

*Avoid:* "code review" alone — ambiguous between human and [automated](./Automated%20review.md).

**中文：** *避免：* 单独使用"code review"——在人类审查和[自动化审查](./Automated%20review.md)之间会产生歧义。

*Usage:*

"I human-reviewed the [AFK](./AFK.md) output."

**中文：** "我人工审查了[AFK](./AFK.md)（离开键盘）的输出。"

"You read the diff or just the summary?"

**中文：** "你读了 diff 还是只看了摘要？"

"Diff. The summary said it deleted dead code — turned out the function was called from a generated file."

**中文：** "Diff。摘要说它删除了无用代码——结果发现那个函数是从一个生成的文件中被调用的。"
