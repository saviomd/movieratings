import tmdbApi from "./tmdbApi";

const formatMovieRecommendations = (results) =>
  results.map((movie) => ({
    ...movie,
    poster_url: movie.poster_path
      ? tmdbApi.img.baseUrl + tmdbApi.img.posterSize + movie.poster_path
      : null,
    tmdbURI: `https://www.themoviedb.org/movie/${movie.id}`,
  }));

export default formatMovieRecommendations;
