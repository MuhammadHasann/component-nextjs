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
        "gradient-radial": "radial-gradient(circle at 50% 0%, var(--tw-bg-gradient))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        light: "#F6F6F6",
        dark: "#0c0c0c",
        primay: "#7469b6",
        second: "#ad88c6",
      }
    },
  },
  plugins: [],
};
export default config;
