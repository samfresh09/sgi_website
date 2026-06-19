import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        // CSS-variable driven so the theme stays consistent everywhere
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // SGI brand palette (from logo: bright blue + red)
        brand: {
          50: "hsl(202 90% 96%)",
          100: "hsl(202 88% 90%)",
          200: "hsl(202 85% 80%)",
          300: "hsl(202 82% 68%)",
          400: "hsl(202 78% 57%)",
          500: "hsl(202 76% 47%)",
          600: "hsl(204 80% 40%)",
          700: "hsl(208 82% 32%)",
          800: "hsl(212 78% 24%)",
          900: "hsl(214 70% 16%)",
          950: "hsl(216 72% 11%)",
        },
        red: {
          500: "hsl(359 74% 56%)",
          600: "hsl(359 76% 50%)",
          700: "hsl(359 72% 43%)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Plus Jakarta Sans'", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        card: "0 4px 24px -6px hsl(212 60% 30% / 0.10)",
        elevated: "0 18px 48px -12px hsl(212 60% 30% / 0.22)",
        glow: "0 0 0 1px hsl(202 76% 47% / 0.15), 0 12px 40px -8px hsl(202 76% 47% / 0.35)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, hsl(212 30% 50% / 0.06) 1px, transparent 1px), linear-gradient(to bottom, hsl(212 30% 50% / 0.06) 1px, transparent 1px)",
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
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(20px) translateX(10px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.6" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 11s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite",
        marquee: "marquee 28s linear infinite",
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
