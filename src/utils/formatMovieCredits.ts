import formatPerson from "./formatPerson";
import { IMovieCredits } from "src/types";

type PersonFormattedListType = ReturnType<typeof formatPerson>[];

interface IParams {
  credits: IMovieCredits;
}

interface IMovieCreditsFormatted extends Omit<IMovieCredits, "cast" | "crew"> {
  cast: PersonFormattedListType;
  crew: PersonFormattedListType;
}

const formatMovieCredits = ({ credits }: IParams): IMovieCreditsFormatted => ({
  ...credits,
  cast: credits?.cast
    .map((person) => formatPerson({ person }))
    .sort((a, b) => a.order - b.order),
  crew: credits?.crew
    .reduce((previous, current): PersonFormattedListType => {
      const found = previous.find(({ id }) => id === current.id);
      if (found) {
        found.job = [...found.job, current.job];
        return previous;
      }
      return [...previous, formatPerson({ person: current })];
    }, [] as PersonFormattedListType)
    .sort((a, b) => b.popularity - a.popularity),
});

export default formatMovieCredits;
