import { MoviePosterButton, MovieStats } from "src/components/app";
import { LoadingHandler } from "src/components/library";
import { useMovieDiaryContext } from "src/contexts/MovieDiaryContext";
import type { MovieDiaryStoreType } from "src/contexts/MovieDiaryContext";
import { useMovieRatingsContext } from "src/contexts/MovieRatingsContext";
import type { MovieRatingsStoreType } from "src/contexts/MovieRatingsContext";
import { useStatsContext } from "src/contexts/StatsContext";
import type { StatsStoreType } from "src/contexts/StatsContext";

function StatsRoute() {
  const { moviesPerYearWatched, movieDiaryStatus } =
    useMovieDiaryContext() as MovieDiaryStoreType;
  const { moviesPerDecadeReleased, moviesPerRatingGiven, movieRatingsStatus } =
    useMovieRatingsContext() as MovieRatingsStoreType;
  const { randomMovies, randomMoviesStatus } =
    useStatsContext() as StatsStoreType;

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

export default StatsRoute;
