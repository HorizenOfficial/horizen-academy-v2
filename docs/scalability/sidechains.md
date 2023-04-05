---

sidebar_label: Sidechains
title: What is a Sidechain?
slug: /sidechains/
description: Sidechains benefit from the decentralization and security of the underlying main blockchain, and maintain the flexibility to solve highly specific use cases.
image: /img/sidechains/sidechains-meta.jpeg
last_update:
  date: 2/21/2023
  author: Horizen Contributor

---

# What is a Sidechain?

Blockchain technology offers some unique properties, such as achieving consensus among unknown actors and providing a strong incentive mechanism for honest behavior. _However_, building real-world applications on blockchain technology can be challenging.

The _first_ challenge of building applications on the blockchain is _security_. A blockchain’s security increases as the number of network participants grows. As a result, spinning up a small application-specific blockchain with just a few stakeholders does not provide the same security level as utilizing an established one with thousands of nodes.

A blockchain’s security model, in turn, depends on utilizing a [token](tokenomics/what-is-a-token.md) with real value, tradeable on established markets. This holds in the case of [_Proof of Work_](consensus/proof-of-work-pow.md) blockchains in which _miners_ get rewarded for their computational power with a token, as well as in [Proof of Stake blockchains](consensus/pos-vs-pow.md) where a validator’s security deposit needs to have economic weight. 

A native token with real-world value, thus incentivizes users to provide additional security to the network by [mining](mining/crypto-mining.md) or staking and allows applications to transfer value easily.

_Building directly on top of a public blockchain comes with other challenges_:

- **First**, blockchains are not well suited for handling large amounts of data and transactions. 

- **Second**, deploying a new feature, which might be necessary for a given application, would require consensus-building among the entire community of stakeholders. If only a small subset of participants benefit from the feature, it is unlikely to be implemented. 
- **Lastly**, the codebase would quickly become unmanageable if features and applications were built directly on the mainchain.

In summary, the three major roadblocks to building on public blockchains are security and scalability, the burdensome governance processes required for introducing new functionality, and the lack of a token with real-world value.

![zendoo sidechain protocol](/img/cross-chain-transactions/zendoo-sidechain-protocol.jpg)

_Meet sidechains_. 

## Sidechains - Interoperable Blockchains

Sidechains benefit from the decentralization and security of the underlying main blockchain and maintain the flexibility to solve highly specific use cases.

_Adding_ and _removing_ features onto a sidechain _does not_ depend on the mainchain’s community consensus since new features will only affect sidechain users. Also, new features can be added to separate sidechain ledgers, reducing stress on the mainchain.

Sidechains cannot derive 100% of their security from the mainchain; they still require dedicated nodes.

But incentive mechanisms can be constructed that lead to existing mainchain nodes also supporting sidechains built on top of it.

When you enable sidechains, you allow a number of different blockchains to run in parallel. _A sidechain is a blockchain in and of itself with the added feature of being [interoperable](interoperability/blockchain-interoperability.md) with the main blockchain_. 

Transactions are the most common interaction with a blockchain facilitating a [cryptocurrency](cryptocurrency/cryptocurrency.md), such as our current Horizen blockchain. The Engineering team at Horizen, led by Alberto Garoffolo, has proposed a sidechain construction based on _proof-of-stake_ principles.

The most important part of building our sidechain construction is the **cross-chain transfer protocol**: 

_This innovation is a new backward transfer protocol that allows transactions from one of the possibly many sidechains back to the mainchain, without the mainchain having to track the sidechain and without introducing a centralized federation of validators._ While a reference implementation of a sidechain consensus protocol will be provided, a wide range of sidechain consensus protocols will be possible.

Sidechains are a concept that people have been looking into for a while now. The first proposal of sidechains was developed by _Back et al_. 

in 2014 and several teams are working to implement them as a solution to the problems of _scalability_ and _interoperability_.

### What is a Sidechain?

When _Back et al._ introduced the sidechain concept in 2014, they provided the following definition along with it:

> “A sidechain is a blockchain that validates data from other blockchains. […] A pegged sidechain is a sidechain whose assets can be imported from and returned to other chains; that is, a sidechain that supports two-way pegged assets.” A. Back et al. - Enabling Blockchain Innovations with Pegged Sidechains, 2014

