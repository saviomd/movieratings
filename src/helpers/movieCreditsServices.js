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
