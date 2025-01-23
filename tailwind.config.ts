/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{vue,ts}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        default: 'var(--default)',
        background: {
          DEFAULT: 'var(--background)',
          dark: 'var(--background-dark)'
        },
      }
    }
  },
  plugins: [
  ],
}

