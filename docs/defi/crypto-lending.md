﻿---

sidebar_label: Lending
title: What is Crypto Lending?
slug: /crypto-lending/
description: Crypto lending is simply the process of lending and borrowing digital assets that are recorded on a blockchain between parties of two or more.
image: https://www.horizen.io/academy/img/crypto-lending/crypto-lending-meta.jpeg
last_update:
  date: 2/21/2023
  author: Horizen Contributor

---

# What is Crypto Lending?

The number of applications for crypto and blockchain technology has exploded in recent years, from payments, to trading, art and gaming.

One application in particular, _lending_, has become a focal point of the crypto space in the past 2 years, leading to a spectacular rise in both DeFi and *centralized finance*, or **CeFi**, platforms offering crypto lending solutions. 

**Crypto lending** is simply the process of _lending_ and _borrowing_ digital assets that are recorded on a blockchain.

In this article we’ll explore what crypto lending is, how it works, as well as the benefits and risks.  

## How Does Crypto Lending Work?

One of the core [features of blockchain technology](fundamentals/components-of-a-blockchain.md) is the **[Smart Contract](defi/smart-contracts.md)**, which is a type of computer program that executes a set of functions based on predefined rules or conditions set by the developer.

With _smart contracts_, users can conduct all kinds of agreements that involve anywhere from two individuals to several thousands of people without the need of an intermediary. 

![crypto lending platform](/img/crypto-lending/crypto-lending-platform.jpeg)

### Smart Contracts for Crypto Loans

A smart contract can be used to manage loan transactions between 2 anonymous or publicly identified parties where: 

* Party **A** places 1 ETH into a smart contract as collateral to borrow $4,000 from Party **B**
* The terms of the smart contract show that Party **A** must repay the loan in 6 months at 5% interest
* If Party **A** repays the loan plus interest on time to Party **B**, the funds from the smart contract will automatically be released back to Party **A**’s digital wallet
* If Party **A** fails to repay the loan on time, the funds from the smart contract will automatically be released to Person **B**’s digital wallet 

