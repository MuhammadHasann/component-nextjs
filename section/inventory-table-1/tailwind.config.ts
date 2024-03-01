import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      screens: {
        "2xl": "1320px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        light: "#F6F6F6",
        "table-light": "#cccccc",
        dark: "#0c0c0c",
        ready: "#7ddf64",
        notReady: "#ECB159",
        delete: "#EEA5A6",
        edit: "#7ddf64",
      },
      fontSize: {
        xxs: "10px",
      },
      animation: {
        wiggle: "wiggle 0.5s ease-in-out 0.1s",
      },
      keyframes: {
        wiggle: {
          "0%": { rotate: "0" },
          "25%": { rotate: "7deg" },
          "50%": { rotate: "-4deg" },
          "75%": { rotate: "2deg" },
          "100%": { rotate: "0deg" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
