---
description: A tree of files and directories the agent reads from, writes to, and executes within — the default environment for a coding agent.
description_zh: 智能体读取、写入和执行操作的文件与目录树——编程智能体的默认环境。
---
A tree of files and directories the [agent](./Agent.md) reads from, writes to, and executes within — the default kind of [environment](./Environment.md) for a coding agent. [AGENTS.md](./AGENTS.md.md), [skills](./Skill.md), source code, build scripts, and [tool](./Tool.md) configs all live in a filesystem. When a [harness](./Harness.md) "starts in your project," it's pointing the agent at a filesystem.

**中文：** [智能体](./Agent.md)从中读取、写入和执行操作的文件与目录树——编程智能体的默认[环境](./Environment.md)类型。[AGENTS.md](./AGENTS.md.md)、[技能](./Skill.md)、源代码、构建脚本和[工具](./Tool.md)配置都存在于文件系统中。当[harness](./Harness.md)"在你的项目中启动"时，它实际上是将智能体指向一个文件系统。

*Usage:*

"Why isn't it picking up my AGENTS.md?"

**中文：** "为什么它没有识别到我的 AGENTS.md？"

"It's running against a different filesystem — the [sandbox](./Sandbox.md) mounted the parent dir, not the project root. Repoint the harness."

**中文：** "它运行在一个不同的文件系统上——[沙盒](./Sandbox.md)挂载的是父目录，而不是项目根目录。重新指向 harness。"
