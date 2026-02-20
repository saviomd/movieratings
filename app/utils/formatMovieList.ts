import formatMovieLogged from "./formatMovieLogged";
import type { IMovieLogged, IMovieLoggedFormatted } from "~/types";

interface IParams {
  movieList: IMovieLogged[];
}

const formatMovieList = ({ movieList }: IParams): IMovieLoggedFormatted[] => {
  return [...movieList]
    .toReversed()
    .map((movieLogged) => formatMovieLogged({ movieLogged }));
};

export default formatMovieList;
