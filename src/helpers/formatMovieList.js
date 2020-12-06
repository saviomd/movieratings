export default function formatMovieList(movieList) {
	movieList.reverse();
	movieList = movieList.map((movie, index) => {
		movie.Id = (movie.LetterboxdURI.length ? movie.LetterboxdURI.split('boxd.it/')[1] : index.toString());
		movie.Name = movie.Name.toString();
		movie.DateFormatted = (new Date(movie.Date)).toLocaleDateString('en-GB', {day: '2-digit', month: 'short', year: 'numeric'});
		if (movie.WatchedDate) {
			movie.WatchedDateFormatted = (new Date(movie.WatchedDate)).toLocaleDateString('en-GB', {day: '2-digit', month: 'short', year: 'numeric'});
		}
		return movie;
	});
	return movieList;
}
