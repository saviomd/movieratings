import tmdbApi from './tmdbApi';

export default function formatMovieInfo(movie, newMovie) {
	return {
		backdrop_url: (newMovie.backdrop_path ? tmdbApi.img.baseUrl + tmdbApi.img.backdropSize + newMovie.backdrop_path : null),
		id: newMovie.id,
		LetterboxdURI: movie.LetterboxdURI,
		original_language: newMovie.original_language.toUpperCase(),
		original_title: newMovie.original_title,
		overview: newMovie.overview,
		poster_url: (newMovie.poster_path ? tmdbApi.img.baseUrl + tmdbApi.img.posterSize + newMovie.poster_path : null),
		Rating: movie.Rating,
		release_year: newMovie.release_date.split('-')[0],
		title: newMovie.title,
		tmdbURI: `https://www.themoviedb.org/movie/${newMovie.id}`,
		vote_average: newMovie.vote_average,
		vote_count: newMovie.vote_count,
	};
}
