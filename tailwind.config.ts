import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Lato"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        petrol: {
          DEFAULT: '#007C91',
          dark: '#005B66',
        },
        sand: {
          DEFAULT: '#EDE6DB',
          mid: '#D8D2C8',
        },
        brand: {
          dark: '#2E2E2E',
          mid: '#6F6F6F',
          light: '#F5F5F5',
        },
      },
    },
  },
  plugins: [],
};

export default config;
