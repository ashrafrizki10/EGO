import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        glow: '0 24px 80px rgba(56, 189, 248, 0.14)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(56,189,248,0.18), transparent 30%), linear-gradient(180deg, rgba(15,23,42,0.05), transparent 80%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
