import tmdbApi from '../helpers/tmdbApi';

export const fetchMovieInfo = (movie) => {
	return fetch(`${tmdbApi.url}${tmdbApi.pathSearchMovies}?${tmdbApi.key}&query=${movie.Name}&year=${movie.Year}`).then((response) => {
		if (!response.ok) {
			throw Error(response.status);
		}
		return response.json();
	});
};
