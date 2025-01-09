import { MovieDetails } from "src/components/app";
import { MovieDetailsProvider } from "src/contexts/MovieDetailsContext";

function MovieDetailsRoute() {
  return (
    <MovieDetailsProvider>
      <MovieDetails />
    </MovieDetailsProvider>
  );
}

export default MovieDetailsRoute;
