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
        primary: "#00205B",
        secondary: "#FA4C03",
        accent: "#F4BF13",
        background: "#100a35",
      },
    },
  },
  plugins: [],
};
export default config;
