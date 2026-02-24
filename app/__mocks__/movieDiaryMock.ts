import diary from "~/data/diary.json";
import { formatMovieList } from "~/utils";

const movieDiaryMock = formatMovieList({ movieList: diary });

export default movieDiaryMock;
