import type { Config } from "tailwindcss";
import { shadcnPreset } from "./plugins/shadcn-preset";

const config: Omit<Config, "content"> = {
  presets: [shadcnPreset],
};

export default config;
