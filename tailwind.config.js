/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",         // if you're using the /app directory
    "./pages/**/*.{js,ts,jsx,tsx}",       // if you're using the /pages directory
    "./src/**/*.{js,ts,jsx,tsx}",         // for components in /src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};