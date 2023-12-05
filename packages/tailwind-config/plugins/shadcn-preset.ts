import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import { shadcnPlugin } from "./shadcn-plugin";

export const shadcnPreset: Config = {
  darkMode: ["class"],
  content: [],
  plugins: [animatePlugin, shadcnPlugin],
};
