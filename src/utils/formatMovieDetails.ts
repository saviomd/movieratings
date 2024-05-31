import formatCurrency from "./formatCurrency";
import formatDate from "./formatDate";
import formatMovieCredits from "./formatMovieCredits";
import formatMovieRecommendations from "./formatMovieRecommendations";
import tmdbApi from "./tmdbApi";
import { IMovie, IMovieDetails } from "src/types";

interface IParams {
  movie: IMovie;
  movieDetails: IMovieDetails;
}

const { backdrop, logo, poster } = tmdbApi.img;

const formatMovieDetails = ({ movie, movieDetails }: IParams) => ({
  ...movieDetails,
  br_title: movieDetails.alternative_titles.titles.find(
    ({ iso_3166_1 }) => iso_3166_1 === "BR",
  )?.title,
  budget: formatCurrency({ value: movieDetails.budget }),
  credits: formatMovieCredits({ credits: movieDetails.credits }),
  flatrate:
    movieDetails["watch/providers"]?.results?.BR?.flatrate?.map((item) => ({
      ...item,
      ...(item.logo_path && { logo_url: logo({ path: item.logo_path }) }),
    })) || [],
  images: {
    backdrops: movieDetails.images.backdrops.map(({ file_path }) => ({
      url: backdrop({ path: file_path }),
    })),
    posters: movieDetails.images.posters.map(({ file_path }) => ({
      url: poster({ path: file_path }),
    })),
  },
  LetterboxdURI: movie.LetterboxdURI,
  original_language: movieDetails.original_language.toUpperCase(),
  Rating: movie.Rating,
  recommendations: formatMovieRecommendations({
    movies: movieDetails.recommendations.results,
  }),
  release_date: formatDate({ date: movieDetails.release_date }),
  release_year: movieDetails.release_date.split("-")[0],
  revenue: formatCurrency({ value: movieDetails.revenue }),
  tmdbURI: `https://www.themoviedb.org/movie/${movieDetails.id}`,
});

export default formatMovieDetails;
