---

sidebar_label: Digital Signatures
title: What is a Digital Signature?
slug: /digital-signatures/
description: Digital signatures allow you to prove your knowledge of a private key corresponding to a particular address without revealing any information about it.
image: /img/digital-signatures/digital-signatures-meta.jpeg
last_update:
  date: 2/21/2023
  author: Horizen Contributor

---

# What is a Digital Signature?

**Public-Key Cryptography** is used to verify ownership on a blockchain.

**Digital signatures** allow you to prove your knowledge of a private key corresponding to a [particular address](wallets/wallet-addresses.md) without revealing any information about it.

![digital signatures](/img/digital-signatures/digital-signatures.jpg)

*To create a digital signature you need two components:* 
1. A **message**, in most cases a transaction
2. And the **private key**

A verifier will use the message, the public key, and the digital signature as an input to the verification algorithm. _This algorithm will then produce a binary output_: Either the signature is *valid*, or it is *not*. 

Every full node and miner on the network will verify every single transaction using this concept.

This mechanism is usually treated as a _blackbox_, but we will dissect the inner workings of this cryptographic method in this article.

## Scalars and Vectors

A **scalar** is something that only has a magnitude. Simply speaking, any number is a scalar. 

A **vector**, however, has a magnitude and a direction and is represented by a _tuple_ of values. 

If we are looking at a two-dimensional plane, a vector can be interpreted as an arrow with a certain *length*, *magnitude*, and the *angle* **alpha** relative to the positive **$x$**-axis, direction.

This means it is a tuple comprising two values, a _double_. In order to represent a vector in three-dimensional space, one would use a _triple_ of values. 

One value for the magnitude and two for the direction, the angle relative to **$x$**- and **$z$**-axis. Alternatively, you can use the **$x$**, **$y$**, and **$z$**- coordinates to represent a given point in three-dimensional space. 

Either way, you need three values.

- *Scalars* are written with small letters, like the private key: **$sk$**
- *Vectors* are written with capital letters, like the public key: **$PK$**

![scalars vs vectors](/img/digital-signatures/scalars-vs-vectors.jpg)

*It's important to note that the hash of a vector is a scalar.* The [hash function](cryptography/hash-functions.md) consumes the _tuple_ of values as an input, and produces a scalar as an output.

We use the **$bullet$** operator when we are referring to multiplication on the elliptic curve. We use the **$cdot\$** operator when we are referring to regular multiplication of scalars. 

We added this little discourse because it should help you to keep track of what values are points on the curve, vectors, and what values are scalars.

**To recap our previous articles:**

- Your secret or _private key_ **$sk$** is a large random number
- If you multiply the base point **$P$** used for the elliptic curve, **secp256k1**, with a private key, you get a *public key* _PK_
- You want to prove knowledge of **$sk$** to the network without revealing it

![proving private key](/img/digital-signatures/proving-private-key.jpg)

## How to Create a Digital Signature?

1. Generating a digital signature in an **elliptic curve cryptography** (ECC) scheme is based on the distributive property for point addition.

$$
n \bullet P + r \bullet P = (n + r) \bullet P
$$

2. We get the equation below by multiplying with **$text{hash} (m, r \bullet P)\\)** on both sides and factoring out the base point **$P$** on the right side of the equation. This equation holds for _any_ **$m$**, **$r$** and **$n$**.

$$
\text{hash} (m, r \bullet P) \bullet n \bullet P + r \bullet P = (\text{hash}(m, r \bullet P) \cdot n+r) \bullet P
$$

3. We learned that your *private key* multiplied with the *base point* yields your *public key*.

$$
sk \bullet P = PK
$$

4. We replace the universal variable **$n$** with our private key **$sk$**, and use **$PK$** to simplify the expression **$sk \bullet P\$**. 

Let's do this in two steps, first replacing _**n**_:

