import type { Route } from "./+types/movie.$id";
import { clientLoader } from "./loaders/movieClientLoader";
import {
  MovieDetailsBody,
  MovieDetailsHeader,
  MovieDetailsRecommendations,
} from "~/components/app";
import { LoadingHandler, PageMetadata } from "~/components/library";
import useMovieStore from "~/stores/useMovieStore";
import { routePaths } from "~/utils";

export { clientLoader };

export default function Movie({ loaderData }: Route.ComponentProps) {
  const { movieDetails, movieDetailsStatus } = useMovieStore({
    movie: loaderData.movie,
  });

  const description = movieDetails
    ? `${movieDetails.Rating.toString()} of 5 by me${movieDetails.overview ? ` - ${movieDetails.overview}` : ""}`
    : undefined;
  const title = movieDetails
    ? `${movieDetails.title} (${movieDetails.release_year})`
    : undefined;

  return (
    <LoadingHandler dataStatus={movieDetailsStatus} hasData={!!movieDetails}>
      <PageMetadata
        description={description}
        path={routePaths.movie({ id: loaderData.movie?.Id ?? "" })}
        title={title}
      />
      <MovieDetailsHeader movieDetails={movieDetails} />
      <MovieDetailsBody movieDetails={movieDetails} />
      <MovieDetailsRecommendations movieDetails={movieDetails} />
    </LoadingHandler>
  );
}
