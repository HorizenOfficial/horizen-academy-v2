/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "horizen-grey": "#C8CFD4",
                "horizen-blue-dark": "#051331",
                "horizen-blue-darker": "#0C0C1C",
                "horizen-blue": "#0E9DE5",
                "horizen-green": "#26DB8D",
            },
            container: {
                padding: {
                    DEFAULT: "1.5rem",
                    md: "3rem",
                    xl: "0.5rem",
                },
            },
        },
        fontFamily: {
            proxima: ["proxima-nova", "sans-serif"],
        },
    },
    plugins: [],
}
