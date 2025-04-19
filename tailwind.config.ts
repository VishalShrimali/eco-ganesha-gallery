
import type { Config } from "tailwindcss";

const config = {
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
            light: '#E7F5E4',
            DEFAULT: '#2DD4BF',
            dark: '#0F766E'
          },
          purple: {
            light: '#F3E8FF',
            DEFAULT: '#8B5CF6',
            dark: '#6D28D9'
          },
          orange: {
            light: '#FFE4E6',
            DEFAULT: '#F43F5E',
            dark: '#BE123C'
          },
          earth: {
            light: '#FEF3C7',
            DEFAULT: '#F59E0B',
            dark: '#B45309'
          }
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Playfair Display', 'serif']
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "fade-in": "fade-in 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
