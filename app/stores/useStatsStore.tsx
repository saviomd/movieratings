import { useMemo } from "react";

import type { MovieLoggedFormatted } from "~/types";
import { getRandomMovies, tmdbServices } from "~/utils";

interface IUseStatsStore {
  movieRatings: MovieLoggedFormatted[];
}

const useStatsStore = ({ movieRatings }: IUseStatsStore) => {
  const lastFourWatchedLogged = useMemo(
    () => movieRatings.slice(0, 4),
    [movieRatings],
  );

  const randomMoviesLogged = useMemo(
    () => getRandomMovies({ movieRatings, count: 8 }),
    [movieRatings],
  );

  const { lastFourWatched, lastFourWatchedStatus } =
    tmdbServices.useLastFourWatchedQuery({ lastFourWatchedLogged });

  const { randomMovies, randomMoviesStatus } =
    tmdbServices.useRandomMoviesQuery({ randomMoviesLogged });

  return {
    lastFourWatched,
    lastFourWatchedStatus,
    randomMovies,
    randomMoviesStatus,
  };
};

export default useStatsStore;
