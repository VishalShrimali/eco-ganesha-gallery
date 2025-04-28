import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eco: {
          green: {
            light: '#E6F3D7',
            DEFAULT: '#7AB73C',
            dark: '#3A6B35'
          },
          purple: {
            light: '#E8E0F7',
            DEFAULT: '#8A4FFF',
            dark: '#5A2EA3'
          },
          orange: {
            light: '#FDE1D3',
            DEFAULT: '#F97316',
            dark: '#C2410C'
          },
          earth: {
            light: '#D7C0AE',
            DEFAULT: '#A67C52',
            dark: '#5D4037'
          }
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Playfair Display', 'serif']
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
