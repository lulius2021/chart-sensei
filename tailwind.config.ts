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
          0: "#000000",    // pure black
          1: "#0a0a0a",    // near black
          2: "#111111",    // cards
          3: "#1a1a1a",    // elevated
          4: "#222222",    // borders
          5: "#2a2a2a",    // hover borders
        },
        text: {
          primary: "#f0f0f0",
          secondary: "#a0a0a0",
          muted: "#777777",
          dim: "#555555",
          faint: "#333333",
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
        "card": "0 4px 24px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
