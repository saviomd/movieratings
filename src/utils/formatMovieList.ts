import formatDate from "./formatDate";
import type { IMovieLogged, IMovieLoggedFormatted } from "src/types";

interface IParams {
  movieList: IMovieLogged[];
}

const formatMovieList = ({ movieList }: IParams): IMovieLoggedFormatted[] => {
  return [...movieList].reverse().map((movie) => ({
    ...movie,
    DateFormatted: formatDate({ date: movie.Date }),
    Id: movie.LetterboxdURI.split("boxd.it/")[1],
    Name: movie.Name.toString(),
    ...(movie.WatchedDate && {
      WatchedDateFormatted: formatDate({ date: movie.WatchedDate }),
    }),
  }));
};

export default formatMovieList;