$$
\text{hash} (m, r \bullet P) \bullet {\color{red} sk} \bullet P + r \bullet P = (\text{hash}(m, r \bullet P) \cdot {\color{red} sk}+r) \bullet P
$$

and next simplifying **$sk \bullet P\$** to _**PK**_:

$$
\text{hash} (m, r \bullet P) \bullet {\color{red} PK} + r \bullet P = (\text{hash}(m, r \bullet P) \cdot sk+r) \bullet P
$$

5. Now, we will replace **$r \bullet P\$** with **$R$**. This follows the convention that the scalar **$r$** multiplied with the base point **$P$** gives us a point on the curve, the *vector* **$R$**.

$$
\text{hash} (m, {\color{red} R}) \bullet (PK + {\color{red} R}) = \text{hash}(m, {\color{red} R}) \cdot (sk+r) \bullet P
$$

6. We define _s_ as..

$$
s = \text{hash}(m,R) \cdot (sk + r)
$$

..and replace it accordingly. It should be clear that only a person in possession of the private key **$sk$** can compute **$s$**.

$$
\text{hash}(m, R) \bullet (PK + R) = {\color{red} s} \bullet P
$$

_This is the equation we will be working with from here to prove the following claim:_

_If you can provide an **R** and **s**_ together with a message **$m$** that satisfy the equation

$$
\text{hash}(m, R) \bullet (PK + R) = s \bullet P
$$

_This proves you know the private key sk_ that corresponds to the public key **$PK$**.

_Two conditions must be met in order for this to be the case:_

- If you _know_ **$sk$**, then you must be able to provide working values for **$m$**, **$R$**, and **$s$**
- If you _don't know_ **$sk$**, then you must not be able to provide working values for **$m$**, **$R$**, and **$s$**.

### Being Able to Provide a Valid Signature With the Private Key

_Let's assume you know **sk**._

1. First, you choose random value for **$r$** and a message **$m$** to sign. 
2. Next, you compute **$R = r \bullet P\$**. 
3. Lastly, you compute **$s = \text{hash}(m,R) \cdot (sk + r)\$**.

_If you plug these values into the equation.._

$$
\text{hash}(m, R) \bullet (PK + R) = s \bullet P
$$

...from above, you get...

$$
\text{hash} (m, r \bullet P) \bullet sk \bullet P + r \bullet P = (\text{hash}(m, r \bullet P) \cdot sk+r) \bullet P
$$

...which we said earlier holds for any **$m$**, **$r$**, and **$sk$**, formerly **$n$**. 

*This satisfies the first condition we need to prove our claim.*

### Not Being Able to Provide a Signature Without the Private Key

_Now we need to prove the second condition is met as well_: If you don't know **$sk$**, then you must not be able to provide working values for **$m$**, **$R$**, and **$s$**. 

In order to provide these working values you would have to solve the equation below:

$$
\text{hash}(m, R) \bullet (PK + R) = s \bullet P
$$

To do so, you would need to break the preimage resistance property, one-wayness, of the hash function. This means that you would have to find inputs to the hash function, specifically an **$m$** and **$R$**, that produce a certain output.

Because blockchains use strong _preimage-resistant cryptographic hash functions, this proves our second claim._

_You cannot provide working values for **m**, **R**, and **s** if you don't know **sk**._

### Not Revealing Information About the Private Key

Now we only need to make sure a potential adversary doesn't learn anything about **$sk$** from publishing **$s$**. The message **$m$** and the point **$R$** are entirely independent of **$sk$**. 

Only **$s$** could potentially reveal anything useful about **$sk$**...

$$
s = \text{hash}(m,R) \cdot (sk + r)
$$

...but in order to derive **$sk$** from **$s$** one would have to solve for:

$$
sk = \frac{s}{\text{hash}(m,R)} - r
$$

An adversary doesn't know **$r$** and cannot derive it from **$R$** - _discrete log problem_ - as it would be the same as deriving **$sk$** from **$PK$**. 

Without knowledge of **$r$** you cannot compute **$sk$** from **$s$**.

