import formatPerson from "./formatPerson";
import { IMovieCredits, IPerson } from "../types";

interface IParams {
  credits: IMovieCredits;
}

const formatMovieCredits = ({ credits }: IParams) => ({
  ...credits,
  cast: credits?.cast
    .map((person) => formatPerson({ person }))
    .sort((a, b) => a.order - b.order),
  crew: credits?.crew
    .reduce((previous, current) => {
      const found = previous.find(({ id }) => id === current.id);
      if (found) {
        found.job = [...(found.job as string), current.job as string];
        return previous;
      }
      return [...previous, formatPerson({ person: current }) as IPerson];
    }, [] as IPerson[])
    .sort((a: IPerson, b: IPerson) => b.popularity - a.popularity),
});

export default formatMovieCredits;
