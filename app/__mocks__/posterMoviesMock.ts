import {
  movieDetailsBatman1989Fixture,
  movieDetailsGattaca1997Fixture,
  movieDetailsSe7en1995Fixture,
  movieDetailsTheFastAndTheFurious2001Fixture,
} from "~/__fixtures__";
import { formatPosterMovieList } from "~/utils";

const posterMovieList = [
  movieDetailsBatman1989Fixture,
  movieDetailsGattaca1997Fixture,
  movieDetailsSe7en1995Fixture,
  movieDetailsTheFastAndTheFurious2001Fixture,
].map(({ poster_path, title }) => ({
  letterboxdURI: "#",
  name: title,
  poster_path,
}));

const posterMoviesMock = formatPosterMovieList({ posterMovieList });

export default posterMoviesMock;
