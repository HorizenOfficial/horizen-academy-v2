import Link from "@docusaurus/Link"
import clsx from "clsx"
import React from "react"
import styles from "./Card.module.css"

interface CardProps extends React.PropsWithChildren {
    href: string
    external?: boolean
}

const Card: React.FC<CardProps> = ({ children, href, external = false }) => {
    return (
        <Link
            className={clsx(styles.card, external && styles["external-link"])}
            href={href}
        >
            {children}
        </Link>
    )
}

export default Card
