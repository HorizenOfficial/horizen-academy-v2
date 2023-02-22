import React from "react"
import { IFooterConfig } from "./types"
import styles from "./FooterLogo.module.css"

interface FooterLogoProps {
    data: IFooterConfig["logo"]
}

const FooterLogo: React.FC<FooterLogoProps> = ({ data }) => {
    return (
        <a href={data.url} className={styles.footer_logo}>
            <img src={data.imageUrl} alt={data.title} />
        </a>
    )
}

export default FooterLogo
