import { IMovie } from "../types";

interface IParams {
  movieList: IMovie[];
  value?: string;
}

const filterMoviesByName = ({ movieList, value = "" }: IParams) =>
  movieList.filter((movie) => {
    const movieName = movie.Name.toLowerCase();
    return movieName.includes(value.toLowerCase());
  });

export default filterMoviesByName;
