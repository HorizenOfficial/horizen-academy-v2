﻿---

sidebar_label: Directed Acyclic Graph - DAG
title: What is a DAG? - Directed Acyclic Graphs
slug: /directed-acyclic-graph-dag/
description: The term DAG stands for Directed Acyclic Graph. A DAG is a mathematical concept, technically, a blockchain is the most simple form of a DAG.
image: https://www.horizen.io/academy/img/directed-acyclic-graph-dag/directed-acyclic-graph-dag-meta.jpeg
last_update:
  date: 2/21/2023
  author: Horizen Contributor

---

# What is a DAG? Directed Acyclic Graphs

One of the main engineering challenges in the blockchain space is _scalability_. 

**Scalability** refers to the development of technologies or protocols that can handle more transactions in a given amount of time.

While traditional payment networks like _Visa_ can handle _thousands of transactions per second_, most blockchains can only handle a _handful of transactions in the same period of time_. This is due to their decentralized nature. 

_All nodes_ on the network process all the transactions in parallel. _This means, the least performant node is the limiting factor for the overall performance of the network_. 

In order to maintain a high level of decentralization, a large node count is important, hence raising the minimum requirements for nodes is problematic, if they are not rewarded accordingly.

**_This comparison is unjust_, in that _Visa_ itself can be viewed as a third or fourth-layer technology:** 

International Bank of Settlements **>** National Central Bank **>** Retail Bank **>** _VISA_. There is still a significant difference in performance that needs to be addressed.

## The Scalability Challenge

**The main factors affecting a [blockchains protocol scalability](architecture/blockchain-protocols.md) regarding transaction throughput are:**

- The **size** of a _single transaction_ (byte)
- The **block size** (byte -> transactions per block)
- **Block time**, the interval in which blocks are created (time -> blocks per time unit -> transactions per time unit)
- **Propagation delay** on the network (seconds)

To increase the throughput of a linear blockchain on the protocol level one can either decrease the size of transactions themselves or the interval in which blocks are created. Another option would be to increase the block size.

This can be shown with [Bitcoin](cryptocurrency/bitcoin-glossary.md) as an example. Whereas _Bitcoin_ activated _SegWit_ to decrease the size of individual transactions, the closely related _Litecoin_ protocol on the other hand, reduced the block interval from 10 to 2.5 min. Bitcoin Cash went the other way and decided to _increase_ the block size.

**The problem is the following:** 

Transaction size can only be decreased by so much, as transactions are quite compact already. 

Even if you could shrink a transaction to a tenth of its size, this would only increase throughput from 7 to 70 transactions per second for Bitcoin. Not exactly Visa level. 

Raising the block size limit comes at the expense of mining centralization, as fewer people can compete in the competitive [mining industry](mining/crypto-mining.md) when hardware and network requirements increase.

**Decreasing** the block interval leads to more orphaned blocks and is limited by network synchronization time across the globe. 

An **increase** in block size also increases the orphan rate because propagation time is increased linearly with it. 

A high rate of orphaned blocks reduces the overall security of the protocol, because _honest_ hash power is “wasted” and does not contribute to the security of the ledger.

![scalability challenges in blockchain networks](/img/payment-channels/scalability-challenges-in-blockchain-networks.jpg)

**There are generally three approaches to scalability:**

- **Second-layer technologies** like [payment or state channels](scalability/payment-channels.md) which are used in the _Lightning Network_ that take transactions off-chain with the option to settle on-chain at any time.
- **Sidechain** approaches, which can best be described as a parallelization of blockchains. Assets can be transferred from one chain to another via a _two-way peg_ (_2WP_) and the transactional load is shared between the mainchain and its [sidechains](scalability/sidechains.md).
- **Directed acyclic graphs** (_DAGs_) have a different [data structure](fundamentals/blockchain-data-structure.md) than blockchains. Many blocks can be produced in parallel which requires modifications to the [consensus mechanism](consensus/consensus-mechanisms.md).

## What is a DAG?

The term _DAG_ stands for **Directed Acyclic Graph**. Strictly speaking, a _DAG_ is a mathematical concept and nothing particularly innovative in and of itself.

The structure on the left in the image below is a graph made up of nodes, or vertices, and edges connecting the nodes. 

In a **directed graph**, each connection, or edge, has a direction, as indicated by the arrows in the image in the center. 

