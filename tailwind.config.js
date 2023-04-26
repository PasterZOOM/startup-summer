/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      width: {
        35.25: '8.8125rem', // 141px
      },
      gap: {
        15: '3.75rem', // 60px
      },
      colors: {
        black: '#232134',
        white: '#FFFFFF',
        'gray-600': '#7B7C88',
        'gray-500': '#ACADB9',
        'gray-300': '#D5D6DC',
        'gray-200': '#EAEBED',
        'gray-100': '#F5F5F6',
        'blue-600': '#3B7CD3',
        'blue-main-500': '#5E96FC',
        'blue-400': '#92C1FF',
        'blue-300': '#B7D6FF',
        'blue-200': '#C9E0FF',
        'blue-100': '#DEECFF',
      },
    },
  },
  plugins: [],
}
