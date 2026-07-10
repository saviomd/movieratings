import { useQueries, useQuery } from "@tanstack/react-query";

import fetchClient from "./fetchClient";
import formatMovieDetails from "./formatMovieDetails";
import formatPosterMovieList from "./formatPosterMovieList";
import getRandomMovies from "./getRandomMovies";
import tmdbApi from "./tmdbApi";
import type { DataStatus, MovieDetails, MovieLoggedFormatted } from "~/types";

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
}: IGetMovieDetails): Promise<MovieDetails> =>
  fetchTmdb({
    path: `movie/${String(movieId)}`,
    queryString:
      "&append_to_response=alternative_titles,credits,images,recommendations,watch/providers&language=en-US&include_image_language=null,en,pt&region=BR",
  });

interface IGetSearchMovies {
  name: string;
  year: number;
}

interface IGetSearchMoviesReturn {
  results: MovieDetails[];
}

const getSearchMovies = ({
  name,
  year,
}: IGetSearchMovies): Promise<IGetSearchMoviesReturn> =>
  fetchTmdb({
    path: "search/movie",
    queryString: `&query=${name}&year=${String(year)}`,
  });

interface IUseLastFourWatchedQuery {
  lastFourWatchedLogged: IUseMoviePostersQuery["movies"];
}

const useLastFourWatchedQuery = ({
  lastFourWatchedLogged,
}: IUseLastFourWatchedQuery) => {
  const { data: lastFourWatched, status: lastFourWatchedStatus } =
    useMoviePostersQuery({
      movies: lastFourWatchedLogged,
      queryKey: "lastFourWatched",
    });

  return {
    lastFourWatched,
    lastFourWatchedStatus,
  };
};

interface IUseMovieDetailsQuery {
  movie: MovieLoggedFormatted;
}

const useMovieDetailsQuery = ({ movie }: IUseMovieDetailsQuery) => {
  const { data: movieDetails, status: movieDetailsStatus } = useQuery({
    queryKey: ["movieDetails", movie],
    queryFn: async () => {
      const searchMoviesData = await getSearchMovies({
        name: movie.name,
        year: movie.year,
      });
      const newMovie = searchMoviesData.results.find(
        ({ release_date, title }) =>
          title === movie.name && release_date.includes(movie.year.toString()),
      );
      if (newMovie) {
        const movieDetails = await getMovieDetails({ movieId: newMovie.id });
        return formatMovieDetails({ movie, movieDetails });
      }
      return null;
    },
    enabled: !!movie.name && !!movie.year,
  });

  return {
    movieDetails,
    movieDetailsStatus,
  };
};

interface IUseMoviePostersQuery {
  movies: MovieLoggedFormatted[] | ReturnType<typeof getRandomMovies>;
  queryKey: string;
}

interface IUseMoviePostersQueryCombinedReturn {
  data: ReturnType<typeof formatPosterMovieList>;
  status: DataStatus;
}

const useMoviePostersQuery = ({ movies, queryKey }: IUseMoviePostersQuery) => {
  const { data, status } = useQueries({
    queries: movies.length
      ? movies.map(({ letterboxdURI, name, rating, year }) => ({
          queryKey: [queryKey, name, year],
          queryFn: async () => {
            const { results } = await getSearchMovies({ name, year });
            return {
              letterboxdURI,
              name,
              poster_path: results[0]?.poster_path,
              rating,
              year,
            };
          },
        }))
      : [],
    combine: (results): IUseMoviePostersQueryCombinedReturn => ({
      data: results.every(({ status }) => status === "success")
        ? formatPosterMovieList({
            posterMovieList: results.flatMap(({ data }) =>
              data ? [data] : [],
            ),
          })
        : [],
      status: results.some(({ status }) => status === "error")
        ? "error"
        : !results.length || results.some(({ status }) => status === "pending")
          ? "pending"
          : "success",
    }),
  });

  return {
    data,
    status,
  };
};

interface IUseRandomMoviesQuery {
  randomMoviesLogged: IUseMoviePostersQuery["movies"];
}

const useRandomMoviesQuery = ({
  randomMoviesLogged,
}: IUseRandomMoviesQuery) => {
  const { data: randomMovies, status: randomMoviesStatus } =
    useMoviePostersQuery({
      movies: randomMoviesLogged,
      queryKey: "randomMovies",
    });

  return {
    randomMovies,
    randomMoviesStatus,
  };
};

export default {
  useLastFourWatchedQuery,
  useMovieDetailsQuery,
  useRandomMoviesQuery,
};
