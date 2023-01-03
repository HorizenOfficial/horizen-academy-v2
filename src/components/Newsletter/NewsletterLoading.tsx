import React from "react"
import { Loader } from "@site/src/components"
import styles from "./Newsletter.module.css"

const NewsletterLoading = () => {
    return (
        <div className={styles.newsletter__inner}>
            <Loader />
        </div>
    )
}

export default NewsletterLoading
