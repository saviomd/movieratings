import type { Route } from "./+types/diary";
import diaryLoader from "./loaders/diaryLoader";
import MoviesLayout from "./layouts/moviesLayout";
import { PageMetadata } from "~/components/library";
import { DiaryProvider } from "~/contexts/DiaryContext";

export { diaryLoader as loader };

export default function Diary({ loaderData }: Route.ComponentProps) {
  return (
    <DiaryProvider movieDiary={loaderData.movieDiary}>
      <PageMetadata />
      <MoviesLayout type="Diary" />
    </DiaryProvider>
  );
}
