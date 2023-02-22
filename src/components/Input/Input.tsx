/* eslint-disable react/destructuring-assignment */
import clsx from "clsx"
import React, { InputHTMLAttributes } from "react"
import styles from "./Input.module.css"

const Input = React.forwardRef<
    HTMLInputElement,
    InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
    return (
        <input
            {...props}
            className={clsx(styles.input, props.className)}
            ref={ref}
        />
    )
})

export default Input
