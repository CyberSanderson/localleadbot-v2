/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        background: '#030303',
        surface: '#0A0A0A',
        accent: {
          DEFAULT: '#D4AF37', // Executive Gold
          light: '#FFF8E1',
          dark: '#8A6D3B',
        },
        secondary: '#A1A1AA',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'spotlight': 'spotlight 2s ease .75s 1 forwards',
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
        spotlight: {
          "0%": { opacity: 0, transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": { opacity: 1, transform: "translate(-50%,-40%) scale(1)" },
        },
      },
    },
  },
  plugins: [],
}