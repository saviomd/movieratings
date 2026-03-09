import formatPerson from "./formatPerson";
import type {
  MovieCredits,
  MovieCreditsFormatted,
  PersonFormatted,
} from "~/types";

interface Params {
  credits: MovieCredits;
}

const formatMovieCredits = ({ credits }: Params): MovieCreditsFormatted => ({
  cast: credits.cast
    .map((person) => formatPerson({ person }))
    .toSorted((a, b) => a.order - b.order),
  crew: credits.crew
    .reduce<PersonFormatted[]>((previous, current): PersonFormatted[] => {
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
