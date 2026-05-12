---
description: A preset bundling a permission mode with behavioral instructions injected into the system prompt. Can flip mid-session.
description_zh: 一种预设配置，将权限模式与注入系统提示词的行为指令打包在一起。可以在会话中途切换。
aliases:
  - plan mode
  - accept-edits
  - bypass permissions
  - YOLO mode
---
A preset that shapes how the [agent](./Agent.md) operates at runtime — bundles a [permission mode](./Permission%20mode.md) with behavioral instructions injected into the [system prompt](./System%20prompt.md). Examples: a default that prompts on risky calls, a **plan mode** that blocks edits and steers the agent toward research, an **accept-edits** mode that auto-approves edits, a **bypass permissions** mode (colloquially **YOLO mode**) that auto-approves everything. Can flip [mid-session](./Session.md).

**中文：** 一种塑造[智能体](./Agent.md)在运行时如何运作的预设配置——将[权限模式](./Permission%20mode.md)与注入到[系统提示词](./System%20prompt.md)中的行为指令打包在一起。例如：默认模式会在风险操作时提示确认；**plan mode**（计划模式）会阻止编辑并引导智能体进行研究；**accept-edits**（接受编辑）模式会自动批准编辑；**bypass permissions**（绕过权限）模式（俗称**YOLO mode**）会自动批准所有操作。可以在[会话中途](./Session.md)切换。

*Vendor terms:* Claude Code calls these "permission modes," Codex calls them "approval modes" — both predate behavioral bundling.

**中文：** 厂商术语：Claude Code称之为"permission modes"（权限模式），Codex称之为"approval modes"（审批模式）——两者都早于行为打包的概念出现。

*Usage:*

**中文：** 用法：

"It keeps editing files when I just want a plan."

**中文：** "我只是想要一个计划，它却一直在编辑文件。"

"Switch to plan mode — it'll block writes and stay in research."

**中文：** "切换到plan mode——它会阻止写入，保持在研究状态。"

"What about for the [AFK](./AFK.md) run later?"

**中文：** "那之后的[AFK](./AFK.md)运行呢？"

"Bypass mode, but only inside the [sandbox](./Sandbox.md)."

**中文：** "Bypass mode，但只在[沙盒](./Sandbox.md)里。"
