import React from "react"
import { ISocialGroup } from "./types"
import styles from "./SocialLinks.module.css"

interface SocialLinksProps {
    data: ISocialGroup
}

const SocialLinks: React.FC<SocialLinksProps> = ({ data }) => {
    return (
        <div>
            <div className={styles.social_links__title}>{data.title}</div>
            <ul className={styles.social_links__links}>
                {data.items.map((item, index) => (
                    <li key={`footer-social-link-${index}`}>
                        <a
                            href={item.url}
                            target={item.openNewTab ? "_blank" : ""}
                            rel="noopener noreferrer"
                            className={styles.social_links__link}
                        >
                            <img src={item.imageUrl} alt={item.title} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialLinks
