/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  future: { hoverOnlyWhenSupported: true },
  theme: {
    fontFamily: {
      barlow: ['Barlow Condensed', 'sans-serif'],
      bellefair: ['Bellefair', 'sans-serif'],
    },
    colors: {
      dark: '#0B0D17',
      'light-blueish-gray': '#D0D6F9',
      white: '#FFFFFF',
      transparent: 'transparent', // NOTE May delete it later
    },
    extend: {},
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
}
