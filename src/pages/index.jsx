import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import LoadingHandler from "../components/LoadingHandler";

const PageMovieInfo = lazy(() => import("./PageMovieInfo"));
const PageMovies = lazy(() => import("./PageMovies"));
const PageNotFound = lazy(() => import("./PageNotFound"));
const PageStats = lazy(() => import("./PageStats"));

const pages = [
  {
    exact: true,
    path: "/",
    render: () => <PageMovies type="Ratings" />,
  },
  {
    exact: true,
    path: "/diary",
    render: () => <PageMovies type="Diary" />,
  },
  {
    exact: true,
    path: "/movie/:movieId",
    // eslint-disable-next-line react/prop-types
    render: ({ match }) => <PageMovieInfo match={match} />,
  },
  {
    exact: true,
    path: "/stats",
    render: () => <PageStats />,
  },
];

const Pages = () => (
  <Suspense fallback={<LoadingHandler dataStatus="loading" />}>
    <Switch>
      {pages.map(({ exact, path, render }) => (
        <Route exact={exact} key={path} path={path} render={render} />
      ))}
      <Route component={PageNotFound} />
    </Switch>
  </Suspense>
);

export default Pages;
