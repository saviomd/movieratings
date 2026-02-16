import ratings from "~/data/ratings.json";
import { formatMovieList } from "~/utils";

export function loader() {
  const movieRatings = formatMovieList({ movieList: ratings });
  return { movieRatings };
}
