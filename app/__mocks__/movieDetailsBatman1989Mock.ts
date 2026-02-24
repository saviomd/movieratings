import { movieDetailsBatman1989Fixture } from "~/__fixtures__";
import { ratings } from "~/data";
import type { IMovieDetails, IMovieLogged } from "~/types";
import { formatMovieDetails, formatMovieLogged } from "~/utils";

const movie = formatMovieLogged({
  movieLogged: ratings.find(
    (movie) => movie.Name === "Batman" && movie.Year === 1989,
  ) as IMovieLogged,
});

const movieDetailsBatman1989Mock = formatMovieDetails({
  movie,
  movieDetails: movieDetailsBatman1989Fixture as unknown as IMovieDetails,
});

export default movieDetailsBatman1989Mock;
