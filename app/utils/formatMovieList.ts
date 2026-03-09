import formatMovieLogged from "./formatMovieLogged";
import type { MovieLogged, MovieLoggedFormatted } from "~/types";

interface Params {
  movieList: MovieLogged[];
}

const formatMovieList = ({ movieList }: Params): MovieLoggedFormatted[] => {
  return [...movieList]
    .toReversed()
    .map((movieLogged) => formatMovieLogged({ movieLogged }));
};

export default formatMovieList;
