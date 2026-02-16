import type { Route } from "./+types/movie";
import { clientLoader } from "./loaders/movieClientLoader";
import { MovieDetails } from "~/components/app";
import { PageMetadata } from "~/components/library";
import { MovieProvider } from "~/contexts/MovieContext";

export { clientLoader };

export default function Movie({ loaderData }: Route.ComponentProps) {
  return (
    <MovieProvider movie={loaderData.movie}>
      <PageMetadata />
      <MovieDetails />
    </MovieProvider>
  );
}
