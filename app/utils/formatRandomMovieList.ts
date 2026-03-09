import type { RandomMovie, RandomMovieFormatted } from "~/types";

import routePaths from "./routePaths";
import tmdbApi from "./tmdbApi";

const { poster } = tmdbApi.img;

interface Params {
  randomMovieList: RandomMovie[];
}

const formatRandomMovieList = ({
  randomMovieList,
}: Params): RandomMovieFormatted[] =>
  randomMovieList.map((movie) => ({
    ...movie,
    movie_path: routePaths.movie({
      id: movie.letterboxdURI.split("boxd.it/")[1],
    }),
    poster_url: poster({ path: movie.poster_path }),
  }));

export default formatRandomMovieList;
