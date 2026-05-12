---
description: An isolated environment the agent runs inside — container, VM, or restricted shell. Limits the blast radius of agent actions.
aliases:
  - Sandboxing
  - Sandbox / Sandboxing
description_zh: 智能体运行的隔离环境——容器、虚拟机或受限shell。限制智能体操作的影响范围。
---
An isolated [environment](./Environment.md) the [agent](./Agent.md) runs inside — a container, VM, ephemeral [filesystem](./Filesystem.md), or restricted-permission shell. Limits the blast radius of agent actions: even if the agent runs destructive commands or fetches something malicious, the damage is contained. The safety substrate that makes [AFK](./AFK.md) practical.

**中文：** [智能体](./Agent.md)运行的隔离[环境](./Environment.md)——容器、虚拟机、临时[文件系统](./Filesystem.md)或受限权限的shell。限制智能体操作的影响范围：即使智能体执行了破坏性命令或获取了恶意内容，损害也会被控制在隔离范围内。这是让[AFK](./AFK.md)（离开键盘）模式得以实现的安全基础。

*Usage:*

"I want to let it run [bypass-permissions](./Agent%20mode.md) overnight but I'm not ready for that."

**中文：** "我想让它通宵运行[绕过权限](./Agent%20mode.md)模式，但我还没准备好。"

"Put it in a sandbox — fresh container, no credentials mounted, no network out. Worst case it nukes its own filesystem and you discard the container."

**中文：** "把它放进沙盒——全新容器，不挂载任何凭证，禁止外网访问。最坏的情况也只是它摧毁了自己的文件系统，你直接丢弃这个容器就行。"
