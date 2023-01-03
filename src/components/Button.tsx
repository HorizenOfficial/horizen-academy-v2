/* eslint-disable react/button-has-type */
import React from "react"
import { twMerge } from "tailwind-merge"

interface ButtonProps {
    children?: React.ReactNode
    classname?: string
    capitalLetters?: boolean
    onClick?: () => void
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"]
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
    children,
    classname: classnameProp,
    onClick,
    capitalLetters = true,
    type = "button",
    disabled = false,
}) => {
    const baseClassname = `relative block after:absolute after:w-2 after:h-full after:border-2 after:top-0 before:top-0
    after:right-0 after:border-l-0 before:border-horizen-blue before:absolute before:w-2 before:h-full 
    before:border-2 before:left-0 before:border-r-0 after:border-horizen-blue hover:before:border-horizen-green hover:after:border-horizen-green 
    disabled:after:border-horizen-grey disabled:before:border-horizen-grey
    px-4 md:px-6 text-white font-proxima font-bold text-base tracking-[0.3rem] md:text-xl !leading-10 disabled:text-horizen-grey disabled:cursor-not-allowed
    `

    return (
        <button
            className={twMerge(
                baseClassname,
                capitalLetters && "uppercase",
                classnameProp
            )}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button
