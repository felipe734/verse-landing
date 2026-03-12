import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        verse: {
          50: "#fff6f1",
          100: "#ffe8dd",
          200: "#ffd0bb",
          300: "#ffb08f",
          400: "#fb8962",
          500: "#f36a3d",
          600: "#dd5125",
          700: "#b53e18",
          800: "#8f3318",
          900: "#742f18",
          950: "#3f1409",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0, 0, 0, 0.04)",
        md: "0 12px 32px -8px rgba(0, 0, 0, 0.08), 0 4px 8px -2px rgba(0, 0, 0, 0.03)",
        lg: "0 24px 48px -12px rgba(0, 0, 0, 0.12)",
        glow: "0 8px 32px -8px rgba(243, 106, 61, 0.35)",
        "glow-lg": "0 16px 48px -12px rgba(243, 106, 61, 0.4)",
      },
      keyframes: {
        slideDown: {
          from: { height: "0px", opacity: "0" },
          to: {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
        },
        slideUp: {
          from: {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
          to: { height: "0px", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulse_ring: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "slideDown 0.2s ease-out",
        "accordion-up": "slideUp 0.2s ease-out",
        float: "float 5s ease-in-out infinite",
        "pulse-ring": "pulse_ring 2s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
