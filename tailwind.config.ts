import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(18.625rem, 1fr))",
        "auto-fill-1": "repeat(auto-fill, minmax(20rem, 1fr))",
        "auto-fill-2": "repeat(auto-fill, minmax(16rem, 1fr))",
      },
      fontSize: {
        "0": "0",
      },
      keyframes: {
        wiggle: {
          "100%": {
            transform: "translateY(-20px)",
          },
        },
      },
    },
  },

  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
