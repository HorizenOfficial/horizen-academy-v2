---

sidebar_position: 62
sidebar_label: zk-Rollups
title: What are zk-Rollups in Blockchain?
slug: /zk-rollups/
description: ZK-Rollups enable layer 2 transactions to be transmitted and verified by the Ethereum mainnet without nodes knowing the details of each transaction. 
image: /img/zk-rollups/zk-rollups-meta.jpeg

---

For the longest time, privacy technologies in the blockchain space have been adopted primarily as a way to obfuscate transactions from being visible on a public ledger. Networks like ZCash pioneered the use of zk-SNARKs to shield public transactions using highly advanced cryptography. 

As the industry evolved and the primary focus amongst developers became how to scale blockchains to process more transactions in less time and at lower cost, [**zero-knowledge proofs**](https://www.horizen.io/academy/zero-knowledge-proofs-zkp/) re-emerged as a technology that could be applied to enable faster yet more centralized networks to securely backup their ‘state’ on a more robust and censorship resistant chain, all while maintaining privacy of the underlying transaction records.    

This unique combination of blockchain privacy and scalability became known as ZK-rollups.

## What are zk-Rollups?

**ZK-Rollups** are an innovation initially launched on Ethereum that enables layer 2 transactions to be transmitted and verified by the [Ethereum](https://www.horizen.io/academy/ethereum-glossary/) mainnet without the Ethereum nodes knowing the details of each transaction. 

It is designed to offer greater scalability to the Ethereum network by only requiring the [Ethereum nodes](https://www.horizen.io/academy/nodes/) to verify the proof of computation rather than the transaction data itself.  

Zk-rollups were invented based on the understanding that certain activities such as on-chain derivatives or gaming required higher transaction speeds and lower costs that the Ethereum layer 1 could not support. It therefore made sense to migrate these activities over to a second ‘off-chain’ layer that was optimized for transaction speeds, using the Ethereum mainnet for final settlement and storage of transaction data. 

## How zk-Rollups Work

Periodically, transaction data from L2s are batched into a **cryptographic ‘proof’.** This is basically a certificate that proves that the transactions within the L2 have been correctly validated based on a standard process that is recognized by the L1 mainchain.

This proof is then submitted to the mainchain, where it is validated by the L1 nodes as a single transaction similar to how they would validate any other transaction. 

The end result is that the most current ‘state’ of the L2, an accounting of user balances and total values in each [wallet](https://www.horizen.io/academy/crypto-wallets/), is permanently recorded on the mainnet, ensuring that the records can be recovered in the event that the L2’s security is compromised.  

[*Layer 2s*](https://www.horizen.io/academy/layer-2/) are considered off-chain scaling solutions for Dapps. They are not independent blockchains and therefore are less secure, relying on the Ethereum network for final transaction settlement.

Zk-rollups represent the first major step in Ethereum’s transition from a monolithic to a [modular blockchain architecture](https://www.horizen.io/academy/modular-vs-monolithic-blockchains/). In a modular architecture, blockchains separate critical functions such as execution, consensus and data availability into different specialized networks. This allows the broader network to function more effectively and mitigate some of the challenges caused by the famous scalability trilemma. 

![ethereum modulation](/img/modular-vs-monolithic-blockchains/ethereum-modulation.jpg)

L2s like LoopRing, Polygon and Immutable X operate on top of the Ethereum network and inherit the security of the Ethereum mainchain through the use of zk-Rollups. 

All transactions on these L2 must ultimately be validated on the Ethereum mainnet, which makes them more secure and censorship resistant than they would be if only stored on the L2. 

## Differences Between Layer 2s and Sidechains

**Layer 2s** are considered off-chain scaling solutions for blockchains and Dapps, typically set up as payment channels to exchange funds between a small group of participants using a [smart contract](https://www.horizen.io/academy/smart-contracts/).

L2’s can exist as simple [payment channels](https://www.horizen.io/academy/payment-channels/), like Lightning Network, or as an entirely separate node networks, like Polygon. What makes an L2 distinct is that it relies on a mainchain network like Ethereum or [Bitcoin](https://www.horizen.io/academy/bitcoin-glossary/) for final transaction settlement and security.

By contrast, **Sidechains** are independent blockchains that can operate their own [consensus mechanism](https://www.horizen.io/academy/consensus-mechanisms/) and can validate and settle transactions independently without the need for a mainchain.

This however does not mean that transactions on a sidechain cannot also be validated by its mainchain, it is just not a requirement for the security of the network to be maintained.

By enabling [sidechains](https://www.horizen.io/academy/sidechains/) and L2s to communicate and transfer value between each other and between the mainchain, a process known as [interoperability](https://www.horizen.io/academy/blockchain-interoperability/), a network of blockchains could perform and operate as 1 single blockchain, having solved the scalability trilemma through specialization as opposed to making tradeoffs.

Additionally, with a modular architecture, increased specialization means that sidechains can be optimized for specific traits like _speed_, _security_, _privacy_, and _decentralization_, instead of all of those traits being forced into one single blockchain with less effective results.

## Zero-Knowledge Scaling Solutions

### Horizen Zk-SNARKS

Horizen leverages zk-SNARKs in a similar way to how Ethereum mainnet leverages Zk-Rollups. The main difference is that Horizen offers a set of software development tool kits for launching independent blockchains, or sidechains, that have the option to submit transcripts to the Horizen  main chain using Zk-SNARKS. 

### Polygon ZK-Rollups

Polygon is one of the largest and most popular scaling solutions on Ethereum. It is technically a sovereign blockchain with its own validator set and [native token](https://www.horizen.io/academy/what-is-a-token/) - MATIC. 

However, it also functions partly like a layer 2, adopting zk-rollup solutions aimed at scaling transactions and re-enforcing the security of the Polygon networks by submitting proofs back to the Ethereum mainnet.

#### Polygon Zero

Polygon Zero offers an improvement on the typical process of generating new cryptographic proofs, which can often be time and resource intensive. Normally, proofs are generated by batching multiple transactions based on an epoch (a period of time, such as every hour or every 10 minutes). 

Polygon Zero adopts ‘recursive proofs’, which generates multiple proofs at the same time for every transaction in the batch. The system then aggregates these proofs into one single proof that is submitted to the Ethereum mainnet. This method of producing a proof that is an aggregate of multiple proofs is thought to be less resource intensive and ultimately faster.  

#### Polygon Hermez
Polygon Hermez is the result of Polygon's acquisition of Hermez, a zk-rollup scaling solution for Etheruem in 2021. Hermez’s approach is to adopt a new consensus algorithm called proof of efficiency (PoE). 

PoE is optimized for decentralization, allowing anyone to take part as either a Sequencer or Aggregator. Sequencers accept transactions and include them in the next batch, while Aggregators are responsible for generating the ZK proofs that are submitted to the Ethereum mainnet. 

#### Polygon Miden

Polygon Miden is the first zk scaling solution on the Polygon network to adopt [zk-STARKs as opposed to zk-SNARKS](https://www.horizen.io/academy/zk-snarks-vs-zk-starks/). The core difference between the two ZK solutions is that STARKS do not require the use of a ‘trusted setup’ to produce new proofs while SNARKS do.
 
A trusted setup is an event that enables a set of private keys to be created that allows counterparties in a transaction to construct the ‘proof’ that must be verified in order for the transaction to be confirmed as valid.

A key criticism of the trusted setup model is that it relies on trusted 3rd parties to create private keys that are used to construct the proof, which makes the process more centralized.  If the private keys are not destroyed and a bad actor gains access to them, they could construct false proofs that would appear valid to the nodes on the Ethereum mainnet. 

As an alternative, zk-STARKs use random samples of publicly verifiable information as a way to construct proofs without relying on trusted parties.

With this approach, zk-STARKs claim to offer greater scalability in terms of improving speed and reducing the computational size of transaction data. 

Miden is an [EVM compatible](https://www.horizen.io/academy/ethereum-virtual-machine-evm/) STARK rollup, which means it is compatible with solidity programs and can therefore be easily adopted by Ethreum developers who wish to scale their dApps using the STARK approach. 

#### Polygon Nightfall 

Polygon Nightfall is a rollup solution designed for enterprises to produce [private transactions](https://www.horizen.io/academy/private-transactions/) that are also fast and scalable. 

While many enterprises recognize the value of blockchain technology to enable frictionless transactions between vendors and reduce compliance and auditing costs, the fact that all data submitted to the blockchain is public means that enterprises would be forced to disclose sensitive and proprietary information. This has been a major deterrent for companies to adopt public blockchains like Ethereum. 

Nightfall uses zk-SNARKs to make transactions and data uploaded to the blockchain private, while certain statements about the data can be proven true using zk-proofs. Polygon has partnered with big 4 accounting firm E&Y to deploy Nightfall as a ZK-rollup solution for the enterprise world. 

### StarkNet

StarkNet is a flagship project for the zk-STARK approach to zk-rollups. The inventor of zk-STARKs,  Eli Ben-Sasson, is also the founder of Starkware, the company behind StarkNet.

The most notable project to deploy on StarkNet was dYdX, an on-chain DEX for trading perpetual swap contracts. While the dYdX team has since opted to develop their own blockchain on Cosmos, their use of StarkNet showed how zk-rollups could enable transition to be cheap and fast enough to run a derivatives exchange on-chain.

### Loopring

Loopring leverages ZK-rollups on Ethereum to build a fast and low cost DEX and payments protocol. 

### Immutable X
Immutable X is an Ethereum based ZK-rollup protocol that is optimized for trading NFTs at lower cost and greater speeds. It offers a NFT marketplaces as well as the ability to trade in-game digital assets that are in the format of an ERC-721 or ERC-1155

