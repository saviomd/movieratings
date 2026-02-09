import { MovieDetails } from "~/components/app";
import { PageMetadata } from "~/components/library";
import { MovieProvider } from "~/contexts/MovieContext";

export default function Movie() {
  return (
    <MovieProvider>
      <PageMetadata />
      <MovieDetails />
    </MovieProvider>
  );
}
