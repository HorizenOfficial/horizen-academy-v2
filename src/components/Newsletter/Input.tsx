import React from "react"

export type CustomInput = {
    transparent?: boolean
    customClass?: string
    error?: boolean
}

const Input: React.FC<
    React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > &
        CustomInput
> = ({ transparent, customClass, error, ...props }) => {
    /* eslint-disable react/jsx-props-no-spreading */
    return (
        <input
            className={`${customClass} border ${
                error ? "border-red-700" : ""
            } text-white leading-6 py-2 pl-5 ${
                transparent ? "bg-transparent" : ""
            }`}
            {...props}
        />
    )
}

export default Input
