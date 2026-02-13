import ratings from "~/data/ratings.json";
import { formatMovieList } from "~/utils";

export default function ratingsLoader() {
  const movieRatings = formatMovieList({ movieList: ratings });
  return { movieRatings };
}
