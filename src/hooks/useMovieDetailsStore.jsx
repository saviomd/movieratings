import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

import { useMovieDiaryContext } from "src/contexts/MovieDiaryContext";
import { useMovieRatingsContext } from "src/contexts/MovieRatingsContext";
import {
  formatMovieDetails,
  getMovieDetails,
  getSearchMovies,
} from "src/utils";

const useMovieDetailsStore = ({ movieId }) => {
  const { movieDiary } = useMovieDiaryContext();
  const { movieRatings } = useMovieRatingsContext();

  const movie = useMemo(
    () => [...movieDiary, ...movieRatings].find((obj) => obj.Id === movieId),
    [movieDiary, movieId, movieRatings],
  );

  const { data: movieDetails = {}, status: movieDetailsStatus } = useQuery({
    queryKey: ["movieDetails", movie?.Name, movie?.Year],
    queryFn: () =>
      getSearchMovies({ Name: movie?.Name, Year: movie?.Year }).then(
        (searchMoviesData) => {
          const newMovie = searchMoviesData.results.find(
            ({ release_date, title }) =>
              title === movie.Name && release_date.indexOf(movie.Year) > -1,
          );
          return getMovieDetails({ movieId: newMovie.id }).then(
            (movieDetails) =>
              movieDetails.id
                ? formatMovieDetails({ movie, movieDetails })
                : undefined,
          );
        },
      ),
    enabled: !!movie?.Name && !!movie?.Year,
  });

  return {
    movieDetails,
    movieDetailsStatus,
  };
};

export default useMovieDetailsStore;
