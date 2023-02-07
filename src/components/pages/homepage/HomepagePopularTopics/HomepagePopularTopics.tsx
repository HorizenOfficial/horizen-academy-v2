import React from "react"
import commonStyles from "@site/src/components/pages/homepage/common.module.css"
import { Card } from "@site/src/components/Card"
import styles from "./HomepagePopularTopics.module.css"

interface CardWContentProps {
    title: string
    image?: string
    imageAlt?: string
}

const CardWContent: React.FC<CardWContentProps> = ({
    title,
    image,
    imageAlt,
}) => {
    return (
        <Card href="/" className={styles.card}>
            <div className={styles.card__img} />
            <h3 className={commonStyles.card__title}>{title}</h3>
        </Card>
    )
}

const HomepagePopularTopics = () => {
    return (
        <div className={commonStyles.section}>
            <div className="container">
                <h2 className={commonStyles.section__title}>Popular Topics</h2>
                <div className={styles["card-list"]}>
                    <CardWContent title="How does the blockchain work?" />
                    <CardWContent title="EMV - Ethereum Virtual Machine" />
                    <CardWContent title="Zero Knowledge Proofs" />
                </div>
            </div>
        </div>
    )
}

export default HomepagePopularTopics
