
---
layout: post
type: article
title: "MultiSig"
description: "In order to spend a UTXO, a valid cryptographic signature is required. Multi-signature transactions, or MultiSig, rely on more than one signature."
permalink: /technology/advanced/multisig/
topic: technology
level: advanced
chapter: "How Does a Blockchain Work?"
---

## MultiSig Functionality

In order to spend an [*Unspent Transaction Output* (UTXO)]({{ site.baseurl }}{% post_url /technology/expert/2022-04-02-utxo-vs-account-model %}), a valid cryptographic signature is required. It can only be provided if the private key corresponding to the address the UTXO was sent to is known. 

Most transactions have a single digital signature attached and hence we could call them **single signature transactions**.

Most blockchains also support a more complex transaction verification type based on _several digital signatures_. These **multi-signature transactions,** mostly called *MultiSig**, rely on more than one signature. 

Generally speaking, multi signature accounts follow an **M-of-N scheme**:
- **N** is the total number of keys that can provide valid signatures
- **M** is the required number of signatures to create a valid transaction. 

There are several useful applications for MultiSig accounts.

## Benefits of MultiSig

**First**, requiring several valid signatures diffuses the responsibility for keeping coins between several people. 

_For instance_, a married couple could have _two_ individual private keys and _two_ types of _Multi Signature, or MultiSig_, accounts. 

- One account could act as a spending account**, meaning either one of the two private keys can initiate a transaction. 

- The other account could act as a **savings account**, which would require _both_ keys to sign off before sending any outgoing transactions.

The _spending_ account in this example would be called a **1-of-2 scheme**: 

- There are a total of **2** keys that can provide valid signatures and **1** of them is required to authorize a transaction. 

The _savings_ account is a **2-of-2 scheme**: 
- **2** keys can provide a valid signature, and both are required to sign a valid transaction.

**Second**, you reduce the risk of losing access to your money or being hacked, by keeping funds in a MultiSig address and storing your keys in _different_ locations. 

You could store your money in a **2-of-3 address** and keep the three keys on your _laptop_, your _phone_ and a _hardware wallet_. 

If one of those devices breaks, you can still access your funds and an attacker would need to compromise two devices to steal money. _Hence_, this setup eliminates single points of failure.

For larger amounts, **3-of-5 MultiSig** schemes can be used. Casa offers solutions for 3-of-5 MultiSig schemes where they store one key for you. 

As long as you have access _to two of your keys_, you will always be able to recover your funds.

## How MultiSig Works

The spending conditions of a UTXO are defined in the _pubkey script_. It essentially determines the verification process of the transaction.

![Spending from a regular P2PKH Single Signature Address]({{site.baseurl_root}}/assets/post_files/technology/expert/3.0-wallets/single-sig-spending_D.jpg)
![Spending from a regular P2PKH Single Signature Address]({{site.baseurl_root}}/assets/post_files/technology/expert/3.0-wallets/single-sig-spending_M.jpg)

A regular “single-signature” transaction _only_ involves the verification of one signature. 

The **Pubkey Script** is based on the public key that the money is sent to. The _digital signature_ that can authorize spending of this money must be based on the corresponding private key.

![Spending from a P2SH Multi-Signature Address]({{site.baseurl_root}}/assets/post_files/technology/expert/3.0-wallets/multi-sig-spending_D.jpg)
![Spending from a P2SH Multi-Signature Address]({{site.baseurl_root}}/assets/post_files/technology/expert/3.0-wallets/multi-sig-spending_M.jpg)

The spending conditions for MultiSig transactions are defined in a so-called _redeem script_. 

The hash of the redeem script functions as an address - a _Pay to Script-Hash_ (**P2SH**) address. This address and the information contained in the redeem script is included in the _pubkey_ script.

The redeem script of a multisig account entails the minimum number of signatures **M** that must be provided, as well as the set of keys **N** that can provide a valid signature. 

Redeem scripts can also involve other conditions, such as a time-sensitive component where funds are only spendable after a certain amount of time has elapsed.

## Creating a Multi-Signature Address

Imagine Alice bought ZEN on an exchange and wants to store them using a MultiSig setup. This means she needs to create a multi signature address and withdraw her funds to it.

![Generation of a Multi Signature Address]({{site.baseurl_root}}/assets/post_files/technology/expert/3.0-wallets/multisig-address-generation_D.jpg)
![Generation of a Multi Signature Address]({{site.baseurl_root}}/assets/post_files/technology/expert/3.0-wallets/multisig-address-generation_M.jpg)

1. First, she _generates_ a set of **private keys**. The number of keys generated depends on the MultiSig scheme she wants to use. 
	- Let’s assume she wants to setup a simple _1-of-2 scheme_, she generates two keys, either one of which is sufficient to authorize a transaction.
