---

sidebar_label: Wallets
title: Smart Contract Wallets
slug: /smart-contract-wallets/
description: In this article, you will learn what smart contract wallets are and how they function.
image: img/wallets/Horizen_Academy-meta-image-smart-contract-wallet.jpg
last_update:
  date: 7/11/2023
  author: Horizen Contributor

---

# Smart Contract Wallets

In the ever-evolving world of cryptocurrencies and blockchain technology, smart contract wallets emerge as a game-changing innovation, addressing the limitations of traditional **Externally Owned Accounts (EOAs)** and providing users with a more customized and user-friendly digital asset management experience.

These cutting-edge wallets leverage account abstraction to integrate essential functions into smart contracts, offering users numerous advantages such as bundled transactions, customizable recovery options, and greater privacy in identity management. In this article, we delve into the mechanics of **smart contract wallets**, the **Ethereum account mode**l, and the **EIP 4337 proposal**, exploring how these innovations have the potential to revolutionize the way users interact with cryptocurrencies and blockchain technology.

## What are smart contract wallets?

To understand smart contract wallets, we need to first explain what are **Externally Owned Accounts (EOAs)**

Externally Owned Accounts (EOAs) are accounts on the [**Ethereum blockchain**](cryptocurrency/ethereum-glossary.md) that are owned and controlled by an end user, as opposed to a [**smart contract**](defi/smart-contracts.md). EOAs are typically created using a [**software wallet** or a **hardware wallet**(wallets/crypto-walets.md), and can be used to send and receive tokens and interact with smart contracts.
In contrast, smart contract wallets are **accounts on the Ethereum blockchain that are controlled by a smart contract**. These wallets are typically implemented using a smart contract that manages the funds and provides functionality such as sending and receiving transactions, managing [private keys](cryptography/public-key-cryptography-pkc.md), and executing other functions based on certain conditions.

In essence, a ‘user intent layer’ exists in the blockchain that allows the end user to express a set of commands that they wish to perform, which can then be executed sequentially by a smart contract that controls the users private keys and signs each transaction on behalf of the user. 

What makes this possible is **account abstraction**, which is a feature in Ethereum that allows smart contracts to interact with other contracts and EOAs as if they were all the same type of entity. This means that smart contracts can abstract away the differences between EOAs and smart contract wallets, and treat them all as generic accounts. 

This provides users with several key advantages, including the availability to create **bundled transactions** (for example, buy a token then stake it, or borrow a token, then lend it in a single transaction), **customizable social recovery options***, the ability to pay gas fees in different tokens, and **greater privacy** in identity management. 

### How do Smart contract wallets work?

Ethereum's account model enables users to deploy and use self-executing smart contracts for a variety of applications. Two types of accounts exist on the Ethereum network: **EOAs** and **smart contract accounts**. Both can send, hold, or receive Ether, but they differ in terms of control and usage. EOAs are controlled by the user through a private key signing function, while smart contract accounts are controlled by their programmed logic.

Standard EOA models have limitations, including the potential for users to **lose or forget their  seed phrase**, **high gas fees** for interacting with smart contracts, and limitations on **wallet customization**. Account abstraction addresses these limitations through 2 approaches: using third-party relayers with an abstracted EOA or using a **layer-2 solution** with native account abstraction. A relayer is an entity that facilitates the transfer of information between different parties on the network, such as between an **L2** and an **L1**, or between one sidechain and another. 
Safe wallets use the EOA and relayer approach to add customization to the authorization process, while Argent wallets employ [layer-2](scalability/layer-2.md) native account abstraction in partnership with ZKSync.

### What is ERC-4337? 


[**ERC-4337**](https://eips.ethereum.org/EIPS/eip-4337) is a proposal to introduce account abstraction to the Ethereum network. It aims to **remove dependence on centralized relayers and EOAs**, offering a more decentralized version of relayer functions. Users can send a series of user operations to a bundler, which differs from a relayer and transaction. However, the current bundler infrastructure is centralized and fragile, raising concerns about its viability.
Smart contract wallets, enabled by account abstraction, allow for custom signature schemes, such as [**multi-sig**](wallets-multisig.md), **social recovery**, and **quantum-resistant signature** schemes. 

They facilitate multi-operations or atomic operations, batch multiple user operations into a single transaction, and introduce the concept of a paymaster, allowing users to pay gas fees with their preferred token or even off-chain with a credit card.

EIP 4337 proposes a new object called **user operation**. User operations are created, signed by users, and sent to a **user operation mempool**. A **bundler** (a node or network participant that bundles transactions together and submits them to the blockchain for processing) listens to this mempool, picks up new user operations, and bundles them into a **single entity** called a **bundle transaction**, which is then included in an Ethereum block like any other transaction.
The bundling process involves **two smart contracts**: the wallet smart contract and a special entry point contract. The entry point contract contains most of the logic for user operation validation and execution.

![smart-contract-wallets](ZBF_graphics_May_ERC_4337.jpg)

_ERC-4337 consists of four primary elements: **UserOperations**, **Bundlers**, **EntryPoint**, and **Contract Accounts**, which can be replaced by **Paymasters** and **Aggregators**:
**UserOperations** refer to pseudo-transaction objects used to execute transactions with contract accounts that are generated by the application. 
**Bundlers** are the actors responsible for packaging UserOperations from a mempool and transmitting them to the EntryPoint contract on the blockchain. 
**EntryPoint** is a smart contract responsible for handling the verification and execution logic for transactions. 
**Contract Accounts** are smart contract accounts owned by a user, and **Paymasters** are optional smart contract accounts that can sponsor transactions for Contract Accounts.
**Aggregators** are optional smart contracts that can validate signatures for Contract Accounts._


All together, these processes make it possible for users to securely interact with **dapps** and **tokens** without needing to sign a new transaction with every interaction and expose their wallet to potential exploits. 

### Social recovery

One of the core features of ERC-4337 and smart contract wallets is **social recovery**. 
Social recovery is a feature that allows users to recover their funds in case they **lose their private keys or access to their wallets**. The concept involves **delegating** the recovery process to a trusted group of friends, family members, or other close contacts, who ***together** can help restore access to the wallet if needed.

With social recovery, the user assigns a predetermined number of trusted contacts, known as **guardians** or **custodians**, who are given unique pieces of recovery information or "shares." These shares are derived from the user's private key using a cryptographic technique called **Shamir's Secret Sharing Scheme**. The scheme allows the private key to be **split into multiple parts**, with a specific threshold of parts required to reconstruct the original key.

If the wallet owner loses their private key or access to their wallet, they can contact their guardians to obtain the necessary recovery shares. Once they collect the required number of shares (the threshold), they can **reconstruct their private key and regain access to their wallet and funds**.
Social recovery provides an alternative to traditional recovery methods, like seed phrases or backup files, which can be lost, forgotten, or stolen. By distributing the recovery responsibility among trusted contacts, users can have a more robust and secure recovery mechanism that relies on the **collective trust** of their social network. However, it is crucial to **choose trustworthy guardians** and ensure they store their recovery shares securely to prevent unauthorized access or loss of funds.


## Top Smart contract wallets 

The following are a list of the top smart contract wallets available on the market today: 


[**Safe**](https://safe.global/): A smart contract wallet that enables users to define a list of owner accounts and a quorum for transaction confirmation. It offers account abstraction features such as sponsored transactions, account recovery, transaction batching, fraud monitoring, and spending policies.
[**Castle**](https://castle.link/): Designed for NFT collectors, Castle is a multi-signature wallet that allows users to create and manage shared or personal vaults for securely storing assets, trading, advanced portfolio tracking, and batch transactions. It features native integrations with [OpenSea](https://opensea.io/), and Gem.xyz (now [OpenSea Pro](https://pro.opensea.io/)), for [NFT marketplace](defi/nft-marketplaces.md) aggregation and batch management.
[**Candide**](https://www.candidewallet.com/): A user-friendly wallet on the Optimism blockchain that combines the best aspects of centralized and decentralized exchanges. Candide eliminates the risk of forgetting seed phrases and losing wallet access by providing an in-built ownership confirmation system.
[**UniPass**](https://unipass.id/): A non-custodial smart contract wallet focused on onboarding Web2 users to Web3 apps without seed phrases or gas fees. UniPass is developing wallet SDKs for various platforms and use cases, such as Web3 games and loyalty programs, to facilitate mass adoption.
[**Argent**](https://www.argent.xyz/): An Ethereum-based wallet that offers enhanced security with daily transfer limits and supports Ethereum coins only. Argent provides a unique user experience without seed phrases and complexity, featuring high security, hard wallet interoperability, and quick transfers.
[**Openfort**](https://www.openfort.xyz/): A wallet infrastructure aimed at redefining the Web3 gaming landscape by eliminating the complexities of using Web3 products. Openfort allows users to sign up with popular authentication methods like Google, Gmail, and Twitter, and enables multi-calls with backend gas payment settlement.


## Conclusion

In summary, smart contract wallets have the potential to **redefine the landscape of digital asset management**, offering a more flexible and secure alternative to traditional EOAs. By enabling custom signature schemes, multi-operations, gas abstraction, and future-proofing, these innovative wallets open the door to exciting new use cases like **decentralized identity management**, **voting on governance proposals**, and **delegation in DAO wallets**. While there are still challenges to overcome, such as dependencies on relayers, bundlers, or layer-2 smart contracts, the adoption of a universal standard could significantly enhance user comfort and pave the way for widespread adoption. As the blockchain community continues to evolve, smart contract wallets stand at the forefront, ready to unleash the full potential of this transformative technology.

