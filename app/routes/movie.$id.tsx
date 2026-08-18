import type { Route } from "./+types/movie.$id";
import { clientLoader } from "./loaders/movieClientLoader";
import {
  MovieDetailsBackdrops,
  MovieDetailsCredits,
  MovieDetailsHeader,
  MovieDetailsInfo,
  MovieDetailsRecommendations,
} from "~/components/app";
import { PageMetadata } from "~/components/library";
import { routePaths } from "~/utils";

export { clientLoader };

export default function Movie({ loaderData, params }: Route.ComponentProps) {
  const { movieDetails } = loaderData;

  const description = `${movieDetails.rating.toString()} of 5 by me${movieDetails.overview ? ` - ${movieDetails.overview}` : ""}`;
  const title = `${movieDetails.title} (${String(movieDetails.release_year)})`;

  return (
    <>
      <PageMetadata
        description={description}
        path={routePaths.movie({ id: params.id })}
        title={title}
      />
      <MovieDetailsHeader
        br_title={movieDetails.br_title}
        original_title={movieDetails.original_title}
        overview={movieDetails.overview}
        posters={movieDetails.images.posters}
        rating={movieDetails.rating}
        release_year={movieDetails.release_year}
        title={movieDetails.title}
        vote_average={movieDetails.vote_average}
        vote_count={movieDetails.vote_count}
      />
      <MovieDetailsInfo
        budget={movieDetails.budget}
        flatrate={movieDetails.flatrate}
        genres={movieDetails.genres}
        production_companies={movieDetails.production_companies}
        production_countries={movieDetails.production_countries}
        release_date={movieDetails.release_date}
        revenue={movieDetails.revenue}
        runtime={movieDetails.runtime}
        spoken_languages={movieDetails.spoken_languages}
      />
      <MovieDetailsCredits credits={movieDetails.credits} />
      <MovieDetailsBackdrops
        backdrops={movieDetails.images.backdrops}
        tagline={movieDetails.tagline}
        title={movieDetails.title}
      />
      <MovieDetailsRecommendations
        letterboxdURI={movieDetails.letterboxdURI}
        recommendations={movieDetails.recommendations}
        tmdbURI={movieDetails.tmdbURI}
      />
    </>
  );
}
