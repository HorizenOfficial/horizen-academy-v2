// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Horizen Academy",
    url: "https://horizen.io",
    baseUrl: "/academy/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.png",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "facebook", // Usually your GitHub org/user name.
    projectName: "docusaurus", // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/HorizenOfficial/horizen-academy-v2/",
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    routeBasePath: "/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
                sitemap: {
                    changefreq: "daily",
                    priority: 1,
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                logo: {
                    alt: "My Site Logo",
                    src: "img/logo.svg",
                },
                items: [
                    {
                        href: "/",
                        label: "Home",
                        position: "left",
                    },
                    {
                        to: "ethereum-virtual-machine-evm",
                        position: "left",
                        label: "Articles",
                    },
                    {
                        type: "dropdown",
                        label: "Popular Articles",
                        position: "left",
                        items: [
                            {
                                label: "Why Create a Token?",
                                to: "why-create-a-token",
                            },
                            {
                                label: "Oracles in Blockchain",
                                to: "blockchain-oracles",
                            },
                            {
                                label: "Mining Economics",
                                to: "economies-of-mining",
                            },
                            {
                                label: "What is EVM?",
                                to: "ethereum-virtual-machine-evm",
                            },
                            {
                                label: "Blockchain Explorers",
                                to: "blockchain-explorers",
                            },
                        ],
                    },
                    {
                        href: "https://twitter.com/HorizenAcademy",
                        label: "Community",
                        position: "right",
                    },
                    {
                        href: "https://horizen.io/",
                        label: "Main Horizen Website",
                        position: "right",
                    },
                ],
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            colorMode: {
                defaultMode: "dark",
                disableSwitch: true,
            },
        }),

    plugins: ["./matomo"],
}

module.exports = config
