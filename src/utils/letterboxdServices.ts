export const fetchMovieDiary = async () => {
  const response = await fetch("/movieratings/data/diary.json");
  if (!response.ok) {
      throw Error(response.status.toString());
    }
  return response.json();
};

export const fetchMovieRatings = async () => {
  const response = await fetch("/movieratings/data/ratings.json");
  if (!response.ok) {
    throw Error(response.status.toString());
  }
  return response.json();
};
