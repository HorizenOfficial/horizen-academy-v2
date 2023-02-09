import { Card } from "@site/src/components/Card"
import React from "react"
import commonStyles from "@site/src/components/pages/homepage/common.module.css"
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
            <div className={styles.card__img} />
            <h3 className={commonStyles.card__title}>{title}</h3>
        </Card>
    )
}

const cards: CardWContentProps[] = [
    {
        title: "Zero Knowelege Proofs",
        link: "/docs/zero-knowledge-proofs-zkp",
    },
    {
        title: "The Ethereum Virtual Machine",
        link: "/docs/ethereum-virtual-machine-evm",
    },
    {
        title: "All Things Tokenomics",
        link: "/docs/tokenomics",
    },
]

const HomepageBigCardsSection = () => {
    return (
        <section className={commonStyles.section}>
            <div className="container">
                <h2 className={commonStyles.section__title}>
                    All things Horizen
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
