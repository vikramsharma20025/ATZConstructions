import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'common-red': '#922F25',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadein: {
          "0%": {
            marginLeft : "-500px",
            opacity: "0",
          },
          "50%": {
            marginLeft : "-250px",
            opacity: "0.5",
          },
          "100%": {
            marginLeft : "0px",
            opacity: "1",
          },
        },
      },
      animation: {
        fadein: "fadein 3s linear",
      },
    },
  },
  plugins: [],
};
export default config;
