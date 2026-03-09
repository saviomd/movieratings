import { useMemo } from "react";

import type { MovieLoggedFormatted } from "~/types";
import { getRandomMovies, tmdbServices } from "~/utils";

interface IUseStatsStore {
  movieRatings: MovieLoggedFormatted[];
}

const useStatsStore = ({ movieRatings }: IUseStatsStore) => {
  const randomMoviesLogged = useMemo(
    () => getRandomMovies({ movieRatings, count: 6 }),
    [movieRatings],
  );

  const { randomMovies, randomMoviesStatus } =
    tmdbServices.useRandomMoviesQuery({ randomMoviesLogged });

  return {
    randomMovies,
    randomMoviesStatus,
  };
};

export default useStatsStore;
