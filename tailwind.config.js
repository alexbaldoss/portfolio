/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        univers: ['"Univers Next Pro"', '"Univers LT Std"', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        cream: '#F5F4F1',
        accent: '#C7D1C2',
        ink: '#000000',
      },
    },
  },
  plugins: [],
}
