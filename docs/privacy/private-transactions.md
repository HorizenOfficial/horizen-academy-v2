﻿---

sidebar_label: Private Transactions
title: Private Transactions in Crypto
slug: /private-transactions/
description: In this article, we introduce you to the different technologies that enable private transactions on a public blockchain.
image: https://www.horizen.io/academy/img/private-transactions/private-transactions-meta.jpeg
last_update:
  date: 1/17/2024
  author: Horizen Contributor

---

# Private Transactions in Crypto

One of the great value propositions of blockchains is the _transparency_ that such public ledgers offer. In this article, we want to introduce you to _four concepts_ that aim to increase the level of privacy for transactions on public blockchains. 

It is a common misconception that cryptocurrencies are anonymous. 

Most of them are **pseudonymous**, meaning that real-world identities are represented by addresses. [Addresses](wallets/wallet-addresses.md) and identities can be connected through ongoing data analysis.

The more transactions you have received and sent, the more metadata there is. 

This metadata can include the IP address a transaction originated from or frequent transaction partners. Exchanges also log the addresses you use to withdraw funds and can thereby link your addresses to your identity.

## Why Private Transactions Matter?

There are many legitimate reasons to create private transactions on a blockchain: 
- If you have a _medical condition_ and need to purchase your prescriptions on a regular basis
- If you have a _business_, you don’t want to reveal your revenue streams to your competition
- If you are buying a *present* for your spouse, you might not want him or her to see it before they actually get the present. 

There are many good reasons why one would like to transact privately, and we believe that privacy is and should be treated as a basic human right.

### Change Addresses

_Change addresses_ were introduced so people you are transacting with don't have access to your entire transaction history just by looking up the address you used for transacting with them. _Most [wallets](wallets/crypto-wallets.md) automatically generate change addresses_ for you when you create a transaction. 

In the example above of a regular [bitcoin](cryptocurrency/bitcoin-glossary.md) transaction, you can see one input and two outputs to the transaction. The first output went to a different address and is the amount the user wanted to spend. The remainder of the [UTXO](architecture/utxo-vs-account-model.md) went back to the same address the funds originated from.

A wallet that supports change addresses will generate a new address, every time you are receiving funds, no matter if they are change or regular transactions. 

The example above shows a transaction with the exact same amounts as before, but this time the change went back to a newly created change address. This feature improves privacy by making it harder to trace the transaction history of a given user.

### Coin Mixing

Coin mixing protocols like SharedCoin, TumbleBit or CoinJoin , which is used by Dash, were the next evolutionary step to improve privacy. 

Several inputs are mixed by creating a single transaction from them, oftentimes during several intermediary transactions.

![coinjoin transaction](/img/private-transactions/coinjoin-transaction.jpg)

_Coin mixing_ doesn't require any changes to the [basic blockchain protocol](architecture/blockchain-protocols.md). In the graphic above you can see the schematics of a coin mixing transaction. 

A number of inputs are combined in a mixing pool (center) and later distributed to their destination addresses. A coin mixing transaction makes it harder for an attacker to figure out who was sending money to whom.

The level of privacy provided by mixing services is far better than using regular transactions, but one can link input addresses to output addresses by monitoring the amounts of coins in a mixing transaction. There are tools available online to do this kind of chain analysis. 

Another downside of coin mixing is that many mixing services are centralized and run by a third party. CoinJoin based techniques solve this issue - they have no central party.

By now there are many iterations of coin mixing protocols that improved upon the privacy promise step by step. With CoinJoin for example, every user has to send the same amount to the mixing pool, which makes amount tracking significantly harder. 

Introducing _confidential transactions_ will improve privacy even more by hiding the amounts transacted.

### Ring Signatures

Ring Signatures were first introduced by Rivest, Shamir, and Taumann in 2001 and the general idea has been used for a number of privacy protocols since then. 

_We will use the White House Leak Dilemma to demonstrate the value proposition of their concept:_

Imagine a high ranking White House official, **Alice**, wanting to leak a secret to the press about the _president_. 

She needs to make sure the journalists who receive the leak have a way to verify the source of the information without revealing her identity. A potential solution would be using a _Ring Signature_ scheme to sign the message. 

To construct the **ring signature** all she needs is her private key and the public keys of some other officials, for example other members of the cabinet like **Bob** and **Carol**.

![ring signatures](/img/private-transactions/ring-signatures.jpg)

