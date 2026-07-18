/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        secondary: {
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
        },
        success:  { 400: '#34d399', 500: '#10b981', 600: '#059669' },
        warning:  { 400: '#fbbf24', 500: '#f59e0b', 600: '#d97706' },
        danger:   { 400: '#f87171', 500: '#ef4444', 600: '#dc2626' },
      },
      fontFamily: {
        sans:    ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'sans-serif'],
      },
      borderRadius: {
        xl:    '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        card:      '0 2px 8px 0 rgba(0,0,0,0.08)',
        'card-md': '0 4px 16px 0 rgba(0,0,0,0.10)',
        'card-lg': '0 8px 32px 0 rgba(0,0,0,0.12)',
        glow:      '0 0 20px rgba(99,102,241,0.35)',
      },
      animation: {
        'fade-in':   'fadeIn 0.3s ease',
        'slide-up':  'slideUp 0.3s ease',
        'bounce-in': 'bounceIn 0.4s cubic-bezier(0.34,1.56,0.64,1)',
      },
      keyframes: {
        fadeIn:   { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp:  { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        bounceIn: { from: { opacity: '0', transform: 'scale(0.8)' }, to: { opacity: '1', transform: 'scale(1)' } },
      },
    },
  },
  plugins: [],
}
