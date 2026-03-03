import type { IMovieLoggedFormatted } from "~/types";

interface IParams {
  movieList: IMovieLoggedFormatted[];
  value?: string;
}

const filterMoviesByName = ({
  movieList,
  value = "",
}: IParams): IMovieLoggedFormatted[] =>
  movieList
    .filter(({ name }) => name.toLowerCase().includes(value.toLowerCase()))
    .toSorted(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

export default filterMoviesByName;
