---

sidebar_label: 51% Attacks
title: What is a 51% Attack?
slug: /51-attacks/
description: 51% attacks are seen as a greater threat for newer blockchain networks that are still small in size and are therefore vulnerable to being taken over.
image: /img/51-attack/51-percent-attack-meta.jpg
last_update:
  date: 2/21/2023
  author: Horizen Contributor

---

# What is a 51% Attack?

A **51% attack** is an attempt by a bad actor to control over 50% of a [_proof of work_ blockchains](consensus/proof-of-work-pow.md) hash rate (computer power) or to acquire over 50% of [staked tokens](tokenomics/what-is-a-token.md) on a [_proof of stake blockchain_](consensus/pos-vs-pow.md).

Controlling 51% of a network allows an attacker to potentially reverse a transaction or commit a double spend, which would allow them to spend the same coins in their [wallet](wallets/crypto-wallets.md) multiple times.

![51 attack](/img/51-attack/51-attack.jpg)

51% attacks are seen as a greater threat for newer blockchain networks that are still small in size and are therefore vulnerable to being taken over.

## 51% Attacks on Proof of Work Blockchains

For [proof of work](consensus/proof-of-work-pow.md) chains, the _biggest_ factor that determines whether one can successfully pull off a 51% attack is their ability to amass enough [mining rigs](mining/crypto-mining.md) to produce more hashing power than 50% of the network.

![51 attack visual](/img/51-attack/51-attack-visual.jpeg)

So, _could [Bitcoin](cryptocurrency/bitcoin-glossary.md) suffer a 51% attack?_

This is not only incredibly expensive, current estimates put the cost of a 51% on the Bitcoin blockchain at $13.5 billion, this amount alone would not guarantee that a bad actor could successfully control the network.

_For one thing_, accumulating enough [mining rigs](mining/crypto-mining.md) to attempt a 51% attack on the Bitcoin network would take a considerable amount of time and attract enough attention that the attack would likely be perceived well in advance.

This means that miners could vote to fork the chain unto a new network with different consensus or hardware requirements before the attacker could amass the necessary hashrate to make their attempt.

![51 attack example](/img/51-attack/51-attack-example.gif)

In this short clip, Bitcoin Educator [Andreas Antonopolous](https://www.youtube.com/watch?v=ncPyMUfNyVM) eloquently summarizes the likely sequence of events that would occur if an attacker, presumably a large nation state, did manage to successfully attack and control the network.

## 51% Attacks on Proof of Stake Blockchains

_With a proof of stake blockchain_, the end result would likely be the same, except in proof of stake, validators who attempt to manipulate transactions on the network can lose their entire stake through an event called _Slashing_.

The amount of [ETH currently staked](https://www.coindesk.com/layer2/2022/01/12/ethereum-reaches-a-staking-milestone/) on Ethereum 2.0’s Beacon chain is about 9 million, or almost $30 billion.

This means a bad actor who wants to attempt a 51% attack would first need to acquire and stake more than 4.5 million ETH, about 4% of the supply, before they could even attempt such an attack.

Like the conspicuous accumulation of mining rigs in the PoW scenarios, the accumulation of 4.5 million ETH would likely have an obvious impact on price and would also signal to validators on the network that a potential attack was coming, allowing them to make adjustments to the protocol before such an attack could ever be made.

## What a 51% Attack Means for Cryptocurrency Investors?

A 51% attack would certainly not be a good outcome for investors. However, this doesn't necessarily equate to a direct hack where the intention of the attacker is to steal funds.

**For example**, one could imagine a powerful group or entity wanting to perform a 51% attack on a network in order to enforce [protocol changes](architecture/blockchain-protocols.md) that was not considered popular by the majority of miners but had some support from a vocal minority.

While such situations would normally result in a _[fork](governance/blockchain-forks.md)_, it’s not out of the realm of possibility that the minority would choose to force control of the existing network instead of spinning off a new network and losing the benefits of accrued network effects.

This would be more in line with a _hostile takeover,_ in which case the network's [cryptocurrency](cryptocurrency/cryptocurrency.md) (much like the stock of a company experiencing a hostile takeover) would likely become very volatile due to the uncertainty of the network's future.

A 51% attack, successful or not, does not mean that the attacker can gain access to the funds in your wallet. This would require an attacker gaining access to your seed phrase/private keys, which is not something that they can get from holding a majority of the blockchain hash power.

**In addition**, a 51% attack does not mean that all of the prior states of the chain that recognized your wallet as holding those funds would disappear. Blockchains are designed to retain the full and complete history of prior states dating back to the first, or _genesis_, block.

The further back in time an attacker wants to go to reverse a transaction, the more energy intensive and therefore expensive the attack would be, as each block of transactions is linked to the previous block, meaning they would have to re-organize multiple blocks to get to the one that first recorded the transaction they're trying to reverse.

_To further emphasize this point,_ the Bitcoin blockchain produces a new block every 10 minutes, meaning an attacker would have to re-org hundreds of blocks just to reverse a transaction that is a few days old. The longer it takes for them to do this, the more blocks they’d have to re-org.

In the event that the attack was successful, the outcome might be a forking of the chain by miners who do not wish to stay on the network that has just been attacked.

Hard forks that result in a new blockchain being created typically means that the users on the previous chain will receive an airdrop of the new chain's native [cryptocurrency](cryptocurrency/cryptocurrency.md), similar to what happened when Bitcoin Cash forked from Bitcoin.

As an investor, this could turn out to be a positive outcome if there is enough conviction by the communities of both chains to continue developing their respective networks and creating value for the broader ecosystem.

## How Does Horizen Prevent 51% Attacks?

Horizen has designed a more secure version of the proof-of-work [consensus mechanism](consensus/consensus-mechanisms.md), leveraging what we call a ‘[penalty system for delayed block submission](https://www.horizen.io/assets/files/A-Penalty-System-for-Delayed-Block-Submission-by-Horizen.pdf)’ to enhance protection against 51% attacks.

Under the original _Nakamoto Consensus_ algorithm, it is possible to privately mine new blocks in a parallel forked chain at a faster rate than the public chain and for an indefinite period of time.

Using this loophole, bad actors could manipulate an exchange into confirming fraudulent transactions from their forked chain. This transaction could then be accepted into the public chain if their version of the chain falls under the longest chain rule, as PoW networks are designed to adopt the chain with the longest history of transactions as the truth.

**To solve this problem**, Horizen has introduced a system that penalizes miners who privately mine blocks that are hidden from the public network for an extended period of time.

This penalty comes in the form of a ‘block acceptance delay’ in relation to the amount of ‘time’, measured in block intervals, that the block has been hidden from the public network.

This modification _significantly_ increases the costs required to perform this kind of 51% attack.

**Ultimately**, creating a more secure version of PoW allows the Horizen mainchain to serve as a much more definite certifier of truth when it comes to the validity of transactions on the mainchain as well as the state of all [sidechains](scalability/sidechains.md) in the Horizon ecosystem.
