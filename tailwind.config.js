/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['Dancing Script', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif']
      },
    },
  },
  plugins: [],
}
