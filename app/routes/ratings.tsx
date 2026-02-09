import MoviesLayout from "./moviesLayout";
import { PageMetadata } from "~/components/library";
import { RatingsProvider } from "~/contexts/RatingsContext";

export default function Home() {
  return (
    <RatingsProvider>
      <PageMetadata />
      <MoviesLayout type="Ratings" />
    </RatingsProvider>
  );
}
