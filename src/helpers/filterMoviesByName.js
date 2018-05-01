export default function filterMoviesByName (movieList, value) {
	return movieList.filter((movie) => {
		const movieName = movie.Name.toLowerCase();
		return (movieName.includes(value.toLowerCase()));
	});
}
