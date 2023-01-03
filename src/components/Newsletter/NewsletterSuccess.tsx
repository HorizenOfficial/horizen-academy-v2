import React from "react"
import styles from "./Newsletter.module.css"

const NewsletterSuccess = () => {
    return (
        <div className={styles.newsletter__inner}>
            <div className={styles.newsletter__heading}>
                Thank you for subscribing to our newest updates!
            </div>
            <div className={styles.newsletter__body}>
                You will hear from us soon.
            </div>
        </div>
    )
}

export default NewsletterSuccess
