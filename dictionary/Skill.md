---
description: A teachable capability bundled as a unit — kept out of the context window until a context pointer pulls it in for the task at hand.
description_zh: 打包为单元的可教授能力——在上下文窗口外待命，直到上下文指针将其拉入当前任务。
---

A teachable capability bundled as a unit — instructions and resources for doing one task well, kept in the [environment](./Environment.md) until a [context pointer](./Context%20pointer.md) pulls it into the [context window](./Context%20window.md) for the task at hand. The unit of [progressive disclosure](./Progressive%20disclosure.md) in a [harness](./Harness.md).

**中文：** 打包为单元的可教授能力——做好一件事所需的指令和资源，保存在[环境](./Environment.md)中，直到[上下文指针](./Context%20pointer.md)将其拉入[上下文窗口](./Context%20window.md)以处理当前任务。[harness](./Harness.md)中[渐进式披露](./Progressive%20disclosure.md)的基本单元。

_Avoid:_ "[tool](./Tool.md)" — a tool is what the [agent](./Agent.md) _calls_; a skill is instructions it _reads_.

**中文：** _避免：_ 使用"[工具](./Tool.md)"——工具是[智能体](./Agent.md)_调用_的东西；技能是它_阅读_的指令。

_Usage:_

"Where should I put the deploy runbook?"

**中文：** "部署操作手册应该放在哪里？"

"As a skill — the agent loads it only when the task involves deploys. In [AGENTS.md](./AGENTS.md.md) it'd burn [tokens](./Token.md) on every [turn](./Turn.md) for something we use weekly."

**中文：** "作为技能——智能体只在任务涉及部署时才加载它。如果放在[AGENTS.md](./AGENTS.md.md)里，每周才用一次的东西却要每[轮次](./Turn.md)都烧[词元](./Token.md)。"
