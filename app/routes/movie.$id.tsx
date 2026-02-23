import type { Route } from "./+types/movie.$id";
import { clientLoader } from "./loaders/movieClientLoader";
import {
  MovieDetailsCredits,
  MovieDetailsHeader,
  MovieDetailsInfo,
  MovieDetailsPosters,
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
      {movieDetails ? (
        <>
          <PageMetadata
            description={description}
            path={routePaths.movie({ id: loaderData.movie.Id })}
            title={title}
          />
          <MovieDetailsHeader
            br_title={movieDetails.br_title}
            original_title={movieDetails.original_title}
            Rating={movieDetails.Rating}
            release_year={movieDetails.release_year}
            title={movieDetails.title}
            vote_average={movieDetails.vote_average}
            vote_count={movieDetails.vote_count}
          />
          <MovieDetailsInfo
            budget={movieDetails.budget}
            flatrate={movieDetails.flatrate}
            genres={movieDetails.genres}
            overview={movieDetails.overview}
            posters={movieDetails.images.posters}
            production_companies={movieDetails.production_companies}
            production_countries={movieDetails.production_countries}
            release_date={movieDetails.release_date}
            revenue={movieDetails.revenue}
            runtime={movieDetails.runtime}
            spoken_languages={movieDetails.spoken_languages}
            title={movieDetails.title}
          />
          <MovieDetailsCredits credits={movieDetails.credits} />
          <MovieDetailsPosters
            backdrops={movieDetails.images.backdrops}
            tagline={movieDetails.tagline}
            title={movieDetails.title}
          />
          <MovieDetailsRecommendations
            LetterboxdURI={movieDetails.LetterboxdURI}
            recommendations={movieDetails.recommendations}
            tmdbURI={movieDetails.tmdbURI}
          />
        </>
      ) : null}
    </LoadingHandler>
  );
}
