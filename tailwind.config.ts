import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blue: {
          "primary": '#000070'
        },
        yellow: {
          "primary": '#D4EEF9'
        },
        red: {
          "primary": '#F2B9CA'
        },
        gray: {
          "primary": '#656565'
        },
        black: {
          "primary": '#1C1C1C'
        }
      }
    },
  },
  plugins: [],
};
export default config;
