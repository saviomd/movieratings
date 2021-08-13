import tmdbApi from "./tmdbApi";

const { poster } = tmdbApi.img;

const formatMovieRecommendations = ({ movies }) =>
  movies.map((movie) => ({
    ...movie,
    poster_url: poster({ path: movie.poster_path }),
    tmdbURI: `https://www.themoviedb.org/movie/${movie.id}`,
  }));

export default formatMovieRecommendations;
