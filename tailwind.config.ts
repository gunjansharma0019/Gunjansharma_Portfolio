import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#05070D", // primary dark navy/black background
          light: "#FAFAFC", // light-mode background
        },
        surface: {
          DEFAULT: "#0B0F1A", // secondary dark section
          light: "#F1F1F6",
        },
        card: {
          DEFAULT: "rgba(255,255,255,0.03)",
          light: "rgba(10,14,26,0.03)",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.08)",
          light: "rgba(10,14,26,0.08)",
        },
        ink: {
          DEFAULT: "#F5F7FA", // heading text, dark mode
          light: "#0A0E1A", // heading text, light mode
        },
        muted: {
          DEFAULT: "#8E97AB", // secondary text, dark mode
          light: "#586074",
        },
        signal: {
          cyan: "#22D3EE",
          violet: "#8B5CF6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "signal-gradient": "linear-gradient(90deg, #22D3EE 0%, #8B5CF6 100%)",
      },
      keyframes: {
        "drift-1": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(12px, -18px)" },
        },
        "drift-2": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-16px, 14px)" },
        },
        "pulse-line": {
          "0%": { strokeDashoffset: "240" },
          "100%": { strokeDashoffset: "0" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        "drift-1": "drift-1 7s ease-in-out infinite",
        "drift-2": "drift-2 9s ease-in-out infinite",
        "pulse-line": "pulse-line 2.4s ease-out forwards",
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [],
};

export default config;