In other words, a sidechain is a blockchain that can communicate and interoperate with one or more other chains. When you hear the term sidechain today, people are mostly talking about *pegged sidechains*, which allow you to transfer assets back and forth between chains.

### Benefits of Sidechains

Most blockchains facilitating cryptocurrencies use the proof-of-work consensus algorithm and have incorporated the core functionalities of the Bitcoin protocol. Therefore, they inherited a lot of the constraints from the code created by [_Satoshi Nakamoto_](fundamentals/satoshi-nakamoto.md).

**This includes:** 
- Limited throughput
- High latency
- And a limited ability to scale

*Sidechains* present an option to help overcome some of these technological shortcomings, but besides opening doors to only potential technical leaps, they also touch on the topic of [governance](governance/blockchain-governance.md).

As debates across the recent years have shown, making changes to the codebase in decentralized projects tends to be a cumbersome process. _This is arguably a feature, not a bug._ 

Stability, not in regards to token price but code, is crucial, especially for projects such as [Bitcoin](cryptocurrency/bitcoin-glossary.md), and the overall security of the protocol benefits greatly from the careful consideration of every change applied to the system.

Sidechains offer a mechanism to implement features on top of a first layer protocol without compromising the security or stability of said protocol. After an initial [_fork_](governance/blockchain-forks.md) that includes the capability to deploy sidechains and introduces a way to transfer assets from the mainchain to the sidechain and vice versa, a number of parallel chains can be built, each serving a different purpose, without having to build consensus for each individual feature.

_It is important to note_ that the initial change to the codebase enabling the deployment of sidechains and cross chain transfers has to be done carefully and possible solutions should be evaluated with great caution. If a project manages to deploy those features, then developers can start playing around and build on top of projects where changes to the protocol traditionally required consensus building for months, or even years. 

Ideally, the sidechain implementation will give developers on the sidechain _many degrees_ of freedom while eliminating the possibility to compromise mainchain security. If a user has no need to use a particular sidechain, he doesn’t have to care about the security of those sidechains.

### What Can You Do with a Sidechain?

As we said earlier, many teams are looking into the technology of sidechains for a variety of purposes:

- The team behind Rootstock is working on a way to provide _smart-contract functionality_ on top of Bitcoin. They refer to their sidechains as _secondary chains_

- Polkadot, naming its sidechains Parachains, aims to connect *permissioned* and *public* blockchains 

- The general idea of Plasma is also based on sidechains, or _child blockchains_, and here the main goal is *scaling*. 

- Drivechains are meant to enable BTC to be moved to other software applications, like different public blockchains.

