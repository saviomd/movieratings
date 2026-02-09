import { useQuery } from "@tanstack/react-query";

import fetchClient from "./fetchClient";
import formatMovieList from "./formatMovieList";
import type { IMovieLogged } from "~/types";

interface IFetchLetterboxd {
  path: string;
}

const fetchLetterboxd = ({ path }: IFetchLetterboxd): Promise<IMovieLogged[]> =>
  fetchClient({ url: path });

const useMovieDiaryQuery = () => {
  const { data: movieDiary = [], status: movieDiaryStatus } = useQuery({
    queryKey: ["movieDiary"],
    queryFn: async () => {
      const movieList = await fetchLetterboxd({
        path: "/movieratings/data/diary.json",
      });
      return formatMovieList({ movieList });
    },
  });

  return {
    movieDiary,
    movieDiaryStatus,
  };
};

const useMovieRatingsQuery = () => {
  const { data: movieRatings = [], status: movieRatingsStatus } = useQuery({
    queryKey: ["movieRatings"],
    queryFn: async () => {
      const movieList = await fetchLetterboxd({
        path: "/movieratings/data/ratings.json",
      });
      return formatMovieList({ movieList });
    },
  });

  return {
    movieRatings,
    movieRatingsStatus,
  };
};

export default {
  useMovieDiaryQuery,
  useMovieRatingsQuery,
};
