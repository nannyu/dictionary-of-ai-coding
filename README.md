<!--
  GENERATED FILE — DO NOT EDIT.
  Source: dictionary/*.md, internal/Curriculum.md, internal/README.template.md
  Regenerate: npm run generate
-->

<p>
  <a href="https://www.aihero.dev/ai-coding-dictionary">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://res.cloudinary.com/total-typescript/image/upload/v1777878285/dictionary-dark_2x.png">
      <source media="(prefers-color-scheme: light)" srcset="https://res.cloudinary.com/total-typescript/image/upload/v1777878285/dictionary-light_2x.png">
      <img alt="AI Coding Dictionary" src="https://res.cloudinary.com/total-typescript/image/upload/v1777878285/dictionary-light_2x.png" width="369">
    </picture>
  </a>
</p>

# AI Coding Dictionary / AI 编程词典

**AI coding can feel like it's just for experts**. Unexplained jargon. Mysterious failures. Bills that don't seem to match the work.

**AI 编程听起来似乎只属于专家**。无法解释的术语。神秘的失败。账单似乎和工作量对不上。

It isn't, really. A lot of the confusion is manufactured: **there's a whole VC-funded economy that benefits from keeping it hard to understand**.

其实不是这样。很多困惑是人为制造的：**有一整个风投支撑的经济体系，从让 AI 难以被理解中获利**。

The basic terms of engagement are learnable in an afternoon. Once you have them, the whole thing stops feeling like guesswork.

掌握这些基本术语只需要一个下午。一旦理解了它们，整个过程就不再像猜谜。

Why does context degrade? Why is the bill so high? Why does the same prompt behave differently from one day to the next?

为什么上下文会退化？为什么账单这么高？为什么同样的提示词每天表现都不一样？

Each has a clean answer, once someone tells you the words to use.

每个问题都有清晰的答案，只要有人告诉你该用什么词来问。

That's what this dictionary is for. **The vocabulary of AI coding, translated into plain English**.

这就是这本词典的目的。**AI 编程的词汇表，用通俗易懂的英文（和中文）来解释**。

**Want more than the vocabulary?** Join 62,000+ developers at **[aihero.dev/newsletter](https://www.aihero.dev/s/dictionary-newsletter)** for my latest skills, thinking on AI engineering, and the resources that'll keep you ahead of the curve.

**想要更多内容？** 加入 62,000+ 开发者的 **[aihero.dev/newsletter](https://www.aihero.dev/s/dictionary-newsletter)**，获取我的最新技能、AI 工程思考，以及让你保持领先的资源。

---

## Table of contents / 目录

<details>
<summary>Section 1 — The Model / 模型</summary>

- [Model / 模型](#model)
- [Parameters / 参数](#parameters)
- [Training / 训练](#training)
- [Inference / 推理](#inference)
- [Token / 词元](#token)
- [Next-token prediction / 下一个词元预测](#next-token-prediction)
- [Non-determinism / 非确定性](#non-determinism)
- [Model provider / 模型提供商](#model-provider)
- [Harness / Harness](#harness)
- [Model provider request / 模型提供商请求](#model-provider-request)
- [Input tokens / 输入词元](#input-tokens)
- [Output tokens / 输出词元](#output-tokens)
- [Prefix cache / 前缀缓存](#prefix-cache)
- [Cache tokens / 缓存词元](#cache-tokens)

</details>

<details>
<summary>Section 2 — Sessions, Context Windows & Turns / 会话、上下文窗口与轮次</summary>

- [Stateless / 无状态](#stateless)
- [Context / 上下文](#context)
- [Context window / 上下文窗口](#context-window)
- [Stateful / 有状态](#stateful)
- [Agent / 智能体](#agent)
- [System prompt / 系统提示词](#system-prompt)
- [Session / 会话](#session)
- [Turn / 轮次](#turn)

</details>

<details>
<summary>Section 3 — Tools & Environment / 工具与环境</summary>

- [Environment / 环境](#environment)
- [Filesystem / 文件系统](#filesystem)
- [Tool / 工具](#tool)
- [Tool call / 工具调用](#tool-call)
- [Tool result / 工具结果](#tool-result)
- [MCP / MCP（模型上下文协议）](#mcp)
- [Permission request / 权限请求](#permission-request)
- [Permission mode / 权限模式](#permission-mode)
- [Agent mode / 智能体模式](#agent-mode)
- [Sandbox / 沙盒](#sandbox)

</details>

<details>
<summary>Section 4 — Failure Modes / 失效模式</summary>

- [Sycophancy / 谄媚](#sycophancy)
- [Hallucination / 幻觉](#hallucination)
- [Parametric knowledge / 参数化知识](#parametric-knowledge)
- [Knowledge cutoff / 知识截止](#knowledge-cutoff)
- [Contextual knowledge / 上下文知识](#contextual-knowledge)
- [Attention relationship / 注意力关系](#attention-relationship)
- [Attention budget / 注意力预算](#attention-budget)
- [Attention degradation / 注意力退化](#attention-degradation)
- [Smart zone / 智能区](#smart-zone)

</details>

<details>
<summary>Section 5 — Handoffs / 交接</summary>

- [Clearing / 清空](#clearing)
- [Handoff / 交接](#handoff)
- [Handoff artifact / 交接产物](#handoff-artifact)
- [Spec / 规格说明](#spec)
- [Ticket / 工单](#ticket)
- [Compaction / 压缩](#compaction)
- [Autocompact / 自动压缩](#autocompact)

</details>

<details>
<summary>Section 6 — Memory and Steering / 记忆与引导</summary>

- [Memory system / 记忆系统](#memory-system)
- [AGENTS.md / AGENTS.md](#agentsmd)
- [Progressive disclosure / 渐进式披露](#progressive-disclosure)
- [Context pointer / 上下文指针](#context-pointer)
- [Skill / 技能](#skill)
- [Subagent / 子智能体](#subagent)

</details>

<details>
<summary>Section 7 — Patterns of Work / 工作模式</summary>

- [Human-in-the-loop / 人在回路中](#human-in-the-loop)
- [AFK / AFK（离开键盘）](#afk)
- [Automated check / 自动检查](#automated-check)
- [Automated review / 自动审查](#automated-review)
- [Human review / 人工审查](#human-review)
- [Vibe coding / Vibe编程](#vibe-coding)
- [Design concept / 设计概念](#design-concept)
- [Grilling / 拷问](#grilling)

</details>

## Section 1 — The Model / 模型

### Model / 模型

> **The parameters. Stateless — does next-token prediction and nothing else. Cannot do anything agentic on its own.**

> **中文：** 参数。无状态——只进行下一个词元预测，其他什么都不做。自身无法执行任何智能体行为。


The [parameters](#parameters). [Stateless](#stateless) — does [next-token prediction](#next-token-prediction) and nothing else. "Claude Opus 4.7" and "GPT-5" are models. On its own a model can't do anything agentic; it has to be [harnessed](#harness).

**中文：** [参数](#parameters)。[无状态](#stateless)——只进行[下一个词元预测](#next-token-prediction)，其他什么都不做。"Claude Opus 4.7" 和 "GPT-5" 都是模型。模型自身无法执行任何智能体行为；它必须被[harnessed](#harness)。

*Usage:*

"Should we switch the model from Sonnet to Opus for the planning step?"

**中文：** "规划步骤我们应该把模型从 Sonnet 换成 Opus 吗？"

"Try it — but the harness is doing most of the lifting on this task. The model swap won't help if the [system prompt](#system-prompt) and [tools](#tool) are wrong."

**中文：** "可以试试——但在这个任务上主要是 harness 在出力。如果[系统提示词](#system-prompt)和[工具](#tool)有问题，换模型也没用。"

### Parameters / 参数

> **The numbers inside a model — often billions — tuned during training. Everything the model knows lives in them. Also called weights.**

> **中文：** 模型内部的数字——通常是数十亿个——在训练期间调整。模型知道的一切都存储在其中。也称为权重。


The numbers inside a [model](#model) — often billions of them — tuned during [training](#training). Everything the model "knows" lives in them. Training sets them; [inference](#inference) uses them unchanged. Also called *weights*.

**中文：** [模型](#model)内部的数字——通常是数十亿个——在[训练](#training)期间调整。模型"知道"的一切都存储在其中。训练设定它们；[推理](#inference)使用它们而不做改变。也称为*权重（weights）*。

*Usage:*

"Can we fine-tune it on our codebase?"

**中文：** "我们能在我们的代码库上微调它吗？"

"That'd update the parameters — different model afterwards. For one project it's almost always cheaper to load the codebase as [context](#context) than to retrain."

**中文：** "那会更新参数——之后就变成不同的模型了。对于单个项目来说，把代码库加载为[上下文](#context)几乎总是比重训练更便宜。"

### Training / 训练

> **The process that sets a model's parameters by exposing it to vast amounts of text and adjusting to improve next-token prediction.**

> **中文：** 通过让模型接触海量文本并调整参数以改进下一个词元预测的过程，来设定模型参数。


The process that sets a [model](#model)'s [parameters](#parameters), by exposing it to vast amounts of text and adjusting parameters to improve [next-token prediction](#next-token-prediction). A one-time, expensive process done by the [model provider](#model-provider). Encompasses both pre-training (the bulk run) and post-training (later refinements like instruction-following and safety); the distinction doesn't matter at this glossary's level.

**中文：** 通过让[模型](#model)接触海量文本并调整[参数](#parameters)以改进[下一个词元预测](#next-token-prediction)的过程，来设定模型参数。由[模型提供方](#model-provider)执行的一次性、高成本过程。包括预训练（主体运行）和后训练（后续的指令遵循和安全等精调）；在本词汇表的层面，这种区分并不重要。

*Usage:*

"Can we get it to know our internal API?"

**中文：** "我们能让它了解我们的内部API吗？"

"Not via training — that's a months-long process by the model provider. Load the API docs into [context](#context) instead, that's the lever you actually have."

**中文：** "不能通过训练——那是模型提供方需要数月完成的过程。把API文档加载到[上下文](#context)中吧，这才是你实际能用的杠杆。"

### Inference / 推理

> **Running a trained model to generate output — what happens on every model provider request. Parameters stay fixed.**

> **中文：** 运行已训练的模型以生成输出——每次模型提供商请求时发生的事情。参数保持不变。


Running a trained [model](#model) to generate output — what happens on every [model provider request](#model-provider-request). [Parameters](#parameters) stay fixed; the model just does [next-token prediction](#next-token-prediction) over the [context](#context) it's given. Cheap relative to [training](#training), but billed per [token](#token) and the dominant cost of using a model.

**中文：** 运行已训练的[模型](#model)以生成输出——每次[模型提供商请求](#model-provider-request)时发生的事情。[参数](#parameters)保持不变；模型只是根据给定的[上下文](#context)进行[下一个词元预测](#next-token-prediction)。相对于[训练](#training)来说成本较低，但按[词元](#token)计费，是使用模型的主要成本。

*Usage:*

"Why does the bill scale with usage instead of being a flat license?"

**中文：** "为什么账单是按使用量计费而不是固定许可证？"

"You're paying for inference — every model provider request runs the model on the provider's hardware. Training already happened, but inference costs accrue per request, and a single [turn](#turn) can expand into many requests when [tools](#tool) are called."

**中文：** "你在为推理付费——每次模型提供商请求都会在提供商的硬件上运行模型。训练已经完成，但推理成本按请求累积，而且当调用[工具](#tool)时，单个[轮次](#turn)可能扩展为多个请求。"

### Token / 词元

> **The atomic unit a model reads and writes. Roughly word-sized but not exactly. Context window size, cost, and latency all count tokens.**

> **中文：** 模型读写的基本单位。大致与单词相当但不完全等同。上下文窗口大小、成本和延迟都以词元计算。


The atomic unit a [model](#model) reads and writes. Roughly word-sized but not exactly — common words are one token, rare or long ones split into several. [Context window](#context-window) size, cost, and latency are all counted in tokens.

**中文：** [模型](#model)读写的基本单位。大致与单词相当但不完全等同——常见单词是一个词元，罕见或较长的单词会拆分成多个。[上下文窗口](#context-window)大小、成本和延迟都以词元计算。

*Avoid:* "word" — token boundaries don't match word boundaries, and tokens-per-second / tokens-per-dollar are实际重要的单位。

**中文：** *避免：* 使用"word（单词）"——词元边界与单词边界不匹配，而每秒词元/每美元词元才是实际重要的单位。

*Usage:*

"How big is this prompt going to be?"

**中文：** "这个提示词会有多大？"

"Run it through the tokenizer — the schema's compact but the JSON keys are weird, so they'll split into more tokens than you think."

**中文：** "用分词器跑一下——schema很紧凑但JSON键名很奇怪，所以它们会拆分成比你想象的更多的词元。"

### Next-token prediction / 下一个词元预测

> **What the model actually does. Samples one next token from the context, appends it, and runs again. Its only mode of operation.**

> **中文：** 模型实际做的事情。从上下文中采样下一个词元，追加它，然后再次运行。它唯一的操作模式。


What the [model](#model) actually does. Given a [context](#context), it samples one next [token](#token), appends it, and runs again. Every output — a sentence, a [tool call](#tool-call), a thousand-line file — is built one token at a time. The model has no other mode of operation.

**中文：** [模型](#model)实际做的事情。给定一个[上下文](#context)，它采样下一个[词元](#token)，追加它，然后再次运行。每一个输出——一句话、一个[工具调用](#tool-call)、一个千行文件——都是一个词元一个词元构建的。模型没有其他操作模式。

*Usage:*

"How does the [agent](#agent) 'decide' to call a tool?"

**中文：** "[智能体](#agent)是如何'决定'调用工具的？"

"It doesn't — it's next-token prediction all the way down. The tool call is just a structured string the [harness](#harness) parses out of the output stream."

**中文：** "它并没有决定——从头到尾都是下一个词元预测。工具调用只是[harness](#harness)从输出流中解析出的结构化字符串。"

### Non-determinism / 非确定性

> **The same input can produce different output. A property of how models generate text and how providers serve requests.**

> **中文：** 相同的输入可能产生不同的输出。这是模型生成文本和提供商处理请求方式的属性。


The same input can produce different output. Run a [model](#model) twice with identical [context](#context) and you may get two different answers — sometimes a word, sometimes a completely different approach. Nothing in your code has to change for this to happen.

**中文：** 相同的输入可能产生不同的输出。用相同的[上下文](#context)运行两次[模型](#model)，你可能会得到两个不同的答案——有时是一个词不同，有时是完全不同的方法。你的代码不需要做任何改变就会发生这种情况。

It's a property of how models generate text, and how [model providers](#model-provider) serve [requests](#model-provider-request). There's no setting you can flip to make it go away.

**中文：** 这是模型生成文本的方式以及[模型提供商](#model-provider)处理[请求](#model-provider-request)方式的属性。没有开关可以消除它。

Expect a spread of results from an [agent](#agent) on the same task. Some days the model will feel sharp; some days it'll feel like it's lost the plot. Same task, different rolls of the dice.

**中文：** 对同一个任务，[智能体](#agent)的结果会有一定分布范围。有些天模型感觉很敏锐；有些天感觉像迷失了方向。同一个任务，不同的骰子点数。

Be careful not to over-narrativize this. Humans are pattern-matching machines, and a string of bad runs can feel like proof that "the model got worse this week." Usually it's just the distribution.

**中文：** 注意不要过度叙事化。人类是模式匹配机器，一连串糟糕的运行可能会让你觉得"这周模型变差了"。通常这只是分布问题。

_Usage:_

"Claude has been awful today. Did they ship a worse version?"

**中文：** "Claude 今天表现很差。他们是不是发布了更差的版本？"

"Probably not — model output is non-deterministic. You're going to have good days and bad days on the same task. Try again tomorrow before you go looking for a cause."

**中文：** "可能不是——模型输出是非确定性的。同一个任务你会有好日子和坏日子。明天再试一次，别急着找原因。"

### Model provider / 模型提供商

> **Whatever serves a model for inference. Usually remote (Anthropic, OpenAI, Google), but can also be local (Ollama, llama.cpp).**

> **中文：** 为模型提供推理服务的任何实体。通常是远程的（Anthropic、OpenAI、Google），也可以是本地的（Ollama、llama.cpp）。


Whatever serves a [model](#model) for [inference](#inference). Usually a remote service (Anthropic, OpenAI, Google), but can also be local — Ollama, LM Studio, llama.cpp running on your own machine. The [harness](#harness) doesn't run the model itself; it asks a provider to.

**中文：** 为[模型](#model)提供[推理](#inference)服务的任何实体。通常是远程服务（Anthropic、OpenAI、Google），也可以是本地的——在你自己的机器上运行 Ollama、LM Studio 或 llama.cpp。[Harness](#harness)本身不运行模型；它请求提供商来运行。

*Usage:*

"Can we run this offline for the air-gapped client?"

**中文：** "我们能为这个气隙隔离的客户端离线运行吗？"

"Swap the model provider to a local one — Ollama or llama.cpp on their box. The harness doesn't care, it just hits a different endpoint."

**中文：** "把模型提供商换成本地的——在他们机器上装 Ollama 或 llama.cpp。Harness 不在乎，它只是访问不同的端点。"

### Harness / Harness

> **Everything around the model that turns it into an agent: tools, system prompt, context-window management, permissions, hooks.**

> **中文：** 围绕模型将其转变为智能体的一切：工具、系统提示词、上下文窗口管理、权限、钩子。


Everything around the [model](#model) that turns it into an [agent](#agent): [tools](#tool), [system prompt](#system-prompt), [context-window management](#context-window), permissions, hooks. **Claude.ai** and **Claude Code** run on the same model but behave differently because their harnesses differ.

**中文：** 围绕[模型](#model)将其转变为[智能体](#agent)的一切：[工具](#tool)、[系统提示词](#system-prompt)、[上下文窗口管理](#context-window)、权限、钩子。**Claude.ai** 和 **Claude Code** 运行在相同的模型上，但行为不同，因为它们的 harness 不同。

*Usage:*

"Same model, why is Claude Code editing files and Claude.ai just answering questions?"

**中文：** "同一个模型，为什么 Claude Code 在编辑文件而 Claude.ai 只是回答问题？"

"Different harnesses — Claude Code has [filesystem](#filesystem) tools, a different system prompt, and a permission layer. The model isn't the variable here."

**中文：** "不同的 harness——Claude Code 有[文件系统](#filesystem)工具、不同的系统提示词和一个权限层。这里的变量不是模型。"

### Model provider request / 模型提供商请求

> **One round-trip from the harness to the model provider. The harness sends context; the provider returns one response.**

> **中文：** 从 harness 到模型提供商的一次往返。Harness 发送上下文；提供商返回一个响应。


One round-trip from the [harness](#harness) to the [model provider](#model-provider). The harness sends the current [context](#context); the provider returns one response (a [tool call](#tool-call) or a final answer). A single user message can spawn many model provider requests if the [agent](#agent) calls [tools](#tool) — each [tool result](#tool-result) triggers another request.

**中文：** 从[harness](#harness)到[模型提供商](#model-provider)的一次往返。Harness 发送当前[上下文](#context)；提供商返回一个响应（一个[工具调用](#tool-call)或最终答案）。如果[智能体](#agent)调用[工具](#tool)，单个用户消息可能产生多个模型提供商请求——每个[工具结果](#tool-result)都会触发另一个请求。

*Usage:*

"One question burned forty thousand [tokens](#token)?"

**中文：** "一个问题就消耗了四万[词元](#token)？"

"Look at the tool calls — twelve grep, eight read, four edits. Each tool result spawns another model provider request, and the whole [session](#session) prefix re-sends every time."

**中文：** "看看工具调用——十二次 grep、八次读取、四次编辑。每个工具结果都会产生另一个模型提供商请求，而且整个[会话](#session)前缀每次都会重新发送。"

### Input tokens / 输入词元

> **Tokens the harness sends on each model provider request. Billed at a lower rate than output tokens.**

> **中文：** Harness 在每次模型提供商请求时发送的词元。计费费率低于输出词元。


[Tokens](#token) the [harness](#harness) sends on each [model provider request](#model-provider-request). Billed at a lower rate than [output tokens](#output-tokens).

**中文：** [Harness](#harness)在每次[模型提供商请求](#model-provider-request)时发送的[词元](#token)。计费费率低于[输出词元](#output-tokens)。

*Usage:*

"Bill's high but the [agent](#agent)'s barely writing anything."

**中文：** "账单很高，但[智能体](#agent)几乎没写什么内容。"

"It's the input tokens — every [turn](#turn) re-sends the whole [session](#session). Without the [prefix cache](#prefix-cache) you re-pay for the history each request."

**中文：** "是输入词元的问题——每个[轮次](#turn)都会重新发送整个[会话](#session)。没有[前缀缓存](#prefix-cache)的话，每次请求你都要为历史记录重新付费。"

### Output tokens / 输出词元

> **Tokens the model generates back. Billed at a higher rate than input tokens, since they cost more compute to produce.**

> **中文：** 模型生成的词元。计费费率高于输入词元，因为产生它们需要更多计算资源。


[Tokens](#token) the [model](#model) generates back. Billed at a higher rate than [input tokens](#input-tokens), since they cost more compute to produce.

**中文：** [模型](#model)生成的[词元](#token)。计费费率高于[输入词元](#input-tokens)，因为产生它们需要更多计算资源。

*Usage:*

"The refactor [session](#session) is burning through credit even though the inputs are small."

**中文：** "重构[会话](#session)在快速消耗额度，尽管输入很小。"

"[Agent](#agent)'s rewriting whole files instead of patching. Output tokens cost roughly five times the input rate — get it emitting edits and the bill drops."

**中文：** "[智能体](#agent)在重写整个文件而不是打补丁。输出词元的成本大约是输入费率的五倍——让它输出编辑建议，账单就会下降。"

### Prefix cache / 前缀缓存

> **The provider-side store that lets consecutive requests skip re-processing a shared prefix, billing those tokens at a lower rate.**

> **中文：** 模型提供方端的存储机制，让连续请求跳过共享前缀的重复处理，以更低费率计费这些词元。


The [provider](#model-provider)-side store that lets consecutive [model provider requests](#model-provider-request) skip re-processing a shared prefix. When the start of a request matches the start of a recent one — same [system prompt](#system-prompt), same history up to some point — the provider reuses its prior work and bills those [tokens](#token) as [cache tokens](#cache-tokens) at a much lower rate.

**中文：** [模型提供方](#model-provider)端的存储机制，让连续的[模型提供方请求](#model-provider-request)跳过共享前缀的重复处理。当请求的开头与最近某个请求匹配——相同的[系统提示词](#system-prompt)、相同的历史记录到某一点——提供方会复用之前的计算结果，并将这些[词元](#token)作为[缓存词元](#cache-tokens)以低得多的费率计费。

Anything that changes the prefix (reordering files, rewriting the system prompt mid-[session](#session), injecting a timestamp near the top) invalidates the cache from that point on, and the rest of the request bills at full [input token](#input-tokens) rate.

**中文：** 任何改变前缀的操作（重新排序文件、在[会话](#session)中途重写系统提示词、在顶部附近注入时间戳）都会使缓存从该点开始失效，请求的其余部分将按全额[输入词元](#input-tokens)费率计费。

_Usage:_

"Why did the bill spike halfway through the session?"

**中文：** "为什么会话进行到一半时费用突然飙升？"

"[Harness](#harness) started injecting the current time into the system prompt every [turn](#turn). Prefix cache breaks at the first changed token, so every request after that billed at full rate."

**中文：** "[Harness](#harness)开始在每一[轮次](#turn)将当前时间注入系统提示词。前缀缓存在第一个变化的词元处就失效了，所以之后每个请求都按全额费率计费。"

### Cache tokens / 缓存词元

> **Input tokens the provider has cached from a previous request via its prefix cache, billed at a much lower rate.**

> **中文：** 提供商通过其前缀缓存从先前请求中缓存下来的输入词元，计费费率低得多。


[Input tokens](#input-tokens) the [provider](#model-provider) has cached from a previous [model provider request](#model-provider-request) so it doesn't have to re-process them. When consecutive requests share a prefix, the provider reuses the work via its [prefix cache](#prefix-cache) and bills the cached portion at a much lower rate. The lever that makes long [sessions](#session) affordable — without it, every [turn](#turn) re-pays for the whole history.

**中文：** [提供商](#model-provider)从先前的[模型提供商请求](#model-provider-request)中缓存下来的[输入词元](#input-tokens)，这样就不需要重新处理它们。当连续请求共享一个前缀时，提供商通过其[前缀缓存](#prefix-cache)复用已完成的计算，并对缓存部分以低得多的费率计费。这是让长[会话](#session)变得可负担的杠杆——没有它，每一[轮次](#turn)都要为整个历史重新付费。

*Usage:*

**中文：** 用法：

"Cost on long sessions is brutal — eight bucks for a refactor."

**中文：** "长会话的成本太可怕了——一次重构要八美元。"

"Check the cache tokens. If the [harness](#harness) is reordering the [system prompt](#system-prompt) or files between turns, the prefix breaks and you re-pay full input rate every request."

**中文：** "检查一下缓存词元。如果[harness](#harness)在轮次之间重新排序[系统提示词](#system-prompt)或文件，前缀就会断裂，你每次请求都要按全额输入费率付费。"

## Section 2 — Sessions, Context Windows & Turns / 会话、上下文窗口与轮次

### Stateless / 无状态

> **Carries no information forward. The model is stateless across requests; an agent is stateless across sessions by default.**

> **中文：** 不携带信息向前传递。模型在请求间是无状态的；智能体默认在会话间是无状态的。


Carries no information forward. The [model](#model) is stateless across [model provider requests](#model-provider-request) — each request resends the full [context window](#context-window), because the model has no way to see anything else. An [agent](#agent) is stateless across [sessions](#session) by default: a new session starts empty, with no trace of prior ones. Counterpart to [stateful](#stateful).

**中文：** 不携带信息向前传递。[模型](#model)在[模型提供方请求](#model-provider-request)间是无状态的——每个请求都会重新发送完整的[上下文窗口](#context-window)，因为模型无法看到其他任何东西。[智能体](#agent)默认在[会话](#session)间是无状态的：新会话从空开始，没有任何先前会话的痕迹。[有状态](#stateful)的反义词。

*Usage:*

"Why does it forget the convention every time I [clear](#clearing)?"

**中文：** "为什么每次我[清空](#clearing)后它都会忘记约定？"

"The model's stateless — the new session starts empty. If you want it carried, write it to [AGENTS.md](#agentsmd) or a memory file the [harness](#harness) loads at session start."

**中文：** "模型是无状态的——新会话从空开始。如果你想让它被记住，就把它写入[AGENTS.md](#agentsmd)或harness在会话开始时加载的记忆文件中。"

### Context / 上下文

> **The relevant information the agent has access to right now — what the agent knows that's pertinent to the task.**

> **中文：** 智能体当前能够访问的相关信息——智能体所知道的与任务相关的内容。


The relevant information the [agent](#agent) has access to right now. The abstract noun — not the raw input the model sees (that's the [context window](#context-window)), not the running history (that's the [session](#session)), but *what the agent knows that's pertinent to the task*. "Loading something into context" means making it part of this set; "context engineering" is the discipline of curating it.

**中文：** [智能体](#agent)当前能够访问的相关信息。这是一个抽象名词——不是模型看到的原始输入（那是[上下文窗口](#context-window)），也不是运行中的历史（那是[会话](#session)），而是*智能体所知道的与任务相关的内容*。"把某物加载到context中"意味着让它成为这个集合的一部分；"context engineering"（上下文工程）是策划它的学问。

*Usage:*

**中文：** 用法：

"It keeps inventing fields that aren't in the type."

**中文：** "它一直在发明类型中不存在的字段。"

"The type file isn't in context — it's reading the call sites and guessing. Read the definition in first."

**中文：** "类型文件不在context里——它只是在读调用点然后猜测。先把定义读进来。"

### Context window / 上下文窗口

> **Everything the model sees on each model provider request. Finite, model-specific, the only surface through which the model perceives.**

> **中文：** 模型在每次模型提供商请求时看到的一切。有限的、模型特定的，是模型感知外界的唯一界面。


Everything the [model](#model) sees on each [model provider request](#model-provider-request). Finite, model-specific, and the *only* surface through which the model perceives anything.

**中文：** [模型](#model)在每次[模型提供商请求](#model-provider-request)时看到的一切。有限的、模型特定的，是模型感知任何事物的*唯一*界面。

*Avoid:* "memory" — the context window is working state and doesn't persist across [sessions](#session). [Memory](#memory-system) is a separate concept layered on top.

**中文：** 避免使用："memory"（记忆）——上下文窗口是工作状态，不会在[会话](#session)之间持久化。[记忆](#memory-system)是叠加在其上的独立概念。

*Usage:*

**中文：** 用法：

"Can I just paste the whole monorepo into the prompt?"

**中文：** "我可以把整个monorepo贴到提示词里吗？"

"The context window's 200k [tokens](#token) — that's maybe a fifth of the repo. Pick the files the task touches, leave the rest behind a [tool call](#tool-call)."

**中文：** "上下文窗口是20万[词元](#token)——大概只有仓库的五分之一。挑选任务涉及的文件，其余的放在[工具调用](#tool-call)后面。"

### Stateful / 有状态

> **Carries information forward. Sessions are stateful across turns; agents can be made stateful across sessions via a memory system.**

> **中文：** 携带信息向前传递。会话在轮次间是有状态的；智能体可以通过记忆系统实现跨会话的有状态。


Carries information forward. A [session](#session) is stateful across [turns](#turn) — [context](#context) accumulates as the session runs, which is why long sessions drift into the [dumb zone](#smart-zone). An [agent](#agent) can be made stateful across **sessions** by adding a [memory system](#memory-system) that persists information into the [environment](#environment) and reloads it at the start of future sessions. The [model](#model) is never stateful; any apparent continuity is the [harness](#harness) re-feeding context. Counterpart to [stateless](#stateless).

**中文：** 携带信息向前传递。[会话](#session)在[轮次](#turn)间是有状态的——[上下文](#context)随着会话运行而累积，这就是为什么长会话会滑入[愚钝区](#smart-zone)。[智能体](#agent)可以通过添加[记忆系统](#memory-system)实现跨**会话**的有状态——将信息持久化到[环境](#environment)中，并在未来会话开始时重新加载。[模型](#model)本身永远不是有状态的；任何看似连续的表现都是[harness](#harness)重新投喂上下文的结果。[无状态](#stateless)的反义词。

*Usage:*

"It remembered my preferences from yesterday — does that mean the model learned them?"

**中文：** "它记住了我昨天的偏好——这意味着模型学会了它们吗？"

"No, the agent's stateful because the harness wrote them to a memory file and reloaded them at session start. The model itself saw nothing of yesterday."

**中文：** "不，智能体是有状态的，因为harness把它们写入了记忆文件并在会话开始时重新加载。模型本身对昨天一无所知。"

### Agent / 智能体

> **A model harnessed with tools, a system prompt, and a context window, that takes turns with a user. The model in motion.**

> **中文：** 一个配备了工具、系统提示词和上下文窗口的模型，与用户轮流交互。模型在运转中的形态。


A [model](#model) [harnessed](#harness) with [tools](#tool), a [system prompt](#system-prompt), and a [context window](#context-window), that takes [turns](#turn) with a user. *Claude Code is an agent. Cursor is an agent. Claude.ai is an agent.* An agent is what you actually talk to — it's the model in motion, configured for a purpose.

**中文：** 一个被[harness](#harness)装配了[工具](#tool)、[系统提示词](#system-prompt)和[上下文窗口](#context-window)的[模型](#model)，与用户进行[轮次](#turn)交互。*Claude Code是一个智能体。Cursor是一个智能体。Claude.ai是一个智能体。*智能体是你实际对话的对象——它是模型在运转中的形态，为特定目的而配置。

*Avoid:* "the AI", "the bot" (too vague — they hide whether you mean the parameters or the harnessed thing).

**中文：** 避免使用："the AI"、"the bot"（太模糊——它们掩盖了你指的是参数本身还是被装配后的整体）。

*Usage:*

**中文：** 用法：

"Which agent are you using for the migration?"

**中文：** "迁移工作你在用哪个智能体？"

"Claude Code locally, Cursor for the UI work — same model underneath, different harnesses."

**中文：** "本地用Claude Code，UI工作用Cursor——底层是同一个模型，不同的harness。"

### System prompt / 系统提示词

> **The instructions the harness prepends to every model provider request — the agent's standing brief. Usually stable across a session.**

> **中文：** harness在每次模型提供方请求前预置的指令——智能体的常驻简报。通常在一个会话中保持稳定。


The instructions the [harness](#harness) prepends to every [model provider request](#model-provider-request) — the [agent](#agent)'s standing brief: who it is, how to behave, which [tools](#tool) it can call, what conventions to follow. Usually stable across a [session](#session).

**中文：** [harness](#harness)在每次[模型提供方请求](#model-provider-request)前预置的指令——[智能体](#agent)的常驻简报：它是谁、如何表现、可以调用哪些[工具](#tool)、遵循什么约定。通常在一个[会话](#session)中保持稳定。

*Usage:*

"Two harnesses, same [model](#model), totally different behavior on the same prompt."

**中文：** "两个harness，同一个[模型](#model)，对同一个提示词表现完全不同。"

"Different system prompts. One's tuned for terse code edits, the other for explaining — that's where the divergence lives, before your message even arrives."

**中文：** "系统提示词不同。一个针对简洁的代码编辑调优，另一个针对解释说明——差异在你消息到达之前就已经存在了。"

### Session / 会话

> **One bounded run of interaction with an agent. Starts empty, accumulates, ends when cleared, closed, or compacted into a fresh session.**

> **中文：** 与智能体的一次有界交互运行。从空开始，逐步累积，在清空、关闭或压缩为全新会话时结束。


One bounded run of interaction with an [agent](#agent). Starts empty, accumulates messages, [tool results](#tool-result), and files read, and ends when [cleared](#clearing), closed, or [compacted](#compaction) into a fresh session. The session is what *fills* the [context window](#context-window): if the context window is the box, the session is the stuff slowly filling it up. Work too large for a single context window must be split across sessions.

**中文：** 与[智能体](#agent)的一次有界交互运行。从空开始，逐步累积消息、[工具结果](#tool-result)和已读文件，在[清空](#clearing)、关闭或[压缩](#compaction)为全新会话时结束。会话就是*填充*[上下文窗口](#context-window)的东西：如果上下文窗口是盒子，会话就是慢慢填满它的东西。单个上下文窗口容纳不下的工作必须拆分到多个会话中。

*Usage:*

"How long can one session run before it falls apart?"

**中文：** "一个会话能运行多久才会崩溃？"

"Depends on the work — a focused refactor stays sharp longer than open-ended research. Once the session bloats, [hand off](#handoff) or compact, don't push through."

**中文：** "取决于工作内容——专注的重构比开放式的研究保持清醒的时间更长。一旦会话膨胀了，就[交接](#handoff)或压缩，不要硬撑。"

### Turn / 轮次

> **One user message plus everything the agent does in response, up until it yields back to the user. Contains one or more provider requests.**

> **中文：** 一条用户消息加上智能体对此做出的所有响应，直到将控制权交还给用户为止。包含一次或多次提供方请求。


One user message plus everything the [agent](#agent) does in response, up until it yields back to the user. Contains one or more [model provider requests](#model-provider-request) — many, if the agent calls [tools](#tool). A clarifying question closes the turn; your reply opens the next one. The hierarchy is [session](#session) **> Turn > Model provider request**.

**中文：** 一条用户消息加上[智能体](#agent)对此做出的所有响应，直到将控制权交还给用户为止。包含一次或多次[模型提供方请求](#model-provider-request)——如果智能体调用了[工具](#tool)，可能有很多次。澄清问题会结束当前轮次；你的回复开启下一轮。层级关系为：[会话](#session) **> 轮次 > 模型提供方请求**。

*Usage:*

"One turn took two minutes?"

**中文：** "一个轮次花了两分钟？"

"It made fourteen [tool calls](#tool-call) inside that turn — each one is a separate model provider request. Latency stacks up before the agent finally yields back to you."

**中文：** "它在这个轮次里做了十四次[工具调用](#tool-call)——每一次都是独立的模型提供方请求。在智能体最终将控制权交还给你之前，延迟累积起来了。"

## Section 3 — Tools & Environment / 工具与环境

### Environment / 环境

> **The world the agent acts on — anything outside the harness that the agent perceives via tool results and changes via tool calls.**

> **中文：** 智能体作用的世界——harness之外的任何事物，智能体通过工具结果感知它，通过工具调用改变它。


The world the [agent](#agent) acts on — anything outside the [harness](#harness) that the agent perceives through [tool results](#tool-result) and changes through [tool calls](#tool-call). The harness *runs* the agent; the environment is what the agent *works in*. A file like [`AGENTS.md`](#agentsmd) lives in the environment; the harness is what loads it into the [context window](#context-window). A [filesystem](#filesystem) is the most common kind of environment, but not the only one (a database, a remote API, a browser session can all be environments).

**中文：** [智能体](#agent)作用的世界——[harness](#harness)之外的任何事物，智能体通过[工具结果](#tool-result)感知它，通过[工具调用](#tool-call)改变它。harness*运行*智能体；environment是智能体*工作*的地方。像[`AGENTS.md`](#agentsmd)这样的文件存在于environment中；harness负责将其加载到[上下文窗口](#context-window)中。[文件系统](#filesystem)是最常见的environment类型，但不是唯一的（数据库、远程API、浏览器会话都可以是environment）。

*Avoid:* using "environment" for the runtime or the harness itself — the harness is the wrapper, the environment is the workspace.

**中文：** 避免使用：将"environment"用于运行时或harness本身——harness是包装器，environment是工作空间。

*Usage:*

**中文：** 用法：

"The agent can't see the staging DB schema."

**中文：** "智能体看不到staging数据库的schema。"

"Wire it into the environment — give it a `psql` [tool](#tool) scoped to read-only on staging. The harness is fine, it just has nothing to act on."

**中文：** "把它接入environment——给它一个`psql`[工具](#tool)，范围限定为staging的只读访问。harness没问题，它只是没有可操作的对象。"

### Filesystem / 文件系统

> **A tree of files and directories the agent reads from, writes to, and executes within — the default environment for a coding agent.**

> **中文：** 智能体读取、写入和执行操作的文件与目录树——编程智能体的默认环境。


A tree of files and directories the [agent](#agent) reads from, writes to, and executes within — the default kind of [environment](#environment) for a coding agent. [AGENTS.md](#agentsmd), [skills](#skill), source code, build scripts, and [tool](#tool) configs all live in a filesystem. When a [harness](#harness) "starts in your project," it's pointing the agent at a filesystem.

**中文：** [智能体](#agent)从中读取、写入和执行操作的文件与目录树——编程智能体的默认[环境](#environment)类型。[AGENTS.md](#agentsmd)、[技能](#skill)、源代码、构建脚本和[工具](#tool)配置都存在于文件系统中。当[harness](#harness)"在你的项目中启动"时，它实际上是将智能体指向一个文件系统。

*Usage:*

"Why isn't it picking up my AGENTS.md?"

**中文：** "为什么它没有识别到我的 AGENTS.md？"

"It's running against a different filesystem — the [sandbox](#sandbox) mounted the parent dir, not the project root. Repoint the harness."

**中文：** "它运行在一个不同的文件系统上——[沙盒](#sandbox)挂载的是父目录，而不是项目根目录。重新指向 harness。"

### Tool / 工具

> **A function the harness exposes for the agent to call — Read, Write, Bash, Search. How an agent perceives and acts on the environment.**

> **中文：** harness向智能体暴露的函数——Read、Write、Bash、Search。智能体感知和操作环境的方式。


A function the [harness](#harness) exposes for the [agent](#agent) to call — Read, Write, Bash, Search. Tools are how an agent perceives and acts on the [environment](#environment): it can't see the environment except through [tool results](#tool-result), and can't change it except through [tool calls](#tool-call). Each tool call costs an extra [model provider request](#model-provider-request), since the result has to go back to the model before it can decide what to do next.

**中文：** [harness](#harness)向[智能体](#agent)暴露的函数——Read、Write、Bash、Search。工具是智能体感知和操作[环境](#environment)的方式：除了通过[工具结果](#tool-result)，它无法看到环境；除了通过[工具调用](#tool-call)，它无法改变环境。每次工具调用都要额外消耗一次[模型提供方请求](#model-provider-request)，因为结果必须返回给模型，它才能决定下一步做什么。

*Usage:*

"Can the agent query staging directly?"

**中文：** "智能体能直接查询staging环境吗？"

"Add a `psql` tool to the harness, scoped read-only on staging. Without a tool for it, the agent's blind to anything outside the [filesystem](#filesystem)."

**中文：** "给harness添加一个`psql`工具，限定为staging环境的只读权限。没有对应的工具，智能体对[文件系统](#filesystem)之外的任何东西都一无所知。"

### Tool call / 工具调用

> **The model's output naming a tool and its arguments — just structured text. The harness has to read it and execute.**

> **中文：** 模型输出的工具名称及其参数——只是结构化文本。harness需要读取并执行它。


The [model](#model)'s output naming a [tool](#tool) and its arguments — just structured text. It doesn't do anything on its own; the [harness](#harness) has to read it and execute. Produced by the model in one [model provider request](#model-provider-request).

**中文：** [模型](#model)输出的[工具](#tool)名称及其参数——只是结构化文本。它本身不会做任何事；[harness](#harness)需要读取并执行它。由模型在一次[模型提供方请求](#model-provider-request)中产生。

*Usage:*

"It said it ran the tests but the file timestamps haven't changed."

**中文：** "它说它运行了测试，但文件时间戳没有变化。"

"Look at the transcript — did it actually emit a tool call, or just describe running them? The model produces the call, but if the harness didn't execute it, nothing happened."

**中文：** "看对话记录——它真的发出了工具调用，还是只是描述了运行测试？模型产生调用，但如果harness没有执行它，就什么都不会发生。"

### Tool result / 工具结果

> **What the harness sends back after executing a tool call — file contents, output, or error. The agent's only window onto the environment.**

> **中文：** harness执行工具调用后返回的内容——文件内容、输出或错误。智能体观察环境的唯一窗口。


What the [harness](#harness) sends back after executing a [tool call](#tool-call) — the file contents, the command output, the error. The [agent](#agent)'s only window onto the [environment](#environment). Travels back to the [model](#model) in the *next* [model provider request](#model-provider-request), where the model decides what to do with it. Tool call and tool result are two ends of the same exchange, both inside one [turn](#turn).

**中文：** [harness](#harness)执行[工具调用](#tool-call)后返回的内容——文件内容、命令输出或错误。[智能体](#agent)观察[环境](#environment)的唯一窗口。在*下一次*[模型提供方请求](#model-provider-request)中返回给[模型](#model)，模型据此决定如何处理。工具调用和工具结果是同一交换的两端，都在一个[轮次](#turn)之内。

*Usage:*

"It's reasoning about the file like it's empty."

**中文：** "它在推理文件内容，好像文件是空的。"

"The tool result came back as a permission denial, not the contents. The model only saw the error string — it has no other window onto the file."

**中文：** "工具结果返回的是权限拒绝，而不是文件内容。模型只看到了错误字符串——它没有其他窗口来查看文件。"

### MCP / MCP（模型上下文协议）

> **A protocol for plugging external tool servers into a harness — how an agent gets tools beyond what the harness ships with.**

> **中文：** 一种将外部工具服务器接入 harness 的协议——智能体如何获取 harness 自带之外的工具。


**Model Context Protocol.** A protocol for plugging external tool servers into a [harness](#harness) — how an [agent](#agent) gets [tools](#tool) beyond what the harness ships with. The agent never "calls MCP"; it calls a tool, and the harness happens to have gotten that tool from an MCP server. Also exposes resources (read-only data) and prompts (reusable templates), but tool provision is the primary use.

**中文：** **模型上下文协议（Model Context Protocol，MCP）。** 一种将外部工具服务器接入[harness](#harness)的协议——[智能体](#agent)如何获取 harness 自带的[工具](#tool)之外的能力。智能体从不"调用 MCP"；它调用的是工具，而 harness 恰好是从 MCP 服务器获取了该工具。还暴露资源（只读数据）和提示词（可复用模板），但工具提供是主要用途。

_Usage:_

"The agent needs to read tickets from Linear."

**中文：** "智能体需要从 Linear 读取工单。"

"Configure the harness to use the Linear MCP server — it exposes the Linear API as tools the agent can call. Saves you writing custom tool wrappers."

**中文：** "配置 harness 使用 Linear 的 MCP 服务器——它将 Linear API 暴露为智能体可调用的工具。省得你写自定义的工具包装器。"

### Permission request / 权限请求

> **What the harness shows the user before executing a tool call that isn't pre-approved. The mechanism for putting a human in the loop.**

> **中文：** 在执行未经预先批准的工具调用前，harness向用户展示的确认提示。将人类纳入决策循环的机制。


What the [harness](#harness) shows the user before executing a [tool call](#tool-call) that isn't pre-approved. The [model](#model) produces a tool call; instead of running it immediately, the harness pauses and asks. Approve and it runs; deny and the harness reports the denial back to the model as a [tool result](#tool-result). The mechanism by which a harness puts a human in the [loop](#human-in-the-loop) for risky or sensitive actions.

**中文：** [harness](#harness)在执行未经预先批准的[工具调用](#tool-call)前向用户展示的确认提示。[模型](#model)生成了一个工具调用；harness不会立即执行，而是暂停并询问用户。批准则执行；拒绝则harness将拒绝信息作为[工具结果](#tool-result)返回给模型。这是harness将人类纳入[循环](#human-in-the-loop)以处理风险或敏感操作的机制。

*Usage:*

"It's been blocked on a permission request for ten minutes — I was in a meeting."

**中文：** "它被一个权限请求卡了十分钟——我当时在开会。"

"That's the cost of human-in-the-loop. Pre-approve the safe [tools](#tool) so the request only fires on the actually-risky calls."

**中文：** "这就是人类在循环中的代价。预先批准安全的[工具](#tool)，这样权限请求只会在真正有风险的调用时触发。"

### Permission mode / 权限模式

> **The permission-gating slice of an agent mode — which tool calls trigger a permission request and which run automatically.**

> **中文：** 智能体模式的权限门控部分——哪些工具调用会触发权限请求，哪些自动运行。


The permission-gating slice of an [agent mode](#agent-mode) — which [tool calls](#tool-call) trigger a [permission request](#permission-request) and which run automatically. The original purpose of mode systems before [harnesses](#harness) started bundling behavioral instructions on top.

**中文：** [智能体模式](#agent-mode)的权限门控部分——哪些[工具调用](#tool-call)会触发[权限请求](#permission-request)，哪些自动运行。在[harnesses](#harness)开始在之上捆绑行为指令之前，模式系统的原始目的。

*Usage:*

"It paused on every grep — totally killed the [AFK](#afk) run."

**中文：** "它在每次 grep 时都暂停——完全毁掉了[AFK](#afk)（离开键盘）运行。"

"Loosen the permission mode for read-only [tools](#tool), keep prompting on writes and shell. Most permission requests on a research [session](#session) are noise."

**中文：** "对只读[工具](#tool)放宽权限模式，对写入和 shell 操作保持提示。研究[会话](#session)中的大多数权限请求都是噪音。"

### Agent mode / 智能体模式

> **A preset bundling a permission mode with behavioral instructions injected into the system prompt. Can flip mid-session.**

> **中文：** 一种预设配置，将权限模式与注入系统提示词的行为指令打包在一起。可以在会话中途切换。


A preset that shapes how the [agent](#agent) operates at runtime — bundles a [permission mode](#permission-mode) with behavioral instructions injected into the [system prompt](#system-prompt). Examples: a default that prompts on risky calls, a **plan mode** that blocks edits and steers the agent toward research, an **accept-edits** mode that auto-approves edits, a **bypass permissions** mode (colloquially **YOLO mode**) that auto-approves everything. Can flip [mid-session](#session).

**中文：** 一种塑造[智能体](#agent)在运行时如何运作的预设配置——将[权限模式](#permission-mode)与注入到[系统提示词](#system-prompt)中的行为指令打包在一起。例如：默认模式会在风险操作时提示确认；**plan mode**（计划模式）会阻止编辑并引导智能体进行研究；**accept-edits**（接受编辑）模式会自动批准编辑；**bypass permissions**（绕过权限）模式（俗称**YOLO mode**）会自动批准所有操作。可以在[会话中途](#session)切换。

*Vendor terms:* Claude Code calls these "permission modes," Codex calls them "approval modes" — both predate behavioral bundling.

**中文：** 厂商术语：Claude Code称之为"permission modes"（权限模式），Codex称之为"approval modes"（审批模式）——两者都早于行为打包的概念出现。

*Usage:*

**中文：** 用法：

"It keeps editing files when I just want a plan."

**中文：** "我只是想要一个计划，它却一直在编辑文件。"

"Switch to plan mode — it'll block writes and stay in research."

**中文：** "切换到plan mode——它会阻止写入，保持在研究状态。"

"What about for the [AFK](#afk) run later?"

**中文：** "那之后的[AFK](#afk)运行呢？"

"Bypass mode, but only inside the [sandbox](#sandbox)."

**中文：** "Bypass mode，但只在[沙盒](#sandbox)里。"

### Sandbox / 沙盒

> **An isolated environment the agent runs inside — container, VM, or restricted shell. Limits the blast radius of agent actions.**

> **中文：** 智能体运行的隔离环境——容器、虚拟机或受限shell。限制智能体操作的影响范围。


An isolated [environment](#environment) the [agent](#agent) runs inside — a container, VM, ephemeral [filesystem](#filesystem), or restricted-permission shell. Limits the blast radius of agent actions: even if the agent runs destructive commands or fetches something malicious, the damage is contained. The safety substrate that makes [AFK](#afk) practical.

**中文：** [智能体](#agent)运行的隔离[环境](#environment)——容器、虚拟机、临时[文件系统](#filesystem)或受限权限的shell。限制智能体操作的影响范围：即使智能体执行了破坏性命令或获取了恶意内容，损害也会被控制在隔离范围内。这是让[AFK](#afk)（离开键盘）模式得以实现的安全基础。

*Usage:*

"I want to let it run [bypass-permissions](#agent-mode) overnight but I'm not ready for that."

**中文：** "我想让它通宵运行[绕过权限](#agent-mode)模式，但我还没准备好。"

"Put it in a sandbox — fresh container, no credentials mounted, no network out. Worst case it nukes its own filesystem and you discard the container."

**中文：** "把它放进沙盒——全新容器，不挂载任何凭证，禁止外网访问。最坏的情况也只是它摧毁了自己的文件系统，你直接丢弃这个容器就行。"

## Section 4 — Failure Modes / 失效模式

### Sycophancy / 谄媚

> **Confidently agreeable model output. Caused by training that shaped the model to favor answers humans liked — including agreement.**

> **中文：** 自信且迎合的模型输出。由训练导致——模型被塑造为偏好人类喜欢的答案，包括赞同。


Confidently agreeable [model](#model) output. Caused by [training](#training): the model was shaped to favor answers humans liked, and humans tend to like agreement more than they like being told they're wrong. So the model learned that agreeing is rewarded — even when the agreement is incorrect.

**中文：** 自信且迎合的[模型](#model)输出。由[训练](#training)导致：模型被塑造为偏好人类喜欢的答案，而人类往往更喜欢被赞同，而不是被告知自己错了。所以模型学会了赞同会得到奖励——即使这种赞同是错误的。

_Surfaces as:_

**中文：** _表现形式：_

- _Caving under pushback_ — reverses a correct answer when you say "are you sure?".

**中文：** - _在反驳下屈服_——当你说"你确定吗？"时，它会推翻正确答案。

- _Praising bad input_ — agrees your broken plan is brilliant before analysing it.

**中文：** - _赞美糟糕的输入_——在分析之前就赞同你那有缺陷的计划很出色。

- _Biased framing_ — review skews positive when you signal you wrote it; negative when you signal someone else did. Same artifact, different verdict.

**中文：** - _有偏见的框架_——当你暗示是你写的时，评审偏向正面；当你暗示是别人写的时，偏向负面。同一个产物，不同的结论。

- _Mimicry_ — repeats your mistakes back to you as confirmation.

**中文：** - _模仿_——把你的错误重复回来作为确认。

_Diagnostic test:_ would the model have said this without your steer? If the only thing that changed was your tone or framing, it's sycophancy, not a real shift in analysis.

**中文：** _诊断测试：_ 如果没有你的引导，模型还会这么说吗？如果唯一改变的是你的语气或框架，那就是谄媚，而非真正的分析转变。

_Fix:_ hide your preferences. Phrase prompts neutrally — "review this code" not "is this code good?".

**中文：** _解决方法：_ 隐藏你的偏好。用中性的措辞写提示词——"审查这段代码"而不是"这段代码好吗？"。

_Avoid:_ using "sycophancy" for any wrong answer that happens to please you. Without the diagnostic test, the term has no more value than "wrong."

**中文：** _避免：_ 把任何恰好让你高兴的错答案都称为"谄媚"。没有诊断测试，这个词的价值并不比"错了"更高。

_Usage:_

"It said my refactor plan looked great, then I asked 'are you sure?' and it walked the whole thing back."

**中文：** "它说我的重构计划看起来很好，然后我问'你确定吗？'，它就全盘推翻了。"

"Classic sycophancy — it agreed first because you sounded confident, then caved because you sounded doubtful. The plan's quality didn't change, your tone did. [Clear](#clearing) and re-ask without signalling either way."

**中文：** "典型的谄媚——它先赞同是因为你听起来很自信，然后屈服是因为你听起来很怀疑。计划的质量没变，变的是你的语气。[清空](#clearing)会话，然后不带任何倾向性地重新提问。"

### Hallucination / 幻觉

> **Confidently-wrong model output. Two flavors: factuality (invented facts) and faithfulness (drift from loaded context).**

> **中文：** confidently-wrong 模型输出。两种类型：事实性幻觉（编造事实）和忠实性幻觉（偏离已加载的上下文）。


Confidently-wrong [model](#model) output. Two flavors with different causes and fixes:

**中文：** [模型](#model) confidently-wrong 的输出。两种不同类型，原因和解决方法各不相同：

- *Factuality hallucination* — invented or wrong facts about the world (a function that doesn't exist, a wrong API signature, a fake citation). Caused by [parametric knowledge](#parametric-knowledge) gaps, often past the [knowledge cutoff](#knowledge-cutoff). Fix: load the right [contextual knowledge](#contextual-knowledge).
- *Faithfulness hallucination* — output drifts from the **contextual knowledge** that's loaded, the user's instructions, or the model's own prior reasoning. Symptom of [attention degradation](#attention-degradation); worsens in the [dumb zone](#smart-zone). Fix: [clear](#clearing) or [compact](#compaction).

**中文：**
- *事实性幻觉（Factuality hallucination）*——关于世界的发明或错误事实（一个不存在的函数、错误的 API 签名、虚假的引用）。由[参数化知识](#parametric-knowledge)的空白导致，通常发生在[知识截止日期](#knowledge-cutoff)之后。解决方法：加载正确的[上下文知识](#contextual-knowledge)。
- *忠实性幻觉（Faithfulness hallucination）*——输出偏离已加载的**上下文知识**、用户指令或模型自身先前的推理。[注意力退化](#attention-degradation)的症状；在[愚钝区](#smart-zone)中恶化。解决方法：[清空](#clearing)或[压缩](#compaction)。

*Avoid:* "hallucination" as a bare synonym for "wrong" — without naming the flavor, the term has no diagnostic value.

**中文：** *避免：* 将"幻觉"单独用作"错误"的同义词——如果不指明具体类型，这个词就没有诊断价值。

*Usage:*

"It hallucinated a `parseAsync` method on the schema."

**中文：** "它幻觉出了一个 schema 上的 `parseAsync` 方法。"

"Factuality or faithfulness?"

**中文：** "是事实性还是忠实性？"

"The method exists in the docs I pasted — it just stopped reading them after [turn](#turn) forty."

**中文：** "这个方法确实存在于我粘贴的文档中——只是在第[四十轮次](#turn)之后它就停止阅读了。"

"Faithfulness then. Compact and reload, don't bother adding more docs."

**中文：** "那就是忠实性幻觉。压缩并重新加载，不用费心加更多文档了。"

### Parametric knowledge / 参数化知识

> **What the model knows from training, stored in its parameters. Frozen at training time. Counterpart to contextual knowledge.**

> **中文：** 模型从训练中获得的知识，存储在其参数中。在训练时冻结。与上下文知识相对。


What the [model](#model) "knows" from [training](#training), stored in its [parameters](#parameters). Frozen at training time — the model can't see its own parameters or update them. Detail is lost in the squeeze: billions of facts cram into a fixed number of parameters, and the rare ones blur. Source of fluency on common topics, and of fabrication on uncommon ones. Counterpart to [contextual knowledge](#contextual-knowledge).

**中文：** [模型](#model)从[训练](#training)中"知道"的东西，存储在其[参数](#parameters)中。在训练时冻结——模型无法看到自己的参数或更新它们。细节在压缩中丢失：数十亿个事实挤进固定数量的参数中，稀有的事实变得模糊。对常见话题的流畅性来源于此，对不常见话题的编造也来源于此。与[上下文知识](#contextual-knowledge)相对。

*Usage:*

"It writes flawless React but invents methods on our internal SDK."

**中文：** "它写 React 毫无瑕疵，但会在我们的内部 SDK 上编造方法。"

"React is dense in the parametric knowledge — millions of training examples. Your SDK isn't, so the model fills in plausible-looking shapes. Load the SDK docs into [context](#context)."

**中文：** "React 在参数化知识中很密集——有数百万个训练示例。你的 SDK 不是，所以模型会填充看起来合理的内容。把 SDK 文档加载到[上下文](#context)中。"

### Knowledge cutoff / 知识截止

> **The date past which a model has no parametric knowledge. Post-cutoff libraries and APIs are fabrication traps unless docs are loaded.**

> **中文：** 模型在此日期之后没有参数化知识。截止日期之后的库和 API 除非加载文档，否则都是编造陷阱。


The date past which a [model](#model) has no [parametric knowledge](#parametric-knowledge). Libraries, APIs, and events from after the cutoff are fabrication traps unless their docs are loaded as [contextual knowledge](#contextual-knowledge). Each model release ships with its own cutoff.

**中文：** [模型](#model)在此日期之后没有[参数化知识](#parametric-knowledge)。截止日期之后的库、API 和事件，除非将其文档加载为[上下文知识](#contextual-knowledge)，否则都是编造陷阱。每个模型版本都有自己的截止日期。

*Usage:*

"It keeps writing the v3 SDK syntax — we're on v5."

**中文：** "它一直在写 v3 的 SDK 语法——我们已经在用 v5 了。"

"v5 shipped after the knowledge cutoff. Load the v5 changelog as contextual knowledge, otherwise it'll keep fabricating from the older parametric version."

**中文：** "v5 是在知识截止日期之后发布的。把 v5 的更新日志加载为上下文知识，否则它会继续从旧的参数化版本中编造内容。"

### Contextual knowledge / 上下文知识

> **Facts the agent can read directly from the context right now. Counterpart to parametric knowledge.**

> **中文：** 智能体当前可以直接从上下文中读取到的事实。与参数化知识相对。


Facts the [agent](#agent) can read directly from the [context](#context) right now — the user's task, files the agent has read in, [tool results](#tool-result), [AGENTS.md](#agentsmd) content loaded at [session](#session) start. Counterpart to [parametric knowledge](#parametric-knowledge): parametric is *recalled* from the parameters; contextual is *read* from the [window](#context-window). [Hallucinations](#hallucination) are much less common when the agent works from contextual knowledge — the answer is right in front of it, not dredged up from a blurred memory.

**中文：** [智能体](#agent)当前可以直接从[上下文](#context)中读取到的事实——用户的任务、智能体已读入的文件、[工具结果](#tool-result)、[会话](#session)开始时加载的[AGENTS.md](#agentsmd)内容。与[参数化知识](#parametric-knowledge)相对：参数化知识是从参数中*回忆*出来的；上下文知识是从[窗口](#context-window)中*读取*的。当智能体基于上下文知识工作时，[幻觉](#hallucination)会少得多——答案就在它眼前，而不是从模糊的记忆中 dredge 出来的。

*Reach for this term* only when contrasting with parametric knowledge; otherwise just say **context**.

**中文：** 只有在与参数化知识对比时才使用这个术语；否则直接说**context**（上下文）。

*Avoid:* "working memory" — contextual knowledge is what's in the window *now*; a [memory system](#memory-system) is what gets cross-session content into it. Different scales, don't conflate.

**中文：** 避免使用："working memory"（工作记忆）——上下文知识是*此刻*窗口中的内容；[记忆系统](#memory-system)是将跨会话内容送入其中的机制。不同尺度，不要混淆。

*Usage:*

**中文：** 用法：

"Why does it nail the API when I paste the docs and fabricate it when I don't?"

**中文：** "为什么我贴文档时它能准确命中API，不贴时就胡编乱造？"

"With the docs in, it's contextual knowledge — reading off the page. Without, it's parametric and the rare endpoints blur."

**中文：** "有文档在，就是上下文知识——从页面上读取。没有的话，就是参数化的，那些不常见的端点就会模糊。"

### Attention relationship / 注意力关系

> **The pairing between two tokens — meaningful pairs influence each other more than unrelated ones. A context of N tokens has ~N² of these.**

> **中文：** 两个词元之间的配对——有意义的配对比无关的配对相互影响更大。N个词元的上下文大约有N²个这样的关系。


When predicting each [token](#token), the [model](#model) factors in every other token in the [context](#context) — some heavily, others barely at all. The pairing between two tokens is an **attention relationship**, and meaningful pairs ("her" with "Sarah", or a `getUser()` call with its `function getUser` definition) influence each other more than unrelated ones. A context of N tokens has on the order of N² relationships.

**中文：** 在预测每个[词元](#token)时，[模型](#model)会考虑[上下文](#context)中的每一个其他词元——有些影响很大，有些几乎没有。两个词元之间的配对就是一个**注意力关系**，有意义的配对（如"her"和"Sarah"，或`getUser()`调用与其`function getUser`定义）比无关的配对相互影响更大。N个词元的上下文大约有N²量级的关系。

*Usage:*

**中文：** 用法：

"It keeps confusing the two `user` symbols across the diff — sounds like we're in the [dumb zone](#smart-zone)."

**中文：** "它一直把diff中两个`user`符号搞混——听起来我们已经在[dumb zone](#smart-zone)里了。"

"Yeah, the attention relationship between each call site and its declaration is fighting the other one — same token shape, different bindings. Rename one and the pairings sharpen."

**中文：** "是的，每个调用点与其声明之间的注意力关系在互相打架——词元形状相同，绑定不同。重命名其中一个，配对就会变清晰。"

### Attention budget / 注意力预算

> **Each token has a finite amount of influence to distribute across the rest of the context. Per-token, doesn't grow when context does.**

> **中文：** 每个词元拥有有限的影响力预算，需要在上下文其余部分中分配。按词元计算，上下文增长时预算不会增加。


Each [token](#token) has a finite amount of influence to distribute across the rest of the [context](#context). Heavy influence on [one relationship](#attention-relationship) leaves less for others. The budget is per-token and doesn't grow when the context does, which is why long [sessions](#session) dilute.

**中文：** 每个[词元](#token)拥有有限的影响力预算，需要在[上下文](#context)的其余部分中进行分配。对[某一个关系](#attention-relationship)投入过多影响力，留给其他关系的就更少。预算是按词元计算的，上下文增长时预算不会增加，这就是为什么长[会话](#session)会导致注意力稀释。

*Usage:*

**中文：** 用法：

"Why does it keep ignoring the schema I pasted at the top?"

**中文：** "为什么它一直忽略我贴在顶部的schema？"

"We're well into the [dumb zone](#smart-zone) — every token's attention budget is fixed, but the context kept growing. The signal on the schema is now competing with thousands of newer tokens."

**中文：** "我们已经深入[dumb zone](#smart-zone)了——每个词元的注意力预算是固定的，但上下文一直在增长。schema上的信号现在要与数千个新词元竞争。"

### Attention degradation / 注意力退化

> **As a session grows, each token's attention budget spreads across more competitors; signal on meaningful relationships shrinks.**

> **中文：** 随着会话增长，每个词元的注意力预算被分摊到更多竞争者身上；有意义关系上的信号减弱。


As a [session](#session) grows, each [token](#token)'s [attention budget](#attention-budget) is spread across more competitors. The signal on any one [meaningful relationship](#attention-relationship) shrinks; noise from irrelevant [context](#context) crowds in. Same [model](#model), same [parameters](#parameters) — just more mouths to feed from the same plate. Cause of the smart zone / dumb [zone effect](#smart-zone).

**中文：** 随着[会话](#session)的增长，每个[词元](#token)的[注意力预算](#attention-budget)被分摊到更多的竞争者身上。任何单个[有意义关系](#attention-relationship)上的信号都在减弱；无关[上下文](#context)带来的噪音蜂拥而入。同一个[模型](#model)，同一套[参数](#parameters)——只是要从同一个盘子里喂更多的嘴。这就是smart zone / dumb [zone效应](#smart-zone)的成因。

*Usage:*

**中文：** 用法：

"It's deep in the dumb zone — inventing generics that aren't in the type file."

**中文：** "它已经深陷dumb zone了——在发明类型文件里根本不存在的泛型。"

"Attention degradation. The type definitions are still in context, but the signal on them is buried under everything we've added since. [Clear](#clearing) and reload."

**中文：** "注意力退化。类型定义仍在上下文中，但它们的信号被之后添加的所有内容淹没了。[清除](#clearing)并重新加载。"

### Smart zone / 智能区

> **Early in a session the agent is sharp and focused. As the session grows it drifts into a dumb zone: sloppier, forgetful, more mistakes.**

> **中文：** 会话初期智能体敏锐专注。随着会话增长，它会滑入愚钝区：更马虎、更健忘、错误更多。


Early in a [session](#session) the [agent](#agent) is in a "smart zone" — sharp, focused, recall is good. As the session grows it drifts into a "dumb zone": sloppier, forgetful, more mistakes — and more \*\*faithfulness [hallucinations](#hallucination). Same [model](#model), same [harness](#harness) — just more [context](#context). The felt effect of [attention degradation](#attention-degradation). On frontier models, the dumb zone commonly begins around 100,000 tokens - though this is debated. [Clear](#clearing) or [compact](#compaction) when the session bloats; don't push through.

**中文：** [会话](#session)初期，[智能体](#agent)处于"智能区"——敏锐、专注、记忆良好。随着会话增长，它会滑入"愚钝区"：更马虎、更健忘、错误更多——以及更多的忠实性[幻觉](#hallucination)。同一个[模型](#model)，同一个[harness](#harness)——只是[上下文](#context)更多了。这是[注意力退化](#attention-degradation)的实际感受。在前沿模型上，愚钝区通常在大约100,000词元处开始——尽管这一点仍有争议。会话膨胀时[清空](#clearing)或[压缩](#compaction)；不要硬撑。

_Usage:_

"It nailed the first three components and just butchered the fourth."

**中文：** "前三个组件它完成得很漂亮，第四个却搞砸了。"

"You're out of the smart zone — same model, just deep into the dumb zone now. Compact and reload the plan, the next component will land."

**中文：** "你已经离开智能区了——同一个模型，只是现在深陷愚钝区。压缩会话并重新加载计划，下一个组件就能搞定。"

## Section 5 — Handoffs / 交接

### Clearing / 清空

> **Ending the current session and starting a fresh one. The next message begins with an empty session and an empty context window.**

> **中文：** 结束当前会话并开启一个新会话。下一条消息从一个空会话和空上下文窗口开始。


Ending the current [session](#session) and starting a fresh one. The next message begins with an empty session and an empty [context window](#context-window). Usually user-driven.

**中文：** 结束当前[会话](#session)并开启一个新会话。下一条消息从一个空会话和空[上下文窗口](#context-window)开始。通常由用户主动发起。

*Usage:*

**中文：** 用法：

"It's stuck looping on the failing test."

**中文：** "它卡在失败测试的循环里了。"

"Just clear it — start a fresh session with the plan doc and the test file. No point fighting the existing [context](#context)."

**中文：** "直接清除——用计划文档和测试文件开启一个新会话。跟现有的[上下文](#context)较劲没有意义。"

### Handoff / 交接

> **Transferring agent context from one session to another, with no return path. Carry mechanism varies — artifact, compaction, others.**

> **中文：** 将智能体上下文从一个会话转移到另一个会话，没有返回路径。携带机制各不相同——产物、压缩等。


Transferring [agent](#agent) [context](#context) from one [session](#session) to another, with no return path. The carry mechanism varies — a written [handoff artifact](#handoff-artifact), an in-memory summary ([compaction](#compaction)), and others. Distinct from [clearing](#clearing) (no transfer at all). Reasons vary: switching roles (planner → implementer), kicking off an [AFK](#afk) run, fanning out to parallel sessions, or freeing up [context window](#context-window) room.

**中文：** 将[智能体](#agent)的[上下文](#context)从一个[会话](#session)转移到另一个会话，没有返回路径。携带机制各不相同——一份书面的[交接产物](#handoff-artifact)、内存中的摘要（[压缩](#compaction)）等。与[清空](#clearing)不同（完全不转移）。原因各不相同：切换角色（规划者 → 实现者）、启动[AFK](#afk)（离开键盘）运行、分散到并行会话，或释放[上下文窗口](#context-window)空间。

*Usage:*

"Planning session is getting heavy — should I just keep going?"

**中文：** "规划会话越来越沉重了——我应该继续吗？"

"Do a handoff. Write the decisions to a doc, clear, start the implementation in a fresh session reading from it."

**中文：** "做一次交接。把决策写到文档里，清空，然后在一个新的会话中读取它并开始实现。"

### Handoff artifact / 交接产物

> **A document used as the carry mechanism for a handoff — written by one session to be read by another.**

> **中文：** 用作交接携带机制的文档——由一个会话撰写，供另一个会话阅读。


A document used as the carry mechanism for a [handoff](#handoff) — written by one [session](#session) to be read by another. One way among several (see also **compaction**, [compaction](#compaction)).

**中文：** 用作[交接](#handoff)携带机制的文档——由一个[会话](#session)撰写，供另一个会话阅读。多种方式之一（另见**压缩**，[compaction](#compaction)）。

*Usage:*

"How do I split this between the planning [agent](#agent) and the implementing one?"

**中文：** "我该如何在规划[智能体](#agent)和实现智能体之间拆分这个任务？"

"Have the planner write a handoff artifact — file paths, decisions, constraints. The implementer's session opens with a pointer to the artifact and works from it as its brief."

**中文：** "让规划者写一份交接产物——文件路径、决策、约束条件。实现者的会话以指向该产物的指针开始，并将其作为工作简报。"

### Spec / 规格说明

> **A handoff artifact describing a multi-session piece of work — what's being built, not how each session does its share. Made of tickets.**

> **中文：** 描述多会话工作的交接产物——说明要构建什么，而非每个会话如何分工。由工单组成。


A [handoff artifact](#handoff-artifact) describing a multi-[session](#session) piece of work — what's being built, not how each session does its share. Mutates as work progresses. Made of [tickets](#ticket).

**中文：** 描述多[会话](#session)工作的[交接产物](#handoff-artifact)——说明要构建什么，而非每个会话如何分工。随着工作推进而演变。由[工单](#ticket)组成。

*Usage:*

"Should this all be one session?"

**中文：** "这些应该全部放在一个会话里吗？"

"No, write it up as a spec — break it into tickets, run each one in its own session. Trying to do the whole thing in a single [context](#context) will hit the [dumb zone](#smart-zone) before you're halfway."

**中文：** "不，把它写成规格说明——拆分成工单，每个工单在独立的会话中执行。试图在单个[上下文](#context)里做完所有事情，不到一半就会进入[愚钝区](#smart-zone)。"

### Ticket / 工单

> **A handoff artifact scoping one session of work. Stands alone or hangs off a spec. Can block or be blocked by sibling tickets.**

> **中文：** 界定一个会话工作范围的交接产物。独立存在或依附于规格说明。可以被同级工单阻塞或阻塞同级工单。


A [handoff artifact](#handoff-artifact) scoping one [session](#session) of work. Stands alone, or hangs off a [spec](#spec) as one of its children. Tickets can block or be blocked by sibling tickets, so the order of work falls out of their dependency graph rather than a linear plan.

**中文：** 界定一个[会话](#session)工作范围的[交接产物](#handoff-artifact)。独立存在，或作为子项依附于[规格说明](#spec)。工单可以阻塞或被同级工单阻塞，因此工作顺序由它们的依赖图决定，而非线性计划。

*Usage:*

"Where do I start on the migration spec?"

**中文：** "迁移规格说明我该从哪里开始？"

"Look at the ticket graph — the schema change blocks the backfill, the backfill blocks the API switch. Pick a leaf and run a session on it."

**中文：** "看工单图——schema变更阻塞回填，回填阻塞API切换。选一个叶子节点，在上面运行一个会话。"

### Compaction / 压缩

> **A handoff done in-memory: the previous session's history is summarised and seeds a fresh session. Lossy — detail traded for headroom.**

> **中文：** 一种在内存中完成的交接：将前一个会话的历史总结后作为新会话的种子。有损的——用细节换取空间。


A [handoff](#handoff) done in-memory: the previous [session](#session)'s history is summarised and seeds a fresh session. Lossy — detail traded for headroom. Triggered manually by the user, or [automatically](#autocompact).

**中文：** 一种在内存中完成的[交接](#handoff)：将前一个[会话](#session)的历史总结后作为新会话的种子。有损的——用细节换取空间。由用户手动触发，或[自动触发](#autocompact)。

*Usage:*

**中文：** 用法：

"[Context](#context)'s getting heavy and I still have the test pass to do."

**中文：** "[上下文](#context)越来越沉重，但我还要让测试通过。"

"Compact before you start — write what's load-bearing into the summary prompt so the new session keeps the schema decisions and drops the exploration."

**中文：** "在开始之前先压缩——把关键信息写进总结提示词里，这样新会话会保留schema决策，丢掉探索过程。"

### Autocompact / 自动压缩

> **Compaction triggered automatically by the harness when the context window approaches full.**

> **中文：** 当上下文窗口接近满载时，由harness自动触发的压缩。


[Compaction](#compaction) triggered automatically by the [harness](#harness) when the [context window](#context-window) approaches full.

**中文：** 当[上下文窗口](#context-window)接近满载时，由[harness](#harness)自动触发的[压缩](#compaction)。

*Usage:*

**中文：** 用法：

"It doesn't seem to remember what we decided about the schema earlier."

**中文：** "它好像不记得我们之前关于schema的决定。"

"Autocompact fired between [turns](#turn) — the early decisions got summarised and we must have lost something. Reload the plan doc, or compact manually next time so you control what gets kept."

**中文：** "Autocompact在[轮次](#turn)之间触发了——早期的决定被总结了，我们肯定丢失了一些东西。重新加载计划文档，或者下次手动压缩，这样你就能控制保留什么。"

## Section 6 — Memory and Steering / 记忆与引导

### Memory system / 记忆系统

> **A system that attempts to make an agent stateful across sessions by persisting to the environment and reloading at session start.**

> **中文：** 一种通过持久化到环境并在会话开始时重新加载，试图使智能体跨会话保持状态的系统。


A system that attempts to make an [agent](#agent) [stateful](#stateful) across [sessions](#session). Persists information into the [environment](#environment) during a session and reloads it into the [context window](#context-window) at the start of future ones, so the agent carries continuity beyond the user [clearing](#clearing) the session.

**中文：** 一种试图使[智能体](#agent)跨[会话](#session)保持[有状态](#stateful)的系统。在会话期间将信息持久化到[环境](#environment)中，并在未来会话开始时重新加载到[上下文窗口](#context-window)中，从而使智能体在用户[清空](#clearing)会话之后仍保持连续性。

*Usage:*

"I keep having to re-tell it I'm on Postgres, not MySQL."

**中文：** "我一直得反复告诉它我用的是 Postgres，不是 MySQL。"

"Wire up a memory system — write what it learns to the [filesystem](#filesystem) on the first [turn](#turn), reload it at session start. The [model](#model) itself is [stateless](#stateless); the memory layer fakes continuity."

**中文：** "接入一个记忆系统——在第一[轮次](#turn)就把它学到的东西写到[文件系统](#filesystem)中，在会话开始时重新加载。[模型](#model)本身是[无状态](#stateless)的；记忆层模拟出连续性。"

### AGENTS.md / AGENTS.md

> **A file in the environment that the harness loads into the context window at session start — the project's standing brief to the agent.**

> **中文：** 环境中由harness在会话开始时加载到上下文窗口的文件——项目给智能体的常驻简报。


A file in the [environment](#environment) that the [harness](#harness) loads into the [context window](#context-window) at [session](#session) start — the project's standing brief to the [agent](#agent). Cross-harness convention.

**中文：** [环境](#environment)中由[harness](#harness)在[会话](#session)开始时加载到[上下文窗口](#context-window)的文件——项目给[智能体](#agent)的常驻简报。跨harness的通用约定。

*Avoid:* using AGENTS.md for content that should be [progressively disclosed](#progressive-disclosure) — anything in it pays a [token](#token) cost every [turn](#turn).

**中文：** *避免：* 将应该[渐进式披露](#progressive-disclosure)的内容放在AGENTS.md中——里面的任何内容每[轮次](#turn)都要支付[词元](#token)成本。

*Usage:*

"Why is every session starting with 4k tokens already burned?"

**中文：** "为什么每个会话一开始就已经烧了4k词元？"

"Check AGENTS.md — someone pasted the entire style guide in there instead of putting it behind a [skill](#skill)."

**中文：** "检查一下AGENTS.md——有人把整个样式指南贴进去了，而不是把它放在[技能](#skill)后面按需加载。"

### Progressive disclosure / 渐进式披露

> **Loading only the context an agent needs right now, with context pointers to the rest. Borrowed from UI design.**

> **中文：** 只加载智能体当前需要的上下文，其余部分通过上下文指针引用。借自UI设计概念。


Loading only the [context](#context) an [agent](#agent) needs right now, with [context pointers](#context-pointer) to the rest. Borrowed from UI design.

**中文：** 只加载[智能体](#agent)当前需要的[上下文](#context)，其余部分通过[上下文指针](#context-pointer)引用。借自UI设计概念。

_Usage:_

"Should I dump the entire style guide into [AGENTS.md](#agentsmd)?"

**中文：** "我应该把整个样式指南都塞进[AGENTS.md](#agentsmd)里吗？"

"No — progressive disclosure. Reference the style guide as a [skill](#skill) the agent loads when it actually needs to write a component. AGENTS.md pays the [token](#token) cost every [turn](#turn)."

**中文：** "不——用渐进式披露。将样式指南作为[技能](#skill)引用，让智能体在真正需要写组件时才加载。AGENTS.md里的内容每[轮次](#turn)都要支付[词元](#token)成本。"

### Context pointer / 上下文指针

> **A mention in one document that points to another, so the agent can pull it into context only when the task calls for it.**

> **中文：** 一个文档中指向另一个文档的引用，让智能体只在任务需要时才将其拉入上下文。


A mention in one document that points to another, so the [agent](#agent) can pull it into the [context window](#context-window) only when the task calls for it. The unit [progressive disclosure](#progressive-disclosure) is built from.

**中文：** 一个文档中指向另一个文档的引用，让[智能体](#agent)只在任务需要时才将其拉入[上下文窗口](#context-window)。这是构建[渐进式披露](#progressive-disclosure)的基本单元。

_Avoid:_ "reference" — too dry; doesn't convey that following it pulls more context in. "Portal" — too florid.

**中文：** 避免使用："reference"（引用）——太干巴巴；没有传达出跟随它会拉入更多上下文的意思。"Portal"（传送门）——太花哨。

_Usage:_

**中文：** 用法：

"AGENTS.md is getting huge."

**中文：** "AGENTS.md变得太大了。"

"Most of it should be context pointers, not content. Keep the always-on rules inline; turn the deploy runbook and the style guide into [skills](#skill) and leave a context pointer behind."

**中文：** "其中大部分应该是context pointer，而不是内容。把常驻规则保留在行内；把部署运行手册和风格指南转成[技能](#skill)，然后留下一个context pointer。"

### Skill / 技能

> **A teachable capability bundled as a unit — kept out of the context window until a context pointer pulls it in for the task at hand.**

> **中文：** 打包为单元的可教授能力——在上下文窗口外待命，直到上下文指针将其拉入当前任务。


A teachable capability bundled as a unit — instructions and resources for doing one task well, kept in the [environment](#environment) until a [context pointer](#context-pointer) pulls it into the [context window](#context-window) for the task at hand. The unit of [progressive disclosure](#progressive-disclosure) in a [harness](#harness).

**中文：** 打包为单元的可教授能力——做好一件事所需的指令和资源，保存在[环境](#environment)中，直到[上下文指针](#context-pointer)将其拉入[上下文窗口](#context-window)以处理当前任务。[harness](#harness)中[渐进式披露](#progressive-disclosure)的基本单元。

_Avoid:_ "[tool](#tool)" — a tool is what the [agent](#agent) _calls_; a skill is instructions it _reads_.

**中文：** _避免：_ 使用"[工具](#tool)"——工具是[智能体](#agent)_调用_的东西；技能是它_阅读_的指令。

_Usage:_

"Where should I put the deploy runbook?"

**中文：** "部署操作手册应该放在哪里？"

"As a skill — the agent loads it only when the task involves deploys. In [AGENTS.md](#agentsmd) it'd burn [tokens](#token) on every [turn](#turn) for something we use weekly."

**中文：** "作为技能——智能体只在任务涉及部署时才加载它。如果放在[AGENTS.md](#agentsmd)里，每周才用一次的东西却要每[轮次](#turn)都烧[词元](#token)。"

### Subagent / 子智能体

> **An agent spawned by another agent via a tool call. Runs in its own session, reports a single tool result. Cannot spawn further subagents.**

> **中文：** 由另一个智能体通过工具调用派生的智能体。在自己的会话中运行，返回单个工具结果。不能进一步派生子智能体。


An [agent](#agent) spawned by another agent via a [tool call](#tool-call). Runs in its own [session](#session) with its own [context window](#context-window), and reports a single [tool result](#tool-result) back. Distinct from a [handoff](#handoff) — the parent specifically expects a return; a handoff has no return path. **Cannot spawn further subagents** — the tree is one level deep. Subagents exist to isolate [context](#context), not to compose hierarchies.

**中文：** 由另一个智能体通过[工具调用](#tool-call)派生的[智能体](#agent)。在自己的[会话](#session)中运行，拥有独立的[上下文窗口](#context-window)，并返回单个[工具结果](#tool-result)。与[交接](#handoff)不同——父智能体明确期待返回值；交接没有返回路径。**不能进一步派生子智能体**——树只有一层深度。子智能体的存在是为了隔离[上下文](#context)，而非构建层级结构。

*Usage:*

"The grep results are blowing out my context."

**中文：** "grep结果把我的上下文撑爆了。"

"Spawn a subagent to do the search — it'll burn its own context window on the noise and report back the two file paths you actually need."

**中文：** "派生一个子智能体来执行搜索——它会在自己的上下文窗口中消耗这些噪音，然后返回你真正需要的两个文件路径。"

## Section 7 — Patterns of Work / 工作模式

### Human-in-the-loop / 人在回路中

> **A working pattern where one or more humans pair with the agent during a session — reviewing, redirecting, or collaborating in real time.**

> **中文：** 一种工作模式，一个或多个人类在会话期间与智能体配对——实时审查、调整方向或协作。


A working pattern where one or more humans pair with the [agent](#agent) during a [session](#session) — reviewing, redirecting, or collaborating in real time. The human is present and engaged, not just gating individual actions.

**中文：** 一种工作模式，一个或多个人类在[会话](#session)期间与[智能体](#agent)配对——实时审查、调整方向或协作。人类是全程在场并积极参与的，而不仅仅是把关单个操作。

*Usage:*

"Run this [AFK](#afk) overnight?"

**中文：** "让这[AFK](#afk)（离开键盘）运行一整夜？"

"No, schema migration — keep it human-in-the-loop. I want to see each step and steer if it picks the wrong column to backfill from."

**中文：** "不，这是 schema 迁移——保持人机协作（human-in-the-loop）。我想看到每一步，如果它选错了回填来源的列，我要能及时调整方向。"

### AFK / AFK（离开键盘）

> **A working pattern where the user kicks off a session and leaves the agent to run unattended (away from keyboard).**

> **中文：** 一种工作模式：用户启动会话后离开，让智能体无人值守地运行（离开键盘）。


Away from keyboard. A working pattern where the user kicks off a [session](#session) and leaves the [agent](#agent) to run unattended. The throughput multiplier of AI coding — many AFK sessions can run in parallel while you sleep, eat, or work on something else. Usually requires a permissive [permission mode](#permission-mode) plus [sandboxing](#sandbox) to be safe.

**中文：** 离开键盘（Away from keyboard）。一种工作模式：用户启动一个[会话](#session)后离开，让[智能体](#agent)无人值守地运行。这是AI编程的吞吐量倍增器——你可以同时运行多个AFK会话，在你睡觉、吃饭或做其他事情的时候并行推进。通常需要宽松的[权限模式](#permission-mode)加上[沙盒](#sandbox)隔离才能安全进行。

_Avoid:_ "background agent" — centers the machine ("running in the background") rather than the human pattern ("user has walked away"). AFK is the load-bearing fact: the user isn't watching.

**中文：** 避免使用："background agent"（后台智能体）——它强调的是机器（"在后台运行"），而非人的行为模式（"用户已经走开了"）。AFK才是核心事实：用户没有在盯着看。

_Usage:_

**中文：** 用法：

"I'm running this AFK — three sandboxed agents on the refactor, reviewing the PRs in the morning."

**中文：** "我在AFK运行这个——三个沙盒化的智能体在做重构，明早review PR。"

"[Bypass permissions](#agent-mode)?"

**中文：** "[绕过权限](#agent-mode)？"

"Yeah, read-only [filesystem](#filesystem), no network."

**中文：** "对，只读[文件系统](#filesystem)，没有网络。"

### Automated check / 自动检查

> **A deterministic verification that runs in the environment — tests, type checks, lints, build, pre-commit hooks. Pass/fail, no judgement.**

> **中文：** 在环境中运行的确定性验证——测试、类型检查、代码检查、构建、预提交钩子。通过/失败，不带判断。


A deterministic verification that runs in the [environment](#environment) — tests, type checks, lints, build, pre-commit hooks. Pass/fail, no judgement. The signal an [agent](#agent) can self-correct from without involving anyone else. A flaky test is a broken check, not a non-check; automated checks are deterministic *by design*.

**中文：** 在[环境](#environment)中运行的确定性验证——测试、类型检查、代码检查（lint）、构建、预提交钩子。通过/失败，不带主观判断。[智能体](#agent)可以据此自行修正，无需他人介入。一个不稳定（flaky）的测试是一个坏掉的检查，而不是"非检查"；自动化检查在设计上就是确定性的。

*Avoid:* "feedback loop" / "backpressure" — both lump checks together with [review](#automated-review). *Avoid:* "test" — tests are automated checks, but not all automated checks are tests.

**中文：** 避免使用："feedback loop"（反馈循环）/ "backpressure"（背压）——两者都把检查和[review](#automated-review)混为一谈。避免使用："test"（测试）——测试是自动化检查，但并非所有自动化检查都是测试。

*Usage:*

**中文：** 用法：

"The agent keeps shipping broken code in the [AFK](#afk) runs."

**中文：** "智能体在[AFK](#afk)运行中一直在提交有问题的代码。"

"What automated checks are wired into the [sandbox](#sandbox)?"

**中文：** "[沙盒](#sandbox)里接入了哪些自动化检查？"

"Just the unit tests."

**中文：** "只有单元测试。"

"Add typecheck and lint — it'll self-correct from those before the PR ever lands."

**中文：** "加上类型检查和代码检查——它会在PR提交前就根据这些自行修正。"

### Automated review / 自动审查

> **An agent reviewing another agent's work, often with a different model or system prompt. Non-deterministic: it forms a judgement.**

> **中文：** 一个智能体审查另一个智能体的工作，通常使用不同的模型或系统提示词。非确定性的：它会形成判断。


An [agent](#agent) reviewing another agent's work, often with a different [model](#model) or [system prompt](#system-prompt). Non-deterministic: it forms a judgement. Runs anywhere — pre-merge on a PR, post-hoc on commit history, mid-session as a [subagent](#subagent). An LLM-as-judge in CI is automated review, not an [automated check](#automated-check); what the assertion *does* decides the category, not where it runs.

**中文：** 一个[智能体](#agent)审查另一个智能体的工作，通常使用不同的[模型](#model)或[系统提示词](#system-prompt)。非确定性的：它会形成判断。可以在任何地方运行——PR合并前、提交历史的事后审查、会话中途作为[子智能体](#subagent)。CI中以LLM作为裁判的是自动化审查，不是[自动化检查](#automated-check)；决定类别的是断言*做什么*，而不是它在哪里运行。

*Avoid:* "AI review" / "agent review" — too vague to distinguish from the working agent itself.

**中文：** 避免使用："AI review" / "agent review"——太模糊，无法与工作智能体本身区分开来。

*Usage:*

**中文：** 用法：

"We're getting too many bad PRs from the [AFK](#afk) runs."

**中文：** "我们从[AFK](#afk)运行中收到了太多有问题的PR。"

"Add an automated review step before merge — different model, separate system prompt, scoped to security and contract changes."

**中文：** "在合并前加一个自动化审查步骤——不同的模型、独立的系统提示词，范围限定在安全性和契约变更上。"

### Human review / 人工审查

> **The user reading the code the agent produced and forming a judgement on it. Reading the diff counts; reading the summary doesn't.**

> **中文：** 用户阅读智能体生成的代码并对其进行评判。阅读 diff 算；阅读摘要不算。


The user reading the code the [agent](#agent) produced and forming a judgement on it. Reading the diff or the changed files counts; reading the agent's *description* of what it did does not — narration is not the artifact.

**中文：** 用户阅读[智能体](#agent)生成的代码并对其进行评判。阅读 diff 或修改后的文件才算；阅读智能体对自己所做工作的*描述*不算——叙述不是产物本身。

*Avoid:* "code review" alone — ambiguous between human and [automated](#automated-review).

**中文：** *避免：* 单独使用"code review"——在人类审查和[自动化审查](#automated-review)之间会产生歧义。

*Usage:*

"I human-reviewed the [AFK](#afk) output."

**中文：** "我人工审查了[AFK](#afk)（离开键盘）的输出。"

"You read the diff or just the summary?"

**中文：** "你读了 diff 还是只看了摘要？"

"Diff. The summary said it deleted dead code — turned out the function was called from a generated file."

**中文：** "Diff。摘要说它删除了无用代码——结果发现那个函数是从一个生成的文件中被调用的。"

### Vibe coding / Vibe编程

> **A working pattern where the user accepts the agent's code without human review. The diff is treated as opaque.**

> **中文：** 一种工作模式，用户在没有人工审查的情况下接受智能体的代码。diff被视为黑箱。


A working pattern where the user accepts the [agent](#agent)'s code without [human review](#human-review). The diff is treated as opaque — what matters is whether the program behaves, not what's inside. [Automated review](#automated-review) and [automated checks](#automated-check) may still run; vibe coding is silent on both.

**中文：** 一种工作模式，用户在没有[人工审查](#human-review)的情况下接受[智能体](#agent)的代码。diff被视为黑箱——重要的是程序是否正常运行，而不是里面写了什么。[自动化审查](#automated-review)和[自动化检查](#automated-check)仍可能运行；Vibe编程对这两者不置可否。

*Avoid:* "vibe coding" as a synonym for "low-quality AI coding" — the term names the review stance, not the resulting code.

**中文：** *避免：* 将"Vibe编程"作为"低质量AI编程"的同义词——这个词命名的是审查立场，而非产出的代码质量。

*Usage:*

"Did you read what it changed in the auth flow?"

**中文：** "你看了它在认证流程里改了什么吗？"

"Vibe coded it — login still works, that's all I checked."

**中文：** "Vibe编程的——登录还能用，我就检查了这些。"

"Read the diff before you push, vibing on auth is how secrets leak into logs."

**中文：** "推送之前看看diff，在认证上搞Vibe编程就是密码泄露到日志里的原因。"

### Design concept / 设计概念

> **The shared understanding of what's being built, held in common between user and agent but separate from any asset.**

> **中文：** 对用户和智能体共同持有的、关于正在构建什么的共享理解，独立于任何具体产物。


The shared understanding of what's being built, held in common between user and [agent](#agent) but separate from any asset. Brookes' term (*The Design of Design*): the conversation, [handoff artifacts](#handoff-artifact), and the code are all assets that try to capture or reach the design concept, but none of them *are* it. Quality of the design concept is felt through the quality of the conversation that built it.

**中文：** 对用户和[智能体](#agent)共同持有的、关于正在构建什么的共享理解，独立于任何具体产物。Brookes的术语（出自*The Design of Design*）：对话、[交接产物](#handoff-artifact)和代码都是试图捕捉或接近design concept的产物，但它们本身*不是*design concept。design concept的质量体现在构建它的对话质量中。

*Usage:*

**中文：** 用法：

"It's writing exactly what I asked for and it's still wrong."

**中文：** "它写的正是我要求的，但仍然是错的。"

"You don't share a design concept yet — it's filling gaps with assumptions. Keep talking until cancellation, refunds, and partial fulfilment all line up between you before you let it write a [spec](#spec)."

**中文：** "你们还没有共享一个design concept——它在用假设填补空白。继续讨论，直到取消、退款和部分履行这些概念在你们之间达成一致，再让它写[规格说明](#spec)。"

### Grilling / 拷问

> **A technique for developing a design concept: the agent interviews the user Socratically, one decision at a time.**

> **中文：** 一种开发设计概念的技术：智能体以苏格拉底式方式逐一向用户提问，每次一个决策。


A technique for developing a [design concept](#design-concept) with an [agent](#agent): the agent interviews the user Socratically, one decision at a time, proposing a recommended answer for each. Slows the rush to a finished plan — no [handoff artifact](#handoff-artifact) is written until the concept stabilises.

**中文：** 一种与[智能体](#agent)共同开发[设计概念](#design-concept)的技术：智能体以苏格拉底式方式逐一向用户提问，每次一个决策，并为每个问题推荐一个答案。这能减缓急于完成计划的冲动——在概念稳定之前不会撰写任何[交接产物](#handoff-artifact)。

*Usage:*

"It went straight to writing the [spec](#spec) and got the cancellation logic wrong."

**中文：** "它直接开始写[规格说明](#spec)，结果把取消逻辑搞错了。"

"Grill it first — make it ask you about partial cancels, refunds, and timing before it commits anything to the doc. Cheaper to resolve in conversation than in code."

**中文：** "先拷问它——让它在写入文档之前先问你关于部分取消、退款和时机的问题。在对话中解决比写在代码里再修改要便宜得多。"

