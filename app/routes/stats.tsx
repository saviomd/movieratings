import type { Route } from "./+types/stats";
import { clientLoader } from "./loaders/statsClientLoader";
import { loader } from "./loaders/statsLoader";
import { MovieStats, MoviesWatchedCard } from "~/components/app";
import { Deferred, Heading, PageMetadata } from "~/components/library";
import { routePaths } from "~/utils";

export { clientLoader, loader };

export default function Stats({ loaderData }: Route.ComponentProps) {
  const {
    lastFourWatched,
    moviesPerDecadeReleased,
    moviesPerRatingGiven,
    moviesPerYearWatched,
    randomMovies,
  } = loaderData;

  return (
    <>
      <PageMetadata
        description="Breakdown of movies watched per year, rating, and release decade"
        path={routePaths.stats()}
        title="Stats"
      />
      <Heading level={1}>Stats</Heading>
      <MoviesWatchedCard movies={lastFourWatched} title="Last four watched" />
      <MovieStats list={moviesPerYearWatched} title="Per year watched" />
      <MovieStats list={moviesPerRatingGiven} title="Per rating given" />
      <MovieStats list={moviesPerDecadeReleased} title="Per decade released" />
      <Deferred resolve={randomMovies}>
        {(resolvedRandomMovies) => (
          <MoviesWatchedCard
            movies={resolvedRandomMovies}
            title="Random four (plus four) watched"
          />
        )}
      </Deferred>
    </>
  );
}
