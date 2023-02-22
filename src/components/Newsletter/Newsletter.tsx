import React from "react"
import clsx from "clsx"
import NewsletterSuccess from "./NewsletterSuccess"
import NewsletterError from "./NewsletterError"
import NewsletterLoading from "./NewsletterLoading"
import NewsletterInitial from "./NewsletterInitial"
import useNewsletter, { NEWSLETTER_STATUS } from "./Newsletter.hooks"
import styles from "./Newsletter.module.css"

const Newsletter = () => {
    const { sendData, status } = useNewsletter()

    return (
        <div className={styles.newsletter}>
            <div className={clsx("container", styles.newsletter__container)}>
                {status === NEWSLETTER_STATUS.INITIAL && (
                    <NewsletterInitial onSubmit={sendData} />
                )}

                {status === NEWSLETTER_STATUS.LOADING && <NewsletterLoading />}

                {status === NEWSLETTER_STATUS.SUCCESS && <NewsletterSuccess />}

                {status === NEWSLETTER_STATUS.ERROR && <NewsletterError />}
            </div>
        </div>
    )
}

export default Newsletter
