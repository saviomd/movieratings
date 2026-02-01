import { MovieDetails } from "~/components/app";
import { MovieDetailsProvider } from "~/contexts/MovieDetailsContext";

function MovieDetailsRoute() {
  return (
    <MovieDetailsProvider>
      <MovieDetails />
    </MovieDetailsProvider>
  );
}

export default MovieDetailsRoute;
