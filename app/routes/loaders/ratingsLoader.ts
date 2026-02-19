import { ratings } from "~/data";
import { formatMovieList } from "~/utils";

export function loader() {
  const movieRatings = formatMovieList({ movieList: ratings });
  return { movieRatings };
}
