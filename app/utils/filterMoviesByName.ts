import type { MovieLoggedFormatted } from "~/types";

interface Params {
  movieList: MovieLoggedFormatted[];
  value?: string;
}

const filterMoviesByName = ({
  movieList,
  value = "",
}: Params): MovieLoggedFormatted[] =>
  movieList
    .filter(({ name }) => name.toLowerCase().includes(value.toLowerCase()))
    .toSorted(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

export default filterMoviesByName;
