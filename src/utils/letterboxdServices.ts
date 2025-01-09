import fetchClient from "./fetchClient";
import type { IMovieLogged } from "src/types";

interface IFetchLetterboxd {
  path: string;
}

interface ILetterboxdId {
  url: string;
}

const fetchLetterboxd = ({ path }: IFetchLetterboxd): Promise<IMovieLogged[]> =>
  fetchClient({ url: path });

const fetchMovieDiary = (): Promise<IMovieLogged[]> =>
  fetchLetterboxd({ path: "/movieratings/data/diary.json" });

const fetchMovieRatings = (): Promise<IMovieLogged[]> =>
  fetchLetterboxd({ path: "/movieratings/data/ratings.json" });

const letterboxdId = ({ url }: ILetterboxdId): string =>
  url.split("boxd.it/")[1];

export default {
  fetchMovieDiary,
  fetchMovieRatings,
  letterboxdId,
};
