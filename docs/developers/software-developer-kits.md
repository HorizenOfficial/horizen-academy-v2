---

sidebar_label: Software Developer Kits
title: SDK Software Developer Kits
slug: /software-developer-kits/
description: In this article, you will learn about SDKs, Software Developer Kits.
image: /img/software-developer-kits/Horizen_Academy-meta-image-blockchain-SDKs.jpg

last_update:
  date: 8/25/2023
  author: Horizen Contributor

---
# Understanding Blockchain SDKs: A Comprehensive Guide

**Software Development Kits**, or **SDKs**, serve as comprehensive software bundles that equip developers with necessary tools to create innovative software solutions. In the context of blockchains, these toolkits become even more significant, facilitating the creation of blockchain platforms, applications, and advanced features. This article will delve into the concept of SDKs, especially within the blockchain context, and how they interact with APIs.

## SDKs and Their Connection to APIs

An SDK is essentially a **software developer's Swiss army knife**. It combines a myriad of development tools like a programming language compiler, a built-in database development environment, and notably, an **API (Application Programming Interface)** into one installable package. This integrated environment significantly streamlines the development process.

APIs, an integral part of SDKs, function as a bridge between different software applications or data sources. They permit data aggregation or transaction execution by connecting to various external resources such as websites, online databases, and blockchain networks. APIs play a crucial role in blockchain development projects by providing ready-made communication channels, thus saving considerable time.

## The Role of SDKs in Blockchain Development

Blockchain SDKs are designed for developers with substantial programming skills. Depending on the complexity of the task at hand, either an API or a complete SDK might be required. While APIs are adequate for basic data gathering and transactions on a blockchain platform, SDKs are essential for advanced objectives like launching a new blockchain or **enabling [cross-chain functionality](../interoperability/cross-chain-transactions.md)**. Although it's possible to develop blockchain solutions using individual programming tools, the integration offered by SDKs _significantly reduces development time and cost_.

## Blockchain APIs and REST API

APIs, especially those based on the Representational State Transfer (REST) style, play a crucial role in blockchain development. REST APIs operate by processing data requests provided via a Uniform Resource Identifier (URI). The requested resource, often returned in a JSON or XML format, can represent various structured data, such as a list of cryptocurrency symbols with their current price values.

Examples of crypto APIs include interfaces that allow updated cryptocurrency prices from crypto exchanges or enable transactions on blockchain networks like [Bitcoin (BTC)](../cryptocurrency/bitcoin-glossary.md) or [Ethereum (ETH)](../cryptocurrency/ethereum-glossary.md). These APIs, while typically employed by programmers, can also be used by technically-savvy non-developers. Provided, they are **well-documented and user-friendly**.

## Top Blockchain SDKs

