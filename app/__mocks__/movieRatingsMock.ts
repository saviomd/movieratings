import ratings from "~/data/ratings.json";
import { formatMovieList } from "~/utils";

const movieRatingsMock = formatMovieList({ movieList: ratings });

export default movieRatingsMock;
