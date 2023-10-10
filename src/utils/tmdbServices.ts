import fetchTmdb from "./fetchTmdb";

interface IGetMovieDetails {
  movieId: number;
}

interface IGetSearchMovies {
  Name: string;
  Year: number;
}

export const getMovieDetails = ({ movieId }: IGetMovieDetails) =>
  fetchTmdb({
    path: `movie/${movieId}`,
    queryString:
      "&append_to_response=alternative_titles,credits,images,recommendations,watch/providers&country=BR",
  });

export const getSearchMovies = ({ Name, Year }: IGetSearchMovies) =>
  fetchTmdb({
    path: "search/movie",
    queryString: `&query=${Name}&year=${Year}`,
  });
