/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#e5e7eb',
        accent: '#10b981',
        background: '#ffffff',
        foreground: '#000000',
        border: '#d1d5db',
        muted: '#f3f4f6',
        'muted-foreground': '#6b7280',
      },
      backgroundColor: {
        background: '#ffffff',
        secondary: '#f9fafb',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
