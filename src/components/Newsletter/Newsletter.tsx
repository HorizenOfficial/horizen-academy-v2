import React, { useEffect, useState } from "react"

import axios from "axios"
import Button from "../Button"
import Input from "./Input"

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const Newsletter = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [invalidEmail, setInvalidEmail] = useState(false)
    const [invalidName, setInvalidName] = useState(false)
    const [subscribeButtonPulsed, setSubscribeButtonPulsed] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const subscribeToNewsletter = () => {
        setSubscribeButtonPulsed(true)
        if (name === "") {
            setInvalidName(true)
            return
        }

        setInvalidName(false)

        if (isValidEmail(email)) {
            setInvalidEmail(false)
        } else {
            setEmail("")
            setInvalidEmail(true)
        }
    }

    useEffect(() => {
        if (subscribeButtonPulsed && !invalidEmail && !invalidName) {
            setIsLoading(true)
            axios
                .post(
                    "https://hook.integromat.com/bfkxy01gjtmn6nbdo7qw6bcizmwp3q6e",
                    { name, email }
                )
                .then((res) => {
                    if (res.status === 200) {
                        setIsSubscribed(true)
                        setIsLoading(false)
                    } else {
                        setIsLoading(false)
                    }
                })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [subscribeButtonPulsed, invalidEmail, invalidName])

    return (
        <div className="border-t border-b bg-horizen-blue-dark border-white pt-6 pb-9 lg:py-0">
            <div className="container">
                <div className="flex items-center lg:h-[114px] justify-between flex-col lg:flex-row space-y-8 lg:space-y-0">
                    {!isSubscribed && !isLoading && (
                        <>
                            <span className="text-white font-bold text-2xl lg:pl-9">
                                Get the newest updates
                            </span>
                            <div className="space-y-4 lg:space-y-0 lg:space-x-3 flex-grow lg:p-14 lg:pr-4 lg:flex">
                                <Input
                                    type="text"
                                    placeholder={
                                        invalidName
                                            ? "Enter your name"
                                            : "First name"
                                    }
                                    transparent
                                    customClass="w-full lg:w-[170px] outline-none focus:border-horizen-blue"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    error={invalidName}
                                />
                                <Input
                                    type="email"
                                    placeholder={
                                        invalidEmail
                                            ? "Enter a valid email address"
                                            : "Email"
                                    }
                                    transparent
                                    customClass="w-full outline-none focus:border-horizen-blue lg:flex-grow"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    error={invalidEmail}
                                />
                            </div>
                            <Button onClick={subscribeToNewsletter}>
                                Subscribe
                            </Button>
                        </>
                    )}

                    {isLoading && (
                        <div className="flex justify-center flex-grow items-center">
                            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 animate-spin border-t-horizen-blue" />
                        </div>
                    )}

                    {isSubscribed && (
                        <div className="flex-grow ">
                            <span className="text-white font-bold text-2xl block text-center">
                                Thank you for subscribing to our newest updates!
                            </span>
                            <span className="text-lg text-horizen-grey block text-center">
                                You will hear from us soon.
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Newsletter
