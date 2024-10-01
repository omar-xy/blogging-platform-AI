import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cardBg: "#1c1c24",        // Add custom color for card background
        lightGray: "#808191",     // Add custom color for text
        highlight: "#22c55e",     // Custom green color for tags like 'TECH'
      },
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],  // Add custom font globally
      },
    },
  },
  plugins: [],
};
export default config;
