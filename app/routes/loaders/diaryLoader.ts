import diary from "~/data/diary.json";
import { formatMovieList } from "~/utils";

export default function diaryLoader() {
  const movieDiary = formatMovieList({ movieList: diary });
  return { movieDiary };
}
