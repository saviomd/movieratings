import { diary } from "~/data";
import { formatMovieList } from "~/utils";

export function loader() {
  const movieDiary = formatMovieList({ movieList: diary });
  return { movieDiary };
}
