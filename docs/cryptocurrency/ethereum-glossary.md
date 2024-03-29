﻿---

sidebar_label: Ethereum
title: What is Ethereum? - An Ethereum Glossary
slug: /ethereum-glossary/
description: Ethereum is a blockchain network that enables developers to launch their own tokens and build decentralized applications (DApps) using smart contracts.
image: https://www.horizen.io/academy/img/ethereum-glossary/ethereum-glossary-meta.jpeg
last_update:
  date: 2/21/2023
  author: Horizen Contributor

---

# What is Ethereum? - An Ethereum Glossary

_Ethereum_ is a blockchain network that enables developers to [launch their own tokens](tokenomics/what-is-a-token.md) and build decentralized applications (DApps) using smart contracts. 

### What are Dapps?
_Decentralized applications_ (or Dapps) are applications that are built on top of [blockchain protocols](architecture/blockchain-protocols.md) and leverage [smart contract technology](defi/smart-contracts.md). 

Dapps take many of the operating models of web2 platforms and traditional banking services and apply blockchain technology to make them operate in a format that is peer to peer, trustless and more transparent.

### What is ETH?

Ether, or _ETH_, is the currency of the Ethereum blockchain. It is used to pay miners to validate transactions and also used to pay for products and services on the various Dapps and marketplaces built on the Ethereum network, for instance purchasing NFTs on OpenSea.

### What is a Smart Contract?

One of the core features of the Ethereum network is the _Smart Contract_, which is a type of computer program that executes a set of functions based on predefined rules or conditions set by the developer.

With [smart contracts](defi/smart-contracts.md), users can conduct all kinds of agreements that involve anywhere from two individuals to several thousands of people without the need of an intermediary. 

### Smart Contract Example

A smart contract can be used to manage [loan transactions](defi/crypto-lending.md) between 2 anonymous parties: 

- Person **A** locks **1 ETH** in a smart contract as collateral to borrow **$4,000** from Person **B**
- The terms of the smart contract dictate that Person **A** must repay the loan in **6** months at **10%** interest
- If Person **A** repays the loan plus interest on time to Person **B**, the funds from the smart contract will automatically be released back to Person **A**’s [digital wallet](wallets/crypto-wallets.md)
- If Person **A** fails to repay the loan on time, the funds from the smart contract will automatically be released to Person **B**’s digital wallet. 

