/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#080D1A',
        surface: '#0D1526',
        'surface-2': '#111827',
        border: '#1E2D45',
        primary: '#3B6EF5',
        'primary-hover': '#2563EB',
        cyan: '#00D4FF',
        purple: '#A855F7',
        triangle: '#3B82F6',
        'text-primary': '#F0F6FF',
        'text-secondary': '#A0B0CC',
        'text-muted': '#5A6A85',
        success: '#00E5A0',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #00D4FF 0%, #3B6EF5 50%, #A855F7 100%)',
        'hero-orb-cyan': 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)',
        'hero-orb-purple': 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'node': 'node 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        node: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}

