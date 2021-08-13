import React, { useContext } from "react";

import MovieStats from "../components/MovieStats";
import MovieDiaryContext from "../contexts/MovieDiaryContext";
import MovieRatingsContext from "../contexts/MovieRatingsContext";

const PageStats = () => {
  const { moviesPerYearWatched, movieDiaryStatus } =
    useContext(MovieDiaryContext);
  const { moviesPerDecadeReleased, moviesPerRatingGiven, movieRatingsStatus } =
    useContext(MovieRatingsContext);
  return (
    <>
      <h1 className="h4">Stats</h1>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 mb-3">
          <MovieStats
            movies={moviesPerYearWatched}
            moviesStatus={movieDiaryStatus}
            type="moviesPerYearWatched"
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 mb-3">
          <MovieStats
            movies={moviesPerRatingGiven}
            moviesStatus={movieRatingsStatus}
            type="moviesPerRatingGiven"
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 mb-3">
          <MovieStats
            movies={moviesPerDecadeReleased}
            moviesStatus={movieRatingsStatus}
            type="moviesPerDecadeReleased"
          />
        </div>
      </div>
    </>
  );
};

export default PageStats;
