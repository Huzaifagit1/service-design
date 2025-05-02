import type { Config } from "tailwindcss"
import { shadcnPlugin } from "./lib/shadcn-plugin"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        stripe: {
          DEFAULT: "#6772e5",
          dark: "#5469d4",
        },
        paypal: {
          DEFAULT: "#0070ba",
          dark: "#003087",
        },
        status: {
          success: "hsl(var(--success))",
          error: "hsl(var(--destructive))",
          warning: "hsl(var(--warning))",
          info: "hsl(210, 100%, 50%)",
        },
        chart: {
          blue: "#3366CC",
          green: "#2A9D8F",
          red: "#E63946",
          gray: "#94a3b8",
          purple: "#8884d8",
        },
        industry: {
          plumbing: {
            from: "hsl(214, 100%, 60%)",
            to: "hsl(0, 0%, 40%)",
          },
          beauty: {
            from: "hsl(326, 100%, 60%)",
            to: "hsl(270, 100%, 60%)",
          },
          cleaning: {
            from: "hsl(214, 100%, 60%)",
            to: "hsl(142, 76%, 36%)",
          },
          electrical: {
            from: "hsl(38, 100%, 50%)",
            to: "hsl(25, 100%, 50%)",
          },
          servicesPro: {
            from: "hsl(255, 100%, 60%)",
            to: "hsl(214, 100%, 70%)",
          },
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "blink": "blink 1s step-end infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), shadcnPlugin],
}

export default config

