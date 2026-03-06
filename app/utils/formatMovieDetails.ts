import formatCurrency from "./formatCurrency";
import formatDate from "./formatDate";
import formatMovieCredits from "./formatMovieCredits";
import formatMovieRecommendations from "./formatMovieRecommendations";
import tmdbApi from "./tmdbApi";
import type {
  IMovieDetails,
  IMovieDetailsFormatted,
  IMovieLoggedFormatted,
} from "~/types";

interface IParams {
  movie: IMovieLoggedFormatted;
  movieDetails: IMovieDetails;
}

const { backdrop, logo, poster } = tmdbApi.img;

const formatMovieDetails = ({
  movie,
  movieDetails,
}: IParams): IMovieDetailsFormatted => ({
  br_title: movieDetails.alternative_titles.titles.find(
    ({ iso_3166_1 }) => iso_3166_1 === "BR",
  )?.title,
  budget: formatCurrency({ value: movieDetails.budget }),
  credits: formatMovieCredits({ credits: movieDetails.credits }),
  flatrate: (movieDetails["watch/providers"].results.BR?.flatrate ?? []).map(
    (item) => ({
      provider_name: item.provider_name,
      ...(item.logo_path && { logo_url: logo({ path: item.logo_path }) }),
    }),
  ),
  genres: movieDetails.genres.map(({ name }) => ({ name })),
  images: {
    backdrops: movieDetails.images.backdrops.map(({ file_path }) => ({
      url: backdrop({ path: file_path }),
    })),
    posters: movieDetails.images.posters.map(({ file_path }) => ({
      url: poster({ path: file_path }),
    })),
  },
  letterboxdURI: movie.letterboxdURI,
  original_title: movieDetails.original_title,
  overview: movieDetails.overview,
  production_companies: movieDetails.production_companies.map(({ name }) => ({
    name,
  })),
  production_countries: movieDetails.production_countries.map(({ name }) => ({
    name,
  })),
  rating: movie.rating,
  recommendations: formatMovieRecommendations({
    movies: movieDetails.recommendations.results,
  }),
  release_date: formatDate({ date: movieDetails.release_date }),
  release_year: movieDetails.release_date.split("-")[0],
  revenue: formatCurrency({ value: movieDetails.revenue }),
  runtime: movieDetails.runtime,
  spoken_languages: movieDetails.spoken_languages.map(({ english_name }) => ({
    english_name,
  })),
  tagline: movieDetails.tagline,
  title: movieDetails.title,
  tmdbURI: `https://www.themoviedb.org/movie/${String(movieDetails.id)}`,
  vote_average: movieDetails.vote_average,
  vote_count: movieDetails.vote_count,
});

export default formatMovieDetails;
