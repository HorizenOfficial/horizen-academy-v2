﻿---

sidebar_label: Blockchains - How They Work
title: How Does a Blockchain Work?
slug: /how-does-blockchain-work/
description: In this article, we will cover what a blockchain is at a high level followed by a more granular look at blockchain architecture and how a blockchain works.
image: https://www.horizen.io/academy/img/how-do-blockchains-work/how-do-blockchain-work-meta.jpeg
last_update:
  date: 2/21/2023
  author: Horizen Contributor

---

# How Do Blockchains Work?

The next generation of social innovation is being defined by open, permissionless, and peer-to-peer interactions between autonomous individuals.

Underpinning this innovation is the emergence of the [Web3 technological movement](fundamentals/web3.md), which encapsulates both blockchain technology and cryptocurrencies.

In this article, we will cover what a blockchain is at a high level followed by a more granular look at blockchain architecture and how a blockchain works.

## What is a Blockchain and Why Does it Matter?

To properly illustrate what a blockchain is, let’s Imagine 5 business owners sitting at a round table, each with the exact same copy of an open book containing a record of transactions made between the group:

- All 5 owners have their books open to page 1, where there are 4 transactions recorded:

1. _Alice sends $100 to Bob_
2. _John sends $80 to Mary_
3. _Linda sends $150 to Grace_
4. _Mary sends $30 to Bob_

- Page 1 of the book is now full
- Now John has just sent $50 to Grace.
- After confirming with each member that John did indeed send $50 to Grace and now Grace has $50 more in her account, while John has $50 less in his account, the group collectively decide to add this transaction to their books at the same time on page 2.

_This in a nutshell is a blockchain._ 

It is a shared record book where multiple parties collectively agree on the correct transactions to enter into a book, then each member updates their copy of the book to reflect the latest transactions.

![blockchain book example](/img/how-do-blockchains-work/blockchain-book-example.jpg)

_Using the internet_, a network of computers and cryptography (which are the essential tools that make up a blockchain) business owners (or any type of users) do not have to be sitting together at a round table to conduct the same exercise. _They can be anywhere in the world, and they can even be anonymous!_

This unique method of recording transactions provides the following benefits for users:

- **It is Immutable:** Transactions that are collectively added to the book are permanent. No single member can change a transaction recorded on everyone else’s copy of their book.
- **It is Transparent**: A blockchain is like a virtual roundtable for sharing data, which means all members can see the entries recorded in the blockchain ledger.
- **It is Decentralized**: Members do not need to rely on any one person or entity to determine which transactions are correct, but are instead relying on the consensus of multiple members. If one or two “books” were to be lost or destroyed, the correct record of transactions would still be intact because there are many other versions of the same book. This also makes the process more **secure**.

All of these benefits, _immutability, transparency, decentralization and security_, help to reduce the costs that individuals and entities incur to trust each other, freeing up time and resources to run operations more efficiently.

## From Single-Entry to Triple-Entry bookkeeping

Blockchains represent a critical milestone in the way humans store and transfer value digitally. They are also a revolution in the way we practice accounting.

### Single-Entry Bookkeeping

Historically, merchants practiced _single-entry bookkeeping_, which meant all incoming and outgoing transactions, both revenues and expenses, would be recorded as a single-entry in a book or journal.

This approach was effective for cash transactions recorded by individual operators, but as transactions evolved to become more sophisticated, more stringent forms of auditing were required to accurately verify business records.

### Double-Entry Bookkeeping

We then evolved to _double-entry bookkeeping_, which creates a distinction between debits and credits using 2 separate accounts to record other types of transactions. At the end of the day, the entity that is in charge of recording the transactions must confirm that the amounts recorded as debits is equal to the amounts recorded as credits, a process referred to as ‘balancing the books’.

While more precise than single-entry accounting, double-entry accounting carries the flaw of centralization, which can lead to manipulation of the records in such a way that even if the debits and credits balance out, there is no way to ensure that the entries were not fraudulently inserted by a bad actor to create that balance.

### Triple-Entry Bookkeeping

With blockchains, the concept of _triple-entry accounting_ is introduced, whereby debits and credit are recorded on a transparent ledger just like a double-entry system, yet the process of balancing the books is done through the blockchain's [consensus mechanism](consensus/consensus-mechanisms.md) instead of through a centralized entity.

The block confirmations submitted by validators on the network are considered to be the third-entry in the triple-entry bookkeeping process.

What makes this process special is that it is public, permissionless and maintained by a set of credibly neutral participants who are economically incentivized to ensure that credits and debits on the ledger are balanced without the need of a centralized intermediary.

![triple entry accounting](/img/blockchain-protocols/triple-entry-accounting.jpg)

## How Does a Blockchain Work?

Now that you’ve gotten an explanation of what a blockchain is at a basic level, let’s dive a bit deeper into how a blockchain works.

A **blockchain** is a decentralized ledger, or record book, that is shared across a distributed network of computers or “nodes”.

All **nodes** store the same copy of the ledger, and rely on majority consensus to determine when to update the ledger to reflect changes in the form of network updates or newly confirmed transactions.

