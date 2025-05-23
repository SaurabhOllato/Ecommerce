/** @type {import('tailwindcss').Config} */
import scrollbarHide from 'tailwind-scrollbar-hide'

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
          marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
      '0%': { transform: 'translateX(100%)' },
      '100%': { transform: 'translateX(-100%)' },
    },
      },
      colors: {
        // primary: '#F8F3D9',       // Background
        primary: '#FFFDF6',       // Background
        accent: '#C29963',        // Buttons, highlights
        heading: '#2B1F1B',       // Main titles
        subtext: '#84766A',       // Paragraph text
        logoText: '#3B2F2F',      // Logo and brand name
        buttonText: '#2E1C0E',    // Button text
        darkMocha: '#4E3524',
        
      
      },
      
    },
  },
  plugins: [scrollbarHide],}
