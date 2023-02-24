import { Card } from "@site/src/components/Card"
import React from "react"
import commonStyles from "@site/src/components/pages/homepage/common.module.css"
import useBaseUrl from "@docusaurus/useBaseUrl"
import styles from "./HomepageBigCardsSection.module.css"

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
        title: "Zero-Knowledge Proofs",
        link: "/zero-knowledge-proofs-zkp/",
        image: "/assets/pages/homepage/article-logo-zkp.svg",
        imageAlt: "Zero Knowelege Proofs icon",
    },
    {
        title: "Ethereum Virtual Machine",
        link: "/ethereum-virtual-machine-evm/",
        image: "/assets/pages/homepage/article-logo-evm.svg",
        imageAlt: "Ethereum Virtual Machine icon",
    },
    {
        title: "Tokenomics 101",
        link: "/tokenomics/",
        image: "/assets/pages/homepage/article-logo-token.svg",
        imageAlt: "All Things Tokenomics icon",
    },
]

const HomepageBigCardsSection = () => {
    return (
        <section className={commonStyles.section}>
            <div className="container">
                <h2 className={commonStyles.section__title}>
                    Trending Topics on Horizen Academy
                </h2>
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

export default HomepageBigCardsSection
