import React from "react"
import commonStyles from "@site/src/components/pages/homepage/common.module.css"
import { Card } from "@site/src/components/Card"
import styles from "./HomepagePopularTopics.module.css"

const CardWContent = () => {
    return (
        <Card href="/">
            <div className={styles.card__content}>
                <div className={styles.card__img} />
                <h3 className={commonStyles.card__title}>
                    How does the blockchain work?
                </h3>
            </div>
        </Card>
    )
}

const HomepagePopularTopics = () => {
    return (
        <div className={commonStyles.section}>
            <div className="container">
                <h2 className={commonStyles.section__title}>Popular Topics</h2>
                <div className={styles["card-list"]}>
                    <CardWContent />
                    <CardWContent />
                    <CardWContent />
                </div>
            </div>
        </div>
    )
}

export default HomepagePopularTopics
