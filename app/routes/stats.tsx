import type { ComponentProps } from "react";

import type { Route } from "./+types/stats";
import statsLoader from "./loaders/statsLoader";
import { MoviePosterButton, MovieStats } from "~/components/app";
import { LoadingHandler, PageMetadata } from "~/components/library";
import useStatsStore from "~/stores/useStatsStore";

export { statsLoader as loader };

export default function Stats({ loaderData }: Route.ComponentProps) {
  const {
    moviesPerDecadeReleased,
    moviesPerRatingGiven,
    moviesPerYearWatched,
    randomMoviesLogged,
  } = loaderData;

  const { randomMovies, randomMoviesStatus } = useStatsStore({
    randomMoviesLogged,
  });

  const stats: ComponentProps<typeof MovieStats>[] = [
    {
      movies: moviesPerYearWatched,
      type: "moviesPerYearWatched",
    },
    {
      movies: moviesPerRatingGiven,
      type: "moviesPerRatingGiven",
    },
    {
      movies: moviesPerDecadeReleased,
      type: "moviesPerDecadeReleased",
    },
  ];

  return (
    <>
      <PageMetadata />
      <h1 className="h4">Stats</h1>
      {stats.map(({ movies, type }) => (
        <div className="mb-3" key={type}>
          <MovieStats movies={movies} type={type} />
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
