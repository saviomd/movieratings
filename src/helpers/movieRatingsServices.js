export const fetchMovieRatings = () => {
	return fetch('https://saviomd.com/movieratings/data/ratings.json').then((response) => {
		if (!response.ok) {
			throw Error(response.status);
		}
		return response.json();
	});
};
