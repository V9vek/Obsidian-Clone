/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './styles/**/*.{css}',
    './index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssAnimate],
}; 