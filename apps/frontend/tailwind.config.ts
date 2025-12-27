import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors:{
                background: "var(--background)",
                foreground: "var(--foreground)",
                'violet-dark': {
                    DEFAULT: "#0E001D",
                    foreground: "#FFF"
                }
            }
        },
    },
    plugins: [],
}

export default config