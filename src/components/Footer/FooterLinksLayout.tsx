/* eslint-disable react/no-array-index-key */
import React from "react"
import FooterLinks from "./FooterLinks"
import FooterSocialLinks from "./FooterSocialLinks"
import { IFooterConfig } from "./types"

interface FooterLinksLayoutProps {
    data: IFooterConfig["links"]
    social: IFooterConfig["socialLinks"]
}

const FooterLinksLayout: React.FC<FooterLinksLayoutProps> = ({
    data,
    social,
}) => {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8 xl:gap-x-24 xl:flex">
            {data.map((item, index) => (
                <FooterLinks key={`footer-links-${index}`} data={item} />
            ))}

            <div className="max-w-[280px] w-full mx-auto sm:mx-0 xl:ml-auto">
                <FooterSocialLinks data={social} />
            </div>
        </div>
    )
}

export default FooterLinksLayout
