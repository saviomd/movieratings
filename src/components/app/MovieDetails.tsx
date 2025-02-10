import { useMovieDetailsContext } from "src/contexts/MovieDetailsContext";
import { LoadingHandler } from "src/components/library";
import MovieDetailsBody from "./MovieDetailsBody";
import MovieDetailsHeader from "./MovieDetailsHeader";
import MovieDetailsRecommendations from "./MovieDetailsRecommendations";

function MovieDetails() {
  const { movieDetails, movieDetailsStatus } = useMovieDetailsContext();

  return (
    <LoadingHandler dataStatus={movieDetailsStatus} hasData={!!movieDetails}>
      <MovieDetailsHeader />
      <MovieDetailsBody />
      <MovieDetailsRecommendations />
    </LoadingHandler>
  );
}

export default MovieDetails;
