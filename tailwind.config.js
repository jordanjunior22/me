/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        elite: ['"Special Elite"', 'cursive'],
        courier: ['"Courier Prime"', 'monospace'],
        oswald: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
