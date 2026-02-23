import type { Route } from "./+types/stats";
import { loader } from "./loaders/statsLoader";
import { MovieStats, RandomMovies } from "~/components/app";
import { PageMetadata } from "~/components/library";
import useStatsStore from "~/stores/useStatsStore";
import { routePaths } from "~/utils";

export { loader };

export default function Stats({ loaderData }: Route.ComponentProps) {
  const {
    movieRatings,
    moviesPerDecadeReleased,
    moviesPerRatingGiven,
    moviesPerYearWatched,
  } = loaderData;

  const { randomMovies, randomMoviesStatus } = useStatsStore({
    movieRatings,
  });

  return (
    <>
      <PageMetadata
        description="Breakdown of movies watched per year, rating, and release decade"
        path={routePaths.stats()}
        title="Stats"
      />
      <MovieStats
        moviesPerDecadeReleased={moviesPerDecadeReleased}
        moviesPerRatingGiven={moviesPerRatingGiven}
        moviesPerYearWatched={moviesPerYearWatched}
      />
      <RandomMovies
        randomMovies={randomMovies}
        randomMoviesStatus={randomMoviesStatus}
      />
    </>
  );
}
