export default function formatMovieCredits(movieCredits) {
	movieCredits.cast.forEach(person => {
		person.tmdbURI = `https://www.themoviedb.org/person/${person.id}`;
	});
	movieCredits.crew.forEach(person => {
		person.tmdbURI = `https://www.themoviedb.org/person/${person.id}`;
	});
	return movieCredits;
}
