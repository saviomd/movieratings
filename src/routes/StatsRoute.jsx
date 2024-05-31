import React, { useEffect } from "react";

import { MoviePosterButton, MovieStats } from "src/components/app";
import { LoadingHandler } from "src/components/library";
import { useMovieDiaryContext } from "src/contexts/MovieDiaryContext";
import { useMovieRatingsContext } from "src/contexts/MovieRatingsContext";
import { useStatsContext } from "src/contexts/StatsContext";

function PageStats() {
  const { moviesPerYearWatched, movieDiaryStatus } = useMovieDiaryContext();
  const {
    moviesPerDecadeReleased,
    moviesPerRatingGiven,
    movieRatings,
    movieRatingsStatus,
  } = useMovieRatingsContext();
  const { loadRandomMovies, randomMovies, randomMoviesStatus } =
    useStatsContext();

  const stats = [
    {
      movies: moviesPerYearWatched,
      moviesStatus: movieDiaryStatus,
      type: "moviesPerYearWatched",
    },
    {
      movies: moviesPerRatingGiven,
      moviesStatus: movieRatingsStatus,
      type: "moviesPerRatingGiven",
    },
    {
      movies: moviesPerDecadeReleased,
      moviesStatus: movieRatingsStatus,
      type: "moviesPerDecadeReleased",
    },
  ];

  useEffect(() => {
    if (movieRatingsStatus === "loaded" && randomMoviesStatus === "") {
      const movies = movieRatings
        .sort(() => 0.5 - Math.random())
        .slice(0, 6)
        .map(({ LetterboxdURI, Name, Rating, Year }) => ({
          LetterboxdURI,
          Name,
          Rating,
          Year,
        }));
      loadRandomMovies({ movies });
    }
  }, [loadRandomMovies, movieRatings, movieRatingsStatus, randomMoviesStatus]);

  return (
    <>
      <h1 className="h4">Stats</h1>
      {stats.map(({ movies, moviesStatus, type }) => (
        <div className="mb-3" key={type}>
          <MovieStats movies={movies} moviesStatus={moviesStatus} type={type} />
        </div>
      ))}
      <LoadingHandler
        dataStatus={randomMoviesStatus}
        hasData={!!randomMovies.length}
      >
        <div className="row">
          {randomMovies.map(({ movie_path, Name, poster_url }) => (
            <div className="col-6 col-sm-4 mb-3" key={Name}>
              <MoviePosterButton
                href={movie_path}
                posterUrl={poster_url}
                title={Name}
              />
            </div>
          ))}
        </div>
      </LoadingHandler>
    </>
  );
}

export default PageStats;
