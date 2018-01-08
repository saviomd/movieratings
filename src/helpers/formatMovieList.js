export default function formatMovieList(movieList) {
	movieList.reverse();
	movieList = movieList.map((movie, index) => {
		movie.Id = (movie.LetterboxdURI.length ? movie.LetterboxdURI.split('/film/')[1].split('/')[0] : index.toString());
		movie.Name = movie.Name.toString();
		movie.DateFormatted = (new Date(movie.Date)).toLocaleDateString('en-GB', {day: '2-digit', month: 'short', year: 'numeric'});
		movie.WatchedDateFormatted = (new Date(movie.WatchedDate)).toLocaleDateString('en-GB', {day: '2-digit', month: 'short', year: 'numeric'}) || null;
		let ratingFormatted = '';
		for (var i = 0; i < movie.Rating; i++) {
			ratingFormatted += ' ⭐';
		};
		movie.RatingFormatted = ratingFormatted;
		return movie;
	});
	return movieList;
}
