import type { Route } from "../+types/movie";
import diary from "~/data/diary.json";
import ratings from "~/data/ratings.json";
import { formatMovieList } from "~/utils";

export default function movieClientLoader({ params }: Route.LoaderArgs) {
  const { movieId } = params;
  const movieDiary = formatMovieList({ movieList: diary });
  const movieRatings = formatMovieList({ movieList: ratings });

  const movie = [...movieDiary, ...movieRatings].find(
    ({ Id }) => Id === movieId,
  );

  return { movie };
}
