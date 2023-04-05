/* eslint-disable func-names */
const path = require("path")

module.exports = function (_context) {
    const isProd = process.env.NODE_ENV === "production"

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
                          _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
                          _paq.push(["setCookieDomain", "*.www.horizen.io"]);
                          _paq.push(["setDomains", ["www.horizen.io/academy"]]);
                          _paq.push(['setCookiePath', '/academy']);
                          _paq.push(["setExcludedQueryParams", ["__proto__[sssied]","__proto__.sssied","constructor.prototype.sssied","constructor[prototype][sssied]","x.__proto__.sssied","x[__proto__][sssied]","x.constructor.prototype.sssied","x[constructor][prototype][sssied]","edit[0]","edit[1]","edit[2]","edit[3]","edit[4]","edit[5]","edit[6]","preview[0]","preview[1]","preview[2]","preview[3]","preview[4]","preview[5]","preview[6]","filter[0]","filter[1]","filter[2]","filter[3]","filter[4]","filter[5]","filter[6]","update[0]","update[1]","update[2]","update[3]","update[4]","update[5]","update[6]","from[0]","from[1]","from[2]","from[3]","from[4]","from[5]","from[6]","view[0]","view[1]","view[2]","view[3]","view[4]","view[5]","view[6]","a[0]","a[1]","a[2]","a[3]","a[4]","a[5]","a[6]","limit[0]","limit[1]","limit[2]","limit[3]","limit[4]","limit[5]","limit[6]","do[0]","do[1]","do[2]","do[3]","do[4]","do[5]","do[6]","plugin[0]","plugin[1]","plugin[2]","plugin[3]","plugin[4]","plugin[5]","plugin[6]","theme[0]","theme[1]","theme[2]","theme[3]","theme[4]","theme[5]","theme[6]","text[0]","text[1]","text[2]","text[3]","text[4]","text[5]","text[6]","test[0]","test[1]","test[2]","test[3]","test[4]","test[5]","test[6]","path[0]","path[1]","path[2]","path[3]","path[4]","path[5]","path[6]","language[0]","language[1]","language[2]","language[3]","language[4]","language[5]","language[6]","height[0]","height[1]","height[2]","height[3]","height[4]","height[5]","height[6]","logout[0]","logout[1]","logout[2]","logout[3]","logout[4]","logout[5]","logout[6]","pass[0]","pass[1]","pass[2]","pass[3]","pass[4]","pass[5]","pass[6]","dir[0]","dir[1]","dir[2]","dir[3]","dir[4]","dir[5]","dir[6]","show[0]","show[1]","show[2]","show[3]","show[4]","show[5]","show[6]","h[0]","h[1]","h[2]","h[3]","h[4]","h[5]","h[6]","value[0]","value[1]","value[2]","value[3]","value[4]","value[5]","value[6]","filename[0]","filename[1]","filename[2]","filename[3]","filename[4]","filename[5]","filename[6]","redirect[0]","redirect[1]","redirect[2]","redirect[3]","redirect[4]","redirect[5]","year[0]","year[1]","year[2]","year[3]","year[4]","year[5]","group[0]","group[1]","group[2]","group[3]","group[4]","group[5]","template[0]","template[1]","template[2]","template[3]","template[4]","version[0]","version[1]","version[2]","version[3]","version[4]","subject[0]","subject[1]","subject[2]","subject[3]","m[0]","m[1]","m[2]","m[3]","download[0]","download[1]","download[2]","u[0]","u[1]","u[2]","tag[0]","tag[1]","tag[2]","aw[0]","aw[1]","av[0]","av[1]","az[0]","az[1]","au[0]","au[1]","ay[0]","ay[1]","ax[0]","ax[1]","at[0]","at[1]","w[0]","w[1]","i[0]","i[1]","o[0]","o[1]","o[2]","d[0]","d[1]","d[2]","d[3]","j[0]","j[1]","j[2]","y[0]","y[1]","y[2]","aa[0]","aa[1]","aa[2]","ah[0]","ah[1]","ah[2]","al[0]","al[1]","al[2]","am[0]","am[1]","am[2]","rel","origin","hashtags","mini","MERGE1","MERGE0","b_a2e6f8a8a8a21683874d560ea_281e1f8cee","_paq","gr[0]","gr[1]","gr[2]","yr[0]","yr[1]","yr[2]","wr[0]","wr[1]","wr[2]","_r[0]","_r[1]","_r[2]","tn[0]","tn[1]","tn[2]","en[0]","en[1]","en[2]","rn[0]","rn[1]","rn[2]","nn[0]","nn[1]","nn[2]","un[0]","un[1]","un[2]","cn[0]","cn[1]","cn[2]","sn[0]","sn[1]","sn[2]","fn[0]","fn[1]","fn[2]","mn[0]","mn[1]","mn[2]","zn[0]","zn[1]","zn[2]","so[0]","so[1]","so[2]","lo[0]","lo[1]","lo[2]","mo[0]","mo[1]","mo[2]","ko[0]","ko[1]","ko[2]","qo[0]","qo[1]","qo[2]","ri[0]","ri[1]","ri[2]","ri[3]","si[0]","si[1]","si[2]","si[3]","li[0]","li[1]","li[2]","li[3]","pi[0]","pi[1]","pi[2]","pi[3]","pi[4]","gi[0]","gi[1]","gi[2]","gi[3]","gi[4]","bi[0]","bi[1]","bi[2]","bi[3]","ea[0]","ea[1]","ea[2]","la[0]","la[1]","la[2]","la[3]","xa[0]","xa[1]","xa[2]","xa[3]","ka[0]","ka[1]","ka[2]","bu[0]","bu[1]","bu[2]","bu[3]","bu[4]","wu[0]","wu[1]","wu[2]","wu[3]","cc[0]","cc[1]","cc[2]","cc[3]","cc[4]","sc[0]","sc[1]","sc[2]","fc[0]","fc[1]","lc[0]","lc[1]","hc[0]","hc[1]","es[0]","es[1]","xs[0]","xs[1]","Map[0]","Map[1]","Weak[0]","Weak[1]","_[0]","_[1]","ce[0]","ce[1]","nr[0]","nr[1]","ir[0]","ir[1]","vr[0]","vr[1]","scroller[0]","scroller[1]","resize[0]","resize[1]","set[0]","set[1]","adius[0]","adius[1]","px[0]","px[1]","ke[0]","ke[1]","ke[2]","ke[3]","_e[0]","_e[1]","_e[2]","mt[0]","mt[1]","xt[0]","xt[1]","true[0]","true[1]","shouldUpdateScroll[0]","shouldUpdateScroll[1]","qt[0]","qt[1]","fu[0]","fu[1]","is[0]","is[1]","ma","wa","ou","mu","yu[0]","yu[1]","gu[0]","gu[1]","ku[0]","ku[1]","fs[0]","fs[1]","ys[0]","ys[1]","gs[0]","gs[1]","wc[0]","wc[1]","xc[0]","xc[1]","setDocumentTitle[0]","setDocumentTitle[1]","address[0]","address[1]","g-recaptcha-response[0]","g-recaptcha-response[1]","ab","ac","af","ag","ad","ak","ae","ao","ap","r","n","b","z","g","e","x","http","embed","Apple","CriOS","FxiOS","me[0]","me[1]","me[2]","ye[0]","ye[1]","ye[2]","ge[0]","ge[1]","be","we","xe","l[0]","l[1]","lt","jn","ec","ne","fi","di","hi","mi","pa","rad[0]","rad[1]","he[0]","he[1]","he[2]","bt[0]","bt[1]","vt[0]","vt[1]","et[0]","et[1]","yt[0]","yt[1]","hs[0]","hs[1]","er[0]","er[1]","tr[0]","tr[1]","sr[0]","sr[1]","dr[0]","dr[1]","pr[0]","pr[1]","gatsby-intl-language[0]","gatsby-intl-language[1]","ai","ba","ve","co","hl","size","badge","cb","ie","je","re","se","bg","jg","ng","og","pg","ug","zg","hh","kh","lh","qh","th","wh","xh","yh","yi","ej","fj","ij","yj"]]);
                          _paq.push(['trackPageView']);
                          _paq.push(['enableLinkTracking']);
                          (function() {
                            var u="https://horizen.matomo.cloud/";
                            _paq.push(['setTrackerUrl', u+'matomo.php']);
                            _paq.push(['setSiteId', '12']);
                            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                            g.async=true; g.src='//cdn.matomo.cloud/horizen.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
                          })();
                        `,
                    },
                ],
            }
        },
    }
}
