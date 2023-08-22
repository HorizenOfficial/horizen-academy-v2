---

sidebar_label: Mining
title: What is Crypto Mining?
slug: /mining-in-blockchain/
description: In this article, you learn about how cryptocurrency miners secure the blockchain with their computational power at an advanced level.
image: /img/crypto-mining/crypto-mining-meta.jpeg
last_update:
  date: 2/21/2023
  author: Horizen Contributor

---

# What is Crypto Mining?

Not every blockchain has _miners_. Only in _Proof of Work_ is there _mining_, and therefore, miners. 

They work to secure the blockchain against _attacks_ and _protect the history_ recorded against changes.

Mining is more than just performing _Proof of Work_, it comes with highly interesting [economic implications](mining/crypto-mining-economics.md), from choosing which blockchain to mine, to what hardware to use and what strategies to apply.

We will often use the term _decentralizing_ and _centralizing_ to express in which direction a given development shifts the overall level of coordination. There is no absolute _decentralization_ or _centralization_ and a system is moving on a scale between the two. 

## What is Mining?

**Mining** is a part of coming to a consensus on a blockchain that uses the Proof-of-Work method to agree on the order of transactions.

A miner records every transaction that happens on the blockchain. Two different miners might have different versions of the transaction history.

Every miner writes everything they recorded on the _blockchain_ in a _block_. Since there are many miners on a blockchain, there are many different versions for the same block. They differ in the exact order of transactions.

All the miners have to solve a difficult computation that requires a lot of processing power.

_The miner who solves the problem first_ gets to add their block to the blockchain. 

The winning miner’s opinion will become the truth accepted by everybody else on the network, based on them solving the computation first.

## How Does Mining Work?

Mining describes the activity of performing a computationally expensive task - the [Proof of Work (PoW)](consensus/proof-of-work-pow.md).

In the simplest case, this task is finding a _nonce_ that when hashed together with the rest of the block header produces a _block hash_ below a certain threshold which is called the _target_.

The total number of hash operations performed per second is called the **hashrate** of the network.

This type of _PoW_ is called **Hashcash Proof of Work** and was introduced by _Adam Back_ in _1997_ as a measure against spam emails.

**The idea is simple:** Adding a small PoW to an email does not impact an honest user sending only a few mails per day. Automated spam on the other hand would become computationally expensive because every single email would need to have a valid PoW attached.

![hashcash proof of work](/img/crypto-mining/hashcash-proof-of-work.jpg)

The graphic above shows the mining process in a _Hashcash_ style PoW scheme. 

The _block header_ is repeatedly hashed using a different nonce each time. The header is hashed twice using _SHA256_ and the resulting candidate block hash is compared with the current target. 

If it is greater than the target the nonce is discarded and the process starts again.

Once a miner finds a nonce producing a block hash less than or equal to the target, it is broadcast to the network, verified by all other nodes (including other miners) and appended to the blockchain.

![nonce proof of work](/img/crypto-mining/nonce-proof-of-work.jpg)

The _difficulty_ is a different way to express the current target. The difficulty is a relative measure of the current target compared to the initial _maximum target_ that is defined with the genesis block of a blockchain.

$$Difficulty = \frac{max. target}{target}$$

On the [Bitcoin](cryptocurrency/bitcoin-glossary.md) network, which has seen the biggest growth in hash power since its inception the current difficulty (at the time of writing) is about $$1.3 \cdot 10^{13}\$$ meaning it is _13 trillion_ times harder to find a block _today_, than it was when the [protocol](architecture/blockchain-protocols.md) was _launched_.

## What is the Role of a Miner?

_The main job of a miner is to collect all transactions that are broadcast to the network._

The miner verifies if the transactions are valid according to the protocol and then places them in a data container - the _block_. The first transaction in a block is special, the **coinbase transaction** - sound familiar?

In the _coinbase transaction_, the miner rewards his own [address](wallets/wallet-addresses.md) with the block reward, _6.25 BTC_ or _6.25 ZEN_ at the moment. 

Actually _3.75 ZEN_ on Horizen, as _10%_ of block rewards go to _Secure Node_ and _Super Node_ operators respectively, _20%_ to the _Horizen Treasury_. 

_These coins did not exist before._

