---

sidebar_label: Public-Key Cryptography
title: What is Public-Key Cryptography? - PKC
slug: /public-key-cryptography-pkc/
description: Public-Key Cryptography makes it possible to represent identity on the blockchain. It is the second cornerstone of blockchain technology besides hash functions
image: https://www.horizen.io/academy/img/public-key-cryptography-pkc/public-key-cryptography-pkc-meta.jpeg
last_update:
  date: 2/21/2023
  author: Horizen Contributor

---

# What is Public-Key Cryptography? - PKC

Since the goal of the original blockchain design was to enable a new and fair form of money, it would be great to be able to actually own money in this system, wouldn’t it? There must be a concept of identity to have ownership on the blockchain - you cannot have ownership if there is no representation of the owner.

_Public-Key Cryptography_ makes it possible to represent identity on the blockchain. It is the second cornerstone of blockchain technology besides [hash functions](cryptography/hash-functions.md). 

While hash functions are used to verify the authenticity and integrity of data, **public-key cryptography** is used to verify ownership on the blockchain.

![pkc and hash functions](/img/public-key-cryptography-pkc/pkc-and-hash-functions.jpg)

_Let’s take a step back and start from the beginning._

## What is Public-Key Cryptography?

**The basis of public-key cryptography is:** 

- Private keys
- Public keys
- [Addresses](wallets/wallet-addresses.md)
- and Digital Signatures

When you own some cryptocurrency, the blockchain contains a record that there are some coins associated with your **public key**. 

- You must provide a **digital signature** to authorize the spending of those coins. 
- You can only provide this [digital signature](cryptography/digital-signatures.md) if you are in the possession of the **private key** that corresponds to the public key.

**Public-key cryptography**, also known as asymmetric cryptography, to verify ownership. Every user creates two keys when he joins the network, a public, and a private key.

The **public key** is like an address, in that you give it to anyone who wants to send you money. If a friend wants to send you some [cryptocurrency](cryptocurrency/cryptocurrency.md), you will give them your public key.

The **private key** is like a password, in that it can access your money and spend it, similar to how someone with your email password can't log into your account and send emails in your name.

*It is important to protect your private keys. If someone gets their hands on your private keys, they can steal your money.*

### Elliptic Curve Cryptography

To understand how your keys and addresses work together, we must introduce **Elliptic Curve Cryptography** (_ECC_) first. 

There are different ways to build a public-key cryptography scheme. [Bitcoin](cryptocurrency/bitcoin-glossary.md) and most other cryptocurrencies use [Elliptic Curve Cryptography](cryptography/elliptic-curve-cryptography-ecc.md) (ECC).

_Bitcoin, [Ethereum](cryptocurrency/ethereum-glossary.md) and many other currencies_ use a curve called **secp256k1** and it looks like the one above. The equation for this curve is **y^2 = x^3 + 7**. 

What make elliptic curves useful is that you can do math with them, and the math you do on the curves has some special properties.

![secp256k1](/img/public-key-cryptography-pkc/secp256k1.jpg)

The graph above shows an example of adding two points on the curve together. 

When we want to add points **P** and **Q** together, we first connect them with a straight line. This straight line will intersect with the curve at a third point. 

Now we must project the third point onto the other side of the **x-axis** (_multiply the y-coordinate by -1_) and we get the sum of point **P and Q: R**. The key takeaway is that the sum of two points on the curve is a third point on the curve and it is easy to compute.

![adding on ecc step 1](/img/public-key-cryptography-pkc/adding-on-ecc-step-1.jpg)

When we want to multiply a point on the curve we must add it to itself. 

To multiply point **P** by two we add it to itself once. In this case, we can't really connect two points, so we go for the tangent line, the one with the arrows.

![adding on ecc step 2](/img/public-key-cryptography-pkc/adding-on-ecc-step-2.jpg)

Why the tangent line? 

- If you look at a random point close to **P** (the lightest gray), connecting the two points will result in the lightest gray line. 
- Moving this point closer and closer towards **P** (from light to dark) brings the connecting line closer to the tangent line.
- The closer two points on the curve get, the closer their connecting line resembles the tangent until they become the same.

![adding on ecc step 3](/img/public-key-cryptography-pkc/adding-on-ecc-step-3.jpg)

Now the addition to itself is easy. We take the intersection of the tangent line with the curve once again and project it onto the other side of the **x-axis** - easy.

If we want to multiply **P** by **3**, we need to add **P** and **point** (_P + P_) together. To multiply **P** by four we can add point (_P + P_) to itself and so on.

