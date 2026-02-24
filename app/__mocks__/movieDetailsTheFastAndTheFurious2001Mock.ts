import { movieDetailsTheFastAndTheFurious2001Fixture } from "~/__fixtures__";
import { ratings } from "~/data";
import type { IMovieDetails, IMovieLogged } from "~/types";
import { formatMovieDetails, formatMovieLogged } from "~/utils";

const movie = formatMovieLogged({
  movieLogged: ratings.find(
    (movie) => movie.Name === "The Fast and the Furious" && movie.Year === 2001,
  ) as IMovieLogged,
});

const movieDetailsTheFastAndTheFurious2001Mock = formatMovieDetails({
  movie,
  movieDetails:
    movieDetailsTheFastAndTheFurious2001Fixture as unknown as IMovieDetails,
});

export default movieDetailsTheFastAndTheFurious2001Mock;
