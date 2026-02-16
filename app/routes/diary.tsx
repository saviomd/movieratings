import type { Route } from "./+types/diary";
import { loader } from "./loaders/diaryLoader";
import MoviesLayout from "./layouts/moviesLayout";
import { PageMetadata } from "~/components/library";
import { DiaryProvider } from "~/contexts/DiaryContext";

export { loader };

export default function Diary({ loaderData }: Route.ComponentProps) {
  return (
    <DiaryProvider movieDiary={loaderData.movieDiary}>
      <PageMetadata />
      <MoviesLayout type="Diary" />
    </DiaryProvider>
  );
}
