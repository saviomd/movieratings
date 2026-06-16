import type { PosterMovie, PosterMovieFormatted } from "~/types";

import routePaths from "./routePaths";
import tmdbApi from "./tmdbApi";

const { poster } = tmdbApi.img;

interface Params {
  posterMovieList: PosterMovie[];
}

const formatPosterMovieList = ({
  posterMovieList,
}: Params): PosterMovieFormatted[] =>
  posterMovieList.map((movie) => ({
    ...movie,
    movie_path: routePaths.movie({
      id: movie.letterboxdURI.split("boxd.it/")[1],
    }),
    poster_url: poster({ path: movie.poster_path }),
  }));

export default formatPosterMovieList;
