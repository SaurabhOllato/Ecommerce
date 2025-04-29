/** @type {import('tailwindcss').Config} */
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
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      colors: {
        primary: '#F4EFE8',       // Background
        accent: '#C29963',        // Buttons, highlights
        heading: '#2B1F1B',       // Main titles
        subtext: '#84766A',       // Paragraph text
        logoText: '#3B2F2F',      // Logo and brand name
        buttonText: '#2E1C0E',    // Button text
        darkMocha: '#4E3524',
        
      
      }
    },
  },
  plugins: [],
}
