import MoviesLayout from "./moviesLayout";
import { PageMetadata } from "~/components/library";
import { DiaryProvider } from "~/contexts/DiaryContext";

export default function Diary() {
  return (
    <DiaryProvider>
      <PageMetadata />
      <MoviesLayout type="Diary" />
    </DiaryProvider>
  );
}
