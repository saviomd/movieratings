import type { ComponentProps } from "react";

import { MoviePosterButton, MovieStats } from "~/components/app";
import { LoadingHandler, PageMetadata } from "~/components/library";
import useStatsStore from "~/stores/useStatsStore";

export default function Stats() {
  const {
    movieDiaryStatus,
    movieRatingsStatus,
    moviesPerDecadeReleased,
    moviesPerRatingGiven,
    moviesPerYearWatched,
    randomMovies,
    randomMoviesStatus,
  } = useStatsStore();

  const stats: ComponentProps<typeof MovieStats>[] = [
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
      <PageMetadata />
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