**A directed acyclic graph** does not allow cyclic relationships between nodes, like the one you can see in the diamond-shaped part of the directed graph in the middle. In technical terms, one would say the Graph G = (V, E) is defined as the set of vertices V and edges E.

![graph types dag](/img/directed-acyclic-graph-dag/graph-types-dag.jpg)

Technically, _a blockchain is the most simple form of a DAG_. 

**It is a [linear structure of nodes](architecture/blockchain-nodes.md), the blocks, and edges, the references, that have a direction and no cyclic relationships.** 

The innovation introduced with _Bitcoin_ and blockchain technology was achieving _consensus_ and _Sybil-resistance_ in a decentralized environment. 

This innovation can be applied to different, more sophisticated data structures as well.

> “Both Blockchains and DAGs are digital ledgers. Both may be distributed. Both may be decentralized. Both may have [token-economic incentive-mechanisms](tokenomics/tokenomics.md). They are both subject to immutability attributes as defined by their networks/communities. And finally each network is comprised by its constituents, including users, devs, miners, and other stakeholders” - _Bunny Hernandez_

**There are two different ways to set up a DAG to be used for a [cryptocurrency](cryptocurrency/cryptocurrency.md)**. 

The nodes can comprise of individual transactions, or they can be blocks containing a number of transactions. The first notable DAG protocol was _IOTA’s Tangle_. 

In _Tangle_, each node is made up of a transaction. Each transaction references two prior transactions and has a small Proof-of-Work attached to it.

**Horizen** is evaluating the use of a **Block-DAG** protocol.

Each node in the DAG is a block, and a block in the Block-DAG is similar to a block in a blockchain. A Block in a DAG also has a _block header_ and contains a _number of transactions_, just as a block in the blockchain does. 

The block header contains important information like a _timestamp_ and _references to previous blocks_ as well as a _set of transactions_.

_Miners_ mine the block, meaning they attempt to solve an intensive computational task based on choosing an initial random number. The miner that solves the task first gets to create the next block in the chain, therefore deciding the order of transactions. 

This method of the network coming to a consensus on the order of transactions is the same that is used by most blockchains, namely _Proof of Work_.

The main difference when compared to a block in a blockchain, is that a block in the Block-DAG can contain references to more than one predecessor, while each block in the blockchain always references the previous block. 

Miners don’t have to choose a single block to reference, but instead include references to all previously unconfirmed blocks, the _leaves_ of the DAG.

![dag leaves](/img/directed-acyclic-graph-dag/dag-leaves.jpg)

Assuming that both types of blocks contain the same number of transactions, just by looking at the graphic below, it is intuitive that the DAG will process _more_ transactions in a given period of time than the blockchain does. 

**There is more storage capacity in the Block-DAG compared to the blockchain.**

The DAG introduces _two-dimensionality_ to the otherwise _linear_ or _one-dimensional_ data structure of the blockchain and is a promising approach to make decentralized networks scale. We only change the data structure compared to a blockchain but keep the same consensus mechanism, _Proof-of-Work_, to have the network agree on a single transaction history.

![dag vs blockchain](/img/directed-acyclic-graph-dag/dag-vs-blockchain.jpg)

## Consensus vs. Sybil Resistance

We would like to introduce a distinction between _consensus mechanisms_ and _Sybil-resistance mechanisms_.

You've come across the term Proof-of-Work (PoW), and most likely _Proof-of-Stake_ (PoS) or Proof-of-something labeled as _consensus mechanisms_ before.

PoW and its relatives are actually **Sybil-resistance mechanisms**. 

In a [Sybil Attack](security/blockchain-attacks.md), a malicious party creates a large number of centrally controlled online identities and tries to achieve certain, mostly malicious, goals by exerting influence through these _fake identities_. 

**Online voting is the most intuitive example of a situation where many fake identities can be used to game the results.**

Sybil-resistance mechanisms prevent this by tying the voting power of an entity to a scarce resource that is harder to obtain than fake user-accounts or IP-addresses.

In [**Proof of Work**](consensus/proof-of-work-pow.md), the scarce resource voting power is tied to is computational power. _Your voting power is the share of computing power you control, relative to the total computing power of the network._ 

In **Proof of Stake**, _your voting power is tied to the share of native currency you own, relative to the circulating supply on the network, or more precisely, to the actual staked supply on the network_.

