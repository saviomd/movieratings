import type { Route } from "./+types/movie";
import { clientLoader } from "./loaders/movieClientLoader";
import {
  MovieDetailsBody,
  MovieDetailsHeader,
  MovieDetailsRecommendations,
} from "~/components/app";
import { LoadingHandler, PageMetadata } from "~/components/library";
import useMovieStore from "~/stores/useMovieStore";

export { clientLoader };

export default function Movie({ loaderData }: Route.ComponentProps) {
  const { movieDetails, movieDetailsStatus } = useMovieStore({
    movie: loaderData.movie,
  });

  return (
    <LoadingHandler dataStatus={movieDetailsStatus} hasData={!!movieDetails}>
      <PageMetadata />
      <MovieDetailsHeader movieDetails={movieDetails} />
      <MovieDetailsBody movieDetails={movieDetails} />
      <MovieDetailsRecommendations movieDetails={movieDetails} />
    </LoadingHandler>
  );
}
