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
          "primary": '#F2E2BE'
        },
        red:{
          "primary": '#F15E5E'
        },
        gray: {
          "primary": '#6E6E6E'
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
