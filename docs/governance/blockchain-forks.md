﻿---

sidebar_label: Forks
title: What is a Fork in Crypto?
slug: /blockchain-forks/
description: When an upgrade is made to a blockchains underlying protocol, it is called a Fork. Learn more about forks in Horizen Academy
image: https://www.horizen.io/academy/img/blockchain-forks/blockchain-forks-meta.jpg
last_update:
  date: 2/21/2023
  author: Horizen Contributor

---

# What is a Fork in Crypto?

One of the main benefits of blockchain technology is that it gives anyone the freedom to opt into their preferred [system of governance](governance/blockchain-governance.md).

In the world of blockchains, systems are created and managed by transparent and [censorship resistant protocols](architecture/blockchain-protocols.md), which are rules written into computer code that determine how participants must engage with each other in order to achieve a desired goal.

**For example**, the Bitcoin blockchain is a set of protocols, or rules, for producing a finite digital currency that can be transacted between participants on a decentralized and tamper proof ledger.

**Written into the protocol is:**

- The _total supply_ of BTC
- The process for _mining_ new BTC under a proof of work [consensus mechanism](consensus/consensus-mechanisms.md)
- The _size of blocks_
- _Hash rates_
- *Difficulty adjustments* and more

Unlike real world economic or political systems that are reinforced by national laws and physical borders, the digital, code-based and open source nature of blockchain protocols makes them far more malleable and easy for anyone to opt in and out of.

When an upgrade is made to the underlying protocol of a blockchain, it is called a **Fork**.

Depending on the severity of the changes made in the upgrade, miners (those that operate nodes, validate transactions and add new blocks to the chain) can choose or not choose to also upgrade their [nodes software](architecture/blockchain-nodes.md) to implement those changes.

If the changes to the protocol are minor (e.g adding small features or improvements to the existing protocol) then the majority of miners will often opt-in to this change by upgrading their nodes and continuing to validate transactions as normal.

## Soft Fork

The process of making a minor upgrade to a blockchain protocol that results in the majority of nodes accepting the upgrade is called a **Soft Fork**.

_Under a soft fork_, nodes that choose not to upgrade their software can still recognize and add new blocks on the upgraded chain as long as they follow the new rules. This makes soft-forks backward-compatible.

![soft fork example](/img/blockchain-forks/soft-fork-example.jpg)

_Segregated Witness_, or **Segwit** was a soft fork that occurred on the Bitcoin network in 2017.

_Segwit_ introduced several upgrades to the [Bitcoin](cryptocurrency/bitcoin-glossary.md) blockchain, including fixing the problem of transaction malleability and changing the factor used to determine data storage limits within a single block from size to weight.

These changes were accepted by the majority of nodes on the network and would later help enable Bitcoin to launch its lightning network.

## Hard Fork

When the changes to the underlying protocol of a blockchain are severe enough, all nodes must upgrade their software in order to continue recognizing and validating blocks on the chain.

_In such a case,_ node operators who do not wish to upgrade to the new software are left with no choice but to opt-out of not only the upgrade, but also the network.

This then leads to a **Hard Fork**.

_When a hard fork occurs_, the group of miners that stay with the old software continue to validate transactions and add blocks to the old chain while the new chain branches off as the upgraded group of miners begin adding new blocks to their chain.

Those who hold the older chain's [cryptocurrency](cryptocurrency/cryptocurrency.md) are given a new cryptocurrency from the new chain.

### Hard Fork Examples

Famous hard forks include the infamous DAO Hack that led to Ethreum and Ethereum classic, and the Bitcoin Block Size Wars that led to Bitcoin and Bitcoin Cash.

#### Ethereum DAO Hack

The DAO Hack was an incident that occurred on the Ethereum network in 2016 in which $60 million in ETH was stolen from a DAO that raised $150 million when a vulnerability was discovered in its [smart contract](defi/smart-contracts.md).

The Ethereum community was faced with a choice of whether to continue adding blocks to the chain, which would permanently embed the record of the stolen funds into the chain's history, or fork the chain in order to create a new chain that effectively rolled back the networks history to before the attack had occurred so that the funds could be moved to a different smart contract.

Since not all community members agreed with the decision to reverse the transaction, this resulted in a hard fork that created 2 separate blockchains.

The **Ethereum** we know today, which was the new chain that reversed the stolen transaction enabling all funds to be returned to investors, and **Ethereum Classic**, the old version of the chain where the hacker successfully stole the funds but now held Ethereum Classic coins instead of Ether.

#### Bitcoin Block Size Wars

In early 2017, members of the Bitcoin community began to push for increasing the block size of the Bitcoin blockchain in order to store more memory and handle more transactions.

This group, led by early Bitcoin advocate Roger Ver, felt that the Bitcoin community’s resistance to increase the block size was an expression of favoritism towards those who preferred to treat Bitcoin as a digital store of value rather than as a currency.

The disagreement led to a group of developers and entrepreneurs creating a hard fork of **Bitcoin** and establishing **Bitcoin Cash** (BCH).

_BCH_ increased their block size to 8MB and has since expanded it further to 32MB, while Bitcoin’s block size remains 1MB.
