---

sidebar_label: Nodes
title: What is a Node in Blockchain?
slug: /blockchain-nodes/
description: Nodes are operated by miners or validators, individuals or entities that earn block rewards for helping validate transactions.
image: https://www.horizen.io/academy/static/img/blockchain-nodes/crypto-nodes-meta.jpeg
last_update:
  date: 2/21/2023
  author: Horizen Contributor

---

# What is a Blockchain Node?

A **node** is a computer that operates the software of a blockchain. 

The main function of a node is to store and validate blockchain transaction data in order to maintain a record of the blockchain's history and/or to earn newly issued [cryptocurrency](cryptocurrency/cryptocurrency.md) from the network, also known as [mining](mining/crypto-mining.md) or block rewards.

Nodes are operated by miners or validators, these are individuals or entities that earn rewards in the form of cryptocurrencies for helping validate transactions. To validate a transaction simply means to confirm that the amounts sent and the final account values of each counterparty are correct. 

Other responsibilities of miners and validators include storing a history of the blockchain and maintaining their nodes to ensure 100% uptime. 

All blockchains are powered by a **network of nodes** that each store their own copy of the ledger. We can think of a node as a copy of a book that is managed by members of a network sitting at a round table. Each member is responsible for updating their book with the latest record of transactions.

Each node stores a copy of the ledger and updates it in sync with everyone else’s node once the latest transactions have been verified.

## Why Do We Need Nodes in Blockchain?

Nodes are the fundamental backbone of a blockchain network. They enable blockchains to maintain a secure, transparent and tamper proof record of transactions dating back to the beginning of the blockchain’s history, 

The _more_ nodes there are that store the blockchain's history and validate transactions, the more secure the network. This is because a larger set of nodes, particularly when distributed across different locations around the world, are ultimately less prone to censorship because there is no single point of failure. 

