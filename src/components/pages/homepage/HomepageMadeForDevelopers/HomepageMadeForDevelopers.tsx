import React from "react"
import commonStyles from "@site/src/components/pages/homepage/common.module.css"
import { Card } from "@site/src/components/Card"
import clsx from "clsx"
import styles from "./HomepageMadeForDevelopers.module.css"

interface CardWContentProps {
    title: string
    body?: string
}

const CardWContent: React.FC<CardWContentProps> = ({ title, body }) => {
    return (
        <Card
            href="/"
            className={clsx(styles.card, body && styles["card--small"])}
            external
        >
            <div className={styles.card__content}>
                <h3 className={commonStyles.card__title}>{title}</h3>
                {body && <p className={commonStyles.card__body}>{body}</p>}
            </div>
        </Card>
    )
}

const HomepageMadeForDevelopers = () => {
    return (
        <div className={commonStyles.section}>
            <div className="container">
                <h2 className={commonStyles.section__title}>
                    Made for Developers
                </h2>
                <div className={styles["card-list"]}>
                    <CardWContent title="Test new releases" />
                    <CardWContent title="Horizen early adopet program (HEAP)" />
                    <CardWContent
                        title="Horizen Developer Environment"
                        body="Complete tasks and get rewarded."
                    />
                </div>
            </div>
        </div>
    )
}

export default HomepageMadeForDevelopers
