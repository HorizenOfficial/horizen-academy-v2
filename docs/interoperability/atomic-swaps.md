---

sidebar_label: Atomic Swaps
title: What are Atomic Swaps?
slug: /atomic-swaps/
description: Atomic Swaps are a technology that allows you to trade Peer-to-Peer without a third party. Learn about atomic swaps at an advanced level.
image: https://www.horizen.io/academy/static/img/atomic-swaps/atomic-swaps-meta.jpeg
last_update:
  date: 2/21/2023
  author: Horizen Contributor

---

# What are Atomic Swaps?

If you want to exchange one cryptocurrency for another one, you will most likely go to one of the _centralized exchanges_. 

_First_, you have to check whether the exchange offers the trading pair that you are interested in. _Then_ you transfer your funds to their address, which requires you to trust the exchange as a third party. 

Most exchanges offer _BTC_ and _ETH_ pairs. To swap two lesser-known cryptocurrencies or [tokens](tokenomics/what-is-a-token.md), you will oftentimes have to buy bitcoin first which you will then convert into the desired [cryptocurrency](cryptocurrency/cryptocurrency.md).

A special transaction type that we would like to talk about in this article is the _Atomic Swap_. It is a type of transaction that touches on the topics of scalability and [interoperability](interoperability/blockchain-interoperability.md) at the same time.

**Atomic Swaps** are a technology that allows you to trade Peer-to-Peer without a third party. They also do away with the trust required for you to arrange a swap with an unknown user. 

Someone would have to send their funds first, and the counterparty could decide to not fulfill their side of the deal. 

Atomic Swaps enable peers to do a trustless exchange of different currencies according to predefined and agreed upon conditions without having to fear losing their funds.

## The Technology Behind Atomic Swaps

A valid transaction requires a _signature_. This signature can only be created by the person that has access to the private key. When you send a transaction you usually sign it and broadcast it to the network afterward.

_HTLCs_ are based on a technology called **state channels**. All you need to know is that they allow you to exchange signed transactions securely. Only once the participants decide they are done transacting, the final _state_ is broadcast to the blockchain.

![state channel hierarchy](/img/atomic-swaps/state-channel-hierarchy.jpg)

The "Hashed" part of _HTLC_ means that a hash serves as a lock for the contract, to protect it from a third party accessing it. The "Timelock" part refers to the contract having an expiration date.

**Two conditions must be met to perform an Atomic Swap between two crypto assets:** 

- Both assets and their underlying blockchain need to support the same hashing algorithm, like _SHA-256_ in the case of [Bitcoin](cryptocurrency/bitcoin-glossary.md) 
- And both blockchains need to support some kind of programmability that allows an *HTLC* to be deployed.

## The Process of Atomic Swaps

The process of an Atomic Swap would generally look like the following. Let's assume **Alice** has some _BTC_ and **Bob** has some _ZEN_. Both agree to swap a certain amount of their assets.

![atomic swaps step 1](/img/atomic-swaps/atomic-swaps-step-1.jpg)

**First**, **Alice** creates an _HTLC_ on the _Bitcoin Blockchain_ that we will simply call a _contract_. The contract comes with an address, otherwise, you could not interact with it. 

**Next**, Alice generates or picks a secret - in this example her secret is _XYZ_. Using a [hash function](cryptography/hash-functions.md) she generates a lock, here: _1b9f..._, which is simply the hash of the secret. 

Now she deposits the amount of bitcoin she and **Bob** agreed to exchange in the contract where they are locked. 

**Lastly**, she sends the lock to Bob.

**The contract can enforce two outcomes:**

- If nothing happens for some time, say 24 hours, the money is returned to **Alice**. This is necessary, so she doesn't lose her money in case Bob never responds. It is the _timelock_ component of the HTLC.

- If **Bob** can provide the secret, the contract will automatically transfer the bitcoin to his address. Because hash functions are one-way functions, Bob doesn't know the secret yet, although he knows its hash.

**Now it's Bob's turn.**

![atomic swaps step 2](/img/atomic-swaps/atomic-swaps-step-2.jpg)

**Bob** also creates a Hashed Timelock Contract, but this time on the _Horizen blockchain_. 
His contract also has an address, _BCD_ in this example. 

**Alice** sent him a lock, the same one she used, so he goes ahead and locks his contract with the same lock. 

**Lastly**, he deposits the amount of _ZEN_ the two agreed to exchange. 

**Just like the contract Alice created, Bob's contract can execute in two ways**: 

Either Bob gets refunded after a timeout period or Alice provides the secret and the funds are distributed to her address.

Now, both contracts are set up on their respective blockchain. Alice has to take the next step within the locking period, otherwise, both are refunded as nothing happened at all.

![atomic swaps step 3](/img/atomic-swaps/atomic-swaps-step-3.jpg)

Alice will now use the secret she chose earlier to unlock the _hashlock_ of Bob's contract on the _Horizen blockchain_ and the _ZEN_ will be released to her. _This is a public operation, auditable on the blockchain_. 

Bob can, therefore, see the secret now, and uses it to unlock the bitcoin locked up in Alice's contract. By providing the secret the HTLC will automatically release the funds to Bob's previously specified [Bitcoin address](wallets/wallet-addresses.md).

Without having to trust each other Alice and Bob have now successfully exchanged their coins, _without having to involve a middleman_. At no point could one of the two steal the other's money. 

When Bob receives the lock from Alice, he can verify that she used the same lock by looking at the _Bitcoin_ blockchain. If Alice would not redeem her _ZEN_, then both of them would automatically get refunded. And Alice cannot claim Bob's _ZEN_ without Bob learning the secret.

## Atomic Swaps Today

There are few wallets that enable users to do Atomic Swaps, yet. So far there have been only a small number of Atomic Swaps completed. 

**Here is a short list:**

- The **first on-chain Atomic Swap** was done on _September 20th, 2017_ between _Litecoin_ and _Decred_
- The **first off-chain Atomic Swap** occurred _November 2017_ between _Litecoin_ and _Bitcoin_ on the _Lightning Network_
- Most recently on the 7th of _December 2018_, TenX showcased an **ERC20 to Bitcoin Lightning Atomic Swap** using their open-source software _COMIT_

The technology is very promising, but to achieve adoption [wallets](wallets/crypto-wallets.md) will have to build a user-friendly interface to use Atomic Swaps. This will take a while, but the technology is very promising and could very well enable a new class of use cases for cryptocurrencies.

:::info Cobalt Web Wallet
[**Cobalt**](https://www.horizen.io/wallets/cobalt/) is a secure and easy-to-use web extension wallet for the Horizen cross-chain ecosystem. Trustworthy, reliable and built to easily manage your assets.
:::

## Summary - Atomic Swaps

Atomic Swaps present an alternative to the centralized exchanges used today. _At no point is there a third party involved that has access to a user's funds._

The exchange process is entirely trustless and almost instant. Hashed Timelock Contracts are the heart of Atomic Swaps. I suspect that it won't take long until Atomic Swap compatibility will be a necessary feature for a blockchain to gain serious adoption.
