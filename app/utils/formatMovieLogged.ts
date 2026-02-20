import formatDate from "./formatDate";
import type { IMovieLogged, IMovieLoggedFormatted } from "~/types";

interface IParams {
  movieLogged: IMovieLogged;
}

const formatMovieLogged = ({ movieLogged }: IParams): IMovieLoggedFormatted => {
  return {
    ...movieLogged,
    DateFormatted: formatDate({ date: movieLogged.Date }),
    Id: movieLogged.LetterboxdURI.split("boxd.it/")[1],
    Name: movieLogged.Name.toString(),
    ...(movieLogged.WatchedDate && {
      WatchedDateFormatted: formatDate({ date: movieLogged.WatchedDate }),
    }),
  };
};

export default formatMovieLogged;
