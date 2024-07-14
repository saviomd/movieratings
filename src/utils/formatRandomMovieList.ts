import { IRandomMovie } from "src/types";
import { tmdbApi } from "src/utils";

const { poster } = tmdbApi.img;

interface IParams {
  randomMovieList: IRandomMovie[];
}

interface IRandomMovieListFormatted extends IRandomMovie {
  movie_path: string;
  poster_url: ReturnType<typeof poster>;
}

const formatRandomMovieList = ({
  randomMovieList,
}: IParams): IRandomMovieListFormatted[] =>
  randomMovieList.map((movie) => ({
    ...movie,
    movie_path: `/movie/${movie.LetterboxdURI.split("boxd.it/")[1]}`,
    poster_url: poster({ path: movie.poster_path }),
  }));

export default formatRandomMovieList;
