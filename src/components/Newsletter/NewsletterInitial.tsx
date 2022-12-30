import React, { useCallback } from "react"
import { useForm } from "react-hook-form"
import Button from "@site/src/components/Button"
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
            className="flex items-center justify-center my-auto mx-auto max-w-[400px] lg:max-w-full flex-col lg:flex-row w-full gap-y-8 lg:gap-x-14"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="text-white font-bold text-2xl center">
                Get the newest updates
            </div>

            <div className="w-full flex flex-grow flex-col gap-y-4 lg:gap-x-3 lg:flex-row">
                <input
                    {...register("firstName", {
                        required: true,
                    })}
                    type="text"
                    placeholder="First Name"
                    className="input lg:w-[170px]"
                    aria-invalid={errors.firstName ? "true" : "false"}
                />

                <input
                    {...register("email", {
                        required: true,
                    })}
                    type="email"
                    placeholder="Email"
                    className="input lg:max-w-[490px]"
                    aria-invalid={errors.email ? "true" : "false"}
                />

                <Button
                    classname="mx-auto !mt-4 lg:!mt-0 lg:mx-0"
                    type="submit"
                >
                    Subscribe
                </Button>
            </div>
        </form>
    )
}

export default NewsletterInitial
