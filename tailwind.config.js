/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Esto le dice a Tailwind que busque la clase .dark en el ancestro (ej. en el <html> o <body>)
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
