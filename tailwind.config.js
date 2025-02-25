import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'navy': '#051966',     // Primary text, core brand
        'dark-purple': '#2E2D42', // Headers, primary UI
        
        // Secondary Colors
        'teal': '#3FBAD4',     // Accents, CTAs, .ai
        'purple': '#BF2FCF',   // Highlights, able
        
        // Supporting Colors
        'grey': '#4C4B4B',     // Secondary text
        'gold': '#FAB515',     // Special callouts
        'mint': '#00EDBE',     // Success indicators
        
        // Functional Colors
        'success': '#22C55E',  // Positive indicators
        'alert': '#EF4444',    // Error states
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],  // Headings
        'inter': ['Inter', 'sans-serif'],            // Body
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.08)',    // Card shadow from guidelines
      },
      borderRadius: {
        'button': '6px',                             // Button radius from guidelines
      },
    },
  },
  plugins: [
    aspectRatio,
  ],
}
