import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useCallback, useState } from "react"
import { TFormData } from "./Newsletter.types"

enum NEWSLETTER_STATUS {
    INITIAL,
    LOADING,
    SUCCESS,
    ERROR,
}

const useNewsletter = () => {
    const [status, setStatus] = useState(NEWSLETTER_STATUS.INITIAL)

    const sendDataMutation = useMutation({
        mutationFn: async ({ firstName, email }: TFormData) => {
            await axios.post(
                "https://hook.integromat.com/bfkxy01gjtmn6nbdo7qw6bcizmwp3q6e",
                { name: firstName, email }
            )
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
