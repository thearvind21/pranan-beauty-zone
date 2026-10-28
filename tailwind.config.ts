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
        ivory: {
          DEFAULT: "#FAF7F3",
          light: "#FDFBF9",
          dark: "#F4EFEA",
        },
        cream: {
          DEFAULT: "#F2EBE5",
          hover: "#EAE1DA",
          muted: "#F7F2EE",
        },
        blush: {
          DEFAULT: "#E8C9C4",
          light: "#F5DFDC",
          dark: "#DCB3AD",
        },
        rose: {
          DEFAULT: "#C99B95",
          hover: "#B68882",
          active: "#A67771",
          light: "#F7EDEB",
          subtle: "#F0DDD9",
        },
        gold: {
          DEFAULT: "#B49A70",
          hover: "#A3875D",
          light: "#DFD2BE",
          subtle: "#FAF6F0",
        },
        charcoal: {
          DEFAULT: "#342C29",
          light: "#4B403D",
          deep: "#241E1C",
        },
        taupe: {
          DEFAULT: "#82756F",
          light: "#A49993",
          subtle: "#BDB3AD",
        },
        borderSoft: {
          DEFAULT: "#E6DCD5",
          light: "#EFE8E2",
          dark: "#D9CBC3",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Playfair Display", "serif"],
        sans: ["var(--font-dm-sans)", "Inter", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(52, 44, 41, 0.05)",
        card: "0 10px 30px -4px rgba(52, 44, 41, 0.08)",
        elevated: "0 20px 40px -8px rgba(52, 44, 41, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
