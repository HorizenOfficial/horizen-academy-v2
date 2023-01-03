import clsx from "clsx"
import React from "react"
import styles from "./button.style.module.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    caps?: boolean
}

const Button: React.FC<ButtonProps> = ({
    className,
    caps = true,
    children,
    ...props
}) => {
    return (
        <button
            type="button"
            className={clsx(styles.btn, caps && styles["btn--caps"], className)}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
