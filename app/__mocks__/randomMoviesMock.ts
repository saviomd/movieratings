import {
  movieDetailsBatman1989Fixture,
  movieDetailsGattaca1997Fixture,
  movieDetailsSe7en1995Fixture,
  movieDetailsTheFastAndTheFurious2001Fixture,
} from "~/__fixtures__";
import { formatRandomMovieList } from "~/utils";

const randomMovieList = [
  movieDetailsBatman1989Fixture,
  movieDetailsGattaca1997Fixture,
  movieDetailsSe7en1995Fixture,
  movieDetailsTheFastAndTheFurious2001Fixture,
].map(({ poster_path, title }) => ({
  LetterboxdURI: "#",
  Name: title,
  poster_path,
}));

const randomMoviesMock = formatRandomMovieList({
  randomMovieList,
});

export default randomMoviesMock;
