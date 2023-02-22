import React from "react"
import commonStyles from "@site/src/components/pages/homepage/common.module.css"
import { Card } from "@site/src/components/Card"
import clsx from "clsx"
import styles from "./HomepageMixedSizeCardsSection.module.css"

interface CardWContentProps {
    title: string
    body?: string
    link: string
}

const CardWContent: React.FC<CardWContentProps> = ({ title, body, link }) => {
    return (
        <Card
            href={link}
            className={clsx(styles.card, body && styles["card--small"])}
            external
        >
            <h3 className={commonStyles.card__title}>{title}</h3>
            {body && <p className={commonStyles.card__body}>{body}</p>}
        </Card>
    )
}

const cards: CardWContentProps[] = [
    {
        title: "The World of Web3",
        link: "web3",
    },
    {
        title: "What is a Token?",
        link: "what-is-a-token",
    },
    {
        title: "How Does Blockchain Work?",
        body: "Covering the Basics",
        link: "how-does-blockchain-work",
    },
]

const HomepageMixedSizeCardsSection = () => {
    return (
        <section className={commonStyles.section}>
            <div className="container">
                <h2 className={commonStyles.section__title}>
                    Essentials of Blockchain & Web3
                </h2>
                <div className={styles["card-list"]}>
                    {cards.map((card) => (
                        <CardWContent key={card.title} {...card} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HomepageMixedSizeCardsSection
