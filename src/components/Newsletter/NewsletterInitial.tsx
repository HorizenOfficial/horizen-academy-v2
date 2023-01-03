import React, { useCallback } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@site/src/components"
import { TFormData } from "./types"

interface NewsletterInitialProps {
    onSubmit: (data: TFormData) => void
}

const NewsletterInitial: React.FC<NewsletterInitialProps> = ({
    onSubmit: propOnSubmit,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TFormData>({
        defaultValues: {
            firstName: "",
            email: "",
        },
        shouldUseNativeValidation: true,
    })

    const onSubmit = useCallback(
        (data: TFormData) => {
            propOnSubmit(data)
        },
        [propOnSubmit]
    )

    return (
        <form
            className="flex flex-col lg:flex-row gap-x-16 gap-y-8 w-full m-auto max-w-[400px] lg:max-w-full"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="w-full text-white font-bold text-2xl center lg:w-[300px] lg:justify-start">
                Get the newest updates
            </div>
            <div className="grow flex flex-col gap-y-4 lg:flex-row lg:gap-x-4">
                <input
                    {...register("firstName", {
                        required: true,
                    })}
                    type="text"
                    placeholder="First Name"
                    className="input lg:w-[170px] lg:shrink-0"
                    aria-invalid={errors.firstName ? "true" : "false"}
                />

                <input
                    {...register("email", {
                        required: true,
                    })}
                    type="email"
                    placeholder="Email"
                    className="input w-full grow lg:max-w-[490px]"
                    aria-invalid={errors.email ? "true" : "false"}
                />
                <Button classname="mt-4 mx-auto lg:mx-0 lg:mt-0" type="submit">
                    Subscribe
                </Button>
            </div>
        </form>
    )
}

export default NewsletterInitial