Usually, one of the criteria that is used to check the validity of a transaction is if the sender has sufficient funds. The coinbase transaction rules are slightly different. 

The protocol allows this first transaction to have no input, which means having no sender in this context. This is how the miners get to reward themselves for their work and how new coins are created.

 _Every_ _ZEN_ or _BTC_ in existence started out as a block reward.

_After_ the miner includes the coinbase transaction, he places all other transactions he received in the block he is working on. 

_Usually_, the miner adds the transactions in the order they arrived in. 

In times of high network activity and full blocks, a block has a maximum file size, the block limit, miners might choose to include only the transactions with the highest transaction fees attached because they get to keep those as well.

_Many miners are working on a block simultaneously_. Each miner has a slightly different block, either because he received the transactions in a different order than his competitors, or because he chose to include a different set of transactions based on the attached transaction fees. 

The miner that solves the puzzle first, gets to extend the blockchain with his block, including the coinbase transaction that rewards him the newly created coins.

![adding a block pow](/img/crypto-mining/adding-a-block-pow.jpg)

### Finding a Nonce

So what is the puzzle that miners are trying to solve? This is where we need to talk about [hash functions](cryptography/hash-functions.md) again.

One of the important properties of cryptographic hash functions is being _pseudorandom_. You must not be able to predict a change in the output that results from a change of the input.

_As an example:_

If you are hashing the input "**1**" and get the output "**00002**" and hash the input "**2**" afterward, the second output better not be "**00004**" but something like "**73968**", a seemingly random (_pseudorandom_) number.

In order for a block to be valid, its hash needs to be below a certain _target_. This target is basically just a number and the block hash has to be smaller than or equal to that number. In this context, you will often hear the term _difficulty_.

While the target is an actual value the _block hash_ has to be below of, the difficulty is a relative measure of the current target compared to the highest possible target. 

When the target is lowered, the difficulty is increased and it is harder to find a valid _block hash_.

Most of the data in the block is fixed, but there is a special data field in each _block header_, the **nonce**, that doesn't carry any important information. 

Its sole purpose is to be a _variable_ (a number used _once_), that the miner can put different values in, to change the output of the hash function - the _block hash._

What follows is a trial-and-error approach of getting the block hash below the target. The block hash can be interpreted as a regular number. The lowest number a _256-bit_ integer can represent is _0_, the highest number is 1.1579 \cdot 10^{77}\

**115792089237316195423570985008687907853269984665640564039457584007913129639936**

_Imagine you were to calculate a hash for a random input that needs to start with one leading zero_. 

If there were only digits in the output the chance of getting it right the first time would be _1 in 10_.

If the difficulty required the output to start with two leading zeros, your chance of getting it right the first time would be _1 in 100_. And if the target was a difficulty of _6_, chances would be _1 in 1,000,000_.

