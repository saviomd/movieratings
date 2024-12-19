import fetchClient from "./fetchClient";
import tmdbApi from "./tmdbApi";
import { IMovieDetails } from "src/types";

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
    path: `movie/${movieId}`,
    queryString:
      "&append_to_response=alternative_titles,credits,images,recommendations,watch/providers&regions=BR",
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
    queryString: `&query=${Name}&year=${Year}`,
  });

export default {
  getMovieDetails,
  getSearchMovies,
};
