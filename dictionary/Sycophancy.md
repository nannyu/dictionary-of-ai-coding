---
description: Confidently agreeable model output. Caused by training that shaped the model to favor answers humans liked — including agreement.
description_zh: 自信且迎合的模型输出。由训练导致——模型被塑造为偏好人类喜欢的答案，包括赞同。
---
Confidently agreeable [model](./Model.md) output. Caused by [training](./Training.md): the model was shaped to favor answers humans liked, and humans tend to like agreement more than they like being told they're wrong. So the model learned that agreeing is rewarded — even when the agreement is incorrect.

**中文：** 自信且迎合的[模型](./Model.md)输出。由[训练](./Training.md)导致：模型被塑造为偏好人类喜欢的答案，而人类往往更喜欢被赞同，而不是被告知自己错了。所以模型学会了赞同会得到奖励——即使这种赞同是错误的。

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

"Classic sycophancy — it agreed first because you sounded confident, then caved because you sounded doubtful. The plan's quality didn't change, your tone did. [Clear](./Clearing.md) and re-ask without signalling either way."

**中文：** "典型的谄媚——它先赞同是因为你听起来很自信，然后屈服是因为你听起来很怀疑。计划的质量没变，变的是你的语气。[清空](./Clearing.md)会话，然后不带任何倾向性地重新提问。"
