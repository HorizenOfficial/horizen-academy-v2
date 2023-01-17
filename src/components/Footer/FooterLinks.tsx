import React from "react"
import RegularLinks from "./Links/RegularLinks"
import SocialLinks from "./Links/SocialLinks"
import { IFooterConfig } from "./types"
import styles from "./FooterLinks.module.css"

interface FooterLinksProps {
    data: IFooterConfig["links"]
}

const FooterLinks: React.FC<FooterLinksProps> = ({ data }) => {
    return (
        <div className={styles.footer_links}>
            {data.regular.map((item, index) => (
                <RegularLinks key={`footer-links-${index}`} data={item} />
            ))}

            <div className={styles.footer_links__social}>
                <SocialLinks data={data.social} />
            </div>
        </div>
    )
}

export default FooterLinks
