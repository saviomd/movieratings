import tmdbApi from "./tmdbApi";
import type { MovieDetails, MovieRecommendationFormatted } from "~/types";

interface Params {
  movies: MovieDetails[];
}

const { poster } = tmdbApi.img;

const formatMovieRecommendations = ({
  movies,
}: Params): MovieRecommendationFormatted[] =>
  movies.map((movie) => ({
    id: movie.id,
    poster_url: poster({ path: movie.poster_path }),
    title: movie.title,
    tmdbURI: `https://www.themoviedb.org/movie/${String(movie.id)}`,
  }));

export default formatMovieRecommendations;
