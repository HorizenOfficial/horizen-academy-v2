import React from "react"
import FooterCopyright from "./FooterCopyright"
import FooterLinksLayout from "./FooterLinksLayout"
import FooterLogo from "./FooterLogo"
import FooterSocialLinks from "./FooterSocialLinks"
import { IFooterConfig } from "./types"

interface FooterLayoutProps {
    data: IFooterConfig
}

const FooterLayout: React.FC<FooterLayoutProps> = ({ data }) => {
    return (
        <footer className="bg-horizen-blue-dark">
            <div className="container pb-12 pt-14">
                <div className="flex flex-col xl:flex-row">
                    <div className="grid place-items-center order-2 mt-16 xl:pt-0 xl:place-items-start xl:mr-20 xl:-mt-3 xl:order-1">
                        <FooterLogo data={data.logo} />
                    </div>
                    <div className="order-1 xl:order-2 grow">
                        <FooterLinksLayout
                            data={data.links}
                            social={data.socialLinks}
                        />
                    </div>
                </div>
                <div className="xl:mt-24">
                    <FooterCopyright data={data.copyright} />
                </div>
            </div>
        </footer>
    )
}

export default FooterLayout
