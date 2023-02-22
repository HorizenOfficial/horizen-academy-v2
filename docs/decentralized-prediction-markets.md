---

sidebar_position: 18
sidebar_label: Decentralized Prediction Markets
title: What is a Decentralized Prediction Market?
slug: /decentralized-prediction-markets/
description: A prediction market is simply a market where participants can get financially rewarded for correctly predicting the outcome of a future event.
image: /img/decentralized-prediction-markets/decentralized-prediction-markets-meta.jpg
last_update:
  date: 2/21/2023
  author: Horizen Contributor

---

# What are Decentralized Prediction Markets?

_Decentralized prediction markets_ are an underrated sector of the DeFi space that has the potential to play a larger role in the way markets forecast events in the broader economy based on real time information.

A **prediction market** is simply a market where participants can get financially rewarded for correctly predicting the outcome of a future event. _We can think of the market for trading futures and options contracts as a type of prediction market._

Historically, the primary purpose of these markets was to help businesses protect against the risk of financial loss by ‘hedging’ their exposure to a certain asset. 

- *For example*, an airline that uses a consistent supply of fuel to run their planes needs to be able to manage their fuel costs and protect themselves in the event that the price of oil rises. 

To hedge against this risk, the airline can purchase a _call option_ or _buy a futures contract on oil_ so that they profit if the price of oil rises, allowing them to cover their increasing fuel costs. 

- *In another example*, a large corn farmer who is concerned about their ability to sell all of their stock in the event that there is a decrease in demand can hedge this risk by _shorting_ the price of corn. 

In both examples, the farmer and airline are participating in prediction markets:

_By placing bets on the outcome of a future event for which there is a defined risk and reward._

Decentralized prediction markets incorporate blockchain and smart contract technology to enable the process of placing bets and earning rewards to become more trustless, transparent, secure and efficient.  

## How Decentralized Prediction Markets Work 

**Decentralized prediction markets** function using a combination of smart contracts and data oracles. 

To start, a prediction must be placed that has a set of binary outcomes. 

_For example:_

- The Lakers will beat the Celtics by 10 points or more

- The Price of Wheat Futures will be higher than $10 by end of day on March 1st, 2023 UTC 

_In the **sports example**, there are only 4 possible outcomes:_

- Either the Lakers lose to the Celtics

- The Lakers and the Celtics draw

- The Lakers beat the Celtics by less than 10 points

- The Lakers beat the Celtics by 10 points or more

_In the **Wheat Futures** example, there are 3 possible outcomes:_ 

- The price of Wheat is lower than $10 by EOD March 1st, 2023 UTC

- The price of Wheat is exactly $10 by EOD March 1st, 2023 UTC

- The price of Wheat is higher than $10 by EOD March 1st, 2023 UTC

If any of the outcomes occur that are not:

- Lakers beat the Celtics by 10 points or more

- Price of Wheat Futures are higher than $10 by EOD on March 1st, 2023 UTC

..then those who bet on these outcomes will lose their staked deposit. 

Once a prediction is created, participants can place bets by [staking tokens](what-is-a-token.md) as collateral in a _smart contract_. The **smart contract** is designed to hold the funds of all betters and keep track of what outcomes they were betting on. 

When the outcome of an event is officially decided, the smart contract will automatically payout the tokens in the pool to whomever correctly predicted the outcome. 

The odds for each bet and the potential payout are calculated based on how many people are betting on one outcome versus the other. Similar to how **liquidity pools** work, betters will deposit funds into a pool and receive tokens that represent their share of the betting pool.

These **outcome tokens** can then be traded on the open market and will change in price based on the level of supply or demand for the token. To create more tokens, users have to deposit more funds into the pool. 

### Outcome Tokens

As an example, let’s say someone wants to create a prediction market for the Lakers-Celtics game: 

* If the prediction is that the Lakers will beat the Celtics, the outcome is either ‘Lakers beat Celtics’ **or** ‘Lakers do not beat Celtics’. 

 * The users who place bets on either outcome will receive a set of ‘outcome’ tokens. For this example we can call these tokens:
      *  _LBC-YES_ 
      * and _LBC-NO_

