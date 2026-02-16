import diary from "~/data/diary.json";
import { formatMovieList } from "~/utils";

export function loader() {
  const movieDiary = formatMovieList({ movieList: diary });
  return { movieDiary };
}
