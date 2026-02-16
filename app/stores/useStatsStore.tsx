import { useMemo } from "react";

import { formatMovieList, getRandomMovies, tmdbServices } from "~/utils";

interface IUseStatsStore {
  movieRatings: ReturnType<typeof formatMovieList>;
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
