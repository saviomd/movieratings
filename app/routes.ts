import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

import { routePaths } from "./utils";

const p = (path: string) => path.slice(1);

export default [
  layout("routes/layouts/appLayout.tsx", [
    index("routes/ratings.tsx"),
    route(p(routePaths.diary()), "routes/diary.tsx"),
    route(p(routePaths.movie({ id: ":id" })), "routes/movie.$id.tsx"),
    route(p(routePaths.stats()), "routes/stats.tsx"),
  ]),
  route(p(routePaths.manifest()), "routes/manifest.json.ts"),
] satisfies RouteConfig;
