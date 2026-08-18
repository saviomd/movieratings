import fetchClient from "./fetchClient";
import formatMovieDetails from "./formatMovieDetails";
import formatPosterMovieList from "./formatPosterMovieList";
import queryClient from "./queryClient";
import tmdbApi from "./tmdbApi";
import type { MovieDetails, MovieLoggedFormatted } from "~/types";

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

interface IQueryMovieDetails {
  movie: MovieLoggedFormatted;
}

const queryMovieDetails = async ({ movie }: IQueryMovieDetails) => {
  return queryClient.fetchQuery({
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
  });
};

interface IQueryMoviePosters {
  movies: Pick<
    MovieLoggedFormatted,
    "letterboxdURI" | "name" | "rating" | "year"
  >[];
  queryKey: string;
}

const queryMoviePosters = async ({ movies, queryKey }: IQueryMoviePosters) => {
  const fetchedMovies = await Promise.all(
    movies.map(({ letterboxdURI, name, rating, year }) =>
      queryClient.fetchQuery({
        queryKey: [queryKey, letterboxdURI, name, rating, year],
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
      }),
    ),
  );

  return formatPosterMovieList({
    posterMovieList: fetchedMovies,
  });
};

export default {
  queryMovieDetails,
  queryMoviePosters,
};
