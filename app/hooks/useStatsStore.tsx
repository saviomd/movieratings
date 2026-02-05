import { useQueries } from "@tanstack/react-query";
import type { QueryStatus } from "@tanstack/react-query";
import { useMemo } from "react";

import { useMovieRatingsContext } from "~/contexts/MovieRatingsContext";
import { formatRandomMovieList, getRandomMovies, tmdbServices } from "~/utils";

const { getSearchMovies } = tmdbServices;

const useStatsStore = () => {
  const { movieRatings } = useMovieRatingsContext();

  const movies = useMemo(
    () => getRandomMovies({ movieRatings, count: 6 }),
    [movieRatings],
  );

  const { data: randomMovies, status: randomMoviesStatus } = useQueries({
    queries: movies.length
      ? movies.map(({ LetterboxdURI, Name, Year }) => ({
          queryKey: ["randomMovies", Name, Year],
          queryFn: async () => {
            const { results } = await getSearchMovies({ Name, Year });
            return {
              LetterboxdURI,
              Name,
              poster_path: results[0].poster_path,
            };
          },
        }))
      : [],
    combine: (results) => ({
      data: results.every(({ status }) => status === "success")
        ? formatRandomMovieList({
            randomMovieList: results.flatMap(({ data }) =>
              data ? [data] : [],
            ),
          })
        : [],
      status: (results.some(({ status }) => status === "error")
        ? "error"
        : !results.length || results.some(({ status }) => status === "pending")
          ? "pending"
          : "success") as QueryStatus,
    }),
  });

  return {
    randomMovies,
    randomMoviesStatus,
  };
};

export default useStatsStore;
