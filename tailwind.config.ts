import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          main: "#0B1325",
          card: "#131E36",
          hover: "#1A2747",
          dark: "#070D1B",
        },
        brand: {
          blue: "#0066FF",
          light: "#00D2FF",
        },
        gold: {
          DEFAULT: "#FFB800",
          dark: "#FF9900",
        },
        semantic: {
          success: "#00D68F",
          warning: "#FFB800",
          error: "#FF4757",
        },
      },
      fontFamily: {
        display: ["Cabinet Grotesk", "-apple-system", "sans-serif"],
        body: ["Outfit", "-apple-system", "sans-serif"],
        data: ["Geist", "monospace"],
        mono: ["Geist Mono", "monospace"],
      },
      borderRadius: {
        sm: "8px",
        md: "16px",
        lg: "24px",
      },
      boxShadow: {
        "blue-glow": "0 4px 20px rgba(0, 210, 255, 0.25)",
        "blue-glow-lg": "0 0 35px rgba(0, 210, 255, 0.35)",
        "gold-glow": "0 4px 20px rgba(255, 184, 0, 0.25)",
        "card-glass": "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "blue-gradient": "linear-gradient(135deg, #0066FF 0%, #00D2FF 100%)",
        "gold-gradient": "linear-gradient(135deg, #FF9900 0%, #FFB800 100%)",
        "hero-glow":
          "radial-gradient(circle at 50% 0%, rgba(0, 102, 255, 0.18) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
