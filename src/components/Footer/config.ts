import { IFooterConfig } from "./types"

const config: IFooterConfig = {
    logo: {
        title: "Logo",
        url: "/",
        imageUrl: "/img/logo.svg",
    },
    copyright: {
        text: `© ${new Date().getFullYear()} Horizen. All Rights Reserved.`,
        legal: {
            title: "Legal",
            url: "/legal",
        },
        privacyPolicy: {
            title: "Privacy Policy",
            url: "/privacy",
        },
    },
}

export default config
