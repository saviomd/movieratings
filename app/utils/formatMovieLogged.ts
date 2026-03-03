import formatDate from "./formatDate";
import type { IMovieLogged, IMovieLoggedFormatted } from "~/types";

interface IParams {
  movieLogged: IMovieLogged;
}

const formatMovieLogged = ({ movieLogged }: IParams): IMovieLoggedFormatted => {
  const {
    Date: date,
    "Letterboxd URI": letterboxdURI,
    Name: name,
    Rating: rating,
    Year: year,
    "Watched Date": watchedDate,
  } = movieLogged;
  return {
    date,
    dateFormatted: formatDate({ date }),
    id: letterboxdURI.split("boxd.it/")[1],
    letterboxdURI,
    name: name.toString(),
    rating,
    year,
    ...(watchedDate && {
      watchedDate,
      watchedDateFormatted: formatDate({ date: watchedDate }),
    }),
  };
};

export default formatMovieLogged;
