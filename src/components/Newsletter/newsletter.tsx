import React from "react"
import clsx from "clsx"
import NewsletterSuccess from "./newsletter-success"
import NewsletterError from "./newsletter-error"
import NewsletterLoading from "./newsletter-loading"
import { NewsletterInitial } from "./newsletter-initial"
import useNewsletter, { NEWSLETTER_STATUS } from "./useNewsletter"
import styles from "./newsletter.styles.module.css"

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