:::info Cobalt Web Wallet
[**Cobalt**](https://www.horizen.io/wallets/cobalt/) is a secure and easy-to-use web extension wallet for the Horizen cross-chain ecosystem. Trustworthy, reliable and built to easily manage your assets.
:::

*Other functions that a smart contract can be used for include:* 

- Launching tokens that are pegged to the price of other assets
- Managing liquidity pools to enable users to trade tokens peer to peer, 
- And encoding the rules for [play to earn games](metaverse/play-to-earn-games.md) 

In all of these examples, the rules for each program that have been coded into the Blockchain, and are therefore transparent and immutable.

## Ethereum Infrastructure

Ethereum **nodes** record and transmit copies of transaction data, including smart contract data, on the ethereum blockchain, which is then read by the _Ethereum Virtual Machine_ (EVM) to update the ledger. 

### What is EVM?

The **Ethereum Virtual Machine** is a computation engine that is in charge of executing smart contract transactions and computing the state for every new block added to the Ethereum blockchain. 

We can think of the [EVM](interoperability/ethereum-virtual-machine-evm.md) as a piece of software that sits on top of the hardware/node infrastructure of the blockchain and performs critical functions such as running and compiling code used for dApps and smart contracts. 

The EVM is a **turing complete software**, meaning that the software is agile enough to run any code defined by the developer. The virtual machine enables smart contract code to be executed by a [global P2P network of computers](fundamentals/p2p-networks.md). 

Contracts written in a smart contract–specific programming language, like Solidity, are compiled into ‘bytecode’ to be read by the EVM. All nodes then execute this contract using their EVMs, which in turn updates the ledger.

:::info EVM on Horizen
[**Horizen EON**](https://eon.horizen.io/) is our first public proof-of-stake sidechain and a fully EVM-compatible smart contracting platform that allows developers to efficiently build and deploy dapps on Horizen, while fully benefiting from the Ethereum ecosystem.
:::

The performance of the EVM is only limited by the amount of _gas_ that is provided by the client to process each transaction:

- **Gas** is a measure of how much computing power is needed to process transactions and power smart contracts and Dapps on the Ethereum network. 

- **Gas fees** priced in Eth or Gwei are paid to miners on the Ethereum blockchain in order to validate a transaction.

![what is evm](/img/ethereum-glossary/ZBF_Academy_article_what-is-EVM.jpg)

## Core Components of the Ethereum Network

#### Ethereum Virtual Machine
- A computation engine that is in charge of executing smart contract transactions and computing the state for every new block added to the Ethereum blockchain. 
#### ETH
- The native currency of the Ethereum Blockchain
#### Smart Contracts
- Computer coded contracts that self-execute based on predefined rules; a collateral is automatically released to one party or the other depending on whether a loan is repaid.
##### Bytecode 
- A standard format for compiling smart contract code that makes it readable by the Ethereum network and therefore enables transactions from those smart contracts to be recorded by Ethereum nodes.
##### Gas
- Gas is a measure of how much computing power is needed to process transactions and power smart contracts and Dapps on the Ethereum network. Gas fees are paid to miners in order to validate transactions. 
- Ethereum gas fees are denominated in GWEI (1 billion gwei = 1 ETH)
#### Dapps
- Decentralized applications that run on top of Ethereum 
- Dapps leverage smart contracts to execute transactions without the need of a central authority. They are the consumer facing part of the network that consumers and other external stakeholders will interact with when using your blockchain. 
#### Oracles
- A 3rd party data feed that transmits data from external sources into the smart contract in order to help it execute (e.g an [oracle](defi/blockchain-oracles.md) might transmit price data from a [cryptocurrency](cryptocurrency/cryptocurrency.md) exchange to help determine what price a smart contract will need to liquidate the ethereum collateral it holds if the value falls below the amount of US dollars lent out).
#### Layer 2
- A scaling solution that sits on top of a layer 1 blockchain like Bitcoin or Ethereum. Layer 2’s (or [L2s](scalability/layer-2.md)) increase the speed and reduce the cost of transacting on a blockchain by setting up separate networks or channels where transactions can be executed between a limited set of participants. 

## How Are Transaction Fees Calculated on Ethereum?

To review:

- Gas fees are paid in **ETH**
- Are denoted in **gwei**
- 1 gwei is equal to **0.000000001** ETH

The recent changes to the protocol created by EIP-1559 make it so that every transaction now has a base fee and a tip, also known as a priority fee.

**_Gas units (limit) x (Base fee + Tip) = Total Transaction Fee_**

- The **base fee** is the minimum price per unit of gas that is necessary for a transaction to be included in a block
- The **fee** **amount** is calculated by the network based on demand for block space

Under EIP-1559, the base fee for every transaction is automatically burned, meaning taken out of circulation, which is meant to reduce the supply of ETH over time. 

The **priority fee** is set by the end users as a way to incentivize miners to include their transaction in the next block. 

## Scalability Challenges on Ethereum

While the Ethereum network offers a more robust infrastructure for developing peer-to-peer marketplaces, the network is yet to completely solve the problem of high gas fees during times of network congestion. 

### High Gas Fees

High gas fees could become a significant deterrent for users adopting your Dapp, particularly those in developing nations where a few extra dollars in gas fees can make a difference in whether or not a user makes a transaction. 

Layer 2 solutions like[ Polygon](https://www.gemini.com/cryptopedia/polygon-crypto-matic-network-dapps-erc20-token#section-polygon-crypto-network-basics) currently exist on Ethereum to mitigate some of these scalability challenges, while alternative blockchains like Solana claim to process[ 50,000 TPS](https://solana.com/).

In addition, while Ethereum offers more flexibility and scalability than traditional single-purpose blockchains like [Bitcoin](cryptocurrency/bitcoin-glossary.md), it has had many issues scaling to support the massive influx of new users on Defi protocols like Uniswap or NFT marketplaces like OpenSea.

#### Why are Gas Fees So High?

As more users transact on the Ethereum blockchain, the network begins to experience congestion, which causes high gas fees.

The higher the fees are to transact, the less affordable it is for the average user to interact with the Dapps on Ethereum. 

Furthermore, because Dapps are built on Ethereum, developers rely on the underlying [proof of stake consensus protocol](consensus/pos-vs-pow.md) of the Ethereum network for their Dapps security and scalability. This means that if a single popular Dapp experiences congestion due to high traffic, then so do all Dapps. 

That means if the Ethereum blockchain’s security is ever compromised, all Dapps will also be impacted. 

## Ethereum 2.0

Ethereum 2.0, or ETH2, is the next phase of Ethereum's network development that kicked off with the “[Merge](https://ethereum.org/en/upgrades/merge/)” that occurred on September 15th 2022 . 

**ETH2** upgraded the current Ethereum network from a proof of work [consensus mechanism](consensus/consensus-mechanisms.md) to proof of stake. 

The upgrade was referred to as a _merge_ because the entire consensus layer of the Ethereum mainnet is being merged with a new [PoS chain](consensus/pos-vs-pow.md) called the **Beacon Chain**. 

Future plans on Etherum’s roadmap include introducing upgrades like _rollups_ and _sharding_ to help scale the network by providing multiple parallel networks to conduct transaction execution and data storage. 

#### ETH2 Throughput

If successful, the end state of Ethereum 2.0 is expected to be capable of handling over 100,000 transactions per second across its various shards and rollups.

The update Ethereum 2.0 is expected to be completed by 2024. 

## The Horizen Alternative 

Recognizing the scalability challenge of layer 1 blockchains like Etheruem, the Horizen network has chosen to build a network of independent blockchains, known as [**sidechains**](scalability/sidechains.md), that allow for more scalability and flexibility instead of relying on all activities to occur on one single blockchain. 

By building on Horizen, developers have the freedom to fully customize their blockchains, including:

- Consensus type
- Speed
- Privacy level
- and [Tokenomics](tokenomics/tokenomics.md)

Blockchains built on Horizen can produce up to 1,000 transactions per second and over 10 million transactions across 10,000 connected blockchains without compromising decentralization. 

###  Horizen EVM Compatibility

A major focus of the Horizen ecosystem in 2022 is to achieve EVM compatibility.

**EVM Compatibility** simply means the ability to write and deploy smart contract code that is compatible with the Ethereum virtual machine and can therefore be recognized by the Ethereum nodes. 

*EVM compatibility has enabled many popular L1 blockchains including:*

- Avalanche
- Binance Smart Chain
- Polygon
- Solana
- Harmony
- Fantom

…to become highly successful by reducing the barriers to entry for application developers to deploy smart contracts on these new chains due to the code being compatible with the Ethereum network. 

This means that a Dapp developer can seamlessly deploy the same code on Ethereum, Avalanche or Polygon without needing to conduct costly and time consuming smart contract audits.

This ‘**plug and play**’ capability greatly expands the possibilities for emerging blockchains to attract developers to their ecosystem by reducing the time it takes to launch new Dapps and begin capturing market share from within a brand new network. 

