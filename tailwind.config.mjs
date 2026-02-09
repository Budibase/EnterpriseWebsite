

// tailwind.config.mjs
export default {
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
  
        white: '#FFFFFF',
        black: '#000000',
  
        grey: {
          50:  '#FAF9F5',
          100: '#F0EEE6',
          200: '#E5E4DF',
          300: '#BFBFBA',
          400: '#91918D',
          500: '#666663',
          600: '#40403E',
          700: '#2F2F2D',
          800: '#262625',
          900: '#191919',
          950: '#0F0F0F',
        },
  
        stone: {
          50:  '#FAF9F5',
          100: '#F0EEE6',
          200: '#E5E4DF',
          300: '#BFBFBA',
          400: '#91918D',
          500: '#666663',
          600: '#40403E',
          700: '#2F2F2D',
          800: '#262625',
          900: '#191919',
          950: '#0F0F0F',
        },
  
        blue: {
          100: '#EAF2F9',
          200: '#C3DAEA',
          300: '#89B5E2',
          400: '#6A9BCC',
          500: '#467DB4',
          600: '#215F9E',
          700: '#1B436A',
          800: '#13324F',
          900: '#0C2236',
        },
  
        sky: {
          100: '#EAF2F9',
          200: '#C3DAEA',
          300: '#89B5E2',
          400: '#6A9BCC',
          500: '#467DB4',
          600: '#215F9E',
          700: '#1B436A',
          800: '#13324F',
          900: '#0C2236',
        },
  
        orange: {
          100: '#F6E6DA',
          200: '#ECD3C2',
          300: '#DDB99A',
          400: '#D4A27F',
          500: '#D97757',
          600: '#C86240',
          700: '#AA4321',
          800: '#7F3118',
          900: '#4A1D0E',
        },
  
        green: {
          100: '#EEF3E9',
          200: '#D2DDC3',
          300: '#B6C7A8',
          400: '#9FB88A',
          500: '#8CA171',
          600: '#788C5D',
          700: '#4C622F',
          800: '#35461F',
          900: '#1F2A12',
        },
  
        purple: {
          100: '#F1EEFB',
          200: '#D2CCEF',
          300: '#BDB0F5',
          400: '#A292E3',
          500: '#8777D1',
          600: '#585392',
          700: '#363174',
          800: '#252154',
          900: '#171336',
        },
        red: {
            100: '#F4E7E4',
            200: '#E9C8C3',
            300: '#D9A29A',
            400: '#C87C72',
            500: '#B4564B',
            600: '#9C3F36',
            700: '#7E2C24',
            800: '#5A1E19',
            900: '#361210',
          },
      },
  
      extend: {
        colors: {
          bg: 'rgb(var(--bg) / <alpha-value>)',
          surface: 'rgb(var(--surface) / <alpha-value>)',
          'surface-2': 'rgb(var(--surface-2) / <alpha-value>)',
  
          border: 'rgb(var(--border) / <alpha-value>)',
          'border-strong': 'rgb(var(--border-strong) / <alpha-value>)',
  
          text: 'rgb(var(--text) / <alpha-value>)',
          'text-muted': 'rgb(var(--text-muted) / <alpha-value>)',
          'text-subtle': 'rgb(var(--text-subtle) / <alpha-value>)',
  
          primary: 'rgb(var(--primary) / <alpha-value>)',
          'primary-hover': 'rgb(var(--primary-hover) / <alpha-value>)',
          'primary-active': 'rgb(var(--primary-active) / <alpha-value>)',
          'on-primary': 'rgb(var(--on-primary) / <alpha-value>)',

          brand: 'rgb(var(--brand) / <alpha-value>)',
          'brand-hover': 'rgb(var(--brand-hover) / <alpha-value>)',
          'on-brand': 'rgb(var(--on-brand) / <alpha-value>)',

          accent: 'rgb(var(--accent) / <alpha-value>)',
          success: 'rgb(var(--success) / <alpha-value>)',
          warning: 'rgb(var(--warning) / <alpha-value>)',
          danger: 'rgb(var(--danger) / <alpha-value>)',
  
          ring: 'rgb(var(--ring) / <alpha-value>)',
        },
      },
    },
  }
