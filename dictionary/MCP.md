---
description: A protocol for plugging external tool servers into a harness — how an agent gets tools beyond what the harness ships with.
description_zh: 一种将外部工具服务器接入 harness 的协议——智能体如何获取 harness 自带之外的工具。
---

**Model Context Protocol.** A protocol for plugging external tool servers into a [harness](./Harness.md) — how an [agent](./Agent.md) gets [tools](./Tool.md) beyond what the harness ships with. The agent never "calls MCP"; it calls a tool, and the harness happens to have gotten that tool from an MCP server. Also exposes resources (read-only data) and prompts (reusable templates), but tool provision is the primary use.

**中文：** **模型上下文协议（Model Context Protocol，MCP）。** 一种将外部工具服务器接入[harness](./Harness.md)的协议——[智能体](./Agent.md)如何获取 harness 自带的[工具](./Tool.md)之外的能力。智能体从不"调用 MCP"；它调用的是工具，而 harness 恰好是从 MCP 服务器获取了该工具。还暴露资源（只读数据）和提示词（可复用模板），但工具提供是主要用途。

_Usage:_

"The agent needs to read tickets from Linear."

**中文：** "智能体需要从 Linear 读取工单。"

"Configure the harness to use the Linear MCP server — it exposes the Linear API as tools the agent can call. Saves you writing custom tool wrappers."

**中文：** "配置 harness 使用 Linear 的 MCP 服务器——它将 Linear API 暴露为智能体可调用的工具。省得你写自定义的工具包装器。"
