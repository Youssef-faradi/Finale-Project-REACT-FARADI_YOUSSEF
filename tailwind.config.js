/** @type {import(tailwindcss).Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

    ],
    theme: {
        extend: {
            colors: {
                "primary": "var(--primary)",
                "secondary": "var(--secondary)",
                "third": "var(--third)",
                "white": "var(--white)"
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
}
