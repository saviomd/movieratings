import MoviesLayout from "./moviesLayout";
import { PageMetadata } from "~/components/library";

export default function Diary() {
  return (
    <>
      <PageMetadata />
      <MoviesLayout type="Diary" />
    </>
  );
}
