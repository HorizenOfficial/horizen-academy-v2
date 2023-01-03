import React from "react"
import NewsletterSuccess from "./NewsletterSuccess"
import NewsletterError from "./NewsletterError"
import NewsletterLoading from "./NewsletterLoading"
import NewsletterInitial from "./NewsletterInitial"
import useNewsletter, { NEWSLETTER_STATUS } from "./useNewsletter"

const Newsletter = () => {
    const { sendData, status } = useNewsletter()

    return (
        <div className="border-t border-b bg-horizen-blue-dark border-white pt-6 pb-9 lg:py-0">
            <div className="container center lg:h-[114px]">
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
