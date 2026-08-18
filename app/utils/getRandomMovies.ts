interface Params {
  movieRatings: {
    letterboxdURI: string;
    name: string;
    rating: number;
    year: number;
  }[];
}

const getRandomMovies = ({ movieRatings }: Params) => {
  if (!movieRatings.length) {
    return [];
  }

  const indexes = new Set<number>();
  while (indexes.size < 8) {
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
