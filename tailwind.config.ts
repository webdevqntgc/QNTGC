import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#B01117',
          'red-dark': '#8C0E12',
          navy: '#002561',
          'navy-dark': '#001a47',
          'navy-light': '#0a3a8a',
          grey: '#919497',
          'grey-light': '#F4F5F6',
          'grey-soft': '#E8EAEC',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        ar: ['var(--font-almarai)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 7vw, 6.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.25rem, 5vw, 4.5rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(ellipse at top, rgba(0,37,97,0.08), transparent 60%), radial-gradient(ellipse at bottom right, rgba(176,17,23,0.06), transparent 50%)',
        'navy-gradient': 'linear-gradient(135deg, #002561 0%, #001a47 100%)',
        'red-gradient': 'linear-gradient(135deg, #B01117 0%, #8C0E12 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'orbit-slow': 'orbit 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulseSoft 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        orbit: { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        pulseSoft: { '0%, 100%': { opacity: '0.4' }, '50%': { opacity: '0.8' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
      boxShadow: {
        'soft': '0 2px 30px -10px rgba(0,37,97,0.15)',
        'glow-red': '0 0 40px rgba(176,17,23,0.25)',
        'glow-navy': '0 0 40px rgba(0,37,97,0.25)',
        'card': '0 4px 24px -6px rgba(0,37,97,0.12)',
        'card-hover': '0 16px 48px -12px rgba(0,37,97,0.25)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