:::info Cobalt Web Wallet
[**Cobalt**](https://www.horizen.io/wallets/cobalt/) is a secure and easy-to-use web extension wallet for the Horizen cross-chain ecosystem. Trustworthy, reliable and built to easily manage your assets.
:::

Most crypto lending arrangements are **secured** or **collateralized loans**, meaning the borrower is offering an asset of greater value to the lender as insurance in case of default. 

Typically, the collateral must be valued at 1.5 to 2 times the loan amount at the time of the transaction. It is expected that the value of the collateral may increase or decline while the loan remains outstanding. 

### Margin Calls

However, if the value of the collateral declines below a certain threshold, e.g less than 1.6x the value of the loan, the lender will normally ask the borrower to ‘**post-margin**’. This means the borrower must provide the lender with more collateral in order to maintain compliance with the terms of the loan agreement. 

This is also referred to as a **margin call**.

If the borrower fails to provide more collateral before a specific deadline, the lender has the right to ‘liquidate’ the collateral they hold in order to protect themselves from incurring a loss on the loan. 

The sooner the lender can sell the collateral while its value is greater than or equal to the outstanding loan, the better protected they will be. This is why lenders will often inform the borrower of the need to post additional margin well before the value of the collateral has reached the minimum threshold. 

With crypto loans, this entire process is automatically managed by smart contracts. The smart contract will be programmed to sell the borrower's collateral if it falls below a specific price - the **liquidation price**.

This means the borrower must pay close attention to how close their loans are to being liquidated and post margin if necessary, as there is no human intermediary to provide a warning. 

Lending smart contracts rely on **[Oracles](defi/blockchain-oracles.md)** that stream real time price information for various cryptocurrencies from exchanges to the blockchain. This makes it possible for them to react based on the latest information. 

The dramatic rise of crypto lending companies is largely due to the low interest rate environment of 2020-2021 that gave fuel to many hedge funds, exchanges, and similar trade-fi institutions that were desperately seeking ways to generate yield for their clients. 

## Risks of Crypto Lending

_One of the biggest risks_ that come with crypto lending is the allure of high yield that is normally a function of token inflation, the market's appetite for speculation, and the availability of cheap collateral. 

### Token Inflation

Most of the time when a DeFi protocol is offering yields of _20% APY or more_, these ‘yields’ are not being generated by a healthy market of lenders or borrowers agreeing to transact at certain high interest rate, but in fact by the increase in the supply of the protocols native token, which is essentially being printed out of thin air.

This means that the [protocol](architecture/blockchain-protocols.md) is _subsidizing_ the yields that lenders are earning through [token inflation](tokenomics/tokenomics.md). Naturally, the more tokens are printed, the less value the tokens will have. This results in a steep decline in the tokens price as lenders accrue more [tokens](tokenomics/what-is-a-token.md). 

Since most market participants are aware of this, there is a rush to sell the tokens as soon as they are earning, which only further drives down price. 

Eventually, the scheme cannot sustain itself, as the token that is being earned will have already lost 90% or more of its USD value long before the lender could earn 20% APY at the USD price that was initially quoted. 

### Appetite for Speculation

Another reason why high APY lending programs are unsustainable is because the yields are primarily driven by borrowers' appetite for speculation. 

During the bull market, most traders are looking to capitalize on opportunities that can earn multiples of their initial capital by **leverage trading**. If a trader believes they can earn 5x on their money in the next few hours by placing a leveraged long or short trade, most will be willing to borrow at 20% APY or more due to the size of the potential payout. 

This makes it _very profitable_ for lenders, however, when the market cools and there are less traders willing to make such high leveraged bets, people are unwilling to borrow at such high interest rates, which means lenders have to settle for lower yields.

Essentially, the demand for _speculative borrowing_ is primarily dependent on where we are in the crypto market cycle, and as we have seen in past bear markets, demand can remain low for multiple years. 

### Cheap and Low-Quality Collateral

Cheap or low-quality collateral refers to assets that are: 

- New and highly speculative in nature
- Extremely volatile
- Lack sufficient liquidity to support large buy or sell orders
- Have highly centralized distribution 
- Not accepted by large financial institutions

Most tokens and cryptocurrencies other than [Bitcoin](cryptocurrency/bitcoin-glossary.md) and perhaps ETH fall into this category of collateral. 

#### Risks of Cheap Collateral

The use of cheap collateral to take out loans is a _very risky endeavor_ that often leads to significant losses for _lenders_, _borrowers_, and even _holders of the tokens_ who were not part of the lending transaction.

This is because the extreme volatility of these assets means that a margin loan can become liquidated very quickly, especially if the broader market experiences a large and sudden drawdown in prices, which is very typical in crypto.

- This poses a **risk for borrowers** if they are unable to post additional margin in time to avoid liquidation.

- It also poses a **risk for lenders**, as even smart contracts may not be fast enough to sell a token before it reaches its liquidation price, especially if the size of the collateral is large and the token is highly illiquid.

If a [token](tokenomics/why-create-a-token.md) has just recently been minted by a crypto project, and a large portion of the supply is either unvested or controlled by project insiders, it will naturally be more prone to extreme volatility due its low circulating supply and is therefore a poor candidate for collateral. 

By contrast, **pristine collateral** is considered _pristine_ because it is:

- Highly liquid
- Has a long history of use as collateral
- Relatively stable,
- Is both established _and_ trusted by large financial institutions. 

_Gold_ and USD are both prime examples of pristine collateral.

## Risks of CeFi Lending

While initially hailed as pioneers for bridging the gap between traditional finance and DeFi, today, most CeFi lending institutions have experienced a _massive_ fall from grace. 

Due to incidents like the bankruptcy of _3AC, FTX and Celsius_, a cloud of skepticism has begun to hover over CeFi lenders, with many believing that they represent the failings of centralized intermediaries to once again maintain transparency while posing as proponents of crypto principles. 

### Fixed Rate of Return

During the bull market, many CeFi companies offered a _fixed rate of return_ on customers' crypto or stablecoins deposits without properly disclosing where those yields were being captured from and what sort of high risk strategies were being pursued to maintain steady returns for customers. 

One of these strategies included taking customers' funds and storing them in **Anchor**, a high yield savings protocol on the Terra blockchain network that offered 20% APY on UST stablecoins. 

Centralized exchanges and Neo-banks that wished to offer customers a 10% return on their dollars could do so by simply using Anchor to generate those returns in UST, while keeping the extra 10% for themselves as profit.

As many would later find out, USTs model was fundamentally unstable. Once the stablecoin depegged, the entire Terra/LUNA ecosystem came crashing down with it, resulting in a total wipeout of customer deposits on CeFi lending platforms. 

### Counterparty Risk

We have also seen other examples of CeFi lenders failing to properly analyze counterparty risk, such as in the case of **Genesis**, one of the largest lending firms in the crypto industry. Genesis had lent $2.36 billion in mostly unsecured loans, meaning little to no collateral, to now bankrupt crypto hedge fund _3 Arrows Capital_.

**Gemini**, a US based retail exchange, launched an ‘Earn’ lending program that offered up to 7% APY on customers' crypto deposits. This yield was unfortunately obtained by lending all customer deposits from the Earn programs to one single counterparty: _Genesis_. 

As of the time of writing, the collapse of UST created a domino effect that led entities like _3AC_ and _Celsius_ to file for bankruptcy, which subsequently led to the insolvency of Genesis, **which has resulted in over $900m in Gemini Earn customer deposits being lost.**

### Flaws of CeFi Lenders 

These are prime examples of how the murky relationship between CeFi companies and DeFi protocols can lead to disastrous consequences. 

Purely decentralized lending protocols offer transparency through the use of smart contracts and network consensus, while purely centralized lenders offer transparency by adhering to the financial regulations of their host country. 

Entities that have attempted to act as a hybrid of CeFi and DeFi have tended to fail at both due to their inability to adhere to nation state laws or laws written in computer code. 

![defi lending platform](/img/crypto-lending/defi-lending-platform.jpeg)

It is for this reason that CeFi lenders have posed the greatest risk to the viability of crypto-based lending models and are therefore in significant need of reform. 

## How to Get a Cryptocurrency Loan?

The most popular decentralized applications for lending and borrowing crypto today are **Aaave** and **Compound**. These Defi protocols offer smart contract lending solutions on [Ethereum](cryptocurrency/ethereum-glossary.md). 

:::info EVM on Horizen
[**Horizen EON**](https://eon.horizen.io/) is our first public proof-of-stake sidechain and a fully EVM-compatible smart contracting platform that allows developers to efficiently build and deploy dapps on Horizen, while fully benefiting from the Ethereum ecosystem.
:::

To use these dapps, simply:

- [Connect your wallet](wallets/crypto-wallets.md)

- Review the market interest rates for borrowing and lending, as well as the collateral amounts

- Deposit crypto assets in the designated smart contract

- Receive the borrowed crypto assets directly to your wallet

Ultimately, crypto-based lending is still very early and highly experimental. As the industry develops, we can expect there to be new and exciting models for lending that will begin to achieve adoption, such as smart contracts that are optimized to manage riskier forms of collateral like tokens or event NFTs. 

Or, uncollateralized lending on-chain, which will open up usage for the vast majority of people and entities who want access to credit for non-speculative purposes. 

