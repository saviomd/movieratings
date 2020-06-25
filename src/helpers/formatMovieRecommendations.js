import tmdbApi from './tmdbApi';

export default function formatMovieRecommendations(results) {
	results.forEach(movie => {
		movie.poster_url = (movie.poster_path ? tmdbApi.img.baseUrl + tmdbApi.img.posterSize + movie.poster_path : null);
		movie.tmdbURI = `https://www.themoviedb.org/movie/${movie.id}`;
	})
	return results;
}
