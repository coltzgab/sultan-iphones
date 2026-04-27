/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sultan: {
          bg: '#f1edf9',
          text: '#0f0f12',
          muted: 'rgba(15, 15, 18, 0.58)',
          primary: '#7b2fbe',
          soft: '#b07cff',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
