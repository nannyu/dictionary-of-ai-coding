---
description: A handoff done in-memory: the previous session's history is summarised and seeds a fresh session. Lossy — detail traded for headroom.
description_zh: 一种在内存中完成的交接：将前一个会话的历史总结后作为新会话的种子。有损的——用细节换取空间。
---
A [handoff](./Handoff.md) done in-memory: the previous [session](./Session.md)'s history is summarised and seeds a fresh session. Lossy — detail traded for headroom. Triggered manually by the user, or [automatically](./Autocompact.md).

**中文：** 一种在内存中完成的[交接](./Handoff.md)：将前一个[会话](./Session.md)的历史总结后作为新会话的种子。有损的——用细节换取空间。由用户手动触发，或[自动触发](./Autocompact.md)。

*Usage:*

**中文：** 用法：

"[Context](./Context.md)'s getting heavy and I still have the test pass to do."

**中文：** "[上下文](./Context.md)越来越沉重，但我还要让测试通过。"

"Compact before you start — write what's load-bearing into the summary prompt so the new session keeps the schema decisions and drops the exploration."

**中文：** "在开始之前先压缩——把关键信息写进总结提示词里，这样新会话会保留schema决策，丢掉探索过程。"
