import tmdbApi from "./tmdbApi";

export const fetchMovieCredits = (movieId) => {
  const url =
    `${tmdbApi.url}${tmdbApi.pathMovieCredits}?${tmdbApi.key}`.replace(
      "{movie_id}",
      movieId
    );
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw Error(response.status);
    }
    return response.json();
  });
};

export const fetchMovieInfo = (movie) =>
  fetch(
    `${tmdbApi.url}${tmdbApi.pathSearchMovies}?${tmdbApi.key}&query=${movie.Name}&year=${movie.Year}`
  ).then((response) => {
    if (!response.ok) {
      throw Error(response.status);
    }
    return response.json();
  });

export const fetchMovieRecommendations = (movieId) => {
  const url =
    `${tmdbApi.url}${tmdbApi.pathMovieRecommendations}?${tmdbApi.key}`.replace(
      "{movie_id}",
      movieId
    );
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw Error(response.status);
    }
    return response.json();
  });
};
