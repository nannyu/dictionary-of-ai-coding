---
description: A working pattern where the user kicks off a session and leaves the agent to run unattended (away from keyboard).
description_zh: 一种工作模式：用户启动会话后离开，让智能体无人值守地运行（离开键盘）。
aliases:
  - away from keyboard
  - AFK (away from keyboard)
---

Away from keyboard. A working pattern where the user kicks off a [session](./Session.md) and leaves the [agent](./Agent.md) to run unattended. The throughput multiplier of AI coding — many AFK sessions can run in parallel while you sleep, eat, or work on something else. Usually requires a permissive [permission mode](./Permission%20mode.md) plus [sandboxing](./Sandbox.md) to be safe.

**中文：** 离开键盘（Away from keyboard）。一种工作模式：用户启动一个[会话](./Session.md)后离开，让[智能体](./Agent.md)无人值守地运行。这是AI编程的吞吐量倍增器——你可以同时运行多个AFK会话，在你睡觉、吃饭或做其他事情的时候并行推进。通常需要宽松的[权限模式](./Permission%20mode.md)加上[沙盒](./Sandbox.md)隔离才能安全进行。

_Avoid:_ "background agent" — centers the machine ("running in the background") rather than the human pattern ("user has walked away"). AFK is the load-bearing fact: the user isn't watching.

**中文：** 避免使用："background agent"（后台智能体）——它强调的是机器（"在后台运行"），而非人的行为模式（"用户已经走开了"）。AFK才是核心事实：用户没有在盯着看。

_Usage:_

**中文：** 用法：

"I'm running this AFK — three sandboxed agents on the refactor, reviewing the PRs in the morning."

**中文：** "我在AFK运行这个——三个沙盒化的智能体在做重构，明早review PR。"

"[Bypass permissions](./Agent%20mode.md)?"

**中文：** "[绕过权限](./Agent%20mode.md)？"

"Yeah, read-only [filesystem](./Filesystem.md), no network."

**中文：** "对，只读[文件系统](./Filesystem.md)，没有网络。"
