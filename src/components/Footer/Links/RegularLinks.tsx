import React from "react"
import { IRegularGroup } from "./types"
import styles from "./RegularLinks.module.css"

interface RegularLinksProps {
    data: IRegularGroup
}

const RegularLinks: React.FC<RegularLinksProps> = ({ data }) => {
    return (
        <div className={styles.regular_links}>
            <div className={styles.regular_links__title}>{data.title}</div>
            <ul className={styles.regular_links__links}>
                {data.items.map((item) => (
                    <li key={`footer-link-${item.title}`}>
                        <a
                            className={styles.regular_links__link}
                            href={item.url}
                            target={item.openNewTab ? "_blank" : ""}
                            rel="noopener noreferrer"
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RegularLinks
