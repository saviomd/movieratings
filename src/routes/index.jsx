import React, { lazy } from "react";

const ErrorRoute = lazy(() => import("./ErrorRoute"));
const MovieDetailsRoute = lazy(() => import("./MovieDetailsRoute"));
const MoviesRoute = lazy(() => import("./MoviesRoute"));
const RootRoute = lazy(() => import("./RootRoute"));
const StatsRoute = lazy(() => import("./StatsRoute"));

const routes = [
  {
    path: "/",
    element: <RootRoute />,
    errorElement: <ErrorRoute />,
    children: [
      {
        index: true,
        element: <MoviesRoute type="Ratings" />,
      },
      {
        path: "/diary",
        element: <MoviesRoute type="Diary" />,
      },
      {
        path: "/movie/:movieId",
        element: <MovieDetailsRoute />,
      },
      {
        path: "/stats",
        element: <StatsRoute />,
      },
    ],
  },
];

export default routes;
