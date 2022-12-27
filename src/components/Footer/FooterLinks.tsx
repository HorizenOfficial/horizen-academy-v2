import React from "react"
import RegularLinks from "./Links/RegularLinks"
import SocialLinks from "./Links/SocialLinks"
import { IFooterConfig } from "./types"

interface FooterLinksProps {
    data: IFooterConfig["links"]
}

const FooterLinks: React.FC<FooterLinksProps> = ({ data }) => {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8 xl:gap-x-24 xl:flex">
            {data.regular.map((item, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <RegularLinks key={`footer-links-${index}`} data={item} />
            ))}

            <div className="max-w-[280px] w-full mx-auto sm:mx-0 xl:ml-auto">
                <SocialLinks data={data.social} />
            </div>
        </div>
    )
}

export default FooterLinks
