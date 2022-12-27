import React from "react"
import config from "./config"
import FooterCopyright from "./FooterCopyright"
import FooterLinksLayout from "./FooterLinksLayout"
import FooterLogo from "./FooterLogo"

const FooterLayout = () => {
    return (
        <footer className="bg-horizen-blue-dark">
            <div className="container pb-12 pt-14">
                <div className="flex flex-col xl:flex-row">
                    <div className="grid place-items-center order-2 mt-16 xl:pt-0 xl:place-items-start xl:mr-20 xl:-mt-3 xl:order-1">
                        <FooterLogo data={config.logo} />
                    </div>
                    <div className="order-1 xl:order-2 grow">
                        <FooterLinksLayout
                            data={config.links}
                            social={config.socialLinks}
                        />
                    </div>
                </div>
                <div className="xl:mt-24">
                    <FooterCopyright data={config.copyright} />
                </div>
            </div>
        </footer>
    )
}

export default FooterLayout
