import { useQueries, useQuery } from "@tanstack/react-query";
import type { QueryStatus } from "@tanstack/react-query";

import fetchClient from "./fetchClient";
import formatMovieDetails from "./formatMovieDetails";
import formatRandomMovieList from "./formatRandomMovieList";
import getRandomMovies from "./getRandomMovies";
import tmdbApi from "./tmdbApi";
import type { IMovieDetails, IMovieLoggedFormatted } from "~/types";

interface IFetchTmdb {
  path: string;
  queryString?: string;
}

const fetchTmdb = <T = unknown>({
  path,
  queryString = "",
}: IFetchTmdb): Promise<T> => {
  const { url, key } = tmdbApi;
  return fetchClient({
    url: `${url}${path}`,
    queryString: `api_key=${key}${queryString}`,
  });
};

interface IGetMovieDetails {
  movieId: number;
}

const getMovieDetails = ({
  movieId,
}: IGetMovieDetails): Promise<IMovieDetails> =>
  fetchTmdb({
    path: `movie/${String(movieId)}`,
    queryString:
      "&append_to_response=alternative_titles,credits,images,recommendations,watch/providers&language=en-US&include_image_language=null,en,pt&region=BR",
  });

interface IGetSearchMovies {
  Name: string;
  Year: number;
}

interface IGetSearchMoviesReturn {
  results: IMovieDetails[];
}

const getSearchMovies = ({
  Name,
  Year,
}: IGetSearchMovies): Promise<IGetSearchMoviesReturn> =>
  fetchTmdb({
    path: "search/movie",
    queryString: `&query=${Name}&year=${String(Year)}`,
  });

interface IUseMovieDetailsQuery {
  movie: IMovieLoggedFormatted;
}

const useMovieDetailsQuery = ({ movie }: IUseMovieDetailsQuery) => {
  const { data: movieDetails, status: movieDetailsStatus } = useQuery({
    queryKey: ["movieDetails", movie],
    queryFn: async () => {
      const searchMoviesData = await getSearchMovies({
        Name: movie.Name,
        Year: movie.Year,
      });
      const newMovie = searchMoviesData.results.find(
        ({ release_date, title }) =>
          title === movie.Name && release_date.includes(movie.Year.toString()),
      );
      if (newMovie) {
        const movieDetails = await getMovieDetails({ movieId: newMovie.id });
        return formatMovieDetails({ movie, movieDetails });
      }
      return null;
    },
    enabled: !!movie.Name && !!movie.Year,
  });

  return {
    movieDetails,
    movieDetailsStatus,
  };
};

interface IUseRandomMoviesQuery {
  randomMoviesLogged: ReturnType<typeof getRandomMovies>;
}

const useRandomMoviesQuery = ({
  randomMoviesLogged,
}: IUseRandomMoviesQuery) => {
  const { data: randomMovies, status: randomMoviesStatus } = useQueries({
    queries: randomMoviesLogged.length
      ? randomMoviesLogged.map(({ LetterboxdURI, Name, Year }) => ({
          queryKey: ["randomMovies", Name, Year],
          queryFn: async () => {
            const { results } = await getSearchMovies({
              Name,
              Year,
            });
            return {
              LetterboxdURI,
              Name,
              poster_path: results[0]?.poster_path,
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

export default {
  useMovieDetailsQuery,
  useRandomMoviesQuery,
};
