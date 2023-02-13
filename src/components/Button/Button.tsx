import Link from "@docusaurus/Link"
import clsx from "clsx"
import React from "react"
import styles from "./Button.module.css"

type ButtonAsLink = React.AnchorHTMLAttributes<HTMLAnchorElement>
type ButtonAsButton = React.ButtonHTMLAttributes<HTMLButtonElement>

type ButtonProps = {
    caps?: boolean
    href?: string
} & (ButtonAsLink | ButtonAsButton)

const Button: React.FC<ButtonProps> = ({
    className,
    caps = true,
    children,
    href,
    ...props
}) => {
    const classNames = clsx(styles.btn, caps && styles["btn--caps"], className)

    if (href) {
        return (
            <Link className={classNames} to={href} {...(props as ButtonAsLink)}>
                {children}
            </Link>
        )
    }

    return (
        <button
            type="button"
            className={classNames}
            {...(props as ButtonAsButton)}
        >
            {children}
        </button>
    )
}

export default Button
