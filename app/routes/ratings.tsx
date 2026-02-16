import type { Route } from "./+types/ratings";
import MoviesLayout from "./layouts/moviesLayout";
import { loader } from "./loaders/ratingsLoader";
import { PageMetadata } from "~/components/library";
import { RatingsProvider } from "~/contexts/RatingsContext";

export { loader };

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <RatingsProvider movieRatings={loaderData.movieRatings}>
      <PageMetadata />
      <MoviesLayout type="Ratings" />
    </RatingsProvider>
  );
}
