import fetchTmdb from "./fetchTmdb";
import tmdbApi from "./tmdbApi";

const { movieDetails, searchMovies } = tmdbApi.methods;

export const getMovieDetails = ({ movieId }) =>
  fetchTmdb({
    path: movieDetails({ movieId }),
    queryString: "&append_to_response=credits,recommendations,watch/providers",
  });

export const getSearchMovies = ({ Name, Year }) =>
  fetchTmdb({
    path: searchMovies(),
    queryString: `&query=${Name}&year=${Year}`,
  });
