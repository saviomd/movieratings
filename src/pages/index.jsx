import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import LoadingHandler from "../components/LoadingHandler";

const PageMovieDetails = lazy(() => import("./PageMovieDetails"));
const PageMovies = lazy(() => import("./PageMovies"));
const PageNotFound = lazy(() => import("./PageNotFound"));
const PageStats = lazy(() => import("./PageStats"));

function Pages() {
  return (
    <Suspense fallback={<LoadingHandler dataStatus="loading" />}>
      <Routes>
        <Route element={<PageMovies type="Ratings" />} path="/" />
        <Route element={<PageMovies type="Diary" />} path="/diary" />
        <Route element={<PageMovieDetails />} path="/movie/:movieId" />
        <Route element={<PageStats />} path="/stats" />
        <Route element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}

export default Pages;
