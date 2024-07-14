import { IMovieLoggedFormatted } from "src/types";

interface IParams {
  movieList: IMovieLoggedFormatted[];
  value?: string;
}

const filterMoviesByName = ({
  movieList,
  value = "",
}: IParams): IMovieLoggedFormatted[] =>
  movieList.filter((movie) => {
    const movieName = movie.Name.toLowerCase();
    return movieName.includes(value.toLowerCase());
  });

export default filterMoviesByName;
