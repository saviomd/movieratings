import React from "react";

import { MovieStats } from "../components/app";
import { useMovieDiaryContext } from "../contexts/MovieDiaryContext";
import { useMovieRatingsContext } from "../contexts/MovieRatingsContext";

function PageStats() {
  const { moviesPerYearWatched, movieDiaryStatus } = useMovieDiaryContext();
  const { moviesPerDecadeReleased, moviesPerRatingGiven, movieRatingsStatus } =
    useMovieRatingsContext();
  return (
    <>
      <h1 className="h4">Stats</h1>
      <div className="mb-3">
        <MovieStats
          movies={moviesPerYearWatched}
          moviesStatus={movieDiaryStatus}
          type="moviesPerYearWatched"
        />
      </div>
      <div className="mb-3">
        <MovieStats
          movies={moviesPerRatingGiven}
          moviesStatus={movieRatingsStatus}
          type="moviesPerRatingGiven"
        />
      </div>
      <div className="mb-3">
        <MovieStats
          movies={moviesPerDecadeReleased}
          moviesStatus={movieRatingsStatus}
          type="moviesPerDecadeReleased"
        />
      </div>
    </>
  );
}

export default PageStats;
