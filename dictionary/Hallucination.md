---
description: Confidently-wrong model output. Two flavors: factuality (invented facts) and faithfulness (drift from loaded context).
description_zh:  confidently-wrong 模型输出。两种类型：事实性幻觉（编造事实）和忠实性幻觉（偏离已加载的上下文）。
---
Confidently-wrong [model](./Model.md) output. Two flavors with different causes and fixes:

**中文：** [模型](./Model.md) confidently-wrong 的输出。两种不同类型，原因和解决方法各不相同：

- *Factuality hallucination* — invented or wrong facts about the world (a function that doesn't exist, a wrong API signature, a fake citation). Caused by [parametric knowledge](./Parametric%20knowledge.md) gaps, often past the [knowledge cutoff](./Knowledge%20cutoff.md). Fix: load the right [contextual knowledge](./Contextual%20knowledge.md).
- *Faithfulness hallucination* — output drifts from the **contextual knowledge** that's loaded, the user's instructions, or the model's own prior reasoning. Symptom of [attention degradation](./Attention%20degradation.md); worsens in the [dumb zone](./Smart%20zone.md). Fix: [clear](./Clearing.md) or [compact](./Compaction.md).

**中文：**
- *事实性幻觉（Factuality hallucination）*——关于世界的发明或错误事实（一个不存在的函数、错误的 API 签名、虚假的引用）。由[参数化知识](./Parametric%20knowledge.md)的空白导致，通常发生在[知识截止日期](./Knowledge%20cutoff.md)之后。解决方法：加载正确的[上下文知识](./Contextual%20knowledge.md)。
- *忠实性幻觉（Faithfulness hallucination）*——输出偏离已加载的**上下文知识**、用户指令或模型自身先前的推理。[注意力退化](./Attention%20degradation.md)的症状；在[愚钝区](./Smart%20zone.md)中恶化。解决方法：[清空](./Clearing.md)或[压缩](./Compaction.md)。

*Avoid:* "hallucination" as a bare synonym for "wrong" — without naming the flavor, the term has no diagnostic value.

**中文：** *避免：* 将"幻觉"单独用作"错误"的同义词——如果不指明具体类型，这个词就没有诊断价值。

*Usage:*

"It hallucinated a `parseAsync` method on the schema."

**中文：** "它幻觉出了一个 schema 上的 `parseAsync` 方法。"

"Factuality or faithfulness?"

**中文：** "是事实性还是忠实性？"

"The method exists in the docs I pasted — it just stopped reading them after [turn](./Turn.md) forty."

**中文：** "这个方法确实存在于我粘贴的文档中——只是在第[四十轮次](./Turn.md)之后它就停止阅读了。"

"Faithfulness then. Compact and reload, don't bother adding more docs."

**中文：** "那就是忠实性幻觉。压缩并重新加载，不用费心加更多文档了。"
