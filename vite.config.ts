import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

import { name } from "./package.json";

export default defineConfig({
  base: `/${name}/`,
  plugins: [...(process.env.STORYBOOK ? [] : [reactRouter()]), tailwindcss()],
  resolve: {
    tsconfigPaths: true,
  },
});
