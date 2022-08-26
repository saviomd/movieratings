import formatDate from "./formatDate";
import { IMovie } from "../types";

interface IParams {
  movieList: IMovie[];
}

const formatMovieList = ({ movieList }: IParams) => {
  return [...movieList].reverse().map((movie, index) => ({
    ...movie,
    Id: movie.LetterboxdURI.length
      ? movie.LetterboxdURI.split("boxd.it/")[1]
      : index.toString(),
    Name: movie.Name.toString(),
    DateFormatted: formatDate({ date: movie.Date }),
    ...(movie.WatchedDate && {
      WatchedDateFormatted: formatDate({ date: movie.WatchedDate }),
    }),
  }));
};

export default formatMovieList;
