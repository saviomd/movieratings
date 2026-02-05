import { MovieDetails } from "~/components/app";
import { PageMetadata } from "~/components/library";
import { MovieDetailsProvider } from "~/contexts/MovieDetailsContext";

export default function Movie() {
  return (
    <>
      <PageMetadata />
      <MovieDetailsProvider>
        <MovieDetails />
      </MovieDetailsProvider>
    </>
  );
}
