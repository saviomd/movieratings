import tmdbApi from "./tmdbApi";
import type { IMovieDetails } from "src/types";

interface IParams {
  movies: IMovieDetails[];
}

interface IMovieRecommendationFormatted extends IMovieDetails {
  poster_url?: string;
  tmdbURI: string;
}

const { poster } = tmdbApi.img;

const formatMovieRecommendations = ({
  movies,
}: IParams): IMovieRecommendationFormatted[] =>
  movies.map((movie) => ({
    ...movie,
    poster_url: poster({ path: movie.poster_path }),
    tmdbURI: `https://www.themoviedb.org/movie/${String(movie.id)}`,
  }));

export default formatMovieRecommendations;
