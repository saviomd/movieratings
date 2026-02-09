import { useMovieContext } from "~/contexts/MovieContext";
import { LoadingHandler } from "~/components/library";
import MovieDetailsBody from "./MovieDetailsBody";
import MovieDetailsHeader from "./MovieDetailsHeader";
import MovieDetailsRecommendations from "./MovieDetailsRecommendations";

function MovieDetails() {
  const { movieDetails, movieDetailsStatus } = useMovieContext();

  return (
    <LoadingHandler dataStatus={movieDetailsStatus} hasData={!!movieDetails}>
      <MovieDetailsHeader />
      <MovieDetailsBody />
      <MovieDetailsRecommendations />
    </LoadingHandler>
  );
}

export default MovieDetails;
