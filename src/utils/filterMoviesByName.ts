import { IMovieLoggedFormatted } from "src/types";

interface IParams {
  movieList: IMovieLoggedFormatted[];
  value?: string;
}

const filterMoviesByName = ({
  movieList,
  value = "",
}: IParams): IMovieLoggedFormatted[] =>
  movieList
    .filter(({ Name }) => Name.toLowerCase().includes(value.toLowerCase()))
    .sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime());

export default filterMoviesByName;
