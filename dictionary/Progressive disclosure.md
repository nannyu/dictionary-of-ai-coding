---
description: Loading only the context an agent needs right now, with context pointers to the rest. Borrowed from UI design.
description_zh: 只加载智能体当前需要的上下文，其余部分通过上下文指针引用。借自UI设计概念。
---

Loading only the [context](./Context.md) an [agent](./Agent.md) needs right now, with [context pointers](./Context%20pointer.md) to the rest. Borrowed from UI design.

**中文：** 只加载[智能体](./Agent.md)当前需要的[上下文](./Context.md)，其余部分通过[上下文指针](./Context%20pointer.md)引用。借自UI设计概念。

_Usage:_

"Should I dump the entire style guide into [AGENTS.md](./AGENTS.md.md)?"

**中文：** "我应该把整个样式指南都塞进[AGENTS.md](./AGENTS.md.md)里吗？"

"No — progressive disclosure. Reference the style guide as a [skill](./Skill.md) the agent loads when it actually needs to write a component. AGENTS.md pays the [token](./Token.md) cost every [turn](./Turn.md)."

**中文：** "不——用渐进式披露。将样式指南作为[技能](./Skill.md)引用，让智能体在真正需要写组件时才加载。AGENTS.md里的内容每[轮次](./Turn.md)都要支付[词元](./Token.md)成本。"
