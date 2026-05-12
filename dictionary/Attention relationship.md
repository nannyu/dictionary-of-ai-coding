---
description: The pairing between two tokens — meaningful pairs influence each other more than unrelated ones. A context of N tokens has ~N² of these.
description_zh: 两个词元之间的配对——有意义的配对比无关的配对相互影响更大。N个词元的上下文大约有N²个这样的关系。
---
When predicting each [token](./Token.md), the [model](./Model.md) factors in every other token in the [context](./Context.md) — some heavily, others barely at all. The pairing between two tokens is an **attention relationship**, and meaningful pairs ("her" with "Sarah", or a `getUser()` call with its `function getUser` definition) influence each other more than unrelated ones. A context of N tokens has on the order of N² relationships.

**中文：** 在预测每个[词元](./Token.md)时，[模型](./Model.md)会考虑[上下文](./Context.md)中的每一个其他词元——有些影响很大，有些几乎没有。两个词元之间的配对就是一个**注意力关系**，有意义的配对（如"her"和"Sarah"，或`getUser()`调用与其`function getUser`定义）比无关的配对相互影响更大。N个词元的上下文大约有N²量级的关系。

*Usage:*

**中文：** 用法：

"It keeps confusing the two `user` symbols across the diff — sounds like we're in the [dumb zone](./Smart%20zone.md)."

**中文：** "它一直把diff中两个`user`符号搞混——听起来我们已经在[dumb zone](./Smart%20zone.md)里了。"

"Yeah, the attention relationship between each call site and its declaration is fighting the other one — same token shape, different bindings. Rename one and the pairings sharpen."

**中文：** "是的，每个调用点与其声明之间的注意力关系在互相打架——词元形状相同，绑定不同。重命名其中一个，配对就会变清晰。"
