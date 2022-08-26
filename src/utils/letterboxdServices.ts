export const fetchMovieDiary = () =>
  fetch("/movieratings/data/diary.json").then((response) => {
    if (!response.ok) {
      throw Error(response.status.toString());
    }
    return response.json();
  });

export const fetchMovieRatings = () =>
  fetch("/movieratings/data/ratings.json").then((response) => {
    if (!response.ok) {
      throw Error(response.status.toString());
    }
    return response.json();
  });
