import fetchTmdb from "./fetchTmdb";
import tmdbApi from "./tmdbApi";

const { movieCredits, movieRecommendations, searchMovies } = tmdbApi.methods;

export const getMovieCredits = ({ movieId }) =>
  fetchTmdb({ path: movieCredits({ movieId }) });

export const getMovieRecommendations = ({ movieId }) =>
  fetchTmdb({
    path: movieRecommendations({ movieId }),
  });

export const getSearchMovies = ({ Name, Year }) =>
  fetchTmdb({
    path: searchMovies(),
    queryString: `&query=${Name}&year=${Year}`,
  });
