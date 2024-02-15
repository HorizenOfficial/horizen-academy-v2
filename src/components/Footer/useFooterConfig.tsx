import useBaseUrl from "@docusaurus/useBaseUrl"
import { IFooterConfig } from "./types"

const useFooterConfig = (): IFooterConfig => {
    return {
        logo: {
            title: "Logo",
            url: "/",
            imageUrl: useBaseUrl("/img/horizen-logo.svg"),
        },
        copyright: {
            text: `© ${new Date().getFullYear()} Horizen. All Rights Reserved.`,
            legal: {
                title: "Legal",
                url: "https://horizen.io/legal/",
            },
            privacyPolicy: {
                title: "Privacy Policy",
                url: "https://horizen.io/privacy/",
            },
        },
        links: {
            regular: [
                {
                    title: "Contact",
                    items: [
                        {
                            title: "General inquiries",
                            url: "mailto:info@horizen.io",
                        },
                        {
                            title: "Technical support",
                            url: "https://horizen.io/invite/discord",
                            openNewTab: true,
                        },
                    ],
                },
                {
                    title: "Resources",
                    items: [
                        {
                            title: "Whitepapers",
                            url: "https://www.horizen.io/research/",
                        },
                        {
                            title: "Block Explorer",
                            url: "https://explorer.horizen.io/",
                            openNewTab: true,
                        },
                        {
                            title: "Media kit",
                            url: "https://www.horizen.io/media/",
                        },
                        {
                            title: "Public keys",
                            url: "https://github.com/HorizenOfficial/keys",
                            openNewTab: true,
                        },
                    ],
                },
                {
                    title: "About",
                    items: [
                        {
                            title: "What is Horizen",
                            url: "https://www.horizen.io/what-is-horizen/",
                        },
                        {
                            title: "Roadmap",
                            url: "https://www.horizen.io/roadmap/",
                        },
                        {
                            title: "Swag store",
                            url: "https://store.horizen.io",
                            openNewTab: true,
                        },
                        {
                            title: "Careers",
                            url: "https://www.horizen.io/careers/",
                        },
                    ],
                },
            ],
            social: {
                title: "Join our Community",
                items: [
                    {
                        title: "Twitter",
                        url: "https://twitter.com/horizenglobal",
                        imageUrl: useBaseUrl("/img/social/twitter.svg"),
                        openNewTab: true,
                    },
                    {
                        title: "Facebook",
                        url: "https://www.facebook.com/horizenglobal",
                        imageUrl: useBaseUrl("/img/social/facebook.svg"),
                        openNewTab: true,
                    },
                    {
                        title: "LinkedIn",
                        url: "https://www.linkedin.com/company/horizenofficial/",
                        imageUrl: useBaseUrl("/img/social/linkedin.svg"),
                        openNewTab: true,
                    },
                    {
                        title: "YouTube",
                        url: "https://www.youtube.com/horizen",
                        imageUrl: useBaseUrl("/img/social/youtube.svg"),
                        openNewTab: true,
                    },
                    {
                        title: "Telegram",
                        url: "https://t.me/horizencommunity",
                        imageUrl: useBaseUrl("/img/social/telegram.svg"),
                        openNewTab: true,
                    },
                    {
                        title: "Medium",
                        url: "https://medium.com/@horizen",
                        imageUrl: useBaseUrl("/img/social/medium.svg"),
                        openNewTab: true,
                    },

                    {
                        title: "Instagram",
                        url: "https://www.instagram.com/horizenglobal/",
                        imageUrl: useBaseUrl("/img/social/instagram.svg"),
                        openNewTab: true,
                    },
                    {
                        title: "Discord",
                        url: "https://horizen.io/invite/discord",
                        imageUrl: useBaseUrl("/img/social/discord.svg"),
                        openNewTab: true,
                    },

                    {
                        title: "Reddit",
                        url: "https://www.reddit.com/r/Horizen/",
                        imageUrl: useBaseUrl("/img/social/reddit.svg"),
                        openNewTab: true,
                    },

                    {
                        title: "GitHub",
                        url: "https://github.com/horizenofficial",
                        imageUrl: useBaseUrl("/img/social/github.svg"),
                        openNewTab: true,
                    },
                ],
            },
        },
    }
}

export default useFooterConfig
