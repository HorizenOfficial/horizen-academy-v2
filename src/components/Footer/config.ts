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
            url: "horizen.io/legal",
        },
        privacyPolicy: {
            title: "Privacy Policy",
            url: "horizen.io/privacy",
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
                        title: "Team",
                        url: "https://www.horizen.io/team/",
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
                    imageUrl: "/img/social/twitter.svg",
                    openNewTab: true,
                },
                {
                    title: "Facebook",
                    url: "https://www.facebook.com/horizenglobal",
                    imageUrl: "/img/social/facebook.svg",
                    openNewTab: true,
                },
                {
                    title: "LinkedIn",
                    url: "https://www.linkedin.com/company/horizenofficial/",
                    imageUrl: "/img/social/linkedin.svg",
                    openNewTab: true,
                },
                {
                    title: "YouTube",
                    url: "https://www.youtube.com/horizen",
                    imageUrl: "/img/social/youtube.svg",
                    openNewTab: true,
                },
                {
                    title: "Telegram",
                    url: "https://t.me/horizencommunity",
                    imageUrl: "/img/social/telegram.svg",
                    openNewTab: true,
                },
                {
                    title: "Medium",
                    url: "https://medium.com/@horizen",
                    imageUrl: "/img/social/medium.svg",
                    openNewTab: true,
                },

                {
                    title: "Instagram",
                    url: "https://www.instagram.com/horizenglobal/",
                    imageUrl: "/img/social/instagram.svg",
                    openNewTab: true,
                },
                {
                    title: "Discord",
                    url: "https://horizen.io/invite/discord",
                    imageUrl: "/img/social/discord.svg",
                    openNewTab: true,
                },

                {
                    title: "Reddit",
                    url: "https://www.reddit.com/r/Horizen/",
                    imageUrl: "/img/social/reddit.svg",
                    openNewTab: true,
                },

                {
                    title: "GitHub",
                    url: "https://github.com/horizenofficial",
                    imageUrl: "/img/social/github.svg",
                    openNewTab: true,
                },
            ],
        },
    },
}

export default config
