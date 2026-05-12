---
description: Early in a session the agent is sharp and focused. As the session grows it drifts into a dumb zone: sloppier, forgetful, more mistakes.
aliases:
  - Dumb zone
  - Smart zone / Dumb zone
description_zh: 会话初期智能体敏锐专注。随着会话增长，它会滑入愚钝区：更马虎、更健忘、错误更多。
---

Early in a [session](./Session.md) the [agent](./Agent.md) is in a "smart zone" — sharp, focused, recall is good. As the session grows it drifts into a "dumb zone": sloppier, forgetful, more mistakes — and more \*\*faithfulness [hallucinations](./Hallucination.md). Same [model](./Model.md), same [harness](./Harness.md) — just more [context](./Context.md). The felt effect of [attention degradation](./Attention%20degradation.md). On frontier models, the dumb zone commonly begins around 100,000 tokens - though this is debated. [Clear](./Clearing.md) or [compact](./Compaction.md) when the session bloats; don't push through.

**中文：** [会话](./Session.md)初期，[智能体](./Agent.md)处于"智能区"——敏锐、专注、记忆良好。随着会话增长，它会滑入"愚钝区"：更马虎、更健忘、错误更多——以及更多的忠实性[幻觉](./Hallucination.md)。同一个[模型](./Model.md)，同一个[harness](./Harness.md)——只是[上下文](./Context.md)更多了。这是[注意力退化](./Attention%20degradation.md)的实际感受。在前沿模型上，愚钝区通常在大约100,000词元处开始——尽管这一点仍有争议。会话膨胀时[清空](./Clearing.md)或[压缩](./Compaction.md)；不要硬撑。

_Usage:_

"It nailed the first three components and just butchered the fourth."

**中文：** "前三个组件它完成得很漂亮，第四个却搞砸了。"

"You're out of the smart zone — same model, just deep into the dumb zone now. Compact and reload the plan, the next component will land."

**中文：** "你已经离开智能区了——同一个模型，只是现在深陷愚钝区。压缩会话并重新加载计划，下一个组件就能搞定。"
