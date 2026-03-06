import formatPerson from "./formatPerson";
import type {
  IMovieCredits,
  IMovieCreditsFormatted,
  IPersonFormatted,
} from "~/types";

interface IParams {
  credits: IMovieCredits;
}

const formatMovieCredits = ({ credits }: IParams): IMovieCreditsFormatted => ({
  cast: credits.cast
    .map((person) => formatPerson({ person }))
    .toSorted((a, b) => a.order - b.order),
  crew: credits.crew
    .reduce<IPersonFormatted[]>((previous, current): IPersonFormatted[] => {
      const found = previous.find(({ id }) => id === current.id);
      if (found) {
        found.job = [...found.job, current.job];
        return previous;
      }
      return [...previous, formatPerson({ person: current })];
    }, [])
    .toSorted((a, b) => b.popularity - a.popularity),
});

export default formatMovieCredits;