While these mechanisms prevent malicious actors from exerting undue influence on the network, they don’t help to achieve consensus on a single transaction history by themselves. 

This is what the actual consensus mechanism does. In most cases this is the _longest chain rule_ or _heaviest chain rule_, also called **Nakamoto Consensus**.

The term _heaviest chain rule_ is more precise, as the rule is defined by the amount of aggregated work that went into building a branch, rather than the number of blocks. Theoretically, there could be a [fork](governance/blockchain-forks.md) with two branches, where the shorter branch has more aggregate work to it. 

_In this case_, the shorter branch would be considered valid. In practice, this does not make much of a difference because there is little variety in the PoW attached to blocks on major blockchains. This little excursion should prove valuable to following along on a history of Block DAG protocols.

## Block DAGs

**Note:** There are no production block DAG protocols live today. We look to lay out the considerations that go into building such a protocol, rather than the _actual_ implementation details.

### GHOST

One of the first steps towards Block-DAG protocols was the _Greedy Heaviest Observable Sub Tree Protocol_, or the [GHOST Protocol](https://eprint.iacr.org/2013/881.pdf). The consensus mechanism in _GHOST_ is not based on the longest chain rule. 

Instead, the subtree with the greatest _combined_ Proof-of-Work or difficulty is considered the valid branch by protocol design.

![ghost protocol](/img/directed-acyclic-graph-dag/ghost-protocol.jpg)

A more intuitive description might be finding the subtree of greatest cardinality. _Here we make the same assumption as before when distinguishing between the longest and heaviest-chain rule._ 

The structure on the image above is moving into DAG territory, rather than just being a blockchain with orphaned blocks, though there is no such clear distinction. 

_Technically_, it is still a _tree_ and not a DAG though.

The two differ in trees being able to branch off in the direction of the edges, but branches not merging together later on. DAGs, on the other hand can do both, branch off and merge. 

**Trees are a subcategory of DAGs, _in that every tree is a DAG, but not every DAG is a tree._**

![trees vs dag](/img/directed-acyclic-graph-dag/trees-vs-dag.jpg)

Earlier, we said decreasing the block time and increasing the block size leads to a higher orphan rate and reduced security. 

In GHOST, this effect is eliminated by introducing a different mechanism to elect valid forks. An attacker would also need to control more relative hash power to perform _double spends_ (>51%) than he would need to with the longest chain rule (51%) as the consensus mechanism.

> _“Each of these mechanisms share similar quantitative notions of a block's aggregate proof of work/hash power but differ qualitatively: aggregate chain work vs aggregate subtree work.”_ - Drew Stone

![recursive elections dag](/img/directed-acyclic-graph-dag/recursive-elections-dag.jpg)

### SPECTRE

Another evolutionary step in the development of a Block DAG was the Serialization of Proof-of-work Events: Confirming Transactions via Recursive Elections - the [SPECTRE protocol](https://eprint.iacr.org/2016/1159.pdf), which actually builds a DAG structure. This allows block creation in parallel at a high rate. 

It separates the mining protocol from the consensus protocol in that miners don’t have to choose which blocks to build on top of according to the consensus rules.

While the protocol suggests building new blocks on the leaves, the set of unconfirmed blocks of the DAG, a valid block can be built on _any set_ of blocks in the DAG. The consensus mechanism determines the order of blocks in a second step, via a _recursive election_.

_Determining an order throughout the blocks is an important step_. If two blocks contain conflicting transactions, you want the transaction broadcast first to be the valid one and have the double-spend transaction _rejected_. 

The recursive election is a type of _voting scheme_ to establish order throughout all blocks.

> _“In this voting scheme, each block will identify a preference ordering over pairs of blocks based on which block they believe occurred first. The final ordering is taken as a majority vote on pairwise orderings across all blocks.”_ - **_Drew Stone_**

**Consider you were to determine the order between block X and Y in the graphic above with the _recursive election protocol_.**

**First**, the blocks that reference only _one_ of the _two_ blocks cast a vote on which block came first. 

Blocks **6**, **7** and **8** don’t reference **Y** at all, so they vote for **X**. Blocks **9**, **10** and **11** don’t reference or see block **X**, so they vote for **Y**.

**Next**, the blocks that have a connection to _both_ blocks in question cast a vote. Block **12** references both, **X** and **Y**, and therefore takes itself out of the equation. 

It looks at the blocks it references and which have a connection to **X** and **Y** (**6, 7, 8**, and **9**) and adopts the majority vote, which is **3** to **1** for **X**.

All blocks (**1-5**) which preceded the two blocks in question adopt the _majority_ vote of the other blocks. If there is a _tie_ situation, the next block that is added to the DAG determines the order, _just like a tie after a fork in a blockchain is broken with the next block_.

If a malicious miner was to mine hidden blocks only to reveal them later, they would have no references and therefore would always be voted on as coming last. This makes _double-spend attacks_ much harder, even if an attacker controls a large share of the hash power.

A _weakness_ of the SPECTRE approach to ordering blocks is that it cannot guarantee linear block ordering. Although great effort is put into avoiding this, the _Condorcet’s Paradox_, which originates from _social choice theory_, can occur with the recursive election approach. 

It is a situation where a majority vote can order **A < B**, **B < C**, and yet **C < A**.

Because linear block ordering cannot be guaranteed, the protocol doesn’t satisfy the _liveness_ property. 

_Liveness_ and _safety_ are properties [distributed systems](consensus/consensus-in-distributed-systems.md) must display in order to securely support a cryptocurrency.

- **Liveness** means that all non-faulty nodes eventually compute a new state, or block. In simple terms it means, the system doesn’t halt and reacts to events.
- **Safety** means that all non-faulty nodes transition to the same state after a given external event. This means all nodes will be in sync eventually.

### PHANTOM

The last protocol worth mentioning in the context of Block-DAGs is the [PHANTOM protocol](https://www.semanticscholar.org/paper/PHANTOM%3A-A-Scalable-BlockDAG-Protocol-Sompolinsky-Zohar/50bc77f3ec070940b1923b823503a4c2b09e9921?p2df). It can guarantee linear block ordering and therefore _satisfies_ the liveness condition at the expense of speed. 

Speed relates to the time it takes all nodes on the network to reach consensus.

The security assumptions for PHANTOM are based on an honest majority of peers. The mechanism used to establish a final block ordering comprises defining a cluster of blocks in the DAG _first_. 

Finding this cluster is an _NP-hard problem_, which means it cannot directly be solved but needs to be approximated. Once these clusters are defined or approximated, a breadth-first search is performed to establish an order.

## Miners in Our Block-DAG Protocol

As you might know, there are [miners](mining/crypto-mining.md) in traditional Proof-of-Work blockchains that secure the ledger with large amounts of computing power. Miners are _incentivized_ to do this work by being rewarded with newly created coins. 

**There will also be miners in our Block-DAG protocol**.

What we change on a fundamental level is the data structure of the transaction record. The consensus mechanism used by the network to come to an agreement on the order of transactions remains the same, namely Proof-of-Work.

A difference in the reward structure of our DAG compared to a blockchain is that not only the miner that solves a block gets a reward for that particular block, but also a number of miners that confirm that block, later on, will receive a reward in the form of newly created coins. 

This incentivizes the miners to reference all unreferenced blocks. Newly created blocks that are not referenced by any other block yet are called leaves of the DAG.

Mining in the Horizen Block-DAG will be similar to traditional mining, but we expect more blocks to be mined in total with an overall lower difficulty which should lead to greater [mining decentralization](mining/crypto-mining.md) as fewer miners will need to join mining pools.

## Summary - DAGs

_DAGs_ might be suited to become the successors of _linear blockchains_. They mostly differ in that a block in a DAG can reference more than one block at a time. This introduces a sort of _two-dimensionality_ to the data structure.

A DAG can be constructed with entire blocks or individual transactions as nodes or vertices. While there are transaction DAGs live today, they suffer from a lack of decentralization as they need a central coordinator. 

Currently, there are no production-level Block-DAGs out there, but a lot of research has gone into this type of construction. The main challenge from an engineering perspective is to order blocks in a linear fashion.

The Block-DAG uses the _same_ consensus mechanism as a blockchain to agree on the order of events, _but_ uses a _different_ structure to connect the individual blocks. The promise of DAGs is to increase the throughput of a decentralized ledger from a _few_ transactions per second to possibly _thousands_. 

Time will tell if Block-DAG technology can live up to this promise, but the throughput achieved by a Block-DAG motivates us to make this protocol a reality in the Horizen ecosystem.



