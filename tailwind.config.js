/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'laptop': '900px',
    },
    fontFamily: {
      sora: ['Sora'],
      nunito: ['Nunito']
    },
    extend: {
      colors: {
        'purple-200': '#DAC7FC',
        'purple-300': '#CAACFF',
        'purple-500': '#6B49CD',
        'purple-700': '#5D0096',
        'purple-900': '#210035',
        'pink-500': '#AD26FF',
        'green-black': '#051418',
        'green-black-500': '#072026',
        'wheat-400': '#FFFAEB',
        'wheat-500': '#EFD871',
        'wheat-600': '#E9B949',
      },
      fontSize: {
        13: '13px',
        14: '14px',
        16: '16px',
        20: '20px',
        24: '24px',
        26: '26px',
        32: '32px',
        36: '36px',
        48: '48px',
      },
    },
  },
  plugins: [],
}