The verifier, the journalist, can verify that the message was indeed signed by a high ranking official, but he cannot determine who constructed the signature - _Alice_, _Bob_ or _Carol_.

In the context of cryptocurrencies, a user can collect a bunch of public keys, create a transaction and sign it using his private key. The set of verifiers, being the _nodes_ on the network can verify that the transaction is valid and that one of the group members has signed the message. 

They cannot tell who signed the transaction, which makes Ring Signatures great for private transactions. Monero is the most notable [cryptocurrency](cryptocurrency/cryptocurrency.md) making use of ring signatures which are part of the CryptoNote protocol that _Monero_ is built on.

### Zero-Knowledge Proofs

Zero-Knowledge Proofs, or [_zk-Proofs_](privacy/zero-knowledge-proofs-zkp.md), were known long before blockchain technology emerged but with distributed ledgers, a whole new set of possible use-cases came around. Simply speaking, a **Zero-Knowledge Proof** lets you prove to a _verifier_ that you know something, without revealing that knowledge.

A non-digital example of what this can look like can be constructed with a seeing person as the _prover_, a blindfolded person as the verifier, and two balls of a different color. Other than the color the balls are identical - same _haptic_, same _weight_, same _size_.

The seeing person, the **prover**, wants to convince the blindfolded person, the **verifier**, that the two balls are of different colors, without revealing the colors. They sit down at a table and the blindfolded person shows the prover one of the balls. 

The blindfolded person puts both balls under the table now and shows one ball in a second round - either the same one as before or the other one. 
- If she chooses to show the same ball, the prover will know because of the color
- If she were to switch balls under the table and show the other ball, the prover could tell with certainty

![zero knowledge proofs](/img/private-transactions/zero-knowledge-proofs.jpg)

In the second round, the prover would have a fifty-fifty chance of getting the right answer if he had to guess. He would have to guess in case the claim that he is trying to prove, the balls are of a different color, was false. 

At this point, the blindfolded person cannot be sure if the claim is correct, or if the prover just got lucky.

If they repeat the game several times, the chance of getting the answer right every time through guessing decreases exponentially. After just ten rounds of the game, the probability of the prover calling the right ball every time through luck has decreased to **1** in **1024** **(1 / 2^10)**. 

The blindfolded person can be pretty sure by now, that the two balls are indeed of different colors although the prover has not shared any information about the colors themselves.

_The idea of using Zero-Knowledge Proofs for cryptocurrency transactions is the following:_

You construct a proof that the transaction you want to send would be considered valid by a [verifying node](architecture/blockchain-nodes.md) without revealing any of the actual transaction data.

This allows the _sender_, _receiver_, and the _amount_ to remain private.

Another use-case that is perfect for the application of zk-Proofs is identity verification. 

For example, you could prove to an entity that you are of a certain age without revealing any personal data like your DOB. Horizen used to use _zk-SNARKs_ for it's _shielded_ transactions. 

[zk-SNARKs](privacy/zk-snarks-vs-zk-starks.md) are a special type of _Zero-Knowledge Proofs_, namely **Zero-Knowledge Succinct Non-interactive Arguments of Knowledge**.

- **_Succinct_**: refers to the proofs being short in the sense of easy to compute and verify.
- **_Non-interactive_**: means that the prover and verifier don't have to be online at the same time. With the ball-example above, the prover and verifier have to go back and forth several times before the verifier actually has proof of the claim. 
- With non-interactive proofs, the prover can construct the proof entirely on his own without the need for communication in the process. This proof can be written to the blockchain to be verified at any time.
- **_Arguments of knowledge_**: describes the proof being computationally sound, i.e. no adversary can construct a false proof even if he has access to huge computational resources.

Since the succesful votes on [ZenIP 42204](https://github.com/HorizenOfficial/ZenIPs/blob/master/zenip-42204.md) and [ZenIP 42207](https://github.com/HorizenOfficial/ZenIPs/blob/master/zenip-42207.md), _private transactions_ are no longer available on  the Horizen ecosystem.


## Summary - Private Transactions on the Blockchain

There are many ways to reclaim your privacy on a public blockchain. The approaches like Change Addresses and Coin Mixers don’t provide strong privacy, but they help make it harder to trace transactions to their origin and link real-world identities to addresses on the blockchain.

Ring Signatures and Zero-Knowledge Proofs are more advanced concepts that actually allow you to transact entirely private, even on fully open and public blockchains. 


