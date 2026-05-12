---
description: An agent reviewing another agent's work, often with a different model or system prompt. Non-deterministic: it forms a judgement.
description_zh: 一个智能体审查另一个智能体的工作，通常使用不同的模型或系统提示词。非确定性的：它会形成判断。
---
An [agent](./Agent.md) reviewing another agent's work, often with a different [model](./Model.md) or [system prompt](./System%20prompt.md). Non-deterministic: it forms a judgement. Runs anywhere — pre-merge on a PR, post-hoc on commit history, mid-session as a [subagent](./Subagent.md). An LLM-as-judge in CI is automated review, not an [automated check](./Automated%20check.md); what the assertion *does* decides the category, not where it runs.

**中文：** 一个[智能体](./Agent.md)审查另一个智能体的工作，通常使用不同的[模型](./Model.md)或[系统提示词](./System%20prompt.md)。非确定性的：它会形成判断。可以在任何地方运行——PR合并前、提交历史的事后审查、会话中途作为[子智能体](./Subagent.md)。CI中以LLM作为裁判的是自动化审查，不是[自动化检查](./Automated%20check.md)；决定类别的是断言*做什么*，而不是它在哪里运行。

*Avoid:* "AI review" / "agent review" — too vague to distinguish from the working agent itself.

**中文：** 避免使用："AI review" / "agent review"——太模糊，无法与工作智能体本身区分开来。

*Usage:*

**中文：** 用法：

"We're getting too many bad PRs from the [AFK](./AFK.md) runs."

**中文：** "我们从[AFK](./AFK.md)运行中收到了太多有问题的PR。"

"Add an automated review step before merge — different model, separate system prompt, scoped to security and contract changes."

**中文：** "在合并前加一个自动化审查步骤——不同的模型、独立的系统提示词，范围限定在安全性和契约变更上。"