With increasing difficulty, solving this challenge evolves into real work, especially as there is no shortcut to trying out a bunch of different inputs. If you would like to play around with a [hash function](https://www.fileformat.info/tool/hash.htm) you can do so here.

When a miner first attempts to solve the block, they will put a random value in the nonce data field. 

_For the sake of simplicity_, let’s say the nonce value the miner starts with is “0”. The block hash will be a seemingly random value in the possible range of the hash function.

![hashcash proof of work](/img/crypto-mining/hashcash-proof-of-work.jpg)

**So the process looks like this:**

- The _miner_ uses the _hash function_ to calculate the _hash_ of the _block_ - the _candidate block hash_ as we named it in the graphic above. In the example, the _block hash_ using **0** as a nonce doesn’t meet the target.
- The _miner_ now increments the nonce by one and hashes the block again. The resulting hash is still above the target, so the miner increments the nonce once more. This happens over and over again.
- _Finally_, one of the miners will find a nonce n that produces the desired result: _a block hash below the target._

**The hash rate on the Horizen network is at 208.68 Mh/s at the time of writing.**

This means that all miners combined try _208,680,000_ different values for the nonce _every second_. You can check the [current value](https://whattomine.com/coins/185-zen-equihash) here.

Miners can’t cheat this process of trial and error because of the properties of cryptographic hash functions.

![cryptographic hash functions](/img/crypto-mining/cryptographic-hash-functions.jpg)

There is no way to calculate a valid nonce from the desired output because the hash function is a _one-way function_. 

It’s also _infeasible_ to approximate a valid nonce from prior outputs because the hash function is _pseudo-random_ and you can’t predict changes in the output from changes to the input.

Every participant on the network can easily verify if the solution is valid because the hash function is deterministic and will produce the same result for every node that verifies the block. Performing a single hash operation is also very quick.

### Block Time

Every Proof-of-Work protocol defines a _block time_, an interval within which a new block should be created.

With _Horizen_ this is _2.5 minutes_, with _Bitcoin_, _10 minutes_.

When a miner solves a block he broadcasts it to the network immediately, because he wants to collect his block reward. This is why it doesn’t take exactly 10 minutes to create a new block. 2.5 minutes is the average time that it takes to find a valid _nonce_ and in turn, a valid _block hash_.

Some blocks are solved quicker and some take a bit longer.

If more miners join the network and the hash rate increases, they will find a valid nonce faster on average. The protocol evaluates the average block time and adjusts the difficulty accordingly every _8064 blocks_.
 
 If it takes less time on average to solve a block the difficulty will increase, if it takes longer the difficulty will decrease.

### How Does This Protect the Network?

By now, you know that it requires a huge amount of work to solve a single block in a blockchain. You also know that each block references the preceding block by including its block hash, therefore chaining them together.

You also know that changing one little piece of information in a block will alter its block hash completely.

If an _attacker_ wanted to tamper with any record on the blockchain, they would have to find a valid _nonce_ for the block they edited, as well as all the following blocks. The attacker would have to do all this by themselves, and at a faster rate than the network is performing the mining process. 

The _longest chain rule_ determines which branch of the blockchain is the valid one in case a [fork](governance/blockchain-forks.md) occurs. As long as the attacker does not control a majority of the hash rate, he won’t be able to change the blockchain.

## The Purpose of Miners

_Now you might ask_ why it is necessary to make block production computationally hard if we want to continuously add blocks to the blockchain. The reason is that _PoW_ is an efficient way to provide _Sybil resistance_.

### Sybil-Resistance

In a [Sybil Attack](security/blockchain-attacks.md), an attacker creates a large number of malicious nodes in an effort to achieve some goal. In the blockchain context, this goal can be including malicious transactions in a block, _censoring_ transactions from a given network participant or performing a _double spend_ after a block reorganization.

Spinning up a node comes at a very low cost, so there is not much to prevent an attacker from creating a large number of them. The [consensus mechanism](consensus/consensus-mechanisms.md) represents an abstract form of voting on different versions of the transaction history.

If voting was tied to an _IP_ address, an attacker could manipulate the vote easily by creating [_Sybil_ nodes](architecture/blockchain-nodes.md). By tying the voting power to external costs, electricity and hardware, interfering with the voting process on blocks becomes much harder.

### Providing Immutability

Not only does PoW prevent _Byzantine_ actors from obstructing the block production process, but it also protects the history recorded on the blockchain from being tampered with. All nodes following the [protocol of a blockchain](architecture/blockchain-protocols.md) will reject versions of the blockchain that do not have a chain of references form the current block all the way back to the genesis block, each protected with a Proof of Work.

_Without_ a Proof of Work, this chain of references could be reconstructed at almost _zero_ cost. Only by securing each link between two blocks with a large amount of spent electricity, the blockchain becomes _immutable_. 

Without Proof of Work, it would simply be _tamper-evident_.

A _node_ with access to the most recent protocol can verify the entire blockchain with all its transactions without having to rely on any external input. 

It will start with the first block, reconstruct the _Merkle tree_ of transactions to verify the _Merkle root_ included in the block header is valid, validate if the block hash meets the target given the nonce used to produce it and finally moves on to the next block.

It can also compute the difficulty at any point in time as the rules for when and how the difficulty changes are part of the protocol.

![block reward](/img/crypto-mining/block-reward.jpg)

For their contribution to the network, miners are allowed to include the _coinbase transaction_. In this transaction miners are sending the current _block subsidy_ and the aggregate _transaction fees_ included in the block to a self-controlled address.

After the _block reward maturation period_ ends this output becomes spendable. The block maturity interval for _Horizen_ as well as _Bitcoin_ is _100 blocks_.

## Mining Algorithms

Let's recap the defining properties of a "good" **Proof of Work**:

- **_Asymmetry_**: The Proof of Work needs to be hard to produce, but easy to verify.
- **_Optimization Free_**: An optimization free algorithm means that you cannot improve the efficiency of performing that task through software or algorithmic improvements.
- **_Amortization free_**: This means economies of scale that would render all mining pools besides the largest one irrelevant should not be possible based on the algorithm. (Other aspects of mining will always enable economies of scale to play out.)
- **_Independently Tunable Parameters_**: Certain parameters of the problem to solve by the miners should be easy to adapt to changing circumstances, e.g. an increase in hashrate.

Furthermore, the PoW needs to be pseudorandom so there is no shortcut to taking a brute-force approach to solving the task at hand. This also ensures that the block production time follows a statistical distribution with a constant average, _ceteris paribus_.

The _PoW algorithm_ also needs to have independently adjustable parameters to account for changes in the overall hash power. To keep the block production rate constant as more hash power is added to the network the difficulty can increase. 

On the _Horizen_ network this _difficulty adjustment_ is performed after _every block_.

$$
next-difficulty = last-difficulty \cdot \sqrt{\frac{150 sec}{last-solve-time}}
$$

The algorithm needs to be _deterministic_ so the verification of the proof is guaranteed.

## Mining Hardware

In our article on [PoW](consensus/proof-of-work-pow.md) we introduced two metrics to assess computational hardness. 

**Space complexity** refers to the memory intensiveness of the computation, while **time complexity** describes the reliance on the processor.

When a PoW algorithm involves creating large data sets in an intermediary step this will increase the space complexity. Other PoW algorithms barely require any memory as they involve repeated hashing of small amounts of data in the _kilobyte_ range. 

By concatenating many computations on this small data set the time complexity of the algorithm will increase, with the space complexity remaining constant.

### The Flexibility-Efficiency Trade-Off

When it comes to hardware there is a tradeoff between versatility and performance. A highly specialized chip architecture will allow a very good performance on one task, at the cost of being less versatile and vice versa.

The _central processing unit_ (**CPU**) of a computer offers the greatest flexibility with regards to the types of computations it can perform, at the cost of being not very performant.

The _graphical processing unit_ (**GPU**) is focused on tasks around image processing as the name suggests. It also includes more memory because computations on graphics tend to have a higher space complexity.

_Field-programmable gate arrays_ (**FPGAs**) are meant to be configured for a specific task after manufacturing which allows a specialization of the integrated circuits depending on their application. After configuration they represent another step towards specialization at the expense of versatility.

As the name suggests, the _Application Specific Integrated Circuit_ (**ASIC**) sits on the end of the spectrum on specialization and allows for the efficient execution of the tasks it was designed for.

### From CPUs to ASICs

In the early days of cryptocurrency mining, people used the hardware they had at hand - _desktop computers_ and their _CPUs_. In October of 2010, _GPU_ mining became feasible when the first software utilizing the graphical processing unit for mining was released to the public. 

_People with a gaming setup_ were now at a _serious_ advantage compared to CPU miners.

Mining started to become more lucrative and hence more competitive. People started configuring _FPGAs_ to suit the requirements of efficient mining. The last major evolutionary step in mining happened in 2013 when the first _ASIC_ designed for [cryptocurrency](cryptocurrency/cryptocurrency.md) mining was released.

![flexibility efficiency trade off](/img/crypto-mining/flexibility-efficiency-trade-off.jpg)

### ASIC Resistance

A number of different "ASIC resistant" mining algos were proposed but ASIC resistant algorithms are a myth - _at least to some degree_. 

When a chip manufacturer designs an integrated circuit with a specific mining algorithm in mind, it will always perform better than a more versatile _GPU_.

More realistically, the assumption was that the cost to design and produce _ASICs_ for certain algorithms was just not worth the marginal improvement in efficiency. While this assumption was certainly justified at the time many of the mining algorithms emerged, it didn't account for the rising valuations of cryptocurrencies that we saw in 2017.

This caused a range of ASICs being developed for different mining algorithms, including some that were thought of as "_ASIC resistant_".

_ASIC resistance_ was mostly achieved by increasing the space complexity of the algorithm and thereby increasing the memory demand. High-bandwidth memory is a very expensive component in chip manufacturing.

A general increase in demand for high-speed memory technology such as _GDDR6_ and HBM2 made producing relatively cheap _ASICs_ for memory intensive mining algorithms feasible.

The demand for ASIC resistant algorithms came largely from an interest in a decentralized mining economy resulting in a more decentralized distribution of newly minted coins. GPUs are more widely spread and accessible than the highly specialized ASICs. 

_Hence_, a GPU-mineable algorithm would in theory lead to a wider distribution of new coins.

_The demand for GPU mining was met with some projects changing their mining algorithm, rendering the highly specialized ASICs useless._

But changing algorithms mostly benefits large hardware manufacturers as they have the resources to develop ASICs for the new algorithm first. By sticking to an algorithm, smaller companies have the chance to design and produce mining hardware accordingly, which decentralizes the business again.

_Today_, we are past the peak of mining centralization. For a period of time around 2017 and 2018, _Bitmain_ used to be the dominant manufacturer for mining specific hardware. 

Since then, their market share has constantly decreased and new players have entered the scene.

## Mining Professionalized

Besides using sophisticated and specialized hardware, mining has professionalized in other ways. Economic principles known for decades and centuries increasingly started to apply to the field.

### The Need for Cheap Electricity

_First_, location factors are very important today, as the industry is highly competitive and electricity prices are an important factor determining if a mining operation is profitable or not. Miners settle in regions with very low electricity costs in order to gain a competitive advantage.

### Mining Pools

_Next_, miners started to organize into _mining pools_. They prefer stable cash flows and have come up with mining pools to share the work and socialize the winnings. _Mining pools_ have a centralizing effect and grant a lot of power to the pool operators.

Mining pool software could be configured to exclude transactions involving certain addresses - something that cryptocurrencies try to avoid at great cost.

_Economies of scale_ are also starting to play out, which is not a bad thing _per se_. 

A mining operation will always be more profitable when it gets bulk discounts on hardware or electricity and the price per square meter tends to go down when you rent or buy larger warehouses.

But large-scale mining operations operate in a highly competitive environment that leaves minimal margins when selling the mined coins. To cover operational costs there is constant selling pressure for these actors, which effectively makes it seem like coins are issued to the secondary market directly.

## Mining Economics

When you look at the economics from a miners perspective you first need to think of the cost of the operation, then consider the potential revenues and lastly, derive an estimate of your profits.

### CAPEX vs. OPEX

The costs can be divided into two categories, _capital expenditures_ (**CAPEX**) and _operational expenditures_ (**OPEX**):

- **CAPEX** are the cost of _acquiring_ non-monetary capital like mining gear, racks, and property (if bought).
- **OPEX** are ongoing _expenditures_ like wages, electricity cost for the [rigs](mining/crypto-mining-economics.md) as well as cooling and property (if rented).

Setting up a mining operation will usually come with both capital and operational expenditures but depending on the circumstances it can be set up to tend towards being CAPEX or OPEX-heavy.

### Hashrate vs. Price

The mining industry and the price of a given coin are arguably related to some extent. 

_First_, the hashrate will follow the price, because an increase in price will increase the profit margin of existing miners and lead to them taking more hardware online. 

_Additionally_, new entrants will join the network and try to get a share of the cake. This increase in competition and the accompanying decrease in margins leads to the mining cost tending towards the price of a coin, minus a small margin for the miners.

The trailing effect of the hashrate following the price comes with a delay and the delay when prices rise is greater than in a situation where prices decline. Ordering new mining gear and getting equipment live takes longer than taking hardware offline when prices decline.

### The Fixed Issuance Schedule

Without the _difficulty adjustment_ in place, a given amount of hashrate would always produce a fixed amount of coins. This would still allow for a fixed supply, but not a fixed issuance schedule. 

This is an important differentiating factor when comparing cryptocurrencies with gold.

With gold, production will increase as prices rise. Less profitable, inactive mining sites are reactivated as the expected _return on investment_ (_ROI_) becomes positive and active mining facilities increase their production. This effect also plays out the other way around.

When prices decline, mining facilities are lowering their production or closing all together. This dampens the volatility because the supply can increase or decrease in tandem with price. With cryptocurrencies production is constant and can not display this effect.

An economic term often used in the context of commodities like gold and other metals is the **Stock-to-Flow ratio**. It describes the amount of a commodity in circulation relative to the production rate. 

Bitcoin was the first asset to ever allow not just for a predictable supply and issuance schedule, but also a predictable stock to flow ratio.

## Mining Strategies

_As we mentioned earlier_, mining is a rather intransparent business, and cryptocurrency mining is no exception.

**Miners can be one of three things**: _honest_, _rational_ or _malicious_.

- An **honest miner** will adhere to the rules of the protocol at all times.
- A **rational miner** will act to maximize profit, either by adhering to the protocol or deriving from it, depending on the incentives provided.
- A **malicious miner** will derive from the protocol to achieve their objective.

It can be assumed that the majority of miners are rational participants, meaning they follow the protocol as long as it is the most profitable strategy. Though some strategies have evolved that are used to gain an unfair competitive advantage - most notably [selfish mining](mining/selfish-mining.md).

## Energy Consumption in Mining

One of the biggest criticisms with regards to Proof-of-Work and the mining process is the large energy consumption.

__Bitcoin__ is the blockchain that consumes the greatest amount of energy due to the immense hashrate on the network.

The University of Cambridge tracks Bitcoin Electricity Consumption through the [Cambridge Bitcoin Electricity Consumption Index](https://ccaf.io/cbeci/index). While most other blockchains have only a fraction of Bitcoin's energy demand, they do consume a lot of energy.

_This energy consumption is a necessity for securing the ledger_. 

Only by spending real world resources on securing the links between blocks, these references become costly to forge. So costly in fact, that after a reasonable confirmation time you can be certain an entry in the blockchain will not be reversed.

### "Saving" Energy

The argument that blockchain consumes too much energy can be answered from _different angles_.

The criticism is often based on the premise that the energy is being "wasted". 

When you _pay_ for a _commodity_ and _use_ it to _achieve_ a subjectively (and also objectively) valuable _goal_, _mining cryptocurrencies_, the energy is not _wasted_ but _used_.

In fact, a lot of the energy used for Bitcoin mining might go to waste if miners weren't using it. This is true for certain regions in Canada, which have built massive hydropower plants and have to figure out how to use [excess energy](https://subscriber.politicopro.com/article/eenews/1060061255).

Another way to "save" energy, or better _use under-utilized energy_, is using natural gas. Instead of flaring it, it can be used to power gas generators, and those can power mining gear in return.

### Utilizing Renewable Energy

Miners use an over-proportional share of renewables compared to the global energy consumption. As of December 2019 it is assumed that 73% of [Bitcoin's energy consumption](https://coinshares.com/assets/resources/Research/bitcoin-mining-network-december-2019.pdf) comes from renewable sources.

It is reasonable to assume a high share of renewable energy being used to mine other currencies as well. _Oftentimes renewable energy is a lot cheaper than energy from burning fossil fuels._

Many regions that have focused on expanding their renewables production have regional oversupplies of energy, which leads to very low prices. Overall, cryptocurrency mining is a way for renewable energy producers to temporarily utilize energy that the grid cannot transport to locations where it is needed. 

By mining with their excess energy, they can lower the financial risk of setting up a wind park, hydro dam, or solar park. PoW might therefore pose a net positive for the global energy footprint.

### Efficient Electricity Export

_Lastly_, using energy to mine is a great way to _export_ cheap electricity. Transmitting electricity over long distances is highly inefficient. A mechanism used in the past to utilize stranded energy was performing energy-intensive but location independent services in these regions.

**One example is Iceland**, which has access to large amounts of clean energy due to being located in a geothermally active region. _Iceland_ generates about 70% of its electricity from _hydroelectric_ sources and 30% from _geothermal_ sources.

Iceland has pivoted into a highly energy intensive industry due to this fact, namely aluminum production.

> “_We are based in the middle of the North Atlantic Ocean. We are not connected to the mainland Europe grid,_” said _Bjarni Mar Gylfason_, chief economist for the Federation of Icelandic Industries. “_So we export energy in the form of aluminum._" - **Henry Chu,** Los Angeles Times, [_Iceland Divided Over Aluminum’s Role in its Future_](https://www.latimes.com/business/la-xpm-2011-mar-26-la-fi-iceland-economy-20110326-story.html)

Cryptocurrency mining has the potential to even the global energy-price hyperplane through miners settling in regions where electricity is abundant.


