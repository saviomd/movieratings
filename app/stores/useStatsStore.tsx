import { tmdbServices } from "~/utils";

interface IUseStatsStore {
  randomMoviesLogged: Parameters<
    typeof tmdbServices.useRandomMoviesQuery
  >[0]["randomMoviesLogged"];
}

const useStatsStore = ({ randomMoviesLogged }: IUseStatsStore) => {
  const { randomMovies, randomMoviesStatus } =
    tmdbServices.useRandomMoviesQuery({ randomMoviesLogged });

  return {
    randomMovies,
    randomMoviesStatus,
  };
};

export default useStatsStore;
