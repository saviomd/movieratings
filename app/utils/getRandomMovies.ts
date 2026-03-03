interface IParams {
  movieRatings: {
    letterboxdURI: string;
    name: string;
    rating: number;
    year: number;
  }[];
  count: number;
}

const getRandomMovies = ({ movieRatings, count }: IParams) => {
  if (!movieRatings.length) {
    return [];
  }

  const indexes = new Set<number>();
  while (indexes.size < count) {
    indexes.add(Math.floor(Math.random() * movieRatings.length));
  }
  return Array.from(indexes).map((index) => {
    const { letterboxdURI, name, rating, year } = movieRatings[index];
    return {
      letterboxdURI,
      name,
      rating,
      year,
    };
  });
};

export default getRandomMovies;
