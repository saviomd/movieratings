import type { Route } from "../+types/movie.$id";
import { diary, ratings } from "~/data";
import { formatMovieList } from "~/utils";

export function clientLoader({ params }: Route.LoaderArgs) {
  const { id } = params;
  const movieDiary = formatMovieList({ movieList: diary });
  const movieRatings = formatMovieList({ movieList: ratings });

  const movie = [...movieDiary, ...movieRatings].find(({ Id }) => Id === id);

  return { movie };
}
