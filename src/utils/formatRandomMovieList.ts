import { IRandomMovie } from "src/types";
import { tmdbApi } from "src/utils";

const { poster } = tmdbApi.img;

interface IParams {
  randomMovieList: IRandomMovie[];
}

const formatRandomMovieList = ({ randomMovieList }: IParams) => {
  return randomMovieList.map((movie) => ({
    ...movie,
    movie_path: `/movie/${movie.LetterboxdURI.split("boxd.it/")[1]}`,
    poster_url: poster({ path: movie.poster_path }),
  }));
};

export default formatRandomMovieList;
