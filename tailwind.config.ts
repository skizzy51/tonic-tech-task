import type { Config } from "tailwindcss"

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                darkBlue: "#0A2640",
            },
        },
        screens: {
            sm: "425px",
            md: "769px",
            lg: "1024px",
            mxl: "1150px",
            xl: "1286px",
            "2xl": "1536px",
        },
    },
    plugins: [],
} satisfies Config
