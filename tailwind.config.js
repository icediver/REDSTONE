/** @type {import('tailwindcss').Config} */
import { plugins, theme } from "./src/config/tailwind";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: theme,
  plugins: plugins,
};
