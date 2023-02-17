---

sidebar_position: 43
sidebar_label: POS vs POW
title: Proof of Stake vs Proof of Work
slug: /pos-vs-pow/
description: In this article, we define and compare two of the most popular consensus mechanisms in blockchain - Proof of Work and Proof of Stake.
image: /img/pos-vs-pow/proof-of-stake-vs-proof-of-work-meta.jpeg

---

# Proof of Stake vs Proof of Work

The distributed network of a blockchain comprises many thousands of participants - some of them *altruistic*, others *rational*, and some of them *malicious*. 

**In this challenging environment, one has to solve a crucial problem to make digital money work:** *All nodes need to agree on a single history of transactions.* 

Without *consensus* on who owns what, the network would be worthless.

## What Are Consensus Mechanisms?

The **consensus mechanism** of a blockchain allows the network to agree on a single version of history. The history in the case of a blockchain for cryptocurrencies is the order in which the transactions on the network happened. 

When a network participant creates a transaction, the transaction is broadcast to the entire network. Each node records the transaction and adds it to their version of the ledger.

The different versions kept by [different nodes](https://www.horizen.io/academy/nodes/) look slightly different. 

If you are in the *US* and broadcast a transaction, the nodes that are closest to you will receive it earlier than a node based in *Asia*. 

What you get is a set of slightly different versions of the same transaction history. 

Eventually, all network participants need to agree on a given order and this is what the consensus mechanism of a blockchain does.

**There are many approaches to achieving consensus in a distributed network but the two most commonly used are the _Proof of Work_ (*PoW*) and _Proof of Stake_ (*PoS*) algorithms.** 

The generalization _Demiro Massessi_ has formulated applies to both:

> “*The main difference between [consensus mechanisms](https://www.horizen.io/academy/consensus-mechanisms/) is the way in which they delegate and reward the verification of transactions. (…) In one way or another, blockchain consensus algorithms boil down to some kind of vote where the number of votes that a user has is tied to the amount of a limited resource that is under the user’s control.*” - *Demiro Massessi*

![consensus in blockchain](/img/pos-vs-pow/consensus-in-blockchain.jpg)

## Proof of Work - PoW

**Miners** are the entities who work to achieve consensus within the network in a _Proof of Work  blockchain_. 

They collect all transactions that are forwarded to them through the [P2P network](p2p-networks.md) and save them in their *mempool* (memory pool). While they collect incoming transactions, they verify if the transactions are valid according to the protocol and add them to the block they are currently working on. 

*At the same time, they are solving a computationally expensive puzzle.*

The miner who solves the puzzle first broadcasts her block to the network and gets to extend the blockchain by one block. The miner receives newly created coins for his work and he gets to write the history of the blockchain for the past couple of minutes.

- In **Horizen**, this happens every 2.5 minutes on average
- In **Bitcoin**, every 10 minutes. 

The chance of solving a block is directly proportional to the computational power a miner has. 

If a miner had **10%** of the computing power of the network, she would solve every tenth block on average.

Computational power is the limited resource in a PoW-based blockchain. It takes real-world resources, namely *mining hardware and electricity*, to mine a cryptocurrency. 

It is a highly competitive environment, in which each miner constantly wants to increase his share of the computational power or **hash rate**. This competition is what keeps the chances of a single actor controlling the majority of hash rate low.

Miners require computational power because the problem they are trying to solve can only be solved through random guessing. 

*PoW only works, because this puzzle is _optimization-free_ and _approximation-free_.* 

**Optimization-free** means there is no shortcut to trying out a large number of different solutions until you find a valid one.

You cannot calculate a solution, you need to find it through a trial-and-error approach. 

**Approximation-free** means that it is not possible to have a part of the solution or to “be close to solving the problem”. You either have a solution or not, making it a binary situation.

![proof of work](/img/pos-vs-pow/proof-of-work.jpg)

All nodes and miners verify the validity of a new block as soon as it is discovered and broadcast. If it is valid, they add it to their local copy of the blockchain and delete all transactions that are now already recorded on the blockchain from their mempool.

The *mempool* only ever contains valid but unconfirmed transactions. Then they start working on the next block and the process is repeated. This is how the network agrees on a single version of the history of all transactions in a [Proof of Work blockchain](https://www.horizen.io/academy/proof-of-work-pow/).

### The Longest Chain Rule

Now you can imagine a scenario in which two miners find a block at almost the same time. In this case, all the nodes and miners on the network save both versions of the block. 

**This is a tie situation**: 

Both blocks are valid at this point, but somehow the tie must be broken - we need a single version of the truth.

The miners will start building the next block on top of the block they received first. The tie is broken when the miners find the next block. 

The block that is built on top of will become accepted as the single truth by all miners and nodes. 

The other block is disregarded and called an *orphan block*. This procedure of breaking a tie between two concurring blocks is called the ***Longest Chain Rule*** or *Nakamoto Consensus*.

If **80%** of miners receive block first and the other **20%** block B, then the chances of block A getting extended are **80%**, assuming all miners have the same computational power. In a way, the miners vote with their computational power on one version of the history. 

This aligns perfectly with our quote from the beginning of the article.

![longest chain rule](/img/consensus-mechanisms/longest-chain-rule.jpg)

Proof of Work is one of the most secure consensus mechanisms but it is only secure if there is a sufficient amount of hash rate on the network. The [Bitcoin protocol](https://www.horizen.io/academy/blockchain-protocols/) has proven how secure Proof of Work consensus can be for *over 10 years*.

**Game theory** is the study of mathematical models of strategic interactions between decision-makers. 

Miners are rational decision-makers in a PoW blockchain. The incentives to act according to the rules of the [mining protocol] are embedded in the protocol itself, and outweigh the potential gains of behaving maliciously. 

This is what makes a mature PoW blockchain so robust.

## Proof of Stake - PoS

In a **Proof of Stake** blockchain, there are also entities collecting transactions and creating new blocks. The process, as well as the terminology in this setting, is a little different though.

Whereas miners are mining blocks in PoW, **validators** are forging blocks in PoS. 

The chance of validating a new block is proportional to the stake a _validator_ has. The stake refers to the number of coins a validator is willing to lock up for the time they want to be a validator.

To become a validator, a user needs to send funds in a special type of transaction. These funds are locked in a deposit called the *validator pool* and only released if the validator acts according to the rules of the protocol. 

If the validator were to include fraudulent transactions in his block, he would lose his stake and the right to forge blocks in the future.

- The scarce resource in a PoS environment is the *native currency of the blockchain*. 
- The *more* money you stake on a PoS blockchain, the *higher* your chances of validating a new block. 

In most Proof of Stake blockchains, there is no block reward. The validator’s incentive to achieve consensus is solely based on collecting the transaction fees attached to each transaction.

![proof of stake](/img/pos-vs-pow/proof-of-stake.jpg)

## Proof of Work vs Proof of Stake

Skeptics question the overall security of the Proof of Stake consensus model because it doesn’t consume real-world resources to be a validator. 

There is no cost associated with building a new block on top of both branches when there is a temporary [fork](https://www.horizen.io/academy/blockchain-forks/). This is referred to as the **Nothing at Stake** attack.

In PoW, there is a real-world cost, electricity, to every block that gets mined. 

It remains to be seen if PoS blockchains can provide the same security guarantees over an extended period of time that [Bitcoin](https://www.horizen.io/academy/bitcoin-glossary/) with its PoW blockchain has shown for over a decade now.

![proof of work vs proof of stake](/img/pos-vs-pow/proof-of-work-vs-proof-of-stake.jpg)

Another difference between PoW and PoS is that in a PoS blockchain each validating node needs to be identifiable. The staked coins must be held accountable for any malicious acts. 

In a PoW blockchain, there is no need to have miners or nodes identifiable. In fact, it is a feature that if a node receives a block, there is no information included about who the miner of the block was.

It might have been the node you just received the block from, or it might have been relayed several times before it reached you. It does not and it should not matter who the miner was. All that matters is that the block and all its transactions are valid. 

You only need to trust the math in order to trust Proof of Work.

Supporters of Proof of Stake refer to the high energy cost and limited throughput of PoW blockchains and thus consider the PoS consensus mechanism to be more sustainable. Right now there is no PoS blockchain available that can support the claim of being secure over an extended period of time while storing significant value.

Time will tell if PoS blockchains can deliver on their promise of being equally secure while more scalable than PoW blockchains.

## Summary - POS vs POW

In Proof of Work consensus, *miners* are voting on a version of the history with the weight of the computational power they control. 

In Proof of Stake, *validators* are voting on a version of the history with the amount of coins they stake on the blockchain.