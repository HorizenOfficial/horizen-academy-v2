import { Newsletter, Footer } from "@site/src/components"
import React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

const FooterWrapper = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Newsletter />
            <Footer />
        </QueryClientProvider>
    )
}

export default FooterWrapper
