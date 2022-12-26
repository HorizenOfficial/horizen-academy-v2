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
    socialLinks: {
        title: "Join our Community",
        items: [
            {
                title: "Twitter",
                url: "https://twitter.com/horizenofficial",
                imageUrl: "/img/social/twitter.svg",
            },
            {
                title: "Telegram",
                url: "https://t.me/horizenofficial",
                imageUrl: "/img/social/telegram.svg",
            },
            {
                title: "Reddit",
                url: "https://www.reddit.com/r/horizen/",
                imageUrl: "/img/social/reddit.svg",
            },
            {
                title: "Discord",
                url: "https://discord.gg/8YzYjwJ",
                imageUrl: "/img/social/discord.svg",
            },
            {
                title: "Medium",
                url: "https://medium.com/horizen",
                imageUrl: "/img/social/medium.svg",
            },
            {
                title: "YouTube",
                url: "https://www.youtube.com/channel/UCZ5Z1p4z6z7r1YzjQYkqj9w",
                imageUrl: "/img/social/youtube.svg",
            },
            {
                title: "GitHub",
                url: "",
                imageUrl: "/img/social/github.svg",
            },
            {
                title: "LinkedIn",
                url: "https://www.linkedin.com/company/horizen/",
                imageUrl: "/img/social/linkedin.svg",
            },
            {
                title: "Facebook",
                url: "https://www.facebook.com/horizenofficial",
                imageUrl: "/img/social/facebook.svg",
            },
            {
                title: "Instagram",
                url: "https://www.instagram.com/horizenofficial/",
                imageUrl: "/img/social/instagram.svg",
            },
        ],
    },
}

export default config
