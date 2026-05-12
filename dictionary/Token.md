---
description: The atomic unit a model reads and writes. Roughly word-sized but not exactly. Context window size, cost, and latency all count tokens.
description_zh: 模型读写的基本单位。大致与单词相当但不完全等同。上下文窗口大小、成本和延迟都以词元计算。
---
The atomic unit a [model](./Model.md) reads and writes. Roughly word-sized but not exactly — common words are one token, rare or long ones split into several. [Context window](./Context%20window.md) size, cost, and latency are all counted in tokens.

**中文：** [模型](./Model.md)读写的基本单位。大致与单词相当但不完全等同——常见单词是一个词元，罕见或较长的单词会拆分成多个。[上下文窗口](./Context%20window.md)大小、成本和延迟都以词元计算。

*Avoid:* "word" — token boundaries don't match word boundaries, and tokens-per-second / tokens-per-dollar are实际重要的单位。

**中文：** *避免：* 使用"word（单词）"——词元边界与单词边界不匹配，而每秒词元/每美元词元才是实际重要的单位。

*Usage:*

"How big is this prompt going to be?"

**中文：** "这个提示词会有多大？"

"Run it through the tokenizer — the schema's compact but the JSON keys are weird, so they'll split into more tokens than you think."

**中文：** "用分词器跑一下——schema很紧凑但JSON键名很奇怪，所以它们会拆分成比你想象的更多的词元。"
