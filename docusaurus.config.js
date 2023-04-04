// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")
const math = require("remark-math")
const katex = require("rehype-katex")

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: process.env.TITLE,
    url: process.env.URL,
    baseUrl: process.env.BASE_URL,
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
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    routeBasePath: "/",
                    remarkPlugins: [math],
                    rehypePlugins: [katex],
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

    stylesheets: [
        {
            href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
            type: "text/css",
            integrity:
                "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
            crossorigin: "anonymous",
        },
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
                        to: "/how-does-blockchain-work/",
                        position: "left",
                        label: "Articles",
                    },
                    {
                        type: "dropdown",
                        label: "Popular Articles",
                        position: "left",
                        items: [
                            {
                                label: "Play-to-Earn Games",
                                href: "/play-to-earn-games/",
                            },
                            {
                                label: "Zero-Knowledge Proofs",
                                href: "/zero-knowledge-proofs-zkp/",
                            },
                            {
                                label: "Consensus Mechanisms",
                                href: "/consensus-mechanisms/",
                            },
                            {
                                label: "Tokenomics 101",
                                href: "/tokenomics/",
                            },
                            {
                                label: "Ethereum Virtual Machine",
                                href: "/ethereum-virtual-machine-evm/",
                            },
                        ],
                    },
                    {
                        href: "https://www.horizen.io/",
                        label: "Main Horizen Website",
                        position: "right",
                    },
                    {
                        href: "https://twitter.com/HorizenAcademy",
                        label: "Community",
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
            algolia: {
                appId: process.env.ALGOLIA_APP_ID,
                apiKey: process.env.ALGOLIA_API_KEY,
                indexName: process.env.ALGOLIA_INDEX_NAME,
            },
        }),

    plugins: ["./matomo"],
}

module.exports = config
