﻿---

sidebar_label: Interoperability
title: What is Blockchain Interoperability?
slug: /blockchain-interoperability/
description: Interoperability is the process of enabling different computer systems to exchange information with each other using a common framework.
image: https://www.horizen.io/academy/img/blockchain-interoperability/blockchain-interoperability-meta.jpg
last_update:
  date: 2/21/2023
  author: Horizen Contributor

---

# What is Blockchain Interoperability?

**Interoperability** is the process of enabling different computer systems to exchange information with each other using a common framework.

## How Does Blockchain Interoperability Work?

A common analogy used to explain **blockchain interoperability** is to think of a blockchain as a city that hosts thousands of residents and sees millions of dollars in value being exchanged between people every day.

**In this analogy**

Interoperable systems are like _bridges_ that connect one city to another, enabling residents to migrate between locations, bringing their capital along with them, and increasing the rate of economic activity for other cities with minimal friction.

**Cross-chain interoperability** is quickly becoming an essential feature for spurring blockchain adoption.

## How is Blockchain Interoperability Achieved?

The more blockchain networks emerge to solve similar problems that cater to similar target markets, the greater the need to bridge disparate networks together in order for users to transfer value between chains, and for networks to tap into the user traffic of larger chains.

The main vehicle for achieving interoperability is through the development of **cross-chain ‘bridges'** that utilize _smart contracts_ and _data oracles_ to transfer tokens between networks.

### Breaking Down Bridges

A typical bridge token transfer involves a set of validators that sit between 2 blockchains - *Chain A and B*.

The user who wishes to send tokens from **Chain A to B** must first lock their tokens in a [smart contract](defi/smart-contracts.md), which initiates **Chain B** to mint a wrapped version of the tokens on its chain once it confirms that the tokens have been taken out of circulation from **Chain A**.

As long as the validators on **Chain B** confirm that the initial tokens are locked in the smart contract, the wrapped version will be recognized on **Chain B** as having real value on par with its native equivalent.

This means the wrapped tokens can be accepted as payment or used as a form of collateral on dapps in **Chain B**.

When the holder of the wrapped tokens wishes to retrieve the native version (i.e bridge their funds back the other way) they simply send the wrapped version to a burn address on **Chain B**.

Validators on **Chain A** must then confirm that the wrapped token was burned before releasing the [native token](tokenomics/what-is-a-token.md) to the [wallet address](wallets/wallet-addresses.md) provided on **Chain A**.

Each chain must rely on its own [consensus mechanisms](consensus/consensus-mechanisms.md) and update the state of the network to reflect the locking, minting and burning of new tokens, while simultaneously being aware of the current state of the bridging chain to ensure that wrapped tokens are not minted that have no underlying native token backing it.

Because of how different the consensus mechanisms are between chains, an independent 3rd party is sometimes required to translate events that are occurring on one chain to another in order for them to be in sync.

These 3rd party technologies are called *Relayers* and *Oracles*.

### Relayers and Oracles

**Relayers** enable interoperability by allowing one chain to verify the information about a block (block headers) and events that occur on another chain.

**Oracles** receive data inputs from the external world of a blockchain and transmit that data into smart contracts to enable them to make decisions in real time based on accurate information.

_LayerZero_, a popular blockchain bridging protocol, leverages relayers and [oracles](defi/blockchain-oracles.md) to make it more efficient and secure for blockchains to transmit messages between each other.

The [protocol](architecture/blockchain-protocols.md) works by connecting two independent entities, a relayer and an oracle, to corroborate the validity of a transaction from Chain A so that Chain B can more easily confirm its validity.

![oracles and relayers](/img/blockchain-interoperability/oracles-and-relayers.jpg)

> Given two entities that do not collude, if (1) one entity can produce a block header for the block containing tA on chain A, (2) the other entity can independently produce the proof for tA on that block (transaction proof), and (3) the header and transaction proof in fact agree, then the communication protocol can deliver m to the client on chain B with the guarantee that tA is stably committed on chain A.

