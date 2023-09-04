---

sidebar_label: Decentralized Exchanges - DEX
title: What is a DEX? - Decentralized Exchanges
slug: /decentralized-exchanges-dex/
description: DEXs, or Decentralized Exchange, are an open & permissionless alternative to centralized exchanges. Traders can buy and sell tokens P2P using smart contracts.
image: https://www.horizen.io/academy/static/img/decentralized-exchanges-dex/decentralized-exchanges-dex-meta.jpg
last_update:
  date: 3/30/2023
  author: Horizen Contributor

---

# What is a DEX? - Decentralized Exchanges

Trading is a core function of financial markets that has traditionally been managed by centralized institutions, including banks, clearinghouses, market makers and brokerage services. 

While these institutions are able to facilitate large trades efficiently and at low cost, they rely on intermediaries that accumulate most of the economic value that comes from transaction fees and have the power to censor trades. In addition, transaction settlement can take days to conclude as it often requires the coordination of multiple banks to reconcile accounts using the ACH or Fedwire system. 

**Decentralized exchanges** or _DEXs_ present an open and permissionless alternative that is based on blockchain technology and does not involve any intermediaries. 

Instead, DEXs allow traders to buy and sell tokens peer-to-peer using _smart contracts_.

:::info EVM on Horizen
[**Horizen EON**](https://eon.horizen.io/) is our first public proof-of-stake sidechain and a fully EVM-compatible smart contracting platform that allows developers to efficiently build and deploy dapps on Horizen, while fully benefiting from the Ethereum ecosystem.
:::

## Initial Challenges with Decentralized Exchanges

During 2017 and 2018 when DEXs were first being launched, they incurred major difficulties sourcing liquidity in order for buyers and sellers to get their orders filled. **Liquidity** refers to how quickly an individual or firm can buy or sell an asset without significantly influencing its market price. 

Additionally, DEX’s faced difficulties matching orders between buyers and sellers in order to get trades filled at a timely and efficient manner, _and_ at a price that mirrored the same coins trading on a centralized exchange. 

In the traditional financial system, **centralized exchanges**, or _CEXs_, use order book matching services to match the highest price a buyer is willing to pay for a security with the lowest price a seller is willing to sell that security. Both buyers and sellers can also get their orders filled at the ‘market price’, which is simply the most recent price at which a security was traded. 

CEXs rely on **market makers**, which are institutions that provide liquidity to the market and essentially step-in as a buyer or a seller of a security when there aren't enough buyers or sellers on the other side of the trade to ‘make a market’. 

Market makers get compensated for this by understanding what the price of different securities are, then offering to buy a security from a seller at one price, and anticipating that they will be able to sell it at a higher price soon afterwards. 

Order book matching engines require fast and highly scalable infrastructure in order to process millions of transactions per second. Similarly, market makers rely on fast trading infrastructures in order to identify inefficiencies in the price of securities for which they can exploit for a profit. 

Together, order book matching engines and market makers help facilitate orderly and efficient markets for individuals and institutions to trade securities. 

By contrast, DEX’s operate on the [blockchain](fundamentals/how-do-blockchains-work.md), where transactions require consensus from nodes on a blockchain network in order to be confirmed. This can sometimes make them slower and more costly than CEXs for executing trades. 

## Components of a DEX

### Price Oracles

One of the first solutions that enabled DEX’s to get accurate price readings was the development of smart contract [oracles](defi/blockchain-oracles.md).

 **Oracles** are essentially decentralized protocols that receive external data from different on-chain or off-chain sources and feed them into [smart contracts](defi/smart-contracts.md) in order to help the contracts execute based on accurate and near real time information.

Similar to how nodes on the Bitcoin network coordinate to achieve consensus on the validity of transactions and state of the ledger, oracle nodes coordinate to achieve consensus on the accuracy of the external data that is being provided from different sources.

Decentralized crypto exchanges rely on oracles to feed smart contracts’ data about the price of cryptocurrencies trading on other DEXs and on CEXs. This data is pooled together and aggregated to enable the more accurate and up to date version of the price to be reflected. The most popular oracle network is _ChainLink_. 

While accurate price readings would certainly improve the use of DEXs, there were still major problems around the lack of liquidity, which meant that DEX users were forced to buy digital assets not based on the most accurate price but the price in which there was enough liquidity to fill their order, which could often be higher than the current trading price in more liquid exchanges. 

###  Automated Market Makers

To solve this problem, DEXs like UniSwap and Curve introduced an [automated market maker](defi/automated-market-maker-amms.md), or _AMM_. 

An **automated market maker** is a system that leverages liquidity pools to allow tokens to be traded in a decentralized and permissionless manner while maintaining efficient pricing of assets. 

### Liquidity pools

**Liquidity pools** are pools of capital managed by smart contracts. The pools often contain two tokens that are used as trading pairs. On a typical DEX, a liquidity pool is formed when users deposit one of each token in a pair that others wish to trade. 

Each user is typically required to deposit a different quantity of each token in order for them to equal the same value. 

For Example:

- If I wanted to form a liquidity pool for an **ETH/DAI trading pair,** I could start by inputting 1 ETH and 3,000 DAI for a total dollar value of $3,000, or 2 ETH and 6,000 DAI for a total value of $12,000, and so on.

Similarly:

- If the pool was for an **UNI/ETH trading pair**, and the price of Uniswaps token UNI was $30, I could input 100 UNI/1 1ETH, or 200 UNI/ 2 ETH, etc. 

Users who input token pairs into a pool are called **liquidity providers** or LPs. 

LPs receive **LP tokens**, which are basically shares that represent their ownership stake in the liquidity pool. 

If a user wishes to stop being a liquidity provider, they can sell their LP tokens to get back the tokens that they initially put in.

Once an ETH/DAI pool is formed, other users can buy and sell ETH or DAI by exchanging their ETH with DAI from the pool, or exchanging their DAI for ETH from the pool. 

Each time this occurs, LPs are compensated from the fees that outside traders pay in order to exchange digital assets with the pool. The fees are distributed to LPs through their LP tokens. 

LPs are compensated in proportion to the amount of capital they contribute to the pool, if my ETH and DAI account for 10% of the pool, I earn 10% of the fees.

In the DeFi space, lending your tokens to liquidity pools and earning fees from transactions is called **yield farming**. 

![yield farming](/img/decentralized-exchanges-dex/yield-farming.jpg)

Fees are typically [0.3% per trade](https://docs.uniswap.org/contracts/v2/concepts/advanced-topics/fees#:~:text=There%20is%20a%200.3%25%20fee,immediately%20deposited%20into%20liquidity%20reserves) - they do not include gas fees, which are paid to Ethereum miners. 

The price of tokens in the liquidity pool are determined by a mathematical formula that adjusts the price of each asset based on the ratio of each token within the pool, which is influenced by the supply and demand of each token. 

**_TokenA_balance(p) x TokenB_balance(p) = K_**

**K** is the constant value of the liquidity pool, meaning it does not change regardless of the balance of each token.

If, for example, there is greater demand for DAI, that means more people are putting ETH in the pool and taking out DAI. This creates an imbalance that results in the price of ETH going down as the supply of ETH increases in the pool. 

The discrepancy in the price ETH within the pool compared to the price of ETH trading on centralized exchanges creates an arbitrage opportunity for traders to exploit. Seeing this opportunity, traders add DAI to the pool and take out ETH, which ultimately restores the ratio of ETH and DAI within the pool, allowing the price to return back to the same price that is reflected on other exchanges. 

The combination of smart contract price feeds, arbitrage opportunities exploited by traders and liquidity provider incentives enable AMM’s to serve as a critical feature in facilitating efficient markets on decentralized exchanges. 

## Pros and Cons of CEXs

### Pros of Centralized Exchanges

#### Speed and Efficiency

Centralized exchanges run on centralized databases that are wholly owned or managed by the exchange. 

This means they don't have to coordinate between various independent nodes in order to arrive at consensus for each trade. The ability to verify all orders within one central system allows CEXs to execute trades within milliseconds. 

#### Operational Transparency & Regulatory Compliance

While DEXs are hailed as being a more transparent alternative to CEXs, the one advantage that CEXs have over most DEXs is that they mostly operate within a well defined regulatory framework that requires them to disclose important information about their operations and team. 

While this may not be as important for retail investors, institutional investors are much more hesitant to deploy capital into DEXs that are run by anonymous or pseudonymous founders, or are managed entirely by a DAO. 

In addition, trading on a public permissionless blockchain exposes institutional investors to counterparties who are from sanctioned nations or may be using funds that are the proceeds of criminal activity. This can put these entities at risk of unknowingly facilitating criminal activity. 

As the industry matures and develops better rules and best practices for institutional investors to interact with DEXs, we can expect most of these risks to be mitigated. However, for the time being, professional money managers prefer regulated CEXs to trade and custody their crypto assets. 

#### Greater Volume & Liquidity

As a result of the transparency and regulatory compliance offered by centralized exchanges, these entities are able to attract far more users, which translates to increased trading volume and greater liquidity.

In addition, a user-friendly interface paired with the ability to quickly execute trades results in a better trading experience for non-crypto native users.

#### Fiat-to-Crypto On-ramp

Regulatory compliant CEXs can connect to the traditional banking system and offer onramps for users looking to buy crypto with a credit card or bank deposit. Users can also more easily convert their crypto back into fiat and withdraw to their bank accounts.

### Cons of Centralized Exchanges

#### Security

Centralized exchanges have a single point of failure, which means a hack could lead to users losing millions of dollars. 

For example, the hack of Mt. Gox in 2014, the largest Bitcoin exchange at the time, resulted in the loss of $450 million in customer funds and subsequent bankruptcy of the exchange. While a large portion of the funds have since been recovered, most customers are yet to receive their [bitcoin](cryptocurrency/bitcoin-glossary.md) due to the slow bankruptcy claims process.

The recent implosion of FTX is another example of how CEX security can be completely flawed. No matter how secure the exchange claims to be, you are still trusting the operators to safely custody your funds and not create backdoors that will allow them to withdraw user assets for their own purposes. 

While DEXs have their fair share of security challenges, most of the time these issues can be spotted by white hat hackers who review the DEXs open source code and are rewarded for pointing out flaws to the team. 

By contrast, the security setup of a CEX is only known to a handful of internal operators, which means the risk is greater that a flaw could go undetected. 

What makes matters worse is that in most countries, digital assets are not insured, which means there is no protection against losing your crypto even if you store it with a trusted custodian. Knowing this, many investors choose to custody their own assets since it allows them to have full control over their own security setup. 

#### Privacy

CEXs require users to provide their identity and go through KYC verification in order to deposit, trade and withdraw funds. CEXs are also legally obligated to provide user information to regulatory bodies upon request. 

#### Lack of Censorship Resistance

Centralized exchanges are more vulnerable to government censorship. Exchanges may have their operating licenses revoked, funds seized, or be coerced into revealing sensitive information about their users and funds. There have been instances in the past where Governments have forced exchanges to shut down such as in India and China. 

#### Monopolistic Environment

Lack of competitive DEXs have created a market where centralized exchanges like Binance dominate the market for trading crypto, which poses greater risk to the industry because of the vulnerabilities we’ve highlighted. 

For example, at the end of 2022, Binance controlled [over 90% ](https://www.coindesk.com/markets/2023/01/04/binance-controlled-92-of-bitcoin-spot-trading-volume-at-end-of-2022-arcane-research/)of all Bitcoin trading volume. Given the increase in regulatory scrutiny on CEX and Binance’s opaque operations, the concentration of trading crypto's largest asset poses a major risk to the industry as a whole. 

Perhaps even more dangerous is the prevalence of people from emerging market economies using Binance and other CEXs as a pseudo bank to store their savings. 

CEX are not regulated as heavily as banks, and as we’ve stated before, crypto assets are typically not insured by any government or private institution. This poses a major risk for unsuspecting users that may choose to store a significant amount of their life savings on a CEX in order to avoid it being confiscated by their national bank. 

## Pros and Cons of Decentralized Exchanges

### Pros of Decentralized Exchanges

#### Pseudonymity

One of the core tenants of a decentralized exchange is its emphasis on pseudonymity.

To use a DEX, one simply needs to sign in using a self-custodial wallet like Metamask. No time consuming or costly KYC verification process needed. 

:::info Cobalt Web Wallet
[**Cobalt**](https://www.horizen.io/wallets/cobalt/) is a secure and easy-to-use web extension wallet for the Horizen cross-chain ecosystem. Trustworthy, reliable and built to easily manage your assets.
:::

#### Security

Decentralized exchanges are run by a network of [distributed nodes](architecture/blockchain-nodes.md), meaning they have no single point of failure and are far less likely to be exploited at the consensus/base layer. This is not to say that smart contracts at the application layer are not prone to being hacked, as we have seen multiple examples of this in the past 2 years. 

However, the security guarantees provided by the consensus layer ensures that all finalized transactions are permanently imprinted on the network, making it easier to track hacked funds and potentially recover them down the road, as we saw with Jump Crypto’s counter exploit of the Wormhole Hacker for [$140 Million](https://blockworks.co/news/jump-crypto-wormhole-hack-recovery). 

#### Censorship Resistance

Since decentralized exchanges are not owned by one entity and do not operate in a single location, they are much harder to censor. 

### Cons of Decentralized Exchanges

#### Speed and Efficiency

DEXs run on a [distributed system](consensus/consensus-in-distributed-systems.md) that requires multiple nodes to achieve consensus. This sometimes means that trade orders can take longer to execute, especially during times of high network traffic. 

To mitigate this, [Ethereum](cryptocurrency/ethereum-glossary.md) adopts a fee market, which allows users to pay higher gas fees in order to get their transactions processed faster. The downside of this approach is that gas fees can be as high as $200 per transaction during peak traffic periods. 

Off-chain [Layer 2](scalability/layer-2.md) solutions have emerged as a solution to the gas fee problem, enabling users to transact at fast speeds and for lower cost. However, L2s are fairly new and therefore don't have as much liquidity as the Ethereum mainnet. 

#### Scalability 

While L2 solutions like [zk-Rollups](scalability/zk-rollups.md) have enabled spot tracing DEXs to become faster and cheaper, there are still considerable challenges when it comes to trading derivatives, which require much faster transaction processing at much lower costs, especially for high frequency trading. 

Projects like dYdX and blockchains like Solana are optimized for scalability to enable these use cases to be more easily adapted to blockchains. However, the more a network is optimized for scalability, the more it has to compromise on decentralization in some areas of the technology stack, thereby introducing many of the same risks that come with using a centralized exchange. 

#### Support 

Customer support is a necessary and highly valued trait for any online platform. However for decentralized exchanges, the lack of a central operating team makes it less likely that traders will receive the same level of support as they would on a regulated centralized exchange. Decentralized exchanges tend to attract users who have more experience trading cryptocurrencies and usually understand how to navigate around common user experience problems like transferring funds to and from a wallet. 

#### Lack of Direct Fiat Onramps

The biggest barrier to entry currently facing decentralized exchanges is their lack of fiat to crypto onramps. This missing feature is usually intentional, as it removes the need for exchanges to deal with the regulatory headache that comes with accepting fiat currencies. 

As a crypto-to-crypto exchange, DEXs can operate outside of the traditional financial system.

However this forces users to onboard via a CEX, deposit funds from their bank, and then withdraw them to a wallet they have set up before executing a trade on a DEX. Each additional step that is needed to begin using a DEX filters out a portion of users who are unwilling to go through those hurdles. 

Despite these flaws, DEXs have seen over [$1 trillion dollars](https://www.theblock.co/linked/128500/decentralized-exchanges-saw-over-1-trillion-in-trading-volume-this-year) in trading volumes since appearing on the scene around 2018. The technology is still very new and highly experimental. One of the major debates that occur today around DEXs is the question of how to deal with [miner extractable value](mining/miner-extractable-value-mev.md) or MEV, as well as whether a decentralized application (dApp) or application specific blockchain (appchain) is the ideal architecture for operating a DEX. 

We suspect that there won’t be any definitive answers to these questions for at least another few years. In the meantime, the many experimental approaches to trading digital assets on-chain continues with the goal of one day outcompeting centralized exchanges in key areas like speed, user experience and access to liquidity. 
