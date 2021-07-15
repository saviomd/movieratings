export const fetchMovieDiary = () =>
  fetch("https://saviomd.com/movieratings/data/diary.json").then((response) => {
    if (!response.ok) {
      throw Error(response.status);
    }
    return response.json();
  });

export const fetchMovieRatings = () =>
  fetch("https://saviomd.com/movieratings/data/ratings.json").then(
    (response) => {
      if (!response.ok) {
        throw Error(response.status);
      }
      return response.json();
    }
  );
