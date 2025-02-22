import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"],
      },
      keyframes: {
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
      },
      animation: {
        shine: "shine 5s linear infinite",
      },
      backgroundImage: {
        "custom-conic":
          "conic-gradient(from -35deg at 84.41% 43.5%, #0F62FE 0deg, #093B98 360deg)",
      },
    },
  },
  plugins: [],
};
export default config;
