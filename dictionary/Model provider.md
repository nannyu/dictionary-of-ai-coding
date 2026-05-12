---
description: Whatever serves a model for inference. Usually remote (Anthropic, OpenAI, Google), but can also be local (Ollama, llama.cpp).
description_zh: 为模型提供推理服务的任何实体。通常是远程的（Anthropic、OpenAI、Google），也可以是本地的（Ollama、llama.cpp）。
---
Whatever serves a [model](./Model.md) for [inference](./Inference.md). Usually a remote service (Anthropic, OpenAI, Google), but can also be local — Ollama, LM Studio, llama.cpp running on your own machine. The [harness](./Harness.md) doesn't run the model itself; it asks a provider to.

**中文：** 为[模型](./Model.md)提供[推理](./Inference.md)服务的任何实体。通常是远程服务（Anthropic、OpenAI、Google），也可以是本地的——在你自己的机器上运行 Ollama、LM Studio 或 llama.cpp。[Harness](./Harness.md)本身不运行模型；它请求提供商来运行。

*Usage:*

"Can we run this offline for the air-gapped client?"

**中文：** "我们能为这个气隙隔离的客户端离线运行吗？"

"Swap the model provider to a local one — Ollama or llama.cpp on their box. The harness doesn't care, it just hits a different endpoint."

**中文：** "把模型提供商换成本地的——在他们机器上装 Ollama 或 llama.cpp。Harness 不在乎，它只是访问不同的端点。"
