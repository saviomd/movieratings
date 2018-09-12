export const fetchMovieDiary = () => {
	return fetch('https://saviomd.com/movieratings/data/diary.json').then((response) => {
		if (!response.ok) {
			throw Error(response.status);
		}
		return response.json();
	});
};
