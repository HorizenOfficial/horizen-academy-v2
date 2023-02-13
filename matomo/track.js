/* eslint-disable func-names */
/* eslint-disable no-undef */
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment"

export default (function () {
    if (!ExecutionEnvironment.canUseDOM) {
        return null
    }
    return {
        onRouteDidUpdate({ location }) {
            setTimeout(function () {
                _paq.push(["setCustomUrl", location.pathname])
                _paq.push(["setDocumentTitle", document.title])
                _paq.push(["trackPageView"])
            }, 1000)
        },
    }
})()
