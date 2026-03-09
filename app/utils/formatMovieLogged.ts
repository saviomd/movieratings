import formatDate from "./formatDate";
import type { MovieLogged, MovieLoggedFormatted } from "~/types";

interface Params {
  movieLogged: MovieLogged;
}

const formatMovieLogged = ({ movieLogged }: Params): MovieLoggedFormatted => {
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
