import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

import { routePaths } from "./utils";

export default [
  layout("routes/layouts/appLayout.tsx", [
    index("routes/ratings.tsx"),
    route(routePaths.diary(), "routes/diary.tsx"),
    route(routePaths.movie({ id: ":id" }), "routes/movie.$id.tsx"),
    route(routePaths.stats(), "routes/stats.tsx"),
  ]),
  route(routePaths.manifest(), "routes/manifest.json.ts"),
] satisfies RouteConfig;
