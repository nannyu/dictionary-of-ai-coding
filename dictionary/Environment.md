---
description: The world the agent acts on — anything outside the harness that the agent perceives via tool results and changes via tool calls.
description_zh: 智能体作用的世界——harness之外的任何事物，智能体通过工具结果感知它，通过工具调用改变它。
---
The world the [agent](./Agent.md) acts on — anything outside the [harness](./Harness.md) that the agent perceives through [tool results](./Tool%20result.md) and changes through [tool calls](./Tool%20call.md). The harness *runs* the agent; the environment is what the agent *works in*. A file like [`AGENTS.md`](./AGENTS.md.md) lives in the environment; the harness is what loads it into the [context window](./Context%20window.md). A [filesystem](./Filesystem.md) is the most common kind of environment, but not the only one (a database, a remote API, a browser session can all be environments).

**中文：** [智能体](./Agent.md)作用的世界——[harness](./Harness.md)之外的任何事物，智能体通过[工具结果](./Tool%20result.md)感知它，通过[工具调用](./Tool%20call.md)改变它。harness*运行*智能体；environment是智能体*工作*的地方。像[`AGENTS.md`](./AGENTS.md.md)这样的文件存在于environment中；harness负责将其加载到[上下文窗口](./Context%20window.md)中。[文件系统](./Filesystem.md)是最常见的environment类型，但不是唯一的（数据库、远程API、浏览器会话都可以是environment）。

*Avoid:* using "environment" for the runtime or the harness itself — the harness is the wrapper, the environment is the workspace.

**中文：** 避免使用：将"environment"用于运行时或harness本身——harness是包装器，environment是工作空间。

*Usage:*

**中文：** 用法：

"The agent can't see the staging DB schema."

**中文：** "智能体看不到staging数据库的schema。"

"Wire it into the environment — give it a `psql` [tool](./Tool.md) scoped to read-only on staging. The harness is fine, it just has nothing to act on."

**中文：** "把它接入environment——给它一个`psql`[工具](./Tool.md)，范围限定为staging的只读访问。harness没问题，它只是没有可操作的对象。"