#### Quick Recap - Creating a Digital Signature

- **First**, we used the distributive property to build an equality.
- We multiplied both sides with with **$text{hash} (m, r \bullet P)\$**.
- We replaced the variable **$n$** with our private key **$sk$** and the expression **$sk \bullet P\$** which represents the product of our private key **$sk$** with the base point **$P$** with the public key **$PK$**.
- We defined **$R$** to be the product **$r \bullet P\$**.
- We defined **$s$** as the term **$text{hash}(m,R) \cdot (sk + r)\$**.
- We showed that if you can provide an **$m$**, **$R$**, and **$s$** that satisfy the resulting equation, it proves knowledge of the private key **$sk$** corresponding to the public key **$PK$**.
- We also proved that without knowledge of **$sk$**, you cannot provide working values for **$m$**, **$R$**, and **$s$**.
- **Lastly**, we showed that you can reveal **$m$**, **$R$**, and **$s$** without revealing any information about the private key **$sk$**.

## Verifying a Digital Signature

All [full nodes and mining nodes](architecture/blockchain-nodes.md) verify every transaction before forwarding it or including it in a block. 

They verify a transaction, or message **$m$**, based on the originating public key **$PK$** and the signature, which is composed of **$s$** and **$R$**. 

As we showed above, only by knowing **$sk$** one can produce a valid signature. Verification of the signature includes plugging those three variables into the equation below and checking if it holds.

$$
\text{hash} (m,R) \bullet (PK + R) = s \bullet P
$$

In the context of cryptocurrencies, signatures are used to prove that you own a *UTXO-set* and that you are entitled to spend it. One spends a **UTXO** by creating a transaction and using it as an input to create one or more new outputs. 

Each input spent needs to be signed.

## What Does a  Digital Signature Look Like?

A transaction typically informs the network about a transfer of money or data. The message **$m$** is to be signed, with **$s$** and **$R$** comprising the signature of that message.

Because **$s$** depends on the message **$m$**, the verification process is only successful if two conditions are met: 
1. The _sender_ of the message knows the private key **$sk$** used to generate the [UTXO](architecture/utxo-vs-account-model.md)'s address 
2. And the signature (**$R$**, **$s$**) was created for that specific transaction **$m$**.

*With cryptocurrencies, the message **m** is the unsigned part of a transaction.*

The digital signature of that transaction consists of the **$x$**-coordinate of **$R$** and the sign of its **$y$**-value. 

This **$x$**-coordinate is concatenated with **$s$**, a **256-bit** integer, after they have been converted to hexadecimal format.

Each transaction output has a _locking script_. It is called _scriptPubKey_ and requires certain conditions to be met in order for the recipient to spend it.

## Summary - Digital Signatures

To summarize, [public key cryptography (PKC)](cryptography/public-key-cryptography-pkc.md) is used to verify ownership. It's basic building blocks are private keys, public keys, and digital signatures. 

This methodology is also used in encryption schemes such as TLS, PGP or SSH.

While there are many different PKC schemes, blockchains use [elliptic curve cryptography (ECC)](cryptography/elliptic-curve-cryptography-ecc.md). 

Cryptography mostly relies on one-way functions. The first one-way function we introduced was the hash function. ECC and its underlying _discrete log problem_ pose a second one-way function.

We showed that multiplication on the curve, even with large numbers, is easy and computationally inexpensive. We also showed that division is computationally infeasible.

Next, we showed how an address is derived from a private key with the two most important steps being multiplication of the private key **$sk$** with a base point **$P$** to get the public key **$PK$** and then hashing **$PK$** to get an address. 

Because both multiplication and hashing are one-way functions, it is not possible to reverse this process.

We constructed the equation used to create and verify digital signatures and proved that only someone with knowledge of **$sk$** can produce a valid signature _(**R**,**s**)_ for a given message **m**. 

We also showed that you cannot compute the private key **$sk$** from the information contained in **$s$**.
