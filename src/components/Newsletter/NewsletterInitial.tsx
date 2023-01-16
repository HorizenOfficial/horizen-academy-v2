import React, { useCallback } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@site/src/components"
import clsx from "clsx"
import { TFormData } from "./Newsletter.types"
import Input from "../Input/Input"
import commonStyles from "./Newsletter.module.css"
import styles from "./NewsletterInitial.module.css"

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
            className={styles.newsletter_initial}
            onSubmit={handleSubmit(onSubmit)}
        >
            <div
                className={clsx(
                    commonStyles.newsletter__heading,
                    styles.newsletter_initial__heading
                )}
            >
                Get the newest updates
            </div>
            <div className={styles.newsletter_initial__body}>
                <Input
                    {...register("firstName", {
                        required: true,
                    })}
                    type="text"
                    placeholder="First Name"
                    className={styles.newsletter_initial__input_name}
                    aria-invalid={errors.firstName ? "true" : "false"}
                />

                <Input
                    {...register("email", {
                        required: true,
                    })}
                    type="email"
                    placeholder="Email"
                    className={styles.newsletter_initial__input_email}
                    aria-invalid={errors.email ? "true" : "false"}
                />
                <Button
                    className={styles.newsletter_initial__button}
                    type="submit"
                >
                    Subscribe
                </Button>
            </div>
        </form>
    )
}

export default NewsletterInitial
