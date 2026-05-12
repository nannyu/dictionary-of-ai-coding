---
description: Everything around the model that turns it into an agent: tools, system prompt, context-window management, permissions, hooks.
description_zh: 围绕模型将其转变为智能体的一切：工具、系统提示词、上下文窗口管理、权限、钩子。
---
Everything around the [model](./Model.md) that turns it into an [agent](./Agent.md): [tools](./Tool.md), [system prompt](./System%20prompt.md), [context-window management](./Context%20window.md), permissions, hooks. **Claude.ai** and **Claude Code** run on the same model but behave differently because their harnesses differ.

**中文：** 围绕[模型](./Model.md)将其转变为[智能体](./Agent.md)的一切：[工具](./Tool.md)、[系统提示词](./System%20prompt.md)、[上下文窗口管理](./Context%20window.md)、权限、钩子。**Claude.ai** 和 **Claude Code** 运行在相同的模型上，但行为不同，因为它们的 harness 不同。

*Usage:*

"Same model, why is Claude Code editing files and Claude.ai just answering questions?"

**中文：** "同一个模型，为什么 Claude Code 在编辑文件而 Claude.ai 只是回答问题？"

"Different harnesses — Claude Code has [filesystem](./Filesystem.md) tools, a different system prompt, and a permission layer. The model isn't the variable here."

**中文：** "不同的 harness——Claude Code 有[文件系统](./Filesystem.md)工具、不同的系统提示词和一个权限层。这里的变量不是模型。"
