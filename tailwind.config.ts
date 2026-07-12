import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff8ff',
          100: '#dff1ff',
          200: '#b8e0ff',
          300: '#7fc7ff',
          400: '#3aa3ff',
          500: '#0f79d6',
          600: '#0b63b2',
          700: '#0c4f8c',
          800: '#0f4171',
          900: '#12375d'
        },
        accent: '#ff9f2a'
      },
      boxShadow: {
        glow: '0 24px 60px rgba(15, 121, 214, 0.18)'
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(255,159,42,0.18), transparent 38%), radial-gradient(circle at left top, rgba(15,121,214,0.18), transparent 30%)'
      },
      fontFamily: {
        sans: ['var(--font-body)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;