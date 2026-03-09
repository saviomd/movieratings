import { movieDetailsGattaca1997Fixture } from "~/__fixtures__";
import { ratings } from "~/data";
import type { MovieDetails, MovieLogged } from "~/types";
import { formatMovieDetails, formatMovieLogged } from "~/utils";

const movie = formatMovieLogged({
  movieLogged: ratings.find(
    (movie) => movie.Name === "Gattaca" && movie.Year === 1997,
  ) as MovieLogged,
});

const movieDetailsGattaca1997Mock = formatMovieDetails({
  movie,
  movieDetails: movieDetailsGattaca1997Fixture as unknown as MovieDetails,
});

export default movieDetailsGattaca1997Mock;