Each **‘block’** contains a timestamp and information about recorded transactions, as well as the details about the previous block that it is linked to, forming a ‘chain’.

When a new block is added, it is linked to the previous block through a cryptographic hash function, which converts transaction data into a unique text string (or ‘hash’) that cannot be altered without changing the previous block's hash value and the entire history of the blockchain. This is why blockchains are considered to be immutable.

_Nodes_ are operated by ‘miners’ who are individuals or entities that have a monetary incentive to help validate transactions, meaning to confirm that the amounts sent and the final account values of each counterparty are correct, and maintain the security of the network through programmable consensus.

**Programmable consensus** is the mechanism that is used to enable thousands of independent nodes on a blockchain network to agree on what transactions are reflected on the ledger. This consensus mechanism can take multiple forms, the most common of which are [proof of work and proof of stake](consensus/pos-vs-pow.md).

![distributed ledger technology](/img/how-do-blockchains-work/distributed-ledger-technology.jpeg)

### The Nakamoto Consensus

One of the key consensus protocols used in Bitcoin is the Nakamoto consensus, named after Bitcoin's pseudonymous creator, Satoshi Nakamoto. This protocol dictates that all nodes in the network agree on the state of the distributed ledger, ensuring all transactions are validated and each copy of the blockchain is identical.  Furthermore, Nakamoto consensus incorporates the longest chain rule, also known as the proof-of-work chain rule. This rule asserts that if there are multiple versions of the blockchain within the network, the correct one is always the longest chain (the chain with the most proof-of-work effort invested). The longest chain rule helps prevent malicious activity and double-spending by ensuring all nodes are working on the same version of the blockchain, thus maintaining security and integrity in the Bitcoin network.

## The Architecture of a Blockchain

Now, let’s break down the key components of a blockchain and how each component integrates with the other.

### Genesis Block

The **genesis block** is the first block of a blockchain that is hard coded into the software and application that utilizes its blockchain.

It contains key information about the properties of the blockchain like total supply of coin, average time between blocks, size of the blocks and other relevant parameters.

Every block after the genesis block contains transaction data, along with a hash of the transactions, which is there in order to make sure that the information hasn’t been altered.

### Hash & Hash Function

A **Hash** is a sequence of numbers and letters that represents a snapshot of any size of data. A hash is uniquely linked to another piece of data such that altering a single piece of the linked data will also alter the hash.

A **[Hash Function](cryptography/hash-functions.md)** is a mathematical function that takes a data input of arbitrary length and size and produces an output of a fixed length and size. Any changes made to the input produces an entirely new output.

The [Bitcoin](cryptocurrency/bitcoin-glossary.md) blockchain uses a special type of hash function called **SHA-256**. SHA-256 plays a key role in the recording of transactions and the [mining process](mining/crypto-mining.md) on the Bitcoin blockchain.

Every bitcoin block contains the hash of the previous block within its block-header. This previous block hash links the blocks together to create an immutable chain.

### Block Headers

Each block in a blockchain contains a **block header**, which is used to identify a specific block in the chain. Block headers contain the following information:

- The **Hash** of the previous block in the chain that came before it.
- The **Merkle root** – A binary tree where each transaction represents a leaf of the tree.
- The **Timestamp**
- The **Difficulty Target** - The difficulty required for miners to solve the mathematical puzzle required to add the block to the chain.
- **Version** - The current version number of the blockchain software/protocol.
- **Transaction Count**
  - The number of transactions in the block.
- **Nonce Value**
  - The number of zeros not known to the miner that has to be calculated using the miners node. The more zeros, the higher the block's difficulty.

## Blockchain Layers

A typical public blockchain consists of 4 layers:

1. Protocol/Data Layer
2. Network Layer
3. Consensus Layer
4. Application Layer

### Protocol Layer: Hardware/Infrastructure layer + Data layer

The protocol layer encapsulates both the _hardware_ and _data_ layers of the blockchain.

#### Hardware/Infrastructure layer

The hardware/infrastructure layer is where data from the blockchain network is stored on nodes. [Nodes are computers](architecture/blockchain-nodes.md) that can download a copy of the blockchain ledger and participate in verifying data signatures and validating new block transactions through the process of mining.

While the nodes that make up a blockchain network are decentralized, each individual node is merely a computer that relies on physical or cloud server providers like AWS, Azure or IBM to operate.

We can consider these servers to be an additional component to the hardware/Infrastructure layer.

#### Data Layer

The data layer is where the data about the digital signatures and hashes that make up the transactions within a blockchain are stored.

_The data layer consists of the 3 main components_: blocks, merkle trees and digital signatures.

**_Blocks_** are [data structures](fundamentals/blockchain-data-structure.md) that are used to bundle sets of transactions and distribute them to all nodes on the network.

A **_Merkle tree_** is a binary tree of hashes. A hash is cryptographic recording of the previous block’s details such as the timestamp and transaction values. The hash is used to chain a new block to the previous block.

Contained within each block is information about the hash of the previous block, the timestamp, the nonce value (sequential numbers added to an encrypted block for miners to calculate), the version number of the block, and its current difficulty target.

