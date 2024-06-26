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
        secondary: {
          DEFAULT: '#8991BE',
          50: '#F2F2F8',
          100: '#E5E6F1',
          200: '#CACDE2',
          300: '#B0B5D4',
          400: '#8991BE',
          500: '#6E79AF',
          600: '#505B91',
          700: '#414A76',
          800: '#333A5C',
          900: '#1D2135',
          950: '#07080D',
        },
        contrast: {
          DEFAULT: '#E26D5C',
          50: '#FCEFEE',
          100: '#F6D0CB',
          200: '#F0B2A8',
          300: '#EA9386',
          400: '#E26D5C',
          500: '#E05B52',
          600: '#DA3A2F',
          700: '#AD281F',
          800: '#791C15',
          900: '#45100C',
          950: '#230806',
        },
        neutral: {
          DEFAULT: '#f5f1e3',
          50: '#EDFBFC',
          100: '#f5f1e3',
          200: '#E6DCB2',
          300: '#DCCD93',
          400: '#CDB865',
          500: '#B9A03C',
          600: '#9A8532',
          700: '#6C5D23',
          800: '#4D4319',
          900: '#2E280F',
          950: '#0F0D05',
        },
        foregrounddestructive: 'var(--foregrounddestructive)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        primary: 'var(--primary)',
        primaryForeground: 'var(--primary-foreground)',
        secondaryForeground: 'var(--secondary-foreground)',

        accentForeground: 'var(--accent-foreground)',
        destructive: 'var(--destructive)',
        destructiveForeground: 'var(--destructive-foreground)',
      },
    },
  },

  plugins: [],
} satisfies Config;
