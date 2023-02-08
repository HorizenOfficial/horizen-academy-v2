/* eslint-disable func-names */
const path = require("path")

module.exports = function (_context) {
    const isProd = true || process.env.NODE_ENV === "production"

    return {
        name: "docusaurus-plugin-matomo",

        getClientModules() {
            return isProd ? [path.resolve(__dirname, "./track")] : []
        },

        injectHtmlTags() {
            if (!isProd) {
                return {}
            }
            return {
                headTags: [
                    {
                        tagName: "link",
                        attributes: {
                            rel: "preconnect",
                            href: `https://horizen.matomo.cloud/`,
                        },
                    },
                    {
                        tagName: "script",
                        innerHTML: `
                            var _paq = window._paq = window._paq || [];
                            /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
                            _paq.push(["setCookieDomain", "*.horizen.io"]);
                            _paq.push(["setDomains", ["*.horizen.io"]]);
                            _paq.push(['trackPageView']);
                            _paq.push(['enableLinkTracking']);
                            (function () {
                                var u = "https://horizen.matomo.cloud/";
                                    _paq.push(['setTrackerUrl', u + 'matomo.php']);
                                _paq.push(['setSiteId', '1']);
                                var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
                                g.async = true; g.src = '//cdn.matomo.cloud/horizen.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g, s);
                            })();
                        `,
                    },
                    {
                        tagName: "noscript",
                        innerHTML: `
                            <p><img src="https://horizen.matomo.cloud/matomo.php?idsite=4&amp;rec=1" style="border:0;" alt="" /></p>
                        `,
                    },
                ],
            }
        },
    }
}
