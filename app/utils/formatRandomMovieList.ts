import type { PathType } from "~/types";

import routePaths from "./routePaths";
import tmdbApi from "./tmdbApi";

const { poster } = tmdbApi.img;

export interface IRandomMovie {
  LetterboxdURI: string;
  Name: string;
  poster_path: PathType;
}

interface IParams {
  randomMovieList: IRandomMovie[];
}

interface IRandomMovieFormatted extends IRandomMovie {
  movie_path: string;
  poster_url: ReturnType<typeof poster>;
}

const formatRandomMovieList = ({
  randomMovieList,
}: IParams): IRandomMovieFormatted[] =>
  randomMovieList.map((movie) => ({
    ...movie,
    movie_path: routePaths.movie({
      id: movie.LetterboxdURI.split("boxd.it/")[1],
    }),
    poster_url: poster({ path: movie.poster_path }),
  }));

export default formatRandomMovieList;
