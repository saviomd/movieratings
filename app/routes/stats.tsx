import type { Route } from "./+types/stats";
import { loader } from "./loaders/statsLoader";
import { MovieStats, MoviesWatchedCard } from "~/components/app";
import { Heading, PageMetadata } from "~/components/library";
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

  const {
    lastFourWatched,
    lastFourWatchedStatus,
    randomMovies,
    randomMoviesStatus,
  } = useStatsStore({
    movieRatings,
  });

  return (
    <>
      <PageMetadata
        description="Breakdown of movies watched per year, rating, and release decade"
        path={routePaths.stats()}
        title="Stats"
      />
      <Heading level={1}>Stats</Heading>
      <MoviesWatchedCard
        movies={lastFourWatched}
        status={lastFourWatchedStatus}
        title="Last four watched"
      />
      <MovieStats list={moviesPerYearWatched} title="Per year watched" />
      <MovieStats list={moviesPerRatingGiven} title="Per rating given" />
      <MovieStats list={moviesPerDecadeReleased} title="Per decade released" />
      <MoviesWatchedCard
        movies={randomMovies}
        status={randomMoviesStatus}
        title="Random four (plus four) watched"
      />
    </>
  );
}
