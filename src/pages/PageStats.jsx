import React from "react";

import MovieStats from "../components/MovieStats";
import ScrollableHorizontalList from "../components/ScrollableHorizontalList";
import { useMovieDiary } from "../contexts/MovieDiaryContext";
import { useMovieRatings } from "../contexts/MovieRatingsContext";

const PageStats = () => {
  const { moviesPerYearWatched, movieDiaryStatus } = useMovieDiary();
  const { moviesPerDecadeReleased, moviesPerRatingGiven, movieRatingsStatus } =
    useMovieRatings();
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