> -[LayerZero](https://layerzero.network/pdf/LayerZero_Whitepaper_Release.pdf): Trustless Omnichain Interoperability Protocol - Ryan Zarick Bryan Pellegrino Caleb Banister May, 2021

## Different Approaches to Designing Bridges

The 2 common forms of bridge design are **trusted bridges** and **trustless bridges**.  

**We breakdown some of the differences between the 2 below:**
<br></br>

<table class="table">
    <tr>
        <td>
            <strong>Trusted Bridges</strong>
        </td>
        <td>
            <strong>Trustless Bridges</strong>
        </td>
    </tr>
    <tr>
        <td>
            Rely on a central party or system to perform operations.
        </td>
        <td>
            Rely on smart contracts and algorithms to operate.
        </td>
    </tr>
    <tr>
        <td>
            Contain built in trust assumptions for custodying funds and securing the bridge.
            <p>
                Users must rely primarily on the reputation of the bridge operator.
            </p>
        </td>
        <td>
            No trust assumptions made, security of the bridge is directly tied to the security of the blockchain.
        </td>
    </tr>
    <tr>
        <td>
            Users must give up control of their assets to the centralized operator.
        </td>
        <td>
            Users rely on smart contracts, which means they can remain in control of their assets.
        </td>
    </tr>
</table>

**Examples of Trusted Bridges** include the Binance Bridge and Solana Wormhole.

**Examples of Trustless Bridges** include NEAR’s Rainbow and Cosmos’s IBC.

Expanding further, we also see different designs within the trustless and trusted bridge paradigm for enabling blockchain interoperability. The most popular designs include:

- [Atomic Swaps](interoperability/atomic-swaps.md) use smart contracts to enable the exchange of one [cryptocurrency](cryptocurrency/cryptocurrency.md) for another in a [p2p](fundamentals/p2p-networks.md) manner. Swaps can occur between different blockchain, or between a blockchain and its off-chain channel, for example, between an L1 and a centralized L2.
- **Relays** are a common feature used by interoperability protocols like LayerZero to enable one chain (the relay chain) or a centralized 3rd party node to verify information about a block (i.e the block header) and events that occur on the receiving/sending chain.

## Interoperability in DeFi

Much of the early success of blockchains like Solana, Binance Smart Chain, Avalanche and other [EVM compatible chains](interoperability/ethereum-virtual-machine-evm.md) can be attributed to the emphasis on building simple and efficient bridging solutions to enable interoperability with the [Ethereum network](cryptocurrency/ethereum-glossary.md).

:::info EVM on Horizen
[**Horizen EON**](https://eon.horizen.io/) is our first public proof-of-stake sidechain and a fully EVM-compatible smart contracting platform that allows developers to efficiently build and deploy dapps on Horizen, while fully benefiting from the Ethereum ecosystem.
:::

Binance Bridge, Solana Wormhole, and even the Terra Bridge at one point were all pivotal in enabling the massive flow of funds from Etheruem to other networks.

Especially during times of high network congestion that led to skyrocketing gas fees on the ETH network.

Even though these networks compete with each other, the existence of cross-chain bridging solutions enables them to deploy all kinds of incentives, including promise of airdrops or high yields, in order to lure liquidity and user traffic from the largest Defi protocols in the space.

## Private and Public Blockchain Interoperability

Private blockchains benefit greatly from interoperability because it allows them to interface with public permissionless networks while continuing to keep sensitive information private.

The benefits that private permissioned networks receive by tapping into public networks include gaining access to the latest data from public networks which can be used to inform transactions within the private network, as well as greater security, transparency and auditability.

### Examples of Interoperability Between Private and Public Blockchain

- **Public to Private Network Interoperability**
  - Use tokens or NFTs stored on public DeFi protocols as collateral to borrow funds from a private network.
- **Private to Private Network Interoperability**
  - Enabling cross-chain verification of encrypted patient data between hospital networks in different legal jurisdictions.
- **Private to Public Network Interoperability:**
  - Sharing proof of company solvency using [zero-knowledge proofs](privacy/zero-knowledge-proofs-zkp.md) to protect private data.

## Interoperability in GameFi and the Metaverse

There is massive potential to build interoperable systems that connect different gaming environments in the metaverse.

We can think about this like creating modes of transportation to travel between virtual gaming environments.

Virtual Lands like the SandBox and Decentraland could one day become seamlessly interoperable, enabling users to migrate their assets and virtual characters between locations with minimal friction.

## In Conclusion - Interoperability

Ultimately, interoperability between blockchains significantly improves the experience of both developers and end users, making it easy to adopt multiple blockchain protocols and seamliness exchange tokens and other forms of data between disparate systems.
