/* eslint-disable react/no-array-index-key */
import React from "react"
import FooterLinks from "./FooterLinks"
import { IFooterConfig } from "./types"

interface FooterLinksLayoutProps {
    data: IFooterConfig["links"]
}

const FooterLinksLayout: React.FC<FooterLinksLayoutProps> = ({ data }) => {
    return (
        <div className="grid grid-cols-2 gap-x-10 sm:flex md:space-x-2 lg:space-x-12">
            {data.map((item, index) => (
                <FooterLinks key={`footer-links-${index}`} data={item} />
            ))}
        </div>
    )
}

export default FooterLinksLayout
