---
description: The provider-side store that lets consecutive requests skip re-processing a shared prefix, billing those tokens at a lower rate.
description_zh: 模型提供方端的存储机制，让连续请求跳过共享前缀的重复处理，以更低费率计费这些词元。
---
The [provider](./Model%20provider.md)-side store that lets consecutive [model provider requests](./Model%20provider%20request.md) skip re-processing a shared prefix. When the start of a request matches the start of a recent one — same [system prompt](./System%20prompt.md), same history up to some point — the provider reuses its prior work and bills those [tokens](./Token.md) as [cache tokens](./Cache%20tokens.md) at a much lower rate.

**中文：** [模型提供方](./Model%20provider.md)端的存储机制，让连续的[模型提供方请求](./Model%20provider%20request.md)跳过共享前缀的重复处理。当请求的开头与最近某个请求匹配——相同的[系统提示词](./System%20prompt.md)、相同的历史记录到某一点——提供方会复用之前的计算结果，并将这些[词元](./Token.md)作为[缓存词元](./Cache%20tokens.md)以低得多的费率计费。

Anything that changes the prefix (reordering files, rewriting the system prompt mid-[session](./Session.md), injecting a timestamp near the top) invalidates the cache from that point on, and the rest of the request bills at full [input token](./Input%20tokens.md) rate.

**中文：** 任何改变前缀的操作（重新排序文件、在[会话](./Session.md)中途重写系统提示词、在顶部附近注入时间戳）都会使缓存从该点开始失效，请求的其余部分将按全额[输入词元](./Input%20tokens.md)费率计费。

_Usage:_

"Why did the bill spike halfway through the session?"

**中文：** "为什么会话进行到一半时费用突然飙升？"

"[Harness](./Harness.md) started injecting the current time into the system prompt every [turn](./Turn.md). Prefix cache breaks at the first changed token, so every request after that billed at full rate."

**中文：** "[Harness](./Harness.md)开始在每一[轮次](./Turn.md)将当前时间注入系统提示词。前缀缓存在第一个变化的词元处就失效了，所以之后每个请求都按全额费率计费。"
