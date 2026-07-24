/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fefcf8',
          100: '#faf7f2',
          200: '#f4efe6',
          300: '#e8dec9',
          400: '#d9c9a6',
        },
        matcha: {
          50: '#f2f7f4',
          100: '#dfebd5',
          300: '#8eb38e',
          500: '#4a7c59',
          700: '#2d4a3e',
          900: '#1b2f27',
        },
        espresso: {
          500: '#6f4e37',
          700: '#4a3222',
          800: '#3c2a21',
          900: '#231812',
          950: '#150e0b',
        },
        caramel: {
          400: '#e59a45',
          500: '#d97736',
          600: '#b85920',
        },
        gold: {
          400: '#f5c042',
          500: '#d4af37',
          600: '#b89228',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'Cormorant Garamond', 'serif'],
        handwriting: ['Caveat', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.03)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
