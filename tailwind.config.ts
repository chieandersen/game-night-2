import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    fontFamily: {
      ...fontFamily,
      josefin: ['Josefin Sans', 'Noto Sans JP', ...fontFamily.sans],
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#18848C',
          50: '#EDFBFC',
          100: '#CBF3F6',
          200: '#B9EFF3',
          300: '#85E4EA',
          400: '#51D8E1',
          500: '#23C6D1',
          600: '#1EA5AE',
          700: '#18848C',
          800: '#0F5257',
          900: '#093134',
          950: '#031011',
        },
        accent: {
          DEFAULT: '#e1594d',
          50: '#EDFBFC',
          100: '#CBF3F6',
          200: '#B9EFF3',
          300: '#85E4EA',
          400: '#51D8E1',
          500: '#23C6D1',
          600: '#e1594d',
          700: '#18848C',
          800: '#0F5257',
          900: '#093134',
          950: '#031011',
        },
        neutral: {
          DEFAULT: '#f5f1e3',
          50: '#EDFBFC',
          100: '#CBF3F6',
          200: '#B9EFF3',
          300: '#85E4EA',
          400: '#51D8E1',
          500: '#23C6D1',
          600: '#f5f1e3',
          700: '#18848C',
          800: '#0F5257',
          900: '#093134',
          950: '#031011',
        },
        foregrounddestructive: 'var(--foregrounddestructive)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        primary: 'var(--primary)',
        primaryForeground: 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        secondaryForeground: 'var(--secondary-foreground)',

        accentForeground: 'var(--accent-foreground)',
        destructive: 'var(--destructive)',
        destructiveForeground: 'var(--destructive-foreground)',
      },
    },
  },

  plugins: [],
} satisfies Config;
