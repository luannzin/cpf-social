import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#FCF5EF",

        "orange-300": "#FDCA40",
        "orange-500": "#F79824",
        "orange-700": "#603500",

        "blue-100": "#B8D8E0",
        "blue-300": "#6DB5CA",
      },
    },
  },
  plugins: [],
};
export default config;
