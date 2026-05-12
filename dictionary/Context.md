---
description: The relevant information the agent has access to right now — what the agent knows that's pertinent to the task.
description_zh: 智能体当前能够访问的相关信息——智能体所知道的与任务相关的内容。
---
The relevant information the [agent](./Agent.md) has access to right now. The abstract noun — not the raw input the model sees (that's the [context window](./Context%20window.md)), not the running history (that's the [session](./Session.md)), but *what the agent knows that's pertinent to the task*. "Loading something into context" means making it part of this set; "context engineering" is the discipline of curating it.

**中文：** [智能体](./Agent.md)当前能够访问的相关信息。这是一个抽象名词——不是模型看到的原始输入（那是[上下文窗口](./Context%20window.md)），也不是运行中的历史（那是[会话](./Session.md)），而是*智能体所知道的与任务相关的内容*。"把某物加载到context中"意味着让它成为这个集合的一部分；"context engineering"（上下文工程）是策划它的学问。

*Usage:*

**中文：** 用法：

"It keeps inventing fields that aren't in the type."

**中文：** "它一直在发明类型中不存在的字段。"

"The type file isn't in context — it's reading the call sites and guessing. Read the definition in first."

**中文：** "类型文件不在context里——它只是在读调用点然后猜测。先把定义读进来。"
