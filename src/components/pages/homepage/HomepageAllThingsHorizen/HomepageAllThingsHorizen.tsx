import { Card } from "@site/src/components/Card"
import React from "react"
import commonStyles from "@site/src/components/pages/homepage/common.module.css"
import styles from "./HomepageAllThingsHorizen.module.css"

const CardWContent = () => {
    return (
        <Card href="/">
            <div className={styles.card__content}>
                <div className={styles.card__img} />
                <h3 className={commonStyles.card__title}>
                    Zendoo - The most powerful cross-chain protocol
                </h3>
            </div>
        </Card>
    )
}

const HomepageAllThingsHorizen = () => {
    return (
        <div className={commonStyles.section}>
            <div className="container">
                <h2 className={commonStyles.section__title}>
                    All things Horizen
                </h2>
                <div className={styles["card-list"]}>
                    <CardWContent />
                    <CardWContent />
                    <CardWContent />
                </div>
            </div>
        </div>
    )
}

export default HomepageAllThingsHorizen
