import type { IRandomMovie, IRandomMovieFormatted } from "~/types";

import routePaths from "./routePaths";
import tmdbApi from "./tmdbApi";

const { poster } = tmdbApi.img;

interface IParams {
  randomMovieList: IRandomMovie[];
}

const formatRandomMovieList = ({
  randomMovieList,
}: IParams): IRandomMovieFormatted[] =>
  randomMovieList.map((movie) => ({
    ...movie,
    movie_path: routePaths.movie({
      id: movie.letterboxdURI.split("boxd.it/")[1],
    }),
    poster_url: poster({ path: movie.poster_path }),
  }));

export default formatRandomMovieList;
