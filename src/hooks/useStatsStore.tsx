import { useQueries } from "@tanstack/react-query";
import { useMemo } from "react";

import { useMovieRatingsContext } from "src/contexts/MovieRatingsContext";
import { IMovieLoggedFormatted } from "src/types";
import { formatRandomMovieList, tmdbServices } from "src/utils";

const { getSearchMovies } = tmdbServices;

interface IMovieRatingContext {
  movieRatings: IMovieLoggedFormatted[];
}

const useStatsStore = () => {
  const { movieRatings } = useMovieRatingsContext() as IMovieRatingContext;

  const movies = useMemo(
    () =>
      movieRatings
        .sort(() => 0.5 - Math.random())
        .slice(0, 6)
        .map(({ LetterboxdURI, Name, Rating, Year }) => ({
          LetterboxdURI,
          Name,
          Rating,
          Year,
        })),
    [movieRatings],
  );

  const { data: randomMovies = [], status: randomMoviesStatus } = useQueries({
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
            randomMovieList: results.map(({ data }) => data!),
          })
        : [],
      status: results.reduce(
        (acc, curr) =>
          acc === "error" || (acc === "pending" && curr.status === "success")
            ? acc
            : curr.status,
        "",
      ),
    }),
  });

  return {
    randomMovies,
    randomMoviesStatus,
  };
};

export default useStatsStore;