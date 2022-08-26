import tmdbApi from "./tmdbApi";
import { IMovieDetails } from "../types";

interface IParams {
  movies: IMovieDetails[];
}

const { poster } = tmdbApi.img;

const formatMovieRecommendations = ({ movies }: IParams) =>
  movies.map((movie) => ({
    ...movie,
    poster_url: poster({ path: movie.poster_path }),
    tmdbURI: `https://www.themoviedb.org/movie/${movie.id}`,
  }));

export default formatMovieRecommendations;
