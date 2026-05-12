---
description: Input tokens the provider has cached from a previous request via its prefix cache, billed at a much lower rate.
description_zh: 提供商通过其前缀缓存从先前请求中缓存下来的输入词元，计费费率低得多。
---
[Input tokens](./Input%20tokens.md) the [provider](./Model%20provider.md) has cached from a previous [model provider request](./Model%20provider%20request.md) so it doesn't have to re-process them. When consecutive requests share a prefix, the provider reuses the work via its [prefix cache](./Prefix%20cache.md) and bills the cached portion at a much lower rate. The lever that makes long [sessions](./Session.md) affordable — without it, every [turn](./Turn.md) re-pays for the whole history.

**中文：** [提供商](./Model%20provider.md)从先前的[模型提供商请求](./Model%20provider%20request.md)中缓存下来的[输入词元](./Input%20tokens.md)，这样就不需要重新处理它们。当连续请求共享一个前缀时，提供商通过其[前缀缓存](./Prefix%20cache.md)复用已完成的计算，并对缓存部分以低得多的费率计费。这是让长[会话](./Session.md)变得可负担的杠杆——没有它，每一[轮次](./Turn.md)都要为整个历史重新付费。

*Usage:*

**中文：** 用法：

"Cost on long sessions is brutal — eight bucks for a refactor."

**中文：** "长会话的成本太可怕了——一次重构要八美元。"

"Check the cache tokens. If the [harness](./Harness.md) is reordering the [system prompt](./System%20prompt.md) or files between turns, the prefix breaks and you re-pay full input rate every request."

**中文：** "检查一下缓存词元。如果[harness](./Harness.md)在轮次之间重新排序[系统提示词](./System%20prompt.md)或文件，前缀就会断裂，你每次请求都要按全额输入费率付费。"
