interface IParams {
  movieRatings: {
    LetterboxdURI: string;
    Name: string;
    Rating: number;
    Year: number;
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
    const { LetterboxdURI, Name, Rating, Year } = movieRatings[index];
    return {
      LetterboxdURI,
      Name,
      Rating,
      Year,
    };
  });
};

export default getRandomMovies;
