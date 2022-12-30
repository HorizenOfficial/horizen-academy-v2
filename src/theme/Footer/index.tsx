import { Newsletter } from "@site/src/components"
import React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

const FooterWrapper = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Newsletter />
        </QueryClientProvider>
    )
}

export default FooterWrapper
