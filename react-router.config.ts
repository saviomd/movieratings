import type { Config } from "@react-router/dev/config";

import { name } from "./package.json";

export default {
  basename: `/${name}/`,
  prerender: true,
  ssr: false,
} satisfies Config;