Numerous SDKs are available for blockchain development, with notable ones including the Cosmos SDK, Samsung Blockchain SDK, and [Tatum JavaScript Blockchain SDK](https://tatum.io/).

1. **Cosmos SDK**: Provided by the Cosmos blockchain platform, Cosmos SDK supports the development of a network of individual blockchain platforms. It aims for interoperability among various networks built using Cosmos technology. The blockchains supported by Cosmos are based on [Proof of Stake (PoS) block validation](../consensus/proof-of-work-pow.md), offering faster and cheaper usage compared to older [Proof of Work (PoW) platforms](../consensus/proof-of-work-pow.md).

2. **Samsung Blockchain SDK**: This SDK is renowned for its extensive support for **smart contract-based development**, making it a preferred choice for [developers of decentralized applications (DApps)](../developers/smart-contract-developers.md). It supports development on popular smart contract-oriented platforms like Ethereum and Tron (TRX).

3. **Tatum JavaScript Blockchain SDK**: This JavaScript-based toolkit supports blockchain development for over 40 platforms, including Bitcoin, Ethereum, Horizen, Ripple XRP, Litecoin, Bitcoin Cash, Hyperledger, Cardano, and Tron. Its extensive variety is its most significant strength.

4.  **Alchemy SDK**: Regarded as a top platform for web3 development, the Alchemy SDK offers a straightforward, efficient, and all-inclusive solution for creating and integrating your decentralized application (dapp) with the blockchain. It provides developers with a suite of web3 tools, spanning APIs, NFTs, wallets, and data analytics, among others. With its capability to support multiple chains and its unrivaled infrastructure, Alchemy's SDK is a formidable force in the realm of dapp development.

## Cosmos SDK: An In-Depth Look

The Cosmos SDK is one of the most established open-source frameworks used to build **multi-asset public Proof-of-Stake (PoS) blockchains**, similar to the Cosmos Hub, as well as **permissioned Proof-of-Authority (PoA) blockchains**. It aims to simplify the creation of custom blockchains that can natively interoperate with other blockchains. SDK-based blockchains are constructed from composable modules, which are typically open-source and readily accessible for developers to leverage. The Cosmos SDK makes the integration of already-built modules as simple as importing them into your blockchain application, _significantly simplifying_ the development process. 

Moreover, the Cosmos SDK operates on a capabilities-based system, which enhances the security of interactions between different modules. This system promotes a more structured approach to reasoning about the security of blockchain applications.

## Application-Specific Blockchains

Blockchain development paradigms have evolved significantly, with a current trend toward application-specific blockchains. Unlike [virtual-machine blockchains like Ethereum](../interoperability/ethereum-virtual-machine-evm.md) where development focuses on building decentralized applications (DApps) via [smart contracts](../defi/smart-contracts.md), application-specific blockchains offer a customized platform for a single application. This approach provides developers with the freedom to make optimal design decisions and ensures **better sovereignty, security, and performance**.

## Benefits of the Cosmos SDK

The Cosmos SDK is currently one of the most advanced frameworks for building custom application-specific blockchains. Some of its key advantages include:

1. **Mature BFT Consensus Engine:** The default consensus engine within the Cosmos SDK is CometBFT, the most mature [Byzantine Fault Tolerance (BFT) consensus](../consensus/consensus-mechanisms.md) engine available, making it the gold standard for building Proof-of-Stake systems.

2. **Composable Modules:** The Cosmos SDK is designed to facilitate easy blockchain construction from composable modules. As the ecosystem of open-source Cosmos SDK modules grows, it becomes progressively easier to build complex decentralized platforms.

3. **Capabilities-Based Security:** The Cosmos SDK's capabilities-based security system, informed by years of dealing with blockchain state machines, makes it a secure environment for building blockchains.

4. **Proven Track Record:** Many application-specific blockchains already in production, such as Cosmos Hub, IRIS Hub, Binance Chain, Terra, or Kava, were built using the Cosmos SDK, indicating its reliability and robustness.

## Horizen SDK: An In-Depth Look

The **Horizen Sidechain SDK** is a powerful development tool that allows developers to swiftly create their own blockchain, customize its business logic according to specific use cases, and ensure interoperability with the native token of the mainchain. This token acts as the means of exchange within the entire ecosystem.

The [Sidechain SDK](../scalability/sidechains.md) provides standard blockchain features right out of the box, but it also **offers the flexibility for developers to modify and extend these features to create a blockchain that precisely meets their requirements**.

The Horizen Sidechain SDK comes with several resources for developers, ranging from tutorials for beginners to practical guides for more experienced developers. It also offers **technical reference materials, including details on classes, methods, APIs, and commands**.

A key innovation of the Horizen Sidechain SDK is the introduction of a decentralized and fully customizable sidechain protocol - the first of its kind in the industry. This protocol addresses the most pressing challenges in applying blockchain solutions to _real-world use cases_.

[The underlying system of blockchains, called Zendoo](../interoperability/zendoo.md), employs a decoupled consensus linked through a common Cross-Chain Transfer Protocol (CCTP). This system is indefinitely scalable, fully configurable to meet diverse needs, and includes embedded incentives for endogenous growth.

Zendoo's modular protocol emphasizes functionality over design choice. It allows any type of rules to be deployed as a sidechain - whether it's a blockchain or other types of computing systems. This level of modularization enables significant scalability, application design freedom, and flexibility to change any component over time.

The system is decentralized in all its components, which enhances the resilience and reliability of the network. **Zendoo doesn't rely on third parties for backward transfers, which eliminates the need for trusted parties and promotes honesty**.

Zendoo also supports privacy and auditability. It allows the mainchain to verify sidechains without knowing their internal structure. The Zendoo SDK provides a toolkit that facilitates the creation of auditable and privacy-preserving blockchain applications - a requirement for many real-world applications.

Lastly, deploying a blockchain with the Horizen Sidechain SDK is easy and fast. The SDK includes all the necessary components required for building a blockchain, allowing developers to focus on the specific features of their blockchain instead of low-level tasks.



In summary, SDKs, particularly within the blockchain context, are **vital tools for developers, providing a comprehensive set of resources for creating cutting-edge applications**. By streamlining the development process and offering capabilities-based security, blockchain SDKs like the Cosmos SDK are increasingly becoming the preferred choice for developers in the crypto space.
