import React from "react"
import styles from "./Newsletter.module.css"

const NewsletterError = () => {
    return (
        <div className={styles.newsletter__inner}>
            <div className={styles.newsletter__heading}>
                Looks like something went wrong.
            </div>
            <div className={styles.newsletter__body}>
                Please try again later.
            </div>
        </div>
    )
}

export default NewsletterError