You could make a case of distinguishing between _sidechains_ and _drivechains_ as discussed [by Rootstock](https://docs.rsk.co/Drivechains_Sidechains_and_Hybrid_2-way_peg_Designs_R9.pdf). The general idea is the same, and satisfies the broad definition of a _pegged sidechain_ that _Back et al._ provided about eight years ago.

Critics of the sidechain concept like to point out that most sidechain implementations currently rely on a set of _validators_ to facilitate [cross-chain transactions](interoperability/cross-chain-transactions.md). Sidechain constructions are oftentimes called _trust-minimized_ instead of _trustless_. 

The risk comes down to the ability of the trusted validators to censor transactions from main to sidechain, and vice versa. Our protocol addresses this issue in an elegant way.

## Use Cases for Sidechains

### Scalability

Use cases for sidechains include *data* or *transaction-heavy applications*.

A **transaction-intensive use case** could be a real-time in-game payment system in which users can earn and spend tokens. A traditional blockchain would not be suited to handle the load if the system had several thousand simultaneous users and logged all rewards on the _mainchain_. 

A sidechain with short block intervals and a centralized consensus mechanism to verify transactions efficiently is a much more feasible approach.

**A data-intensive use case** could be a supply chain tracking system. If this system was used by producers, logistic companies, retailers, and other third parties, the amount of data would soon exceed the limits most public blockchain nodes are willing to handle. A dedicated sidechain with additional data fields for storing product-specific metadata can be a possible solution. 

The blocksize would likely be increased to accommodate more data storage per time unit.

### Governance

Deploying a domain-specific sidechain would allow quick feature iterations by circumventing the consensus-building process used on a public network. This _decoupling_ protects the mainchain because bugs resulting from new feature deployment would only affect the destination sidechain.

Horizen is evaluating which sidechains to develop first. Options include sidechains supporting sophisticated, Turing complete smart contracts, near instant payment settlements, or a sidechain handling the Zen Blockchain Foundation treasury funds.

While Horizen’s mainchain does not support [custom tokens](tokenomics/why-create-a-token.md), a sidechain could provide this functionality. Any developer is free to build and deploy sidechains on Horizen’s mainchain without permission and without the risk of breaking things.

Sidechains are an _essential_ technological step to expanding the capabilities of distributed ledgers and making them suitable for a broader range of use cases.

## History of Sidechains

Sidechains are a concept people have been talking about for years. The first sidechain proposal was written in 2014, and since then, several teams have implemented them in different ways.

### Pegged Sidechains

As stated before, the first mention of sidechains came from _Adam Back et al._ in a paper released in 2014. “[Enabling Blockchain Innovations with Pegged Sidechains](https://blockstream.com/sidechains.pdf)” introduced the technological concept of pegged sidechains that allow the transfer of assets from one chain to another. The paper introduced much of the terminology around sidechains still used today.

#### Symmetric vs. Asymmetric Peg

The authors distinguish between _symmetric_ and _asymmetric_ pegs. 

In a **symmetrically-pegged sidechain** construction, the mainchain monitors the sidechain and vice versa. Because both systems are aware of each other, cross-chain transfers work the same both ways - they are _symmetric_.

In an a **symmetric two-way peg** construction, the sidechains monitor the mainchain, but the mainchain does not track the sidechain. 

In this construct, the transfer of assets from mainchain to sidechain, a **Forward Transfer**, is simple because sidechain nodes can verify incoming transactions themselves. 

The transfer of assets back to the mainchain, a **Backward Transfer**, is more complex. The mainchain needs to “be told” about incoming transfers and relies on some previous verification of transactions. 

**One of the conclusions of the paper reads as follows:**

> _“The key observation is that any enhancement to Bitcoin Script can be implemented externally by having a trusted federation of mutually distrusting functionaries evaluate the script and accept by signing for an ordinary multisignature script.”_ - [Enabling Blockchain Innovations with Pegged Sidechains](https://blockstream.com/sidechains.pdf)

In other words, an asymmetric sidechain can support most conceivable applications and internal transactions, as long as a group of certifiers verifies and forwards relevant transactions to the mainchain in a format it supports.

An **asymmetric sidechain** construction is desirable because it allows the deployment of many different sidechains without requiring the consensus of the community. 

A **symmetric sidechain** would require the mainchain to update with each new sidechain deployment - rendering the reduced governance benefit useless.

### Proof of Authority Sidechains

A notable sidechain construction based on the Ethereum blockchain is built by the _POA Network_ team. The authors _Barinov_, _Baranov_, and _Khahulin_ [propose](https://hackmd.io/@F67-rdJCQ0yHlzTN8AoRfw/HkV8Vw7_-?type=view) "_an open, permissioned network based on [Ethereum](cryptocurrency/ethereum-glossary.md) protocol with Proof of Authority consensus by independent validators._”

**The design is asymmetric:** Sidechains monitor the mainchain but not vice versa. 

They hypothesized that deploying sidechains on top of a [smart contract enabled blockchain](defi/smart-contracts.md) is simpler than deploying on a Bitcoin-based system. They purported that forward and backward transfers could be handled via smart contract logic instead of via the core protocol.

Nonetheless, each sidechain in the POA Network depends on a group of individuals, verifying backward transfers and broadcasting them to the Ethereum mainchain.

> “Each project deploying the bridge must account for its own validators. It’s absolutely necessary for the project(s) to identify the set of individuals/nodes assigned to validate the bridge transactions. It’s important to note validators are required as part of any bridge launch.” - [_POA Network, Introducing the ERC20 to ERC20 TokenBridge_](https://medium.com/poa-network/introducing-the-erc20-to-erc20-tokenbridge-ce266cc1a2d0)

### Other Sidechain Constructions

Several teams are working on other sidechain constructions. As mentioned before, Drivechains are sidechains built on the Bitcoin network in which mainchain miners perform the verification of transactions from drive to mainchain.

The most significant number of sidechain protocols are built on the Ethereum network. Besides the _POA network,_ [Plasma](http://plasma.io/plasma-deprecated.pdf) is another noteworthy example. It was presented by Joseph Poon and Vitalik Buterin in 2017 and is based on smart contracts deployed on the Ethereum main net.

**The sidechain constructions mentioned above assume one of two things:**

- The _design_ is **symmetric**, requiring the mainchain to monitor all sidechains to verify backward transfers 
- The _construction_ is **asymmetric**, and the mainchain relies on some sort of certifiers to verify and broadcast transactions from the sidechains to the mainchain.

_A first iteration_ of [Horizen’s sidechain construction](https://www.horizen.io/assets/files/Horizen-Sidechains-Decoupled-Consensus-Between-Chains.pdf) also relied on certifiers to sign backward transfers batched in withdrawal certificates.

## Why Does Horizen Look at Sidechains?

The Horizen blockchain project has set itself ambitious goals. 

We plan on including features such as a treasury system for the [DAO](governance/decentralized-autonomous-organization-dao.md), in cooperation with IOHK. Work continues on a decentralized solution for tracking Secure and Super Nodes, and handling their rewards, as well as developing a [Block-DAG](scalability/directed-acyclic-graph-dag.md) protocol to increase transaction throughput.

_You can probably see the benefits of developing a sidechain first as some of these functionalities would require significant modifications of the core client if implemented directly into the existing codebase_. 

Building new features and making changes to the protocol, even if they are small, is not just challenging from the aspect of building consensus around them; it also comes with security risks. Every addition has to be considered carefully.

The idea is to implement a robust sidechain model, one that simplifies adding new features, and use that process to expand the Horizen ecosystem afterward. Sidechain implementations will be completely decoupled from the mainchain and can run entirely different consensus algorithms.

This way, it would be possible to run the sidechains facilitating the treasury and node-tracking system with a [Proof-of-Stake](consensus/consensus-mechanisms.md) like consensus protocol, while maintaining the mainchain with a more “traditional” [Proof-of-Work](consensus/proof-of-work-pow.md) consensus mechanism.

### How Does It Work Now?

**The construction of the sidechain model consists of two parts:**

1.  The **sidechain consensus protocol** —  *SCP*
2.  The **cross-chain transfer protocol** or *2-way peg* — *CCT*

The **sidechain consensus protocol** governs how the network agrees on new blocks and therefore on the history of transactions. 

**The cross-chain transfer protocol** determines how assets can be sent from the mainchain to a sidechain and vice versa.

The **CCT** consists of two sub-protocols that we want to introduce shortly:

- The **first** sub-protocol deals with forward transactions, which are transactions from mainchain to sidechain. 
- The **second** sub-protocol deals with backward transactions, which are transactions from sidechain to mainchain.

![sidechain construction scp cct](/img/sidechains/sidechain-construction-scp-cct.jpg)

The first design decision to make is whether the mainchain should be aware of the sidechains. The team led by Alberto Garoffolo decided to develop the SCP and CCT independently of each other.

_The CCT protocol is to be unified and fixed by the mainchain logic so that all sidechains will use the same CCT protocol. The SCP protocol will be completely decoupled from the CCT and mainchain logic in general so that a sidechain developer is free to choose the SCP protocol depending on the needs._

Although a number of different sidechain consensus protocols are possible, we will outline the proposed reference implementation of the SCP that is based on Ouroboros. It is a Proof-of-Stake consensus protocol that makes use of the concept of delegation. 

After that, we will talk about the Cross-Chain Transfer Protocol.

### The Sidechain Consensus Protocol - SCP

The proposed SCP is based on the Ouroboros Protocol developed by IOHK for the Cardano project with some slight modifications. 

_It is a Proof-of-Stake based consensus protocol that makes use of the concept of delegation and generally works like this:_

- _Time_ is divided into epochs of **k** slots. It is not specified yet, but let’s assume **k** will be **8** for the sake of the argument and matching the graphic below.
- Each slot represents the opportunity to create a sidechain block within a certain period of time. Research suggests **20** seconds is a reasonable amount of time to allow network synchronization across the globe. During an epoch up to **k** blocks will be forged.
- There is a _slot leader_ for each slot. The slot leader is authorized to generate a block within this time period.
- Before an epoch begins, there is a _Slot Leader Selection Procedure_ that assigns one slot leader per slot for the next epoch. In our example, **8** slot leaders will be selected per selection procedure/epoch.
- If a slot leader _misses_ their time slot to forge a block, the next slot leader will include the transactions that weren’t included previously.

![block epochs](/img/sidechains/block-epochs.jpg)

#### Modifications of the Ouroboros Protocol

The security of software is usually evaluated under certain assumptions. Consensus protocols are no different.

POW consensus is based on the assumption of an honest majority in hashing power. The core assumption the Ouroboros [POS protocol](consensus/pos-vs-pow.md) security is based on is a random _Slot Leader Selection Procedure_. 

No party should be able to predict who will be the assigned slot leader during a given time period.

_To achieve this goal_, a source of randomness is needed and creating true randomness is harder than one might think. The original Ouroboros POS protocol introduced a coin-tossing protocol based on verifiable secret sharing to generate randomness. 

The proposed modified solution leverages the POW mainchain for this. 

It is a simple, yet effective solution.

The randomness is derived from the smallest block hash on the mainchain in a given period of time. For this to work, the set of eligible certifiers will be fixed, before the randomness generation period starts. A significant share of hashing power would be needed to corrupt this mechanism. 

Under the assumption of an honest majority in hashing power on the mainchain, this should be infeasible and economically unprofitable. A formal analysis of such an [attack](security/blockchain-attacks.md) will be conducted separately.

Another modification to the original Ouroboros implementation regards the references to the mainchain included in the sidechain blocks. We will talk about this in the context of the _Cross-Chain Transfer Protocol_ when introducing the concept of full referencing.

#### Liveness and Persistence

Garay, Kiayias & Leonardos say that the standard procedure of proving [blockchain consensus protocol](architecture/blockchain-protocols.md) security requires demonstrating the ability of the protocol to satisfy two fundamental properties of a distributed ledger: _liveness_ and _persistence_.

> *“Persistence states that once a transaction goes more than k blocks “deep” into the blockchain of one honest player, then it will be included in every honest player’s blockchain with overwhelming probability, and it will be assigned a permanent position in the ledger.”* — Garay, Kiayias & Leonardos, 2014

_Persistence is closely related to the property of immutability._

> *“[…]Liveness says that all transactions originating from honest account holders will eventually end up at a depth more than k blocks in an honest player’s blockchain, and hence the adversary cannot perform a selective denial of service attack against honest account holders.”* — **Garay**, **Kiayias** & **Leonardos**, 2014

This is closely related to the property of censorship resistance. Note that this is a different **k** from the one describing the number of blocks per epoch.

Properties like liveness and persistence are proven under a set of assumptions such as an honest majority among participants. _An exhaustive list of these assumptions and their definitions can be found in the original Ouroboros paper._

#### Enabling Different SCP’s

The motivation behind developing the _SCP_ and _CCT_ separately was to enable a variety of possible SCP’s.

Although the following description of the Cross-Chain Transfer Protocol takes up on a few concepts of the adapted Ouroboros protocol described above, it can be combined with a number of other [consensus mechanisms](consensus/consensus-mechanisms.md). 

Horizen is currently looking into a Block-DAG (_Directed Acyclic Graph_) structure. The interoperability between another POW sidechain or a Block-DAG mainchain and the CCT protocol will be subject to additional research.

### The Cross-Chain Transfer Protocol - CCT

> _"The CCT protocol is the most important part of the sidechain construction since it defines the overall structure of the communications between MC and SC."_ - **Sidechain Whitepaper** ; Garoffolo, Viglione

**We already mentioned the two sub-protocols of the CCT:**

The **first** sub-protocol deals with forward transactions, which are transactions from mainchain to sidechain.

The **second** sub-protocol deals with backward transactions, which are transactions from sidechain to mainchain.

#### Forward Transactions and Full Referencing

It is the goal to enable cross-chain transfers, so there must be a form of communication between chains. The sidechain needs to be aware of all transactions on the mainchain that are sending assets to an address on the sidechain (forward). There needs to be a mechanism for the mainchain to verify incoming backward transactions.

_The enablement of forward transactions is achieved through full referencing._ 

_It solves two problems at once:_ enabling transfers from the main- to the sidechain in a straightforward fashion and dealing with finality (or lack thereof).

![cross chain transfer protocol](/img/sidechains/cross-chain-transfer-protocol.jpg)

> _"Full referencing implies that the sidechain blocks contain the full chain of the mainchain block references. Even if some block forger missed his opportunity to include a reference to the newly generated MC [mainchain] block, some of the following block forgers will include the missed mainchain reference."_ - **Sidechain Whitepaper**; Garoffolo, Viglione

So how does full referencing achieve the goals mentioned above? 

**The references can be one of two things:**

- If the mainchain block contains **no transaction** to the sidechain under consideration, only the block hash is used as a reference.
- If there are **one or more forward transactions** in the last block, the entire block header, the forward transaction(s) and the Merkle path of the transaction(s) are used as a reference.

_Sidechain nodes_ can easily verify the transfers by including the _block header_ and _Merkle path_ of forward transactions. 

**You could think of the two ledgers, sidechain and mainchain, as two separate books**. 

Since the sidechain bookkeepers constantly monitor the main(chain) book, they can easily add [cross chain transactions](interoperability/cross-chain-transactions.md) to their book. By including the transactions together with their Merkle paths and the corresponding block header, every entity on the sidechain will be able to verify the transaction is valid for themselves without having to check in with the mainchain.

![sidechain transactions](/img/sidechains/sidechain-transactions.jpg)

Enabling the forward transfer protocol implies making changes to the current mainchain logic. A new type of transaction needs to be introduced that burns coins and provides a set of metadata which allows the user to claim the same amount, minus the _TX_ fee, of newly created coins on the sidechain. 

The same goes for backward transactions: coins on the sidechain are burned and an equivalent amount minus TX fees created on the mainchain. A construction with a locking and unlocking procedure is also feasible.

The other problem that is solved relates to the finality issue with POW chains using _Nakamoto Consensus_. It is possible for a valid forward transaction to be included in a mainchain block at first, but the block containing the transaction to be forked out and becoming orphaned shortly after. 

This could create the opportunity to double spend, once on the mainchain and once on the sidechain, if the transaction was already added to the sidechain ledger. The binding eliminates such a situation. 

In case of a fork in the mainchain, the sidechain blocks that refer to the forked out mainchain block will also be reverted.

#### Backward Transactions and Certifiers

Now for the most interesting part. _How can the mainchain verify incoming backward transactions if it doesn’t keep track of the sidechains?_ 

Using the bookkeeper analogy from before the following problem has to be solved: the mainchain bookkeepers need to add incoming transactions from the sidechains to their book, but can never look at the other books around them.

I would like to go back to the differentiating factor of sidechains and drivechains that I mentioned earlier. 

_For a pegged sidechain construction there are two operational modes which concern the execution of backward transactions:_ _synchronous_ and _asynchronous_.

> "_The synchronous mode implies that both main and sidechains are aware of each other and can verify transfer transactions directly, while the asynchronous mode relies on validators to process transfers._" - **Sidechain Whitepaper**; Garoffolo, Viglione

We decided on developing the SCP and CCP independently of each other. Since it is a stated goal to enable a variety of different SCP’s, it is not feasible for the mainchain to track every sidechain, for it would have to know each individual consensus protocol. 

This implies that strictly speaking, the proposed implementation qualifies as a drivechain rather than a sidechain, for its operational mode is asynchronous: the mainchain doesn’t keep track of the sidechains.

#### Getting Transaction Data from Sidechain to Mainchain

From a data point of view, to make all of this work there needs to be a transfer mechanism, initiated on the sidechain, that informs the mainchain of incoming backward transactions. 

This is done by introducing a new type of data container called **Cross-Chain Certificates** (_CCCert’s_).

![cross chain certificates cccerts](/img/sidechains/cross-chain-certificates-cccerts.jpg)

The _CCCert_ contains basic information, such as the _sidechain identifier_ (_SCid_) and the _CCCert ID_ as a header. 

_The Backward Transfer List_ collects all cross-chain transactions. The last three data fields concern the certifiers that fulfill the role of the validators mentioned in the quote above.

The mainchain bookkeepers can’t look at the other books (sidechains) but have to know when something that relates to their book is happening. Somebody must communicate this to them in a standardized way. Certifiers are the ones to tell the mainchain bookkeepers about incoming transactions, and the standardized communication method is via the Cross-Chain Certificates.

Certifiers register on the mainchain via a special type of transaction, that includes the sidechain ID of the chain that they are registering for and a deposit that gets locked. This stake has a role in preventing fraud, but more about that in a minute. 

Every stakeholder on the mainchain is eligible to become a certifier.

A subset of all certifiers verifies the backward transactions on the sidechain, collects them in the Backward Transfer List, signs the resulting CCCert with an aggregated signature, and sends it to the mainchain.

Facilitating backward transactions is a form of work. 

There needs to be an incentive to do this work. Additionally, the incentive must be designed, so that honest behavior is encouraged and malicious behavior must not be profitable. One of the main objectives was to design the protocol in a way that would decentralize the process of cross-chain verification.

Certifiers receive incentive through collecting the transaction fees of all transactions they are processing. If they submit fraudulent certificates they will not be able to unlock their stake. 

A group of certifiers that have a combined deposit **X** locked up on the mainchain is only allowed to sign a CCCert that has a combined total of **0.5X**. 

This is called the **maximum certificate amount** (_MAX_CERT_AMOUNT_).

If the amount per certificate was not capped it would be possible to lock up a deposit, sign a fraudulent CCCert worth more than the deposit itself, sending it to a self-controlled address on the mainchain, and live happily with losing one’s stake.

### Reporting Fraud

Enforcing this measure is based on the assumption of an honest majority. As you might have noticed there is a data field contained within the CCCert named Fraud Reports List. This field would be used the following way in case fraud was to occur:

- A **fraudulent certificate** _CCCert(i)_ is created privately and signed by the majority of certifiers in the group(i).
- The fraudulent certificate CCCert(i) is then sent to the mainchain and included into a block(i). The mainchain is not able to verify the certificate and detect the fraud itself.
- The fraudulent certificate syncs back into the sidechain (see Full Referencing).
- The next group of **certifiers(i+1)** verify the previous CCCert(i) on the sidechain, detect the fraud and include a _Fraud Report_ in their certificate **CCCert(i+1)**.
- Once the mainchain receives CCCert(i+1) containing the fraud report, the group of **malicious certifiers(i)** will not be able to unlock their deposit.
- If the **group(i+1)** does not include a fraud report, the group after **them(i+2)** will and both fraudulent groups from before **(i and i+1)** will lose their deposit.

By not reporting a detected fraud a group would risk losing their deposit, as well as the originally malicious group. _It’s also important to note_ that it is not possible by protocol design to have one certifier in a certifier group back-to-back.

To protect the mainchain from inflation should all else go wrong there is a last line of defense. The safeguard is a mechanism on the mainchain, which tracks the total amount of assets that have been transferred to each individual sidechain. 

It’s impossible to withdraw more coins from a sidechain than the amount that has been moved there in the first place, therefore preventing inflation.

## Summary - Sidechains

Sidechains can be an elegant way to overcome current limitations regarding _scalability_ and _governance_ in the blockchain ecosystem. While you can increase the throughput, the number of transactions per second (_TPS_), with sidechains, they also allow experimentation without compromising the security of the main chain.

The ability to deploy sidechains will dramatically enhance the possibilities of building on top of existing public blockchains. Sidechains allow the deployment of new experimental features without having to achieve consensus among all network participants. They also keep the codebase manageable and allow developers to spin up new ledger systems with instant access to a token of established value.

One of the first use cases of a sidechain for the Horizen project will likely be the Treasury, moving the organization a step closer to becoming a [decentralized autonomous organization](governance/decentralized-autonomous-organization-dao.md) (_DAO_). The main contribution of our team is providing a new backward transfer protocol that does not rely on a centralized group of validators. 

Every stakeholder is eligible to become a certifier if he likes to, introducing decentralization to the process of cross-chain verification.

From a security perspective, the most important thing is to design the implementation in a way that no sidechain can possibly harm the mainchain.

The SCP must have a guaranteed truly random assignment of slot leaders. Additionally liveness and persistence must be guaranteed.

The CCT security is enforced by adding references to the mainchain with every block (full referencing), introducing a cap on the total amount a group of certifiers can sign for (MAX_CERT_AMOUNT) and the safeguard tracking the total amount that has been transferred to a given sidechain and can be withdrawn.



