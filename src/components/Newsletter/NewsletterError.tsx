import React from "react"

const NewsletterError = () => {
    return (
        <div className="flex-grow text-center">
            <div className="text-white font-bold text-2xl">
                Looks like something went wrong.
            </div>
            <div className="text-lg text-horizen-grey">
                Please try again later.
            </div>
        </div>
    )
}

export default NewsletterError
