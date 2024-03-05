import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useCallback, useState } from "react"
import { TFormData } from "./Newsletter.types"
import { NEWSLETTER_LIST_ID } from "./Newsletter.utils"

enum NEWSLETTER_STATUS {
    INITIAL,
    LOADING,
    SUCCESS,
    ERROR,
}

const useNewsletter = () => {
    const [status, setStatus] = useState(NEWSLETTER_STATUS.INITIAL)
    const {
        siteConfig: { customFields },
    } = useDocusaurusContext()

    const sendDataMutation = useMutation({
        mutationFn: async ({ firstName, email }: TFormData) => {
            await axios.post(customFields.newsletterURL, {
                first_name: firstName,
                email,
                listId: NEWSLETTER_LIST_ID,
            })
        },
        onMutate() {
            setStatus(NEWSLETTER_STATUS.LOADING)
        },
        onError() {
            setStatus(NEWSLETTER_STATUS.ERROR)
        },
        onSuccess() {
            setStatus(NEWSLETTER_STATUS.SUCCESS)
        },
    })

    const sendData = useCallback(
        (data: TFormData) => {
            sendDataMutation.mutate(data)
        },
        [sendDataMutation]
    )

    return { sendData, status }
}

export default useNewsletter
export { NEWSLETTER_STATUS }