![adding on ecc step 4](/img/public-key-cryptography-pkc/adding-on-ecc-step-4.jpg)

The key takeaway is that multiplying a point is an easy task - it is just adding points to themselves. The interesting part is that division on the curve is a _computationally_ hard problem. 

There is just no algorithm to calculate how many times **P** was added to itself or in terms of multiplication by what number it was multiplied in order to get to a certain point. This is already enough to understand the basic concept of public-key cryptography based on elliptic curves.

### Private Key

When you set up a wallet, the first step is generating your private key. Your private key is a very large random number, _256 bit long_. This number is so large you could assign almost every atom in the observable universe a unique private key. 

Your private key should be as random as possible. Creating random numbers is harder than it might sound, but this step is crucial to the safety of your funds.

### Public Key

Next, your public key is derived from the large, random number you have generated as your private key. This is where we need to multiply points on the curve. As we said earlier, adding points together on an elliptic curve is straightforward. Bitcoin uses a base point on the curve for every key pair.

**Its coordinates are:**

$$
x = 55066263022277343669578718895168534326250603453777594175500187360389116729240
$$

and

$$
y = 32670510020758816978083085130507043184471273380659243275938904335757337482424
$$

This base point is now added to itself as many times as your private key dictates. If your private key was the number **“3”**, then you would perform the calculation we just demonstrated above. If you add the base point to itself as often as your private key says (_private key_ \* P) you get your public key.

![public key private key](/img/public-key-cryptography-pkc/public-key-private-key.jpg)

**To recap:** 

Your private key is a large random number. Your public key is a point on the elliptic curve that you get when you multiply the base point **P** with your private key.

A property that is necessary for any public-key cryptographic scheme, is that it is computationally infeasible to derive the private key from the public key. It is easy to calculate the public key, a point on the curve, by multiplying the base point **P** with a large random number (your private key). 

But if an adversary knows the base point **P** and your public key, he cannot divide them and say how many times **P** was added to itself to get your public key.

At this point, your public key is pretty large, _512 bit_, and it is easy to compress it to half the size. The elliptic curve is symmetric about the _x-axis_. There are only two possible _y-values_ for every _x-value_ that only differ in their sign (being positive or negative). 

If you leave out the _y-coordinate_ and add the information of the point having a positive or negative value for **y**, the public key becomes half the size but carries the same information.

### Address

Lastly, to get your address, your public key is hashed. First, using the _SHA-256_ hash function and a second time using _RIPEMD 160_. After adding a byte to state if this address will go to the main or test net and calculating a checksum, there is a final step before you get your address.

![hashing keys](/img/public-key-cryptography-pkc/hashing-keys.jpg)

When we look at how a computer is working at the hardware level it is _zeros and ones_. Data is always stored in a binary format no matter what type of data you’re looking at, whether images, sound files, and even your Bitcoin address. 

There are different ways to convert a string of bits into data that humans can digest. Humans do best with a string of numbers or alphanumeric characters.

**Base58Check** is a way to convert bits into alphanumeric characters, but it excludes the four characters **_0, O, I, and l_**. Base58Check removes these characters from your address to reduce errors when copying addresses manually and proofreading them.

:::info Cobalt Web Wallet
[**Cobalt**](https://www.horizen.io/wallets/cobalt/) is a secure and easy-to-use web extension wallet for the Horizen cross-chain ecosystem. Trustworthy, reliable and built to easily manage your assets.
:::

You can generate as many addresses as you like from a single private key, and [wallets](wallets/crypto-wallets.md) do this for you automatically. It is a feature to enhance [your privacy](privacy/digital-privacy.md), as it makes it harder for a third party to link all your payments together.

### Digital Signature

You might hear that your keys are used to encrypt and decrypt messages. 

This is true, but it is not why we use public-key cryptography on the blockchain. The information contained within transactions is not encrypted in any way. It is available to anyone on the blockchain, which makes the system so transparent.

What your private key is actually necessary for on the blockchain is signing transactions. You can only spend funds you received in a transaction if you provide a digital signature that proves your knowledge of the private key corresponding to the address used to receive the funds.

## Summary - Public-Key Cryptography

When you set up a wallet, the software will first generate a large random number that is your _private key_. 

The base point **P** on the _elliptic curve_ is multiplied with your private key to get your _public key_, another point on the curve. 

Your public key is then hashed and the characters **I, l, 0 and O** are removed to improve readability. To spend your money you need to provide a digital signature that proves your knowledge of the private key that belongs to your address.
