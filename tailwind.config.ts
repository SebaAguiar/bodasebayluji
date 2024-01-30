import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'background': '#FDFDFD',
      'color-1': '#DAA0DF',
      'color-2': '#E0A89B',
      'color-3': '#DEB2B1',
      'red': '#FC0000',
      'green': '#00FC2A',
      'orange': 'FCB700'
    },
    extend: {
      backgroundImage: {
        "header-landing": "url('/images/portada-web-comprimida.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
