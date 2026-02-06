/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',     // Small phones (iPhone SE)
        'sm': '640px',     // Standard phones
        'md': '768px',     // Tablets
        'lg': '1024px',    // Laptops
        'xl': '1280px',    // Desktops
        '2xl': '1536px',   // Large Monitors
      },
      // Ensure your container is always centered and padded on mobile
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
        },
      },
    },
  },
  plugins: [],
}