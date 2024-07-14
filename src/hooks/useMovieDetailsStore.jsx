import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

import { useMovieDiaryContext } from "src/contexts/MovieDiaryContext";
import { useMovieRatingsContext } from "src/contexts/MovieRatingsContext";
import { formatMovieDetails, tmdbServices } from "src/utils";

const { getMovieDetails, getSearchMovies } = tmdbServices;

const useMovieDetailsStore = ({ movieId }) => {
  const { movieDiary } = useMovieDiaryContext();
  const { movieRatings } = useMovieRatingsContext();

  const movie = useMemo(
    () => [...movieDiary, ...movieRatings].find((obj) => obj.Id === movieId),
    [movieDiary, movieId, movieRatings],
  );

  const { data: movieDetails = {}, status: movieDetailsStatus } = useQuery({
    queryKey: ["movieDetails", movie, movie?.Name, movie?.Year],
    queryFn: async () => {
      const searchMoviesData = await getSearchMovies({
        Name: movie?.Name,
        Year: movie?.Year,
      });
      const newMovie = searchMoviesData.results.find(
        ({ release_date, title }) =>
          title === movie.Name && release_date.indexOf(movie.Year) > -1,
      );
      const movieDetails = await getMovieDetails({ movieId: newMovie.id });
      return movieDetails.id
        ? formatMovieDetails({ movie, movieDetails })
        : undefined;
    },
    enabled: !!movie?.Name && !!movie?.Year,
  });

  return {
    movieDetails,
    movieDetailsStatus,
  };
};

export default useMovieDetailsStore;
