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
        },
        surface: {
          0: "#09090b",
          1: "#0c0c0e",
          2: "#111113",
          3: "#141416",
          4: "#1c1c1e",
        },
        text: {
          primary: "#e4e4e7",
          secondary: "#a1a1aa",
          muted: "#71717a",
          dim: "#52525b",
          faint: "#3f3f46",
        },
        profit: "#34d399",
        loss: "#fb7185",
        warn: "#fbbf24",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
