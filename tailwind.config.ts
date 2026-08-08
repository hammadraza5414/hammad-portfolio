import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#050505",
        charcoal: "#0A0A0A",
        crimson: "#FF2E2E",
      },
    },
  },
  plugins: [],
};
export default config;
