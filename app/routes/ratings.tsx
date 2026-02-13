import type { Route } from "./+types/ratings";
import ratingsLoader from "./loaders/ratingsLoader";
import MoviesLayout from "./layouts/moviesLayout";
import { PageMetadata } from "~/components/library";
import { RatingsProvider } from "~/contexts/RatingsContext";

export { ratingsLoader as loader };

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <RatingsProvider movieRatings={loaderData.movieRatings}>
      <PageMetadata />
      <MoviesLayout type="Ratings" />
    </RatingsProvider>
  );
}