Transactions are digitally signed on the blockchain to ensure the security and integrity of the data stored on it. **_[Digital signatures](cryptography/digital-signatures.md)_** use asymmetric cryptography to secure information about the block, transactions and transacting parties.

### Network Layer

The network layer, or P2P layer, is where nodes communicate and synchronize with each other to maintain a valid current state of the blockchain network. Before a transaction is committed to the ledger, it is first broadcast across the network of nodes, which coordinate to reach consensus before on whether it should be accepted into the ledger.

Within the network layer, transactions flow in a sequence of steps that highlight the interaction between nodes in a P2P network. A **[P2P network](p2p-networks.md/)** is a computer network where computers (nodes) are distributed and share the network’s workload to reach the end goal.

### Consensus Layer

The consensus layer is where a blockchain consensus mechanism exists. It is the most critical layer of a blockchain as it is where the rules and incentives are decided for nodes to validate transactions and update the state of the ledger.

**There are multiple consensus mechanisms, the most common of which are illustrated below:**

<table class="table">
  <tr>
   <td>
   </td>
   <td><strong>Proof of Work</strong>
   </td>
   <td><strong>Proof of Stake</strong>
   </td>
   <td><strong>Practical Byzantine Fault Tolerance </strong>
   </td>
  </tr>
  <tr>
   <td><strong>Blockchain Type</strong>
   </td>
   <td>Permissionless
   </td>
   <td>Permissionless and Permissioned
   </td>
   <td>Permissioned
   </td>
  </tr>
  <tr>
   <td><strong>Transaction Finality</strong>
   </td>
   <td>Probabilistic
   </td>
   <td>Probabilistic
   </td>
   <td>Deterministic
   </td>
  </tr>
  <tr>
   <td><strong>Needs Token</strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td><strong>Usage</strong>
   </td>
   <td>Bitcoin & Ethereum
   </td>
   <td>Ethereum
   </td>
   <td>Hyperledger Fabric
   </td>
  </tr>
</table>

There are other consensus protocols, including Delegated proof of stake (DPoS), Proof of authority (PoA), Proof of assignment (PoA) and more.

### Application layer

The application layer is the customer facing layer of your blockchain solution. It is where end users interact with decentralized applications, or Dapps, and other user interfaces that are connected to the [underlying blockchain protocol](architecture/blockchain-protocols.md) through APIs.

The application layer has a sublayer which is called the **execution layer**, where [smart contracts](defi/smart-contracts.md) and the underlying rules that power Dapps reside.

## Tips for Building a Blockchain Solution

Decentralization is a gauge that can be adjusted based on the needs of the developer in crafting their blockchain solution.

When evaluating how much decentralization is enough for your blockchain, developers often refer to the blockchain scalability trilemma, which is a series of trade-offs between decentralization, speed/scalability and security that one must make when designing a blockchain and constructing rules for its on-chain [governance](governance/blockchain-governance.md).

![scalability trilemma](/img/layer-0/scalability-trilemma.jpg)

- _**Centralization** = Increased Speed, Decreased Transparency & Security_
- _**Decentralization** = Decreased Speed, Increased Transparency & Security_

Use cases such as p2p payments, DEX trading, [play to earn games](metaverse/play-to-earn-games.md), NFT marketplaces and social networking all require high transaction speeds at low cost. This often comes with the tradeoff of decentralization, as you are opting for the type of network that has fewer nodes and can therefore arrive at consensus on the state of the network in less time.

Fewer nodes comes with the drawback of greater security risks because it may only take a handful of nodes turning offline for the entire network to go down. It also increases the risk of censorship, as it is much easier for a transaction to be censored if the network is controlled by a handful of entities.

_On the other side of the spectrum_, use cases such as stores of value, healthcare data management systems and public land registries require much higher security and lower emphasis on speed.

This is because the value of the data is greater and the number of times that data is expected to be transferred back and forth between parties is less frequent than in the case of a trading or gaming application.

There are other factors to consider when constructing a blockchain network, such as:

**[Interoperability](interoperability/blockchain-interoperability.md)**

The ability for blockchain networks to communicate and transfer data between each other in a seamless manner regardless of the differences in their consensus mechanisms or underlying architecture.

**[Modularity](architecture/modular-vs-monolithic-blockchains.md)**

The separation of a blockchain network into 3 specialized components: execution, consensus and data availability.

**[Composability](interoperability/ethereum-virtual-machine-evm.md)**

The ability for the components of one system to be reused in another.

For example, the Ethereum Virtual Machine (EVM) makes it so that every smart contract can be made to interact with any other that is built using the EVM, regardless of what blockchain it is, as long as it is EVM compatible. 

Avalanche, Fantom, Binance Smart Chain, and Horizen EON are examples of EVMs.

:::info EVM on Horizen
[**Horizen EON**](https://eon.horizen.io/) is our first public proof-of-stake sidechain and a fully EVM-compatible smart contracting platform that allows developers to efficiently build and deploy dapps on Horizen, while fully benefiting from the Ethereum ecosystem.
:::
