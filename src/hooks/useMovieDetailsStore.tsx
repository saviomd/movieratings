import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useParams } from "react-router-dom";

import { useMovieDiaryContext } from "src/contexts/MovieDiaryContext";
import { useMovieRatingsContext } from "src/contexts/MovieRatingsContext";
import { IMovieLoggedFormatted } from "src/types";
import { formatMovieDetails, tmdbServices } from "src/utils";

interface IMovieDiaryContext {
  movieDiary: IMovieLoggedFormatted[];
}

interface IMovieRatingsContext {
  movieRatings: IMovieLoggedFormatted[];
}

const { getMovieDetails, getSearchMovies } = tmdbServices;

const useMovieDetailsStore = () => {
  const { movieDiary } = useMovieDiaryContext() as IMovieDiaryContext;
  const { movieRatings } = useMovieRatingsContext() as IMovieRatingsContext;
  const { movieId } = useParams();

  const movie = useMemo(
    () => [...movieDiary, ...movieRatings].find(({ Id }) => Id === movieId),
    [movieDiary, movieId, movieRatings],
  );

  const { data: movieDetails = {}, status: movieDetailsStatus } = useQuery({
    queryKey: ["movieDetails", movie, movie?.Name, movie?.Year],
    queryFn: async () => {
      if (movie) {
        const searchMoviesData = await getSearchMovies({
          Name: movie.Name,
          Year: movie.Year,
        });
        const newMovie = searchMoviesData.results.find(
          ({ release_date, title }) =>
            title === movie.Name &&
            release_date.includes(movie.Year.toString()),
        );
        if (newMovie) {
          const movieDetails = await getMovieDetails({ movieId: newMovie.id });
          return formatMovieDetails({ movie, movieDetails });
        }
      }
      return undefined;
    },
    enabled: !!movie?.Name && !!movie?.Year,
  });

  return {
    movieDetails,
    movieDetailsStatus,
  };
};

export default useMovieDetailsStore;
