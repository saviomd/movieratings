export default function formatMovieList(movieList) {
	movieList.reverse();
	movieList = movieList.map((movie) => {
		movie.Name = movie.Name.toString();
		let ratingFormatted = '';
		for (var i = 0; i < movie.Rating; i++) {
			ratingFormatted += ' ⭐';
		};
		movie.RatingFormatted = ratingFormatted;
		return movie;
	});
	return movieList;
}
