/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      width: {
        35.25: '8.8125rem', // 141px
      },
      maxWidth: {
        78.75: '19.6875rem', // 315px
      },
      gap: {
        15: '3.75rem', // 60px
      },
      inset: {
        2.25: '0.5625rem', // 9px
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
      fontSize: {
        'title-l': ['1.75rem', '2.125rem'], // [28px, 34px]
        'title-ss': ['1.25rem', '1.5rem'], // [20px, 24px]
        'title-s': ['1.25rem', '1.25rem'], // [20px, 20px]
        'title-base-m': ['1rem', '1.375rem'], // [16px, 22px]
        'custom-base': ['1rem', '1.25rem'], // [16px, 20px]
        'title-base-mb': ['1rem', '1.1875rem'], // [16px, 19px]
        'sub-title': ['0.875rem', '1.25rem'], // [14px, 20px]
      },
    },
  },
  plugins: [],
}
