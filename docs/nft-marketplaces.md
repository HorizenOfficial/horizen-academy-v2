---

sidebar_position: 37.1
sidebar_label: NFT Marketplaces
title: What is an NFT Marketplace?
slug: /nft-marketplaces/
description: NFT Marketplaces are decentralized platforms that leverage smart contracts to trade ERC-721 and ERC-1155 tokens in an open and permissionless manner. 
image: /img/nft-marketplaces/nft-marketplaces-meta.jpg
last_update:
  date: 3/30/2023
  author: Horizen Contributor

---

# What are NFT Marketplaces?

**NFTs** have become the single biggest non-financial use case in crypto, catapulting the industry from a niche space for finance enthusiasts to a playground for mainstream artists, musicians, sports fans and major retail brands. 

The biggest contributing factor to the rise of NFTs has been the emergence of open and permissionless marketplaces for trading NFTs. In 2021, thousands of users were introduced to *Cryptopunks, Meebits, Bored Ape Yacht Club* and more collections through platforms like OpenSea. 

Terms like _minting_, _PFP_, and _floor price_ became the norm as celebrities, stock traders, and newly wealthy crypto holders spent lavishly to acquire their piece of Web3 pop culture. 

:::info EVM on Horizen
[**Horizen EON**](https://eon.horizen.io/) is our first public proof-of-stake sidechain and a fully EVM-compatible smart contracting platform that allows developers to efficiently build and deploy dapps on Horizen, while fully benefiting from the Ethereum ecosystem.
:::

In this article we cover what NFT marketplaces are, how they work, and how they have evolved since the prior bull market. 

## What is an NFT Marketplace?

Before we explain what an NFT marketplace is, it’s important to understand what NFTs are. 

NFTs, or Non-fungible Tokens, are a form of digital asset first created under the ERC-721 token standard that allows each token issued to have a unique identifier code. NFTs are non-fungible because they cannot be divided or traded fractionally. 

Users can verify the uniqueness of their NFT on the blockchain and can also confirm that theirs is the only one in existence. This is different from the ERC-20 token standard, which is used for creating tokens that are indistinguishable from each other, fungible, and can be exchanged in fractions of a token. 

**ERC-721s** enabled artists to produce digital paintings, collectibles, and music albums as NFTs, giving fans the chance to claim ownership of these unique works while verifying their scarcity and authenticity. 

Other token standards like **ERC-1155** enable creators to issue semi-fungible tokens. These are tokens that can have unique properties as a collective while being interchangeable amongst each other. 

For example, a video game could issue a series of digital weapons or health packs with a unique identifier code designating them as tools to be used within a specific game, yet there may be multiple copies of them that can be traded between each other just like currencies. 

**NFT marketplaces** are decentralized platforms that leverage smart contracts to trade ERC-721 and ERC-1155 tokens in an open and permissionless manner. 

## NFT Marketplaces vs Decentralized Exchanges

While you can think about NFT marketplaces as simply being DEXs for NFTs, there are a handful of subtle differences in how each of these platforms are structured: 

For one, **DEXs** are designed for trading fungible tokens, meaning tokens that are divisible and are indistinguishable from each other in terms of their underlying code and therefore can be traded one for one. _For example_, AAVE and UNI are both ERC-20 tokens that can be exchanged for one another on a DEX like Uniswap. 

The only difference between them is their name and the smart contract used to issue them. 

As explained in our article on [DEXs](decentralized-exchanges-dex.md), fungible tokens are swapped using _liquidity pools_, where traders pool together a proportional supply of AAVE and UNI tokens such that each side is roughly the same value in USD terms. Other traders can then swap their supply with the desired amount they want, and as these trades occur, the price of each token is maintained by the supply ration of each token in the pool. 

By contrast, one cannot swap a Crypto Punk NFT for a Bored Ape NFT because 1 punk might equal 40 ETH while one Ape equals 50 ETH. This means the seller of the Punk would be increasing the value of their holdings by 25% in ETH terms, while the seller of the Ape would be losing 20% of their value in ETH terms. 

With NFT marketplaces, the _lack of fungibility_ means that there is no liquidity pool for trading NFTs. Rather, all trades are conducted through bids/offers, ‘buy now’ offers, or auctions. In addition, all NFTs are denominated in a single currency, typically ETH. 

## What is Minting?

Before an NFT can be sold, it first needs to be minted. 

**Minting** is the process of issuing a new NFT on the [blockchain](how-do-blockchains-work.md). This NFT can be attached to an audio recording, a digital photo or painting, a video, or some other type of media file or asset. 

When an NFT is minted, it is assigned a unique token ID and stored in the wallet of the person who minted it.

:::info Cobalt Web Wallet
[**Cobalt**](https://www.horizen.io/wallets/cobalt/) is a secure and easy-to-use web extension wallet for the Horizen cross-chain ecosystem. Trustworthy, reliable and built to easily manage your assets.
:::

_The NFT is forever associated with the persons minting address, even though the ownership of the NFT can change._

While media files may be ‘attached’ to an NFT, this attachment is typically only on the front end, meaning the file could be upgraded or erased at a later date, leaving the token holder with just a token. To mitigate this, creators typically also upload media files to the InterPlanetary File System or [IPFS](https://ipfs.tech/), which is a protocol for storing and sharing files on the blockchain.

## Transactions on an NFT Marketplace

1. Seller uploads a jpeg, gif or video file.

2. Seller signs a transaction to mint an ERC-721 token that is linked to that file.

3. Once the NFT is created, the creator can set a price for their NFT and the period of time that they want their NFT listed for, be it 1 day, 1 week, 1 month, etc. 

4. After entering those details, the creator signs another transaction allowing the marketplace to transfer their NFT to a [smart contract](smart-contracts.md). This contract is programmed to execute based on the conditions set by the creator. *Examples of conditions set by the creator include:*

    * _Transfer to buyer if buyer makes a bid of 10 ETH_

    * _Transfer back to creator if NFT is listed for more than 24 hours_

    * _Transfer to whichever buyer places the highest bid in the next 48 hours, with a minimum bid of 7 ETH. If no bids are placed by the the 48 hour mark, or if all bids fall below the minimum bid of 7 ETH, transfer NFT back to the creators [wallet address](wallet-addresses.md)_

    * _Tag a 5% royalty fee to all secondary sales of the NFT that will be sent to the creators wallet address_

5. Once the NFT has been transferred from the creator's wallet to the smart contract, the NFT will officially be labeled as ‘listed’ under the predetermined conditions. 

6. If a buyer is interested, they can place a bid to purchase the NFT at a set price, then wait for the seller to accept or reject the offer, or they can select ‘buy now’ to purchase the NFT right away at the price set by the seller.

7. To make an offer, the buyer signs a transaction allowing the marketplace to transfer their ETH to a smart contract where it will be locked until it is accepted or rejected by the seller, or until it is withdrawn by the buyer. 

8. If the seller wishes to accept the buyer's bid, they simply select ‘accept’, which will trigger the smart contract to unlock and transfer the ETH to their address while simultaneously unlocking and transferring their NFT to the buyer's address. 

## Common Types of NFTs Traded

* Profile pictures or _PFPs_
* 1-of-1 Pieces
* Generative art collections
* Collectables
* Gaming assets 
* Music NFTs

### PFPs

 - PFPs are the most popular form of NFT sold on marketplaces. These are profile picture NFTs that typically consist of 10,000 piece collections that each have different traits and aesthetics. 

- The most popular of these PFP NFT collections are the Bored Ape Yacht Club, CryptoPunks, Pudgy Penguins and Doodles.

- Each PFP NFT has a distinct token ID, but all of the pieces originate from the same minting contract. 

### 1-of-1 Pieces

- These are similar to traditional paintings, which tend to be sold as one item as opposed to a collection. 1/1’s tend to be priced higher because only one person can own the piece at a time. They also trade much less frequently since the supply is limited to just one.

- Artists like Beeple, XCopy, and Pak have earned [millions](https://nftnow.com/news/pak-julian-assange-clock-nft-auction/) of dollars from selling 1/1 NFTs.

### Generative Art

- Generative art is art that is created using a computer program that produces the work using a random assortment of thousands of inputs. 

- Collections like Art Blocks, Auto Glyphs, and Braindrops are considered generative art. Most PFPs also utilize computer programs to assign each model with their unique set of traits. 

### Collectables 

- Collectables are similar to sports trading cards. Projects like NBA TopsShot allow basketball fans to buy and sell collectibles that capture popular video highlights such as a dunk or winning 3 pointer from a playoff game.
 
### Gaming NFTs

- Video games often feature a variety of tools such as weapons and health packs that can help you advance in the game. With blockchain games, these tools can be minted as NFTs, allowing players to own and trade them outside of the game. 

- Gaming NFTs have become more popular with the rise of [play-to-earn games](play-to-earn-games.md) like Axie infinity and StepN that allow players to earn tokens when they win or unlock a certain level in the game. 

### Music NFTs

- Musicians can mint tracks and entire albums as NFTs on streaming platforms like Audius. The advantage of Music NFTs is that it enables musicians to track streams and earn royalties in a more transparent way compared to traditional streaming platforms like Spotify or Apple Music. 

- Using smart contracts, revenues earned from tracks can also be seamlessly distributed to writers, producers and other people who had a hand in crafting the song. 

## What is a Floor Price?

The **floor price** is the minimum price available to instantly buy an NFT. You can also think of it as the lowest ‘Buy now’ price. 

## What are Auctions?

**Auctions** are events that occur when multiple buyers are interested in purchasing an NFT where the sale price is determined by the highest bidder. Typically, an auction will have a minimum bid price to ensure that the lowest bid is at least in line with what the owner is willing to sell for.

From there, the auction will usually have a time limit of a few days or weeks. During this time, buyers can place their bids by locking the amount of ETH they are willing to spend in a smart contract. 

The seller can choose to accept or reject any bid that is active during the auction period. If no bids are accepted by the time the auction expires, the funds will automatically be sent back to the buyers and the NFT will remain unsold. 

The owner can also extend an auction or end it before the expiry date. Buyers are also free to withdraw their bids at any time if they are no longer interested in purchasing the NFT. 

NFT marketplaces leverage smart contracts to manage the entire auction process in an open, permissionless and efficient manner. 

## NFT Marketplaces & NFT Aggregators

Since the launch of OpenSea, we have seen a variety of newer NFT marketplaces emerge that cater to specific markets and offer different sets of features. 

New layer 1 blockchains always have their own NFT marketplace for trading NFTs within their network. For example:

- Magic Eden on Solana
- Jpegs on Avalanche
- Gamma on Stacks network

Other NFT marketplaces have emerged to address issues such as the lack of liquidity, or the enforcement, or lack of enforcement, of royalties.

Blur and Sudoswap are the most recent examples of a newer marketplace that caters primarily to pro-NFT traders and offers incentives for traders to provide liquidity to trade NFTs. 

These platforms have essentially adopted the Uniswap [automated market maker](automated-market-maker-amms.md) model for NFTs. Traders pool together a concentrated supply of NFTs and ETH, the price of each NFT is determined by the amount of available liquidity in the pool. 

Blur rewards traders who provide liquidity with airdrops of its token BLUR. 

The goal of these platforms are to make trading NFTs as quick and seamless as trading fungible ERC-20 tokens. 

We have also seen the emergence of NFT aggregators such as Gem, NFTrade and Element market. These platforms are similar to DEX aggregators like 1Inch because they aggregate tokens listed on various cross-chain marketplaces and display them on their site. 

This allows collectors to buy NFTs listed on other marketplaces without having to visit those platforms directly. 

## What are NFT Royalties?

One of the biggest selling points for artists launching NFTs has been the ability to enforce a royalty on every secondary sale of an NFT within a marketplace. 

This means that in addition to the artist receiving a payment when they sell their NFT to a buyer, they can effectively earn a sales tax every   time the new owner sells that same NFT to someone else. 

This has allowed NFT projects like BAYC to grow massive treasuries from the accumulation of royalties from secondary sales. Those funds have been used to develop follow up projects that provide additional value to BAYC holders. 

### The NFT Royalty Dilemma

While NFT royalties benefit creators by allowing them to earn sustainable incomes from the trading of their NFTs on the secondary market, many collectors have pushed back on the idea that they should have to pay a royalty in order to buy and/or resell an NFT. 

This additional tax increases the costs of trading the NFT, which reduces the maximum expected value that an NFT trader can earn from buying and reselling the NFT at a higher price, or _flipping_ the NFT. 

Given the fact that the vast majority of NFT trading volumes are from short term speculators, the ‘no royalties’ camp has mostly won the debate, as evidenced by many major NFT marketplaces like Magic Eden and OpenSea no longer enforcing royalties on their marketplaces. 

What many creators and collectors have also come to realize is that the extraction of a royalty for each subsequent sale of an NFT is much harder to enforce at the protocol level than was previously thought. 

For one, there is no way to distinguish a transaction where person A transfers the NFT to person B in exchange for ETH, and a transfer in which person A sends the NFT to themselves through a different wallet address (similar to how the marketplace enforces its own fees for trades executed on its platform). 

This means that the NFT marketplace must construct the smart contract for extracting a royalty only when a sale is conducted within the marketplace itself. 

### Enforcing NFT Royalties

Because the enforcement of royalties are limited to marketplace domains, a buyer and seller can technically agree to go off the marketplace and exchange an NFT for ETH via an OTC deal without paying the royalty. 

Furthermore, a competing marketplace can set up its own smart contract for facilitating NFT trades that do not enforce the creators' royalty fees. Also, since the current owner of the NFT has full control of their asset, they are free to transfer it into a different marketplace that doesn’t enforce royalties in order to trade at a cheaper cost. 

The allure of cheaper fees due to no enforcement of royalties naturally attracts more traders and greater liquidity to the competing marketplace, forcing the other marketplace to follow suit and drop their enforcement of royalties in order to remain competitive. 

This explains how OpenSea recently came to their decision to cut their [enforcement of royalties](https://decrypt.co/121638/opensea-drops-fees-royalty-protections-blur-rises) from up to 10% previously to 0.5% in order to compete with incumbents like Magic Eden and Blur. 

This decision has been met with pushback from the creator community, many of whom feel betrayed by the false promise of a new paradigm for artists to earn a living by monetizing their work through smart contract enforced royalties. 

The truth about NFT royalties and their limitations are complex to unpack for many, as they deal with a combination of technical limitations and efficient market dynamics. 

What the debate ultimately comes down to is understanding how and where creators can apply leverage in order to extract maximum value from their NFT artwork. 

Thus far, the best answer seems to be in developing creator-owned NFT marketplaces where artists have more control over the mechanism for enforcing royalties on secondary sales. 

However, this approach still has limitations, as NFT owners are always free to migrate their assets to a different marketplace where no royalties are enforced. 

To mitigate this, some artists are limiting any additional perks and rewards granted to NFT holders to only those that paid a royalty in purchasing their NFT. 

Projects like Immutable X are taking a similar approach by creating a community-governed[ whitelist/blacklist](https://www.immutable.com/gamechangers/immutable-expands-enforceable-royalties-to-ethereum-to-protect-1-8b-of-creator-royalties) for smart contracts that honor royalty fees, where smart contracts on a blacklist will be unable to transfer and receive NFTs from a collection that enforces royalties.

Another approach to maintain enforcement of royalties is to develop an application-specific blockchain, or appchain, that is designed from the consensus layer to the smart contract/execution layer to support the enforcement of royalties for NFT sales. 

This would likely require the creation of a new token standard and smart contract mechanism that was capable of distinguishing a transfer from a sale of the NFT. Currently there are no established projects pursuing this path. 

## In Conclusion - NFT Marketplaces

The space for NFT marketplaces is becoming more diverse and innovative. An underrated value of NFT marketplaces is that they exist on top of open and permissionless protocols. 

This means that anyone that is dissatisfied with the current model can fork the code and create their own marketplace that adopts rules such as enforcing royalties, incentivizing liquidity, curating a certain type of artwork, and more. 

As NFTs become more mainstream, we can also expect to see new approaches to the standard NFT marketplace model that caters to global media, sports and fashion brands looking to protect their intellectual property.

Ultimately, this should be a net positive for the adoption of NFTs and the growth of the industry as a whole.