---
description: The same input can produce different output. A property of how models generate text and how providers serve requests.
description_zh: 相同的输入可能产生不同的输出。这是模型生成文本和提供商处理请求方式的属性。
---
The same input can produce different output. Run a [model](./Model.md) twice with identical [context](./Context.md) and you may get two different answers — sometimes a word, sometimes a completely different approach. Nothing in your code has to change for this to happen.

**中文：** 相同的输入可能产生不同的输出。用相同的[上下文](./Context.md)运行两次[模型](./Model.md)，你可能会得到两个不同的答案——有时是一个词不同，有时是完全不同的方法。你的代码不需要做任何改变就会发生这种情况。

It's a property of how models generate text, and how [model providers](./Model%20provider.md) serve [requests](./Model%20provider%20request.md). There's no setting you can flip to make it go away.

**中文：** 这是模型生成文本的方式以及[模型提供商](./Model%20provider.md)处理[请求](./Model%20provider%20request.md)方式的属性。没有开关可以消除它。

Expect a spread of results from an [agent](./Agent.md) on the same task. Some days the model will feel sharp; some days it'll feel like it's lost the plot. Same task, different rolls of the dice.

**中文：** 对同一个任务，[智能体](./Agent.md)的结果会有一定分布范围。有些天模型感觉很敏锐；有些天感觉像迷失了方向。同一个任务，不同的骰子点数。

Be careful not to over-narrativize this. Humans are pattern-matching machines, and a string of bad runs can feel like proof that "the model got worse this week." Usually it's just the distribution.

**中文：** 注意不要过度叙事化。人类是模式匹配机器，一连串糟糕的运行可能会让你觉得"这周模型变差了"。通常这只是分布问题。

_Usage:_

"Claude has been awful today. Did they ship a worse version?"

**中文：** "Claude 今天表现很差。他们是不是发布了更差的版本？"

"Probably not — model output is non-deterministic. You're going to have good days and bad days on the same task. Try again tomorrow before you go looking for a cause."

**中文：** "可能不是——模型输出是非确定性的。同一个任务你会有好日子和坏日子。明天再试一次，别急着找原因。"
