import React from "react"
import commonStyles from "@site/src/components/pages/homepage/common.module.css"
import { Card } from "@site/src/components/Card"
import { Button } from "@site/src/components/Button"
import styles from "./HomepageSmallCardsSection.module.css"

interface CardWContentProps {
    title: string
    link: string
    image?: string
    imageAlt?: string
}

const CardWContent: React.FC<CardWContentProps> = ({
    title,
    link,
    image,
    imageAlt,
}) => {
    return (
        <Card href={link} className={styles.card}>
            <div className={styles.card__img} />
            <h3 className={commonStyles.card__title}>{title}</h3>
        </Card>
    )
}

const cards: CardWContentProps[] = [
    {
        title: "What is an AMM?",
        link: "/docs/automated-market-maker-amm",
    },
    {
        title: "Play-to-Earn Games",
        link: "/docs/play-to-earn-games",
    },
    {
        title: "Crypto Lending",
        link: "/docs/crypto-lending",
    },
    {
        title: "Bitcoin: A Glossary",
        link: "/docs/bitcoin-glossary",
    },
    {
        title: "Modular vs Monolithic Blockchains",
        link: "/docs/modular-vs-monolithic-blockchains",
    },
    {
        title: "Decentralized Prediction Markets",
        link: "/docs/decentralized-prediction-markets",
    },
]

const HomepageSmallCardsSection = () => {
    return (
        <section className={commonStyles.section}>
            <div className="container">
                <h2 className={commonStyles.section__title}>Popular Topics</h2>
                <div className={styles["card-list"]}>
                    {cards.map((card) => (
                        <CardWContent
                            key={card.title}
                            title={card.title}
                            link={card.link}
                            image={card.image}
                            imageAlt={card.imageAlt}
                        />
                    ))}
                </div>
                <Button
                    href="/docs/ethereum-virtual-machine-evm"
                    className={styles.btn}
                >
                    Explore More Topics
                </Button>
            </div>
        </section>
    )
}

export default HomepageSmallCardsSection
