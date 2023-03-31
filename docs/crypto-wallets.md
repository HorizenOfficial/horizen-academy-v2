---

sidebar_position: 57
sidebar_label: Wallets
title: What is a Crypto Wallet?
slug: /crypto-wallets/
description: A wallet is an app for generating, managing, and storing cryptographic keys - public and private keys. You can check your balance, receive, and send funds.
image: /img/crypto-wallets/crypto-wallets-meta.jpg
last_update:
  date: 2/21/2023
  author: Horizen Contributor

---
# What is a Crypto Wallet?

A **wallet** is an app for generating, managing, and storing cryptographic keys - your [public and private keys](public-key-cryptography-pkc.md).

With a wallet, you can: 
- Check your balance
- Receive funds
- And send funds

![wallet transaction 1 balance](/img/crypto-wallets/wallet-transaction-1-balance.jpg)

Wallets generally don’t allow you to buy cryptocurrencies; that is what [exchanges](https://www.horizen.io/exchanges/) are for. 

_All_ exchanges provide you with wallets to store your coins in after you buy them, _but_ wallets usually don’t provide you with an exchange service.

A wallet: 
- Generates a random _private key_, **sk**
- Derives your _public key_, **pk**, using [elliptic curve cryptography](elliptic-curve-cryptography-ecc.md) 
- Derives your [address(es)](wallet-addresses.md) from your public key
- Stores your private key(s) 
- And takes care of [signing transactions](digital-signatures.md)

In this article, we want to give you an overview of what types of wallets there are and help you find the right wallet for you. We show you how your [_mnemonic phrase_](mnemonic-phrases.md) is generated, and how it relates to your actual private key. 

Depending on the wallet implementation, the process for generating your address from a private key looks slightly _different_.

## How Do Crypto Wallets Work?

A wallet is a program that has *three* main functions:

1. Generating, storing and handling your **keys** and **addresses**
2. Showing you your **balance**
3. Creating and signing _transactions_ to send funds

![what is a crypto wallet](/img/crypto-wallets/what-is-a-crypto-wallet.jpg)

The _first_ function is the primary function and main differentiator of all wallets: _generating_, _storing_, and _handling_ your keys. 

Having access to your private keys means being able to spend your money. Where you store your keys determines the safety of your funds and at the same time, the convenience of using them. 

With wallets, there is usually a trade-off between _security_ and _convenience_: 
- Having **some** funds in your mobile wallet on your smartphone makes them easy to spend, but not very secure. 
- Keeping **larger** amounts of money on a hardware wallet is very secure, but not as convenient when you want to spend it.

:::info Cobalt Web Wallet
[**Cobalt**](https://www.horizen.io/wallets/cobalt/) is a secure and easy-to-use web extension wallet for the Horizen cross-chain ecosystem. Trustworthy, reliable and built to easily manage your assets.
:::

### Cryptocurrency Wallets Act as a Keychain

Although the term wallet might be more intuitive, the _function_ of a wallet is closer to that of a **keychain** rather than an actual wallet.

_To make it crystal clear:_

_You don’t actually store any cryptocurrency in your wallet._ You just store the keys to access them on the blockchain.

The blockchain records the amount of coins associated with a key pair, your identity on the blockchain. It calculates the amount of money the keys have access to based on all the transactions on the blockchain.

The main function of a blockchain is to store all transactions in the correct order. 

If you receive **10 ZEN** in a transaction and receive another **10 ZEN** later on. It is clear that you, the _owner_ of the key pair, owns **20 ZEN.**

![crypto keys in wallet](/img/crypto-wallets/crypto-keys-in-wallet.jpg)

To spend your money, you need the _private key_ stored in your wallet. This is why a keychain is a good analogy for what a wallet does. 

**If you don’t control your keys, you don’t control your funds.** 

You don’t need to understand how public-key cryptography works in detail in order to use cryptocurrencies, but the concept of your keys giving you access to your funds is still important to remember.

Wallets create a layer of abstraction and are becoming more and more user-friendly. Wallets show you your balance, generate an address to receive funds by just clicking “_deposit_” or “_receive_”, and provide you with a simple interface to send funds.

All you need to do is enter the address that you would like to send money to and the amount you want to transfer. The signing procedure using your private key will happen in the background when you click send.

### Wallet Transactions

A _transaction_ is when you send money to someone else. 

When you create a transaction, you send a _message_ to the network that some of your money now belongs to somebody else. The blockchain records this message.

**For example**, _Alice_ could send **one** ZEN to her friend _Bob_. Alice will send a message to everyone on the network that she just sent Bob **one** ZEN.

When Bob wants to spend that **one** ZEN, he will create a new message to the network. This message will say: _"I received one ZEN from Alice and I am sending that one ZEN to someone else now"._

This is how money is sent from one person to another _without_ the help of a central third party.

![blockchain transactions](/img/how-do-blockchains-work/blockchain-transactions.jpg)

_A wallet gets your balance from_ monitoring the blockchain for any transactions that involve your address. Initially, all transactions are _cryptographically locked_. 

The lock is based on the address the transaction is sent to, and can only be unlocked with the corresponding private key.

**Let’s assume this is your wallet**:

![wallet transaction 1 balance](/img/crypto-wallets/wallet-transaction-1-balance.jpg)

You received a total of **20** ZEN in two _different_ transactions of **10** ZEN each. Now you want to spend **2** ZEN at lunch. Your wallet starts with a blank transaction and, in a first step, chooses one of your prior transactions to spend. 

In this case, both transactions are of sufficient value, so your wallet might randomly choose the first one.

![wallet transaction 2 inputs](/img/crypto-wallets/wallet-transaction-2-inputs.jpg)

The money that is being spent in a transaction is called the **input**, and the money that is being received is called the **output**.

Your wallet places one of the outputs you own in the empty transaction and uses your private key to unlock it, so it becomes _spendable_ - this is what we called **signing** the transaction. 

The unlocked output is now used as an input to a new transaction.

![wallet transaction 3 outputs](/img/crypto-wallets/wallet-transaction-3-outputs.jpg)

Next, your wallet creates the _outputs_. It asks you for an _address_ to send money to and an _amount_. 

You want to send **2** ZEN to address **XYZ** to pay for your lunch, so your wallet creates the first output accordingly.

The second output is generated automatically - its called the _change output_.Outputs are similar to cash denominations. If you need to pay **$2** **USD** but only have a **$10** bill, you expect to get **$8** in change. 

Your wallet automatically includes the change in the transaction. The newly generated outputs are locked by default.

![wallet transaction 4 broadcast](/img/crypto-wallets/wallet-transaction-4-broadcast.jpg)

Lastly, your wallet broadcasts the transaction to the network, where _all_ [nodes](blockchain-nodes.md) and miners will verify if the signature you used to unlock your money is valid. If it is, miners will include your transaction in the next block. 

The output of **10** ZEN you used is from now on publicly visible as _spent_. The newly created outputs of **2** and **8** ZEN are included in a new block and locked - or _unspent_.

Then you come across the term [**UTXO** - _Unspent Transaction Output_](utxo-vs-account-model.md) - this is what it refers to.

![wallet transaction 5 confirmed](/img/crypto-wallets/wallet-transaction-5-confirmed.jpg)

When you own **10** ZEN, it means you received **10** ZEN in a transaction, and you have _not_ unlocked and spent that output, yet.

### What if I Lose My Keys?

You don’t have to ask anybody to join the network, and you don’t have to register with a central authority to create a wallet. Being able to do this comes at the cost of _you being responsible for the safety of your coins_. 

_There is nobody that can help you recover your keys if you lose them._

If anybody were able to recover your keys for you, they would also be able to _steal_ your funds. This would eliminate the trustless aspect of blockchains. 

You may have heard stories about people searching for old hard drives because they have “lost their Bitcoins”. _More accurately_, they lost the keys to _access_ their [Bitcoin](bitcoin-glossary.md).

But there is a sort of recovery mechanism with many wallets called a _mnemonic phrase_, or backup phrase. A **mnemonic phrase** usually consists of **12** or **24** words. With these words, you can recover your keys. You receive your mnemonic phrase when you install and set up your wallet.

It’s _essential_ to understand that your backup phrase is just as important as your private key itself. If _anybody_ gets their hands on your backup phrase, they can access your money. Saving it as a screenshot or text file on your computer is not a good idea!

## Types of Cryptocurrency Wallets

![types of crypto wallets](/img/crypto-wallets/types-of-crypto-wallets.jpg)

Let's take a look at the following types of crypto wallets:

- Hosted Web Wallets
- Non-Hosted Web Wallets
- Desktop Wallets
- Mobile Wallets
- Paper Wallets
- Hardware Wallets

### Hosted Web Wallets

We can distinguish between _hosted_ and _non-hosted_ web wallets. With _hosted web wallets_, your keys are stored online by a trusted third party. 

These parties are mostly exchanges such as _Coinbase_, _Binance_, or _Bittrex_. When you create an account with these entities, they will create an entry in their internal database linking your account to a set of _key pairs_ for the different coins they have listed.

![hosted web wallet](/img/crypto-wallets/hosted-web-wallet.jpg)

An advantage to a hosted web wallet is the _option_ to recover your password in case you forget or misplace it. Losing your private keys, together with your mnemonic phrase, leads to a loss of funds _in all other cases_.

While this may sound reassuring, there are some drawbacks with hosted wallets, which are also called **hot wallets** or _cloud wallets_. Remember: if you don't control your keys, you don't control your funds. 

There is _always_ a third party risk, no matter how trustworthy the party might seem.

- **First**, they are a more attractive target for hackers than individuals because their honeypot is much bigger.

- **Second**, a sudden change in regulation might not allow them to allow you to withdraw your funds in a worst-case scenario. It is unlikely, but definitely not impossible.

- **Third**, there is _always_ a chance of an entity going _bankrupt_ or stealing money. With major exchanges like the ones mentioned above, this risk seems small, but it does exist. Just ask former Mt. Gox customers.

For these reasons, we advise everybody to store the keys to their funds themselves. This means storing them in a wallet where you have control over your private keys. 

There is a responsibility that comes with being in charge of the safety of your funds yourself, _but_ enabling you to do this is one of the main motivations for the existence of cryptocurrencies!

You _will_ need to keep some funds on an exchange if you plan to trade often.

### Non-Hosted Web Wallets

Besides hosted web wallets, there is also a range of _non-hosted web wallets_. One of the most popular non-hosted web wallet is likely _MyEtherWallet_, which can store _Ether_ (ETH) and _all_ _ERC-20_ tokens, [tokens](what-is-a-token.md) that are "living" on the [Ethereum](ethereum-glossary.md) blockchain. 

:::info EVM on Horizen
[**Horizen EON**](https://eon.horizen.io/) is our first public proof-of-stake sidechain and a fully EVM-compatible smart contracting platform that allows developers to efficiently build and deploy dapps on Horizen, while fully benefiting from the Ethereum ecosystem.
:::

These wallets provide an interface to check your funds or create transactions in your web browser, _but_ you have to provide the keys with each login.

There are a range of options to access your wallet with MyEtherWallet, often abbreviated as MEW. The _first_ option requires your address, but only lets you view your funds.

_MetaMask_ is a browser plugin that provides the option to make ETH payments _within_ your browser _and_ the ability to login to MEW. It also provides a function detecting phishing sites and warning you when you are about to open one.

The following options, _Ledger_ _Wallet_, _Trezor, Digital Bitbox_, and _Secalot_ are _hardware wallets_. We will get to those later in the article.

Accessing your wallet with a _keystore_, or _.json file_, is possible, but not recommended. The file contains your private key, when you create your wallet, you have the option to download it. If it gets into the wrong hands, they will have access to your funds, so saving it on your desktop is not the ideal solution. 

If you want to use this method, you should encrypt the .json file and store it on a separate device like a _USB_ drive. To use, connect the drive, decrypt the file, then select the file in your browser and voila. After that, you can disconnect your storage medium of choice again.

The _last two_ options are more or less the same with regards to safety. You can _either_ enter your private key directly _or_ your mnemonic phrase, which yields your private key when hashed, which are both problematic if your machine is compromised.

In conclusion, a non-hosted web wallet is quite convenient and just as secure as the method you choose to provide your keys with.

### Desktop Wallets and Mobile Wallets

If you start off with the question "_where are your keys?_", the desktop and mobile wallet will give you the same answer: _on the device._

 _Phones_ and _tablets_ are more powerful than ever, the _difference_ between a desktop and a mobile wallet is _marginal_. It is also arguable whether one is safer than the other.

If you want to use crypto for everyday transactions, _there is almost no way around keeping some funds in a mobile wallet_. 

As mentioned before, when creating your wallet, you will get a mnemonic phrase that you should keep safe. Usually, there is a **PIN**, **password** or **Face/Touch-ID** protection to access the wallet. 

_You should never keep more funds in a mobile wallet than you are willing to lose_.

It's the same as with cash: you don't carry around all your money in a wallet. You withdraw as much as you are comfortable handling in cash and keep the rest in your account or under the mattress.

With **desktop** and **mobile wallets**, there is a choice between _single_ and _multi-currency_ wallets. Those should be rather self-explanatory terms. The _former_ allows you to store _one_ coin, while the _latter_ supports _multiple_ currencies. 

Some of the more popular examples of _desktop_ wallets include _Coinomi_ and [_Sphere by Horizen_](https://www.horizen.io/spherebyhorizen/). For _mobile_, there are _Mycelium_ or _Paytomat_, just to name a few.

If you get your first coins on an exchange, I would recommend you transfer your funds out of the exchange from the hosted web wallet, onto a _desktop_, _paper_, or _hardware wallet_. 

Send a fraction first to make sure everything works as planned.

If your first transaction works, then you can send the rest. You are now protected from third-party risk, _but have full responsibility for your funds yourself_.

### Paper Wallets

Referencing our golden thread again and asking "_where are the keys_" gives you a simple answer with a [_paper wallet_](https://zenpaperwallet.com): in your hands!

A **paper wallet** is your public and private key pair printed on paper. Almost _every_ cryptocurrency offers a paper wallet generator. 

To create a key pair, you _generally_ first have to create some entropy, a term for disorder. In other words: _you want your keys to be as random as possible_. 

This is mostly done automatically, but sometimes you will find features where you have to randomly move your mouse or hit keys on your keyboard to create randomness.

When _printing_ your paper wallet, you should not use a _shared_ printer, like the one in your office. In a _best-case scenario_, the printer doesn't even have an internet connection. Printers _usually_ keep a copy of the files they printed last, and an _attacker might exploit this._

You will end up with something looking like this after printing the wallet.

![crypto paper wallet](/img/crypto-wallets/crypto-paper-wallet.jpg)

There is only one thing left to do: send your coins to the public key. After that, you have a perfect long term storage solution for your coins. 

The main risk with a paper wallet is you actually _losing_ or _destroying_ the wallet by accident. If you don't have a mnemonic phrase to recover the private key, you are at risk of losing all funds on the wallet. 

So choose wisely where to store your paper wallet. Print several copies if you feel uncomfortable having only one and store all of them in separate, safe places.

### Hardware Wallets

Moving on to everybody's darling: _hardware wallets_. 

With a **hardware wallet**, your keys are stored on the device in something called the _secure element_. The **secure element** is a place to store data, in this case your keys, that _cannot_ be directly accessed by your computer or any other device even when it is connected.

Although it does look like a simple USB drive, it can actually do more than just providing storage for your keys. To use a hardware wallet, you usually have a few options of which interface to use. 

Like MyEtherWallet, a few other wallets offer hardware wallet support. _Additionally_, you have the _native wallet apps_ provided by the producer. In the case of _Ledger_, for example, the native app is called _Ledger Live_.

#### How Does a Hardware Wallet Work?

The interface generates an address when you want to receive funds.

Using this feature is pretty straightforward: if you click the receive button, the process runs in the background and the address is displayed for you to share with the sender.

If you want to send money, the app creates the _raw transaction_ that needs to be _signed_. The _unsigned_ transaction is now sent to your hardware wallet, where it gets signed with your _private key_. 

The signature is then returned to your computer and the complete transaction, including the signature, is broadcasted to the network.

![hard wallet transaction](/img/crypto-wallets/hard-wallet-transaction.jpg)

_Your private key(s) do not leave the device, so they are not visible to the computer you are using your hardware wallet with at any time_. This is why a hardware wallet is considered the most secure way of storing crypto, especially large amounts.

If your device ever breaks, you have your mnemonic phrase as a backup. At the risk of being repetitive: your mnemonic phrase, under all circumstances, **_must stay private and in a secure location_**. 

A copy at a trusted family member or in a bank vault might be a good idea in case of a fire or flood.

## Summary - Crypto Wallets

A _wallet_ is a program that helps you manage your keys and create transactions easily. Your wallet looks at the blockchain to determine _how much money_ you own by reviewing the transaction history. To send funds, it writes a transaction and signs it, meaning the wallet encrypts it with your private key

There are many ways to store your cryptocurrencies. _Usually_, there is a trade-off between convenience and security. The most important question is: _where are the keys?_ 

A wallet is only a piece of software, an interface, that helps you perform the basic functions of cryptocurrencies: view your balance, create an address to receive funds, and create transactions to send funds.

With a _hosted online wallet_ you are trusting a third party to handle your keys. You have the option to recover your password if misplaced, but there is always a _significant_ third-party risk. 

**If you don’t control your keys, you don’t control your funds!**

With _desktop, mobile, paper or hardware wallets_ you own the keys and nobody but yourself is responsible for keeping them safe. If your device breaks you have a _mnemonic/recovery phrase_ to recover access to your money. 

The mnemonic phrase is a list of words that can be used to restore your private key. The mnemonic phrase is as sensible as your private key itself and if it gets in the wrong hands, your money can be stolen. _This should not scare you, but make you cautious._



