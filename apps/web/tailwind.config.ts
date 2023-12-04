// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "tailwind-config/tailwind.config.ts";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/app/**/*.tsx", "../../packages/ui/**/*.tsx"],
  presets: [sharedConfig],
};

export default config;
