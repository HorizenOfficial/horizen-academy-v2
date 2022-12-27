import React from "react"
import config from "./config"
import FooterCopyright from "./FooterCopyright"
import FooterLinksLayout from "./FooterLinksLayout"
import FooterLogo from "./FooterLogo"
import FooterSocialLinks from "./FooterSocialLinks"

const FooterLayout = () => {
    return (
        <footer className="bg-horizen-blue-dark">
            <div className="container">
                <div className="pb-12 pt-14">
                    <div className="sm:flex sm:justify-between">
                        <div className="flex">
                            <div className="mr-20 -mt-3 hidden sm:block">
                                <FooterLogo data={config.logo} />
                            </div>
                            <FooterLinksLayout data={config.links} />
                        </div>
                        <div className="hidden lg:block mt-0 w-[246px]">
                            <FooterSocialLinks data={config.socialLinks} />
                        </div>
                    </div>
                    <div className="lg:hidden my-10 md:flex md:justify-end">
                        <div>
                            <FooterSocialLinks data={config.socialLinks} />
                        </div>
                    </div>
                    <div className="sm:hidden flex justify-center">
                        <FooterLogo data={config.logo} />
                    </div>
                    <FooterCopyright data={config.copyright} />
                </div>
            </div>
        </footer>
    )
}

export default FooterLayout