* To place a bet, users may place DAI or ETH into a pool as collateral in order to receive  LBC-YES or LBC-NO tokens. 

* Each token will have a price that fluctuates based on the current demand and supply of the token, as people speculate on the changes of each outcome occurring before and throughout the course of the game. 

    * The price of each token determines the odds of the outcome being correct and potential payout 

    * If the market believes LBC-YES is more likely to occur than LBC-NO, more people will buy the LBC-YES tokens, causing the price of LBC-YES to rise relative to LBC-NO. 
* This will subsequently impact the size of the potential payout for those who hold LBC-YES tokens: 
    * The more people hold LBC-YES, the smaller the payout because the pool's funds must be divided amongst a larger number of bettors. 
    * The opposite is true for those who hold LBC-NO tokens, as they are the minority and will therefore each receive a larger share of the pool's funds if their bet turns out to be correct. 

* If the game ends and Celtics beat the Lakers, or the final score is a draw, the smart contract will automatically redeem the ETH or DAI stored in the pool to all holders of LBC-NO tokens, while holders of LBC-YES tokens will receive nothing.

## Decentralized Prediction Markets Compared to Traditional Betting Platforms?

Essentially, the risk/reward for participating in this prediction market would be similar to placing a bet using a **traditional sports book**. 

The biggest difference is that the odds are determined purely by the market and expressed through a [smart contract algorithm](smart-contracts.md) that no one controls. This is in contrast to a centralized bookmaker, who will often take the other side of a bet but also determine the odds for that bet.

This _guarantees_ that the bookmaker will always have an advantage because they can skew the odds in such a way as to make the payout _much less_ than what one would normally earn for placing a bet of similar risk in the open market. 

Examples of popular decentralized prediction market platforms where you can bet on the outcome of sports games or other events include:

- Polymarket
- Augur 
- Azuro

*As an example:* 

- On these **decentralized prediction market platforms**, the odds of the Celtics winning against the Lakers might be ‘+100’ or 2-to-1, meaning a correct bet of $10 would payout $20.  

- Yet on a **traditional sports betting site** like _Bovada_ or _DraftKings_, that same bet might only be -110 or 1.9-to-1, meaning a correct bet of $10 would payout $19.

### The Role of a Bookmaker

The reason for this is because the bookmaker sets odds and facilitates the execution of bets, including providing liquidity as a default buyer or seller if necessary. *This is similar to the role of a [market maker](automated-market-maker-amms.md) on a stock exchange.* 

The bookmaker's job is to ensure that there is always someone willing to take the other side of a bet for _any_ kind of prediction. However this poses a risk to the bookmaker, as they can lose a lot of money very quickly if they don’t properly price the odds of each bet in a way that ensures they can payout the winners while winning enough themselves to earn a profit and remain solvent. 

By making a +100 odds bet -110, the bookmaker ensures that they only have to pay ~5% less for every lost bet, $19 instead of $20, which means they can retain more of their earnings for every winning bet on the same game.

**This is why the phrase _“the house always wins”_ is commonly used when referring to casinos or sports betting sites.**

DeFi prediction markets offer _fairer_ odds for participants because there is no centralized intermediary who needs to skew the odds in order to profit. This means betters can potentially earn higher payouts for each bet. 

However, the downsides, as we will discuss later,  include much smaller markets and a lack of _liquidity_, which means greater limits on how much a person can bet. 

### The Role of Oracle Networks

The outcomes produced on decentralized prediction markets are determined by [oracle networks](blockchain-oracles.md) that receive and transmit data from the real world into smart contracts. 

*This data can include anything from:*

* The current price of a token, stock or commodity
* The outcome of a sports game
* Even the weather in a particular city

Projects like _Chainlink_ serve as the main **oracle networks** for the majority of Defi protocols and decentralized prediction markets

## Challenges with Decentralized Prediction Markets

### Lack of Liquidity 

As we mentioned earlier, one of the drawbacks of decentralized crypto prediction markets that have no centralized ‘bookmaker’ is that there is no entity whose role it is to take the other side of a bet by default. This is equivalent to an exchange with no market maker.

The result is that most of the liquidity tends to consolidate around a handful of _very popular predictions_, such as:

