import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#FFFFFF", // Blanco puro
                surface: {
                    DEFAULT: "#FAFAFA", // Gris muy claro
                    highlight: "#E4E4E7", // Bordes (Zinc-200)
                },
                primary: {
                    DEFAULT: "#D40000", // Rosso Corsa
                    dark: "#B30000",
                },
                text: {
                    primary: "#18181B", // Negro
                    secondary: "#71717A", // Gris medio
                },
            },
            fontFamily: {
                sans: ["var(--font-geist-sans)", "Inter", "sans-serif"],
                mono: ["var(--font-geist-mono)", "monospace"],
            },
            boxShadow: {
                'soft': '0 2px 10px rgba(0, 0, 0, 0.03)', // Sombra casi invisible
            },
        },
    },
    plugins: [],
};
export default config;
