import formatCurrency from "./formatCurrency";
import formatDate from "./formatDate";
import formatMovieCredits from "./formatMovieCredits";
import formatMovieRecommendations from "./formatMovieRecommendations";
import tmdbApi from "./tmdbApi";

const { backdrop, poster } = tmdbApi.img;

const formatMovieDetails = ({ movie, movieDetails }) => ({
  ...movieDetails,
  backdrop_url: backdrop({ path: movieDetails.backdrop_path }),
  budget: formatCurrency({ value: movieDetails.budget }),
  credits: formatMovieCredits({ credits: movieDetails.credits }),
  LetterboxdURI: movie.LetterboxdURI,
  original_language: movieDetails.original_language.toUpperCase(),
  poster_url: poster({ path: movieDetails.poster_path }),
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