* What will the price of [Bitcoin](bitcoin-glossary.md) be in 2024?
* Who will win the 2024 US presidential election?

While more specific or niche predictions will typically have a limited number of people willing to take one side or the other. Under such conditions, it is difficult to bet large amounts of capital and the winnings tend to be much smaller. 

*Decentralized prediction markets have struggled to access large and consistent sources of liquidity.* The most likely reasons for this include the wide variety of predictions that betters place, ranging from sports to politics to traditional and crypto markets. 

The more diverse the predictions, the more players you need who have adequate knowledge about each topic to place large bets. Another reason for poor liquidity is the fragmentation of blockchain networks and lack of well established interoperability solutions, like *bridges*.

Prediction markets on _Avalanche, Polygon, [Ethereum mainnet](ethereum-glossary.md), Solana and Cosmos_ do not communicate with each other. 

As a result, it is not uncommon to see the same prediction running on multiple networks with a different set of players and different odds calculations

This problem can be solved by developing solutions to enable cross chain prediction markets to form, thereby concentrating liquidity and providing a better betting experience for well capitalized players.

Horizen’s recent implementation of the [Ethereum Virtual Machine](https://eon.horizen.io/) or EVM can significantly advance interoperability of prediction markets on the Ethereum network as well as other [EVM-compatible](ethereum-virtual-machine-evm.md) chains such as Avalanche, Fantom and Polygon. 

### Smart Contract Security Risks

Placing a bet on a prediction market does not come without risk. When a bet is placed, your funds are stored on a smart contract until the event that you are betting on has concluded. This can be for a number of hours or a number of months. 

The longer a person's funds remain on a public smart contract, and the larger the pool of funds grows, the more likely a hacker will look to exploit the pool and potentially succeed. Given the string of hacks that we have witnessed in the Defi space over the past 2 years, there is still a lot of uncertainty about whether a prediction market protocol can adequately secure a large pool of funds. 

The solution is better security practices to prevent hacks, as well as the introduction of insurance protocols that can guarantee repayment of a bettor's deposit in the event of a hack. 

### Regulatory Risk

Casinos and sports betting platforms have long held a reputation amongst regulators for being venues for bad actors to launder money through gambling losses.

From a regulators perspective, decentralization prediction markets could potentially serve as a more sophisticated venue for money laundering using private and permissionless technology. This perception will continue to deter more mainstream companies from participating in prediction markets until there is better regulatory clarity and implementation of KYC/AML solutions. 

- KYC - Know Your Customer
- AML - Anti-Money Laundering

[Zero-knowledge proof technology](zero-knowledge-proofs-zkp.md), a core offering of the Horizen network, can be utilized here to allow participants to confirm basic information about their counterparties. 

This includes whether they are compliant tax paying citizens or entities form non-sanctioned nations, or whether their funds have touched any blacklisted addresses, without knowing the personal details of each player - _protecting sensitive information_.  

## In Conclusion - Decentralized Prediction Markets

Decentralized prediction markets have the potential to encapsulate every aspect of both the traditional and digital economy. Almost any event that has a binary set of outcomes can be turned into a prediction market. 

This includes predictions on:

* NFT prices
* Weather events
* Sports games
* Political campaigns
* Movie box office earnings, and more

_The possibilities are endless and the potential market value of the dominant decentralized prediction market could potentially reach trillions of dollars!_

While there is so much promise for this technology, there remain several hurdles that need to be overcome before prediction markets can truly achieve mainstream adoption. 

**As we highlighted, these hurdles include:**

* Poor liquidity 
    * Which can be resolved by introducing better interoperability solutions that leverage the EVM. 
* Smart contract security risks
    * Which can be mitigated by better insurance offerings, and
* Regulatory risks
    * Which can be addressed by adopting privacy-enabled KYC/AML solutions using zero-knowledge proofs. 

With newer [web3](web3.md) technologies, including:

- Zero-knowledge enabled Ethereum virtual machines - or ZK-EVMs

- Cross chain messaging protocols like Layer Zero

- Fully customizable app-chains on Cosmos and Horizen

- And much, _much_ more…

We can expect decentralized prediction market to overcome many of the challenges that currently hinder their adoption and quickly become a larger part of the mainstream crypto narrative.
