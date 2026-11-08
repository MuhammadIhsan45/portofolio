/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#090A0D',
          900: '#11141A',
          800: '#1B202A',
          700: '#2A3241',
          600: '#475569',
          500: '#64748B',
          400: '#94A3B8',
          300: '#CBD5E1',
          200: '#E2E8F0',
          100: '#F1F5F9',
          50: '#F8FAFC',
        },
        paper: {
          canvas: '#F6F6F2',
          surface: '#FFFFFF',
          alt: '#EDEDE8',
          darkCanvas: '#0D0F12',
          darkSurface: '#16191F',
          darkAlt: '#212631',
        },
        brand: {
          blue: '#1D4ED8',      // Bold Electric Cobalt
          blueDark: '#1E40AF',
          amber: '#D97706',     // Bold Warm Ochre / Tangerine
          amberDark: '#B45309',
          emerald: '#059669',   // Bold Forest Jade
          crimson: '#DC2626',   // Bold Crisp Red
          violet: '#6366F1',    // Bold Violet
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'solid-xs': '1px 1px 0px #11141A',
        'solid-sm': '2px 2px 0px #11141A',
        'solid': '4px 4px 0px #11141A',
        'solid-lg': '6px 6px 0px #11141A',
        'solid-xl': '8px 8px 0px #11141A',
        'solid-white-sm': '2px 2px 0px #F8FAFC',
        'solid-white': '4px 4px 0px #F8FAFC',
        'solid-blue': '4px 4px 0px #1D4ED8',
        'solid-amber': '4px 4px 0px #D97706',
        'solid-emerald': '4px 4px 0px #059669',
      }
    },
  },
  plugins: [],
};
