---
description: A function the harness exposes for the agent to call — Read, Write, Bash, Search. How an agent perceives and acts on the environment.
description_zh: harness向智能体暴露的函数——Read、Write、Bash、Search。智能体感知和操作环境的方式。
---
A function the [harness](./Harness.md) exposes for the [agent](./Agent.md) to call — Read, Write, Bash, Search. Tools are how an agent perceives and acts on the [environment](./Environment.md): it can't see the environment except through [tool results](./Tool%20result.md), and can't change it except through [tool calls](./Tool%20call.md). Each tool call costs an extra [model provider request](./Model%20provider%20request.md), since the result has to go back to the model before it can decide what to do next.

**中文：** [harness](./Harness.md)向[智能体](./Agent.md)暴露的函数——Read、Write、Bash、Search。工具是智能体感知和操作[环境](./Environment.md)的方式：除了通过[工具结果](./Tool%20result.md)，它无法看到环境；除了通过[工具调用](./Tool%20call.md)，它无法改变环境。每次工具调用都要额外消耗一次[模型提供方请求](./Model%20provider%20request.md)，因为结果必须返回给模型，它才能决定下一步做什么。

*Usage:*

"Can the agent query staging directly?"

**中文：** "智能体能直接查询staging环境吗？"

"Add a `psql` tool to the harness, scoped read-only on staging. Without a tool for it, the agent's blind to anything outside the [filesystem](./Filesystem.md)."

**中文：** "给harness添加一个`psql`工具，限定为staging环境的只读权限。没有对应的工具，智能体对[文件系统](./Filesystem.md)之外的任何东西都一无所知。"
