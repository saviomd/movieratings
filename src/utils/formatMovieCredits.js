import formatPerson from "./formatPerson";

const formatMovieCredits = ({ credits }) => ({
  ...credits,
  cast: credits?.cast
    .map((person) => formatPerson({ person }))
    .sort((a, b) => a.order - b.order),
  crew: credits?.crew
    .reduce((previous, current) => {
      const found = previous.find(({ id }) => id === current.id);
      if (found) {
        found.job = [...found.job, current.job];
        return previous;
      }
      return [...previous, formatPerson({ person: current })];
    }, [])
    .sort((a, b) => b.popularity - a.popularity),
});

export default formatMovieCredits;
