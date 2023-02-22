import React from "react"
import commonStyles from "@site/src/components/pages/homepage/common.module.css"
import { Card } from "@site/src/components/Card"
import useBaseUrl from "@docusaurus/useBaseUrl"
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
            <img
                src={useBaseUrl(image)}
                alt={imageAlt}
                className={styles.card__img}
            />
            <h3 className={commonStyles.card__title}>{title}</h3>
        </Card>
    )
}

const cards: CardWContentProps[] = [
    {
        title: "What is an AMM?",
        link: "/docs/automated-market-maker-amm",
        image: "/assets/pages/homepage/small-article-icon-1.svg",
        imageAlt: "popular article icon",
    },
    {
        title: "Play-to-Earn Games",
        link: "/docs/play-to-earn-games",
        image: "/assets/pages/homepage/small-article-icon-2.svg",
        imageAlt: "popular article icon",
    },
    {
        title: "Crypto Lending",
        link: "/docs/crypto-lending",
        image: "/assets/pages/homepage/small-article-icon-3.svg",
        imageAlt: "popular article icon",
    },
    {
        title: "Bitcoin: A Glossary",
        link: "/docs/bitcoin-glossary",
        image: "/assets/pages/homepage/small-article-icon-4.svg",
        imageAlt: "popular article icon",
    },
    {
        title: "Modular vs Monolithic Blockchains",
        link: "/docs/modular-vs-monolithic-blockchains",
        image: "/assets/pages/homepage/small-article-icon-5.svg",
        imageAlt: "popular article icon",
    },
    {
        title: "Decentralized Prediction Markets",
        link: "/docs/decentralized-prediction-markets",
        image: "/assets/pages/homepage/small-article-icon-6.svg",
        imageAlt: "popular article icon",
    },
]

const HomepageSmallCardsSection = () => {
    return (
        <section className={commonStyles.section}>
            <div className="container">
                <h2 className={commonStyles.section__title}>Recently Published Articles</h2>
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
            </div>
        </section>
    )
}

export default HomepageSmallCardsSection
