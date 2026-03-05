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
        brand: {
          DEFAULT: "#34d399",
          light: "#6ee7b7",
          dark: "#059669",
          muted: "rgba(52, 211, 153, 0.1)",
          glow: "rgba(52, 211, 153, 0.15)",
        },
        surface: {
          0: "#0f1221",    // deepest navy bg
          1: "#141831",    // sidebar/nav
          2: "#1a1f3a",    // cards
          3: "#212747",    // elevated cards/inputs
          4: "#2a3155",    // borders
          5: "#343c63",    // hover borders
        },
        text: {
          primary: "#eef0f6",
          secondary: "#a0a8c0",
          muted: "#7a84a3",
          dim: "#565f80",
          faint: "#3d4566",
        },
        profit: "#34d399",
        loss: "#fb7185",
        warn: "#fbbf24",
        accent: {
          blue: "#60a5fa",
          purple: "#a78bfa",
          teal: "#2dd4bf",
          amber: "#fbbf24",
          rose: "#fb7185",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(52, 211, 153, 0.15)",
        "glow-sm": "0 0 10px rgba(52, 211, 153, 0.1)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
