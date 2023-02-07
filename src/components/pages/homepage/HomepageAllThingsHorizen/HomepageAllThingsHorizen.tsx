import { Card } from "@site/src/components/Card"
import React from "react"
import commonStyles from "@site/src/components/pages/homepage/common.module.css"
import styles from "./HomepageAllThingsHorizen.module.css"

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

const HomepageAllThingsHorizen = () => {
    return (
        <section className={commonStyles.section}>
            <div className="container">
                <h2 className={commonStyles.section__title}>
                    All things Horizen
                </h2>
                <div className={styles["card-list"]}>
                    <CardWContent title="Zendoo - The most powerful cross-chain protocol" />
                    <CardWContent title="DAO - Decentralized Autonomous Organization" />
                    <CardWContent title="Launching Tokens on Horizen" />
                </div>
            </div>
        </section>
    )
}

export default HomepageAllThingsHorizen