Today, the [Bitcoin](cryptocurrency/bitcoin-glossary.md) network has over [11,000](https://bitnodes.io) nodes that each hold a copy of the network's latest transactions and transaction history. The [Ethereum network](cryptocurrency/ethereum-glossary.md) currently has over [10,000](https://etherscan.io/nodetracker) nodes.

## What are the Different Types of Nodes?

_There are 4 types of nodes on the Bitcoin network: Full nodes, light nodes, archive nodes and mining nodes_

* **Full Nodes**

    * Full nodes store the complete history of transactions on the network so that they can easily be retrieved by anyone who wants to verify the blockchain.

    * *Full nodes do not earn mining staking rewards for storing blockchain data.*

* **Light Nodes**

    * Light nodes are similar to full nodes, except they *do not* hold a complete history of a blockchain. Instead, they store and provide just the necessary data to accommodate daily activities or faster transactions.

 * **Archive nodes**

	 * Archival nodes are full nodes that preserve the entire history of transactions as well as the various historical states of the blockchain. They can best be used for historical data analysis or reporting.

	 * Archive nodes are different from full nodes in that they typically require more storage space to run as they are not only recording the full history of transactions but also previous states of the network.

* **Miner/Validator Nodes**

    * Miner nodes are responsible for creating new blocks by solving the computational problems required to validate transactions and win the block rewards.

    * It is called a miner node on a [proof of work blockchain](consensus/proof-of-work-pow.md), and a validator node on a [proof of stake or other consensus blockchain](consensus/pos-vs-pow.md).

    * Miner nodes must run a full node, meaning they must hold a copy of the entire blockchain ledger in order to mine blocks and earn rewards.

## Where do Nodes Fit in the Blockchain Technology Stack?

The typical blockchain technology stack consists of 5 layers: 

- The **Hardware/Infrastructure** Layer
	- Also known as the Protocol Layer
- The **Data** Layer
	- Also part of the Protocol Layer
- The **Network** Layer
- The **Consensus** Layer 
- The **Application** Layer

The **Protocol Layer** encapsulates both the hardware and data layers of the blockchain.

* The **Hardware/Infrastructure layer** is where data from the blockchain network is stored on nodes.

* **Nodes** download a copy of the blockchain ledger and participate in verifying data signatures and validating new block transactions through the process of mining or staking. 

* While the nodes are decentralized in principle, each individual node is just a computer that relies on **physical or cloud service providers** such as Amazon Web services, Azure, or BlockDaemon to operate. 

    * These service providers can be considered an additional component to the Hardware/Infrastructure layer.

## How do Nodes Work on Ethereum?

Ethereum nodes, or _clients_, record and transmit copies of transaction data, including smart contract data, on the Ethereum blockchain, which is then read by the Ethereum Virtual Machine (EVM) to update the ledger. 

* EVM is a **Turing complete** software, meaning that the software is agile enough to run any code defined by the developer. 

:::info EVM on Horizen
[**Horizen EON**](https://eon.horizen.io/) is our first public proof-of-stake sidechain and a fully EVM-compatible smart contracting platform that allows developers to efficiently build and deploy dapps on Horizen, while fully benefiting from the Ethereum ecosystem.
:::

* The virtual machine enables smart contract code to be executed by a global [P2P network](fundamentals/p2p-networks.md) of computers. 

    * Contracts written in a [smart contract–specific programming language](defi/smart-contracts.md) like solidity are compiled into ‘bytecode’ to be read by the [EVM](interoperability/ethereum-virtual-machine-evm.md). All nodes then execute this contract using their EVMs, which in turn updates the ledger.

* The performance of the EVM is only limited by the amount of gas that is provided by the client to process each transaction. 

    * **Gas** refers to the fee, priced in Eth or Gwei, or pricing value required to successfully conduct a transaction or execute a contract on the Ethereum blockchain platform.

 
## How do Nodes Work on Bitcoin?

When a new bitcoin transaction is signed by the sender, it must be broadcast throughout the Bitcoin network so that all nodes including, full, light and mining nodes, can verify it.

* The first node to receive the signed transaction will verify the transaction information, input/output, timestamp, etc, and also verify the transaction signature against the public key of the sender to confirm that they possess the private keys that allows them to authorize this transaction.

* Once verified, the transaction will be shared to other nodes that the first node is connected to. These nodes will perform the same process of verifying the signed transaction.

* Each node will share the signed transaction to other nodes until all nodes on the network have received and verified the signed transaction.

* On the Bitcoin network, all nodes must independently verify each signed transaction before the transaction goes on to be validated by a mining node and added to the next block. This process allows the network to be resistant to denial-of-service ([DDoS](security/blockchain-attacks.md)) attacks.

* Once the signed transaction has been propagated throughout the network and verified by all nodes, the mining node that has correctly guessed the nonce value for the block header will be granted the right to validate the transaction and add it to the next block of transactions in the chain.

    * For performing this act, the Bitcoin mining node would be rewarded with 6.25 BTC, the current block reward.

* The transaction must be recorded in at least 6 blocks in order for it to be confirmed as final and for the receiver to be allowed to spend their newly acquired BTC.

## How to Run an Ethereum Node?

Running a node on Ethereum allows you to store the blockchain's transaction history and participate more directly in network's consensus and security.

An Ethereum node can be run using any personal computer by downloading the software that contains a copy of the Ethereum blockchain and verifies transactions. 

To ensure 100% uptime and stronger performance, most users choose to run nodes using dedicated computer hardware. 

One of the first considerations to make when deciding to run a node is whether to choose a hardware or cloud based solution to host the blockchain data. 

As we mentioned earlier, many nodes rely on physical or cloud service providers such as AWS, Azure, or BlockDaemon to operate. You can alternatively choose to store the data on your own custom hardware device, however that could be more costly to manage over time. The benefits of using your own custom hardware device is greater sovereignty and no reliance on 3rd party providers. 

Ethereum’s client software supports major operating systems such as Linux, MacOS or Windows. According to [Ethereum.org](https://ethereum.org/en/developers/docs/nodes-and-clients/run-a-node/). These are the minimum and recommended specifications for a computer to run Ethereum’s client software: 

**Minimum Requirements**
* _CPU with 2+ cores_
* _8 GB RAM_
* _700GB free disk space_
* _10+ MBit/s bandwidth_

**Recommended specifications**
* _Fast CPU with 4+ cores_
* _16 GB+ RAM_
* _Fast SSD with 1+TB_
* _25+ MBit/s bandwidth_

These are the recommended disk space requirements for running different Ethereum clients. A **client** is an implementation of Ethereum that verifies data against the [protocol's rules](architecture/blockchain-protocols.md) and secures the network.

|   Client   | Disk Size _Snap Sync_ | Disk Size _Full Archive_ |
|:----------:|:---------------------:|:------------------------:|
| Geth       | 500BG+                | 12TB+                    |
| Nethermind | 500GB+                | 12TB+                    |
| Besu       | 800GB+                | 12TB+                    |
| Erigon     | N/A                   | 2.5TB+                   |

Etherum.org recommends using any of the following [providers](https://ethereum.org/en/developers/docs/nodes-and-clients/run-a-node/) to help setup your client:

* [DappNode](https://docs.dappnode.io/) 
* [eth-docker](https://eth-docker.net/)
* [Stereum](https://stereum.net/ethereum-node-setup/) 
* [NiceNode](https://www.nicenode.xyz/) 

Although your node does not need to be online all of the time, it is recommended that you try to keep it online as much as possible in order to stay in sync with the network . In the event that your node goes offline, you will need to resync with the network when it restarts, which can take some time depending on how long it was offline.

## How to Run a Bitcoin Node?

Bitcoin Core is the most popular client for running a Bitcoin full node. To begin running a node, you must download the Bitcoin Core software, which comes with the following requirements:

**System**
- Desktop
- Laptop
- Some ARM chipsets > 1 GHz

**Operating System**
- Windows 7/8.x/10
- Mac OS X
- Linux

**Disk Space**
- 350 GB

**Download**
- 500 MB/Day
	- 15 GB/Month

**Upload**
- 5 GB/Day
	- 1450 GB/Month

**Memory (RAM)**
- 1GB

*Additionally, a one-time 340 GB download the first time you start Bitcoin Core*

To set up a node, you must first synchronize your node to the network using the [Initial Block Download](https://developer.bitcoin.org/devguide/p2p_network.html#initial-block-download) or IBD. Similar to Ethereum, downloading the Bitcoin Core software uses a lot of storage space. You can find some tips for [reducing storage space](https://bitcoin.org/en/full-node#reduce-storage) on Bitcoin's website.

If you don’t wish to run a node with your own dedicated hardware, you can choose a cloud service provider to store the data. After downloading the full history of the Bitcoin blockchain, you will be able to see new blocks of transactions being added every 10 minutes. 
