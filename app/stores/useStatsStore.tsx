import { useMemo } from "react";

import type { IMovieLoggedFormatted } from "~/types";
import { getRandomMovies, tmdbServices } from "~/utils";

interface IUseStatsStore {
  movieRatings: IMovieLoggedFormatted[];
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
