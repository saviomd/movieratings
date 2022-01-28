import React from "react";

import MovieStats from "../components/MovieStats";
import ScrollableHorizontalList from "../components/ScrollableHorizontalList";
import { useMovieDiaryContext } from "../contexts/MovieDiaryContext";
import { useMovieRatingsContext } from "../contexts/MovieRatingsContext";

const PageStats = () => {
  const { moviesPerYearWatched, movieDiaryStatus } = useMovieDiaryContext();
  const { moviesPerDecadeReleased, moviesPerRatingGiven, movieRatingsStatus } =
    useMovieRatingsContext();
  return (
    <>
      <h1 className="h4">Stats</h1>
      <ScrollableHorizontalList>
        <div className="col-9 col-sm-5 col-md-4">
          <MovieStats
            movies={moviesPerYearWatched}
            moviesStatus={movieDiaryStatus}
            type="moviesPerYearWatched"
          />
        </div>
        <div className="col-9 col-sm-5 col-md-4">
          <MovieStats
            movies={moviesPerRatingGiven}
            moviesStatus={movieRatingsStatus}
            type="moviesPerRatingGiven"
          />
        </div>
        <div className="col-9 col-sm-5 col-md-4">
          <MovieStats
            movies={moviesPerDecadeReleased}
            moviesStatus={movieRatingsStatus}
            type="moviesPerDecadeReleased"
          />
        </div>
      </ScrollableHorizontalList>
    </>
  );
};

export default PageStats;
