import { movieDetailsSe7en1995Fixture } from "~/__fixtures__";
import { ratings } from "~/data";
import type { IMovieDetails, IMovieLogged } from "~/types";
import { formatMovieDetails, formatMovieLogged } from "~/utils";

const movie = formatMovieLogged({
  movieLogged: ratings.find(
    (movie) => movie.Name === "Se7en" && movie.Year === 1995,
  ) as IMovieLogged,
});

const movieDetailsSe7en1995Mock = formatMovieDetails({
  movie,
  movieDetails: movieDetailsSe7en1995Fixture as unknown as IMovieDetails,
});

export default movieDetailsSe7en1995Mock;
