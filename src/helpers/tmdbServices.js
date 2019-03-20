import tmdbApi from '../helpers/tmdbApi';

export const fetchMovieCredits = (movieId) => {
	const url = `${tmdbApi.url}${tmdbApi.pathMovieCredits}?${tmdbApi.key}`.replace('{movie_id}', movieId);
	return fetch(url).then((response) => {
		if (!response.ok) {
			throw Error(response.status);
		}
		return response.json();
	});
};

export const fetchMovieInfo = (movie) => {
	return fetch(`${tmdbApi.url}${tmdbApi.pathSearchMovies}?${tmdbApi.key}&query=${movie.Name}&year=${movie.Year}`).then((response) => {
		if (!response.ok) {
			throw Error(response.status);
		}
		return response.json();
	});
};
