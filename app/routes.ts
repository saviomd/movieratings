import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/appLayout.tsx", [
    index("routes/home.tsx"),
    route("diary", "routes/diary.tsx"),
    route("movie/:movieId", "routes/movie.tsx"),
    route("stats", "routes/stats.tsx"),
  ]),
  route("manifest.json", "routes/webAppManifest.ts"),
] satisfies RouteConfig;
