import React from "react"
import { IFooterConfig } from "./types"
import styles from "./FooterCopyright.module.css"

interface FooterCopyrightProps {
    data: IFooterConfig["copyright"]
}

const FooterCopyright: React.FC<FooterCopyrightProps> = ({ data }) => {
    return (
        <div className={styles.footer_copyright}>
            <span>{data.text}</span>
            <span className={styles.footer_copyright__links}>
                <a href={data.legal.url} className="text-links">
                    {data.legal.title}
                </a>
                |
                <a href={data.privacyPolicy.url} className="text-links">
                    {data.privacyPolicy.title}
                </a>
            </span>
        </div>
    )
}

export default FooterCopyright
