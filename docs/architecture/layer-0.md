﻿---

sidebar_label: Layer 0
title: What is a Layer 0 Blockchain?
slug: /layer-0/
description: Layer 0 networks solve three critical problems for web3 development and adoption - scalability, flexibility and interoperability. Learn more in this article
image: https://www.horizen.io/academy/img/layer-0/layer-0-meta.jpg
last_update:
  date: 2/21/2023
  author: Horizen Contributor

---

# What is a Layer 0 Blockchain?

Over the past 3 years, the [cryptocurrency](cryptocurrency/cryptocurrency.md) ecosystem has seen an explosive growth in new and innovative projects offering novel ways to deliver _banking services_, _exchange digital art_, _trade financial products_ and more. 

Underpinning this boundless innovation in crypto-based products has been the constant improvement of blockchain infrastructure to support **secure**, **scalable** and **decentralized** applications. 

The most notable examples of this can be seen on blockchains like [Ethereum](cryptocurrency/ethereum-glossary.md) and Solana.

These blockchains are categorized as **‘Layer 1s’** because they serve as the infrastructure for developers to build and launch _decentralized applications_ or **Dapps** that are tethered to the underlying consensus rules of their host blockchain.

:::info EVM on Horizen
[**Horizen EON**](https://eon.horizen.io/) is our first public proof-of-stake sidechain and a fully EVM-compatible smart contracting platform that allows developers to efficiently build and deploy dapps on Horizen, while fully benefiting from the Ethereum ecosystem.
:::

The adoption of these layer 1 networks and value of their native cryptocurrencies have skyrocketed as a result of users interacting with hundreds of popular Defi, NFT or gaming Dapps that exist on their infrastructure.

## The Problem with Layer 1s

As the demand for Dapps increases and more capital flows into the space to support development, we are beginning to see the _growing pains_ of layer 1 networks as they struggle to meet the needs of developers and end users who have opposing views on whether dapps should prioritize _scalability_, _security_ or _decentralization_.

_Layer 1 networks_ are built with a **monolithic architecture**. This means that the _execution_, _consensus_ and _data availability layers_ are all functioning within a single blockchain network. This stacked design places a strain on the system and results in the need for blockchains to comprise decentralization for security, or scalability for decentralization.

In addition, the lack of control over the underlying infrastructure that dapp developers build on top of has also been a cause of much frustration. Rising gas fees on the Ethereum network make all ethereum dapps too expensive to use, while unexpected downtime on the Solana network similarly makes all dapps on Solana also go offline.

Dapp developers must also make compromises in how they design their dapps in order to remain compatible with these L1 networks, and lack the ability to explore different [consensus mechanisms](consensus/consensus-mechanisms.md) or to experiment freely with token incentive models because consensus is a primary function of the L1 infrastructure layer. 

The overdependence on L1’s and difficult tradeoffs imposed by the **scalability trilemma** can only be remedied by creating a new base infrastructure that empowers developers to launch their own independent blockchains that can be optimized for different aspects of the scalability trilemma.

This base infrastructure is called **layer 0**, and it is the _single most important component_ for helping blockchains and decentralized applications achieve limitless scalability while maintaining the highest possible levels of decentralization and censorship resistance.

## What is a Layer 0 Blockchain?

A **layer 0** is a type of [protocol](architecture/blockchain-protocols.md) that enables developers to launch multiple layer 1 blockchains that can be designed to each serve a specific purpose and cater to 1 or 2 dimensions of the scalability trilemma as opposed to all 3.

These L1 networks can also be made to communicate with each other such that the end user can have the experience of using one blockchain while they are in fact using multiple.

**Layer 0** (_L0_) networks are equipped with software development tool kits or SDKs that allow developers to launch their own blockchains, known as Layer 1s or L1s or sidechains, that are connected to the L0 mainchain but operate independently.

We can think of this like an infrastructure for launching new blockchains like the [Bitcoin](cryptocurrency/bitcoin-glossary.md) network or the _Ethereum_ network. 

**Examples of L0s** include: *Horizen, Cosmos and Polkadot.*

Each L0 comes with its own unique implementation and approach for developers to launch their own blockchains.

### Why are Layer 0s Necessary?

**Layer 0 networks solve 3 critical problems for [web3 development](fundamentals/web3.md) and adoption:** Scalability, flexibility and interoperability.

### The Scalability Trilemma

**As mentioned before**, the scalability trilemma is a series of trade-offs between decentralization, speed/scalability, and security that one must make when designing a blockchain and constructing rules for its [on-chain ](governance/blockchain-governance.md).

![scalability trilemma](/img/layer-0/scalability-trilemma.jpg)

- **Centralization** = Increased Speed, Decreased Security & Censorship Resistance
- **Decentralization** = Decreased Speed, Increased Security & Censorship Resistance

It is very difficult, if not impossible, to achieve perfect decentralization without compromising scalability, and vice versa. 

This is especially true on a monolithic blockchain where all the critical functions like transaction execution, consensus and data availability (the ability to verify that all the data from new blocks has been published) are managed by a single network, increasing the likelihood of congestion and making it much more difficult to scale.

A workaround to the scalability trilemma is to delegate the primary responsibility for these 3 functions to _different_ independent blockchains. This design ensures that the execution chain can be optimized for handling high TPS dapps like a DEX or [play-to-earn game](metaverse/play-to-earn-games.md) without worrying about decentralization. 

A second chain can then be optimized for decentralization and serve as a final consensus layer for the execution chain to enable withdrawals to and anchor its data.

When it comes to scalability, layer 0 networks can help blockchain scale by increasing transaction throughput. While transaction speed is typically measured in terms of **TPS** (_transactions per second_), transaction throughput looks at the total number of transactions that a network can handle at one time.

### Flexibility

What makes an independent blockchain truly independent is having its own set of **validator nodes** to confirm transactions and produce blocks based on their own _consensus mechanism_.

**As a developer, the ability to develop your own blockchain from scratch means that you can:**

- [Design your **token issuance model**](tokenomics/why-create-a-token.md) - inflationary or deflationary
- Optimize your chain for **speed**, **decentralization** or **security**
- Make your network **private** and _permissioned_ or **public** and _permissionless_
- Curate the type of **dapps** that you want built on your network and _foster_ your own developer ecosystem.

What’s more, thanks to the SDKs of L0 protocols, the time and complexity of launching a blockchain on a L0 network can be compared to launching a Dapp on an L1, which means you can build and manage multiple L1s with relatively little effort.

### Interoperability

**Interoperability** is the ability for computer systems with different programs to interpret and exchange information with each other with minimal friction. 

The perfect analogy for understanding the importance of [interoperability in the blockchain space](interoperability/blockchain-interoperability.md) is to think about blockchains as large cities that need to be connected via bridges in order for economic activity to flow in and out.

_Layer 0 networks_ use various different iterations of a **cross-chain transfer protocol** to enable [tokens](tokenomics/what-is-a-token.md) and other forms of data to be transferred:

- **From** the Layer 0 mainchain to Layer 1’s
- Layer 1s **to** layer 0’s
- And **between** layer 1’s

_Cosmos_, a layer 0 network, uses a mechanism called the _Inter-Blockchain Communication_ protocol (IBC), where layer 1 blockchains called ‘Zones’ can communicate and transfer value between each other using the mainchain ‘HUB’ as a central checkpoint and intermediary.

**Horizen** uses its _Cross-Chain Transfer Protocol_ (**CCTP**) to enable sidechains to communicate and transfer tokens to the mainchain and between other sidechains.

## How Does a Layer 0 Work?

**The 3 main components of a Layer 0 protocol are:**

- **The Main Chain:** Which typically serves as the primary blockchain where transaction data from the various L1 chains are backed up.

- [**Sidechains**](scalability/sidechains.md): Independent layer 1 blockchains that have their own set of [validator nodes](architecture/blockchain-nodes.md) and can run their own consensus mechanism. These chains do not rely on the mainchain for security, but will often share the security of the mainchain since it is typically the largest and most decentralized.

  - Sharing security can occur in different ways. For example, a user may be required to stake the L0’s token in order to become a validator on an L1, which means they can lose both their L0 stake and their L1 stake if they attempt to submit fraudulent transactions.

  - In other cases, L1s will periodically share their network state, the latest record of account balances and transaction history, with the L0 in order to keep a backup in a more secure network in case the L1’s records are ever compromised.

- **Cross-chain transfer protocol**: The mechanism that enables tokens and other forms of data to be transferred between chains in a trustless and secure manner.

## Layer 0 architecture

![horizen cosmos polkadot](/img/layer-0/horizen-cosmos-polkadot.jpg)

## Comparing Popular Layer 0 Networks

Today, there are a handful of notable L0 networks that are ushering in a new era of highly customizable and scalable blockchains.

<table class="table">
    <tr>
        <td>
        </td>
        <td><strong>Cosmos </strong>
        </td>
        <td><strong>Polkadot</strong>
        </td>
        <td><strong>Horizen</strong>
        </td>
    </tr>
    <tr>
        <td>
            <strong>Summary</strong>
        </td>
        <td>
            <strong>Cosmos</strong> is a scalable and interoperable network of blockchains. Developers can launch their
            own blockchains (or ‘Zones’) using the Cosmos SDK.
            <p>
                Cosmos <strong>Zones</strong> are connected together by Hubs using the Inter-Blockchain Communication
                protocol (IBC).
            </p>
        </td>
        <td>
            <strong>Polkadot</strong> is a blockchain protocol that unites an entire network of purpose-built
            blockchains known as ‘parachains’.           
            <p>
                <strong>Parachains</strong> are connected together and secured by the Polkadot Relay Chain. 
                They can also connect with external networks via bridges.
            </p>
        </td>
        <td><strong>Horizen</strong> is a zero-knowledge-enabled network of blockchains.
            <p>
                <strong>Zendoo</strong>, Horizen’s sidechain system, allows developers to custom build their own public
                or private blockchain and customize consensus type, speed, privacy, and tokenomics of their blockchain.
            </p>
            <p>
                Blockchains built on Horizen are privacy-preserving and can produce massive throughput without
                compromising decentralization.
            </p>
        </td>
    </tr>
    <tr>
        <td><strong>Key Differentiators </strong>
        </td>
        <td>IBC enables seamless interoperability between Cosmos Zones, including popular networks like Binance Smart
            Chain and Terra.
            <p>
                All blockchains use a proof of stake consensus mechanism
            </p>
        </td>
        <td>Network provides a shared security model between parachains, meaning developers do not have to worry about
            attracting enough miners or validators to secure their own chains.
        </td>
        <td>Privacy-preserving features through the use of zero-knowledge proof cryptography enabling verifiable
            transactions without revealing underlying data or relying on 3rd party validators.
            <p>
                Highly customizable for developers. Developers can choose their own consensus, speed, privacy and
                customize crypto-economy for their blockchain.
            </p>
        </td>
    </tr>
    <tr>
        <td><strong>Network Launch Date</strong>
        </td>
        <td>2019</td>
        <td>2020</td>
        <td>2021</td>
    </tr>
    <tr>
        <td><strong># of Nodes</strong>
        </td>
        <td>150</td>
        <td>300</td>
        <td>45,000</td>
    </tr>
    <tr>
        <td><strong># of L1 Blockchains (Zones, Parachains, Sidechains)</strong>
        </td>
        <td><a
            href="https://mapofzones.com/?testnet=false&period=24&tableOrderBy=totalIbcTxs&tableOrderSort=desc&zone=columbus-5">47
            Zones</a></td>
        <td>12 Parachains</td>
        <td>3 Testnet Sidechains
        <p>
            1 Mainnet Sidechain</p></td>
    </tr>
    <tr>
        <td><strong># of Dapps and services on L0 network</strong>
        </td>
        <td>259</td>
        <td><a href="https://parachains.info/#!">175</a></td>
        <td><a href="https://www.horizen.io/dapps/">9</a></td>
    </tr>
</table>

## What Makes Horizen the Top Choice for L0s?

### Competitive Edge in Privacy Technologies

As a zero-knowledge enabled network of blockchains, Horizen is leveraging the latest privacy technologies to enhance the utility and scalability of blockchain networks.

Horizen’s sidechain system **[Zendoo](https://www.horizen.io/zendoo/)** employs a form of [zero knowledge proofs](privacy/zero-knowledge-proofs-zkp.md) called **zk-SNARKs**, which uses special cryptography to enable users to make transactions from a sidechain to the mainchain without the details of the transaction being known to the nodes that validate them.

Additionally, Horizen uses [zk-SNARKs](privacy/zk-snarks-vs-zk-starks.md) to make transactions between sidechains verifiable by the Horizen mainchain _without_ the details of these transactions being known to the nodes that validate them. Instead of validating sidechain transactions through proof-of-work, all the mainchain needs to do is verify ‘**proof of computation**’ for virtually any number of sidechain transactions that have occurred on the network. 

This reduces the computational load of the mainchain and further helps to enhance Horizen’s scalability capabilities

### Designed with Enterprise Adoption in Mind

According to a Cambridge University research study on [enterprise blockchain adoption](https://cdn.crowdfundinsider.com/wp-content/uploads/2019/09/2019-ccaf-second-global-enterprise-blockchain-report.pdf), the second most popular reason why enterprise blockchain projects are discontinued is because of concerns over confidentiality and privacy:

![blockchain survey](/img/layer-0/blockchain-survey.jpg)

_Through ZKP technology_, enterprises are able to safely utilize public blockchain networks to send and receive data without revealing any sensitive information.

Horizen has also created a special auditing solution called ‘**zkAudit**’ to enable audits to be performed on private companies in a completely _decentralized_, _transparent_, and _privacy-preserving_ manner through ZKPs.

![zkaudit](/img/layer-0/zkaudit.jpg)

The size of the global enterprise data management market is expected to reach [$135.8 billion](https://www.prnewswire.com/news-releases/enterprise-data-management-market-size-worth-135-88-billion-by-2027-grand-view-research-inc-301108898.html) by **2027**. 

Additionally, the global cloud computing market size is expected to reach [$1.25 trillion](https://www.yahoo.com/now/cloud-computing-market-size-share-164200734.html) by **2028**. 

These massive figures represent the value of large multinational corporations hosting and sharing data across global supply chains and digital networks.

_Horizen’s_ specialization in privacy preserving technologies makes it perfectly positioned to capture this value as enterprises begin to transition to storing data on blockchains in order to increase security and transparency while maintaining privacy.

### Consensus Agnostic - Greater Flexibility

Zendoo enables developers to build independent and highly customizable blockchains that can be set up to work with any consensus mechanism, including:

- PoS, PoH, pBFT, DAG, etc. 

Being consensus agnostic ensures that the Horizen’s network can come as close as possible to achieving perfect asymmetry between scalability, decentralization, and security as possible.

### Underlying Security Model Built for Robustness

The Horizen team has built a more secure version of the proof-of-work consensus mechanism for their mainchain network, leveraging what we call a ‘[penalty system for delayed block submission](/assets/files/A-Penalty-System-for-Delayed-Block-Submission-by-Horizen.pdf)’ to enhance protection against [51% attacks](security/51-attack.md). 

No matter the level of decentralization of a sidechain, once the sidechain transaction data is verified by the mainchain, it becomes _anchored_ to the same security model as its modified proof-of-work consensus mechanism.

**In conclusion**, Horizen is an early entrant into the _layer zero_ space yet is offering some very clear differentiating features, such as its focus on privacy, consensus agnostic sidechains and [enhanced proof of work security model](consensus/proof-of-work-pow.md) for its mainchain.
