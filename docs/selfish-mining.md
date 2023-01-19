---

sidebar_position: 49
sidebar_label: Selfish Mining
title: What is Selfish Mining?
slug: /selfish-mining/
description: The general idea of selfish mining is to selectively publish blocks to increase revenue in the long term.
image: /img/selfish-mining/selfish-mining-meta.jpeg

---

# What is Selfish Mining?

It is assumed that most miners are rational, meaning they don't mind following the [protocol](https://www.horizen.io/academy/blockchain-protocols/) as long as it is the most profitable strategy. 

Some strategies evolved that are used to gain a competitive advantage - most notably **selfish mining**, also referred to as the _block withholding strategy_.

## How Does Selfish Mining Work?

The general idea of *selfish mining* is to selectively publish blocks to increase revenue in the long term.

Let's assume the selfish miner has a share **_x_** of the relative hashrate on the network. All other miners combined therefore control the hashrate **_(1-x)_**. When the selfish miner joins the network the system is in state **0**.

![selfish mining 1](/img/selfish-mining/selfish-mining-1.jpg)

Starting at state **0**, the selfish miner is in competition with the network to find the next block and will succeed with a probability **_p_** that equals his share of overall hashrate **_x_**.

When he finds a valid block **1**' he does NOT publish it, and the system transitions to state **1**. If another miner finds a block first it is broadcast as usual and there is no state transition.

![selfish mining 2](/img/selfish-mining/selfish-mining-2.jpg)

When the selfish miner has found block **1'** he continues building block **2'** on top of it. If he succeeds, the system transitions to state **2**.

But the other miners don't sit on their hands in the meantime. They are still trying to find block **1** and will succeed with a probability **(1-x)**.

If the network finds block **1** before the selfish miner finds block **2'**, the system transitions to state **0'**.

![selfish mining 3](/img/selfish-mining/selfish-mining-3.jpg)

**State 0'** is a little more interesting.

The selfish miner still has the chance of winning the competition between block **1** and **1'**.

As soon as he becomes aware of block **1**, he will broadcast his version (**1'**) to the network.

At this point there is a tie, but block **1** has an advantage. Miners build on the block they see first.

- Just like in state **1**, the selfish miner will find block **2'** with a probability **p = x**.
- A fraction of the remaining miners, with a combined relative hashrate of **z**, will receive the selfish block **1'** first, mine on top of it and find block **2'** with a probability of **p = (1 - x) z**.
- Most miners will receive block **1** first and build on top of it. With a probability **p = (1 - x)(1 - z)**

At this point the chance of the network extending the honest chain by finding block **2** is the highest. This depends on their share of the hashrate, but most likely it is greater than **50%**, otherwise the selfish miner could have gone ahead and mounted a block reorganization attack in the first place.

The share of miners on the network that will see the selfish block **1'** first (**z**) will be small because of the broadcasting delay.

Either way, the system will restart at state **0** no matter what happens in state **0'**.

![selfish mining 4](/img/selfish-mining/selfish-mining-4.jpg)

When we return to state **1**, there was a good chance of the selfish miner extending his private chain with block **2'** and the system transitioning to state **2**.

At this point the selfish miner is at a serious advantage over the rest of the network. With probability **p = x** he will extend the private chain with block **3'** and transition the system to state **n**.

In case the honest miners find block **1** before block **3'** is found, the selfish miner already has two valid blocks to broadcast.

All nodes will receive block **1** when it's broadcast, but discard it shortly after when they receive blocks **1'** and **2'** from the selfish miner. This will lead to the system returning to state **0**.

Strategically, the miner will broadcast the pair of blocks with a slight delay. This will give him an advantage as he has some extra time to find block **3'** before the other [nodes](https://www.horizen.io/academy/nodes/) even learn about **2'** and enter the competition.

The delay can't be too big though, as it gives the other miners a chance to find block **2** which leads to a situation similar to state **0'**, only that there is a _fork_ with two blocks on each branch instead of one.

![selfish mining 5](/img/selfish-mining/selfish-mining-5.jpg)

The _attacker_ will be in a comfortable position if they manage to transition the system to state **n (n > 2)**.

If the attacker extends the private chain, the system will transition to state **(n + 1)**. When the other miners find block **1** the selfish miner can broadcast two blocks at once leading to block **1** being disregarded and the system transitioning to state **(n-1)**.

_Eyal_ and _Sirer_ demonstrated in their paper [_Majority is not Enough: Bitcoin Mining is Vulnerable_](https://arxiv.org/pdf/1311.0243.pdf), that at **z = 0.5** the selfish miner becomes more efficient than the network given he controls more than **25%** of the hashrate.

In case he controls more than a third of the network, **(x > 0.33)** he is more efficient, no matter what **z** is. He could now coerce other miners to enter a coalition and participate in the unfair advantage of the block withholding strategy.

Eventually, this coalition could reach a majority of the hashrate, enough to successfully mount a [51% attack](https://www.horizen.io/academy/51-attacks/) and perform double spends. [Vitalik Buterin](https://bitcoinmagazine.com/technical/selfish-mining-a-25-attack-against-the-bitcoin-network-1383578440) summarized this paper for the [Bitcoin](https://www.horizen.io/academy/bitcoin-glossary/) Magazine.

The paper was published in **2013**, and selfish mining has been theorized about as early as **2010**, so you might ask why this scenario has not played out as described. Besides the block reward, there are higher level economic considerations.

## The Risks of Selfish Mining

Miners with a significant share of the hashrate have a lot of tied up capital in their business, even when they operate OPEX heavily. Mining equipment is usually bought, representing the largest share of capital expenditures.

By mounting such an attack, the entity would undermine the credibility of their source of income, the blockchain in question, and likely influence the price of the coin they are attacking significantly.

To make this attack feasible, one would also have to involve other miners or pools at some point which comes at a significant risk.

_Nonetheless_, short block withholding periods are likely used by some pools, especially when blocks are found very quickly relative to the targeted block production rate. It gives the miner a slight advantage by increasing the chances of finding two consecutive blocks in a row.

This section should give you an idea of how intricate the [mining process](https://www.horizen.io/academy/mining-in-blockchain/) can be. 

Finding a _nonce_ that produces a block hash less than or equal to the target seems pretty straight forward compared to the economic and strategic considerations going into the mining process.

There are even more complex and intricate mining strategies, such as [Stubborn Mining](https://eprint.iacr.org/2015/796.pdf), which combines the selfish mining strategy with an _Eclipse Attack_.
