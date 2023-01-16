/* eslint-disable react/destructuring-assignment */
import clsx from "clsx"
import React, { InputHTMLAttributes } from "react"
import styles from "./Input.module.css"

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return <input {...props} className={clsx(styles.input, props.className)} />
}

export default Input
