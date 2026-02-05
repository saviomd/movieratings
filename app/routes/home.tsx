import MoviesLayout from "./moviesLayout";
import { PageMetadata } from "~/components/library";

export default function Home() {
  return (
    <>
      <PageMetadata />
      <MoviesLayout type="Ratings" />
    </>
  );
}
