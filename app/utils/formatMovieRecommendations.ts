import tmdbApi from "./tmdbApi";
import type { IMovieDetails, IMovieRecommendationFormatted } from "~/types";

interface IParams {
  movies: IMovieDetails[];
}

const { poster } = tmdbApi.img;

const formatMovieRecommendations = ({
  movies,
}: IParams): IMovieRecommendationFormatted[] =>
  movies.map((movie) => ({
    id: movie.id,
    poster_url: poster({ path: movie.poster_path }),
    title: movie.title,
    tmdbURI: `https://www.themoviedb.org/movie/${String(movie.id)}`,
  }));

export default formatMovieRecommendations;
