import { movieDetailsTheFastAndTheFurious2001Fixture } from "~/__fixtures__";
import { ratings } from "~/data";
import type { MovieDetails, MovieLogged } from "~/types";
import { formatMovieDetails, formatMovieLogged } from "~/utils";

const movie = formatMovieLogged({
  movieLogged: ratings.find(
    (movie) => movie.Name === "The Fast and the Furious" && movie.Year === 2001,
  ) as MovieLogged,
});

const movieDetailsTheFastAndTheFurious2001Mock = formatMovieDetails({
  movie,
  movieDetails:
    movieDetailsTheFastAndTheFurious2001Fixture as unknown as MovieDetails,
});

export default movieDetailsTheFastAndTheFurious2001Mock;
