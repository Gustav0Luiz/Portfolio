import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes:{
        morph:{
          "0%" :{"border-radius": "60% 40% 30% 70%/60% 30% 70% 40%"},
          "50%":{"border-radius": "30% 60% 70% 40% / 50% 60% 30% 60%"},
          "100%": {"border-radius": "60% 40% 30% 70% / 60% 30% 70% 40%"} }
      },
      animation:{
        morph: "morph 8s ease-in-out infinite"
      },
      colors: {
        'primaryBlue': '#147EFB',
        'primaryGray': '#37383C',
        'primaryGreen': '#10892e',
      },
      boxShadow:{
        'headerBlack':'0 0 10px 8px rgba(0, 0, 0,.09)',
        'headerWhite':'0 0 10px 8px rgba(255, 255, 255,0.09)',
      },
      screens: {
        'xs': '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
    },
  },
  plugins: [],
};
export default config;