2. Next, she _creates_ the **redeem script_**. It contains the information about the scheme used, _1-of-2_ in Alice’s case, and the two public keys corresponding to the two private keys generated in the _first_ step.
3. Third, she _hashes_ the **redeem script**. The hash of the redeem script is encoded into a **P2SH** address.
4. Lastly, she _withdraws_ her _money_ from the exchange to her **P2SH** address.

There are several wallet implementations that offer multi signature support. This means, the wallet takes care of generating the keys and generating the redeem script. 

It also stores the _unhashed_ redeem script. This is necessary because one needs to provide the redeem script to be able to spend the funds. 

_The full redeem script only becomes part of the blockchain when Alice spends money from her MultiSig address for the first time_. 

It is also possible to regenerate it on demand, based on the **N** defined public keys.

## Spending From a Multi-Signature Address

Verification of a transaction from a _P2SH_ address involves checking if the redeem script hashes to the redeem script hash included in the _UTXO’s_ pubkey script. 

In a second step, they will verify if the provided digital signature(s) satisfy the public key-based spending conditions included in the full redeem script.

![Spending from a Multi Signature Address]({{site.baseurl_root}}/assets/post_files/technology/expert/3.0-wallets/multisig-address-spending_D.jpg)
![Spending from a Multi Signature Address]({{site.baseurl_root}}/assets/post_files/technology/expert/3.0-wallets/multisig-address-spending_M.jpg)

**To spend from a P2SH address, the following steps are necessary:**

1. First, Alice will use the UTXO from the funding transaction and use it as an input to her spending transaction.
2. Second, she places the full redeem script in the signature script part of the output.
3. Third, she creates the required amount of digital signatures using her private keys. 
	- If we follow the example from above, she is using a **1-of-2** signature scheme and a single signatures created with either key **A** or **B** will suffice.
4. Lastly, the transaction is broadcast to the network.

When the transaction is broadcast, the _full redeem script becomes public_. This means that observers will know the address being used is a MultiSig address and the different spending conditions. 

This is _undesirable_, as it compromises privacy. Two improvements are actively being worked on and are likely being implemented on various blockchains in the not-so-distant future.

## MultiSig Improvements 

### MAST

The first is called **Merkelized Abstract Syntax Trees** (_MAST_). 

Here, the spending conditions are arranged in a _merkle tree_ structure and the _merkle root_ is included instead of the redeem script hash. 

By providing the fulfilled scrip conditions, _redeemScripts_, and the _merkle path_, a node can verify if a transaction is valid but _does not learn_ anything about the other unfulfilled spending conditions.

### Shnorr

The second improvement over traditional multi signature transactions comes with **Schnorr signatures**. They comprise two main aspects: _signature aggregation_ and _key pair concealment_.

**Signature aggregation** allows several signatures to be combined into a single signature. This provides better privacy, as the aggregate public key is indistinguishable from a regular private key and an observer cannot link several public keys to one another. 

_Schnorr signatures_ also come with increased efficiency. They produce _much_ less data compared to an un-aggregated multi signature transaction.

**Key pair concealment** allows the modification of private keys and public keys.

> _“As a simplified example, a private key and its corresponding public key could be tweaked by multiplying both by two. The “**private key x 2**” and the “**public key x 2**” would still correspond, and the “**private key x 2**” could still sign messages that could be verified with the “**public key x 2.**” Anyone unaware that the original key pair was tweaked wouldn’t even see any difference; the tweaked keys look like any other key pair.”_ - [Aaron van Wirdum](https://bitcoinmagazine.com/technical/taproot-coming-what-it-and-how-it-will-benefit-bitcoin)

**Using a multi signature scheme to secure your funds comes with a security-convenience trade-off:**

- The _more_ keys **M** are required to sign a transaction, the _more_ cumbersome the process of spending money becomes.
- The _larger_ the total number of keys **N** included in the MultiSig scheme, the _more_ devices and backups need to be maintained.
- Alternatively, the overall security of the account is _increased_ with a larger **M**. The difference between **M** and **N** is the number of keys a user can lose while being able to recover their funds. 
	- It is up to the individual user to determine if the added complexity is justified.

## Summary - MultiSig

Several wallets support more advanced _multi-signature transactions_. They are classified as N-of-M schemes, where a minimum of N keys out of a set of M keys are needed to authorize spending. 

_MultiSig wallets_ can be used to divide responsibility for storing money between several parties, increasing security. A single entity might also choose to set up a MultiSig account and store the keys in several locations.

We also looked under the hood of multi signature transactions. The conditions for spending from a multi signature account are defined in a _redeem script_. The hash of the redeem script is placed in the _pubkey script_ of a transaction output. 

The pubkey script is always the location where spending conditions are defined. In order to spend money from such an account, you will need the _full_ unhashed redeem script, as well as the minimum amount of required digital signatures.
