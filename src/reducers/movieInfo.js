import { fetchMovieInfo } from '../helpers/movieInfoServices';
import tmdbApi from '../helpers/tmdbApi';
import { loadMovieRatings } from './movieRatings';

const initState = {
	backdrop_url: tmdbApi.img.fallbackUrl,
	dataStatus: '',
	id: '',
	LetterboxdURI: '',
	overview: '',
	poster_url: tmdbApi.img.fallbackUrl,
	Rating: '',
	title: '',
	vote_average: ''
};

export const MOVIE_INFO_UPDATE = 'MOVIE_INFO_UPDATE';
export const MOVIE_INFO_STATUS_UPDATE = 'MOVIE_INFO_STATUS_UPDATE';

export const loadMovieInfo = (movieId) => {
	return (dispatch, getState) => {
		dispatch(loadMovieRatings())
			.then((movieList) => {
				dispatch(updateMovieInfoStatus('loading'));
				const movieFromList = movieList.find((obj) => (obj.Id === movieId));
				if (movieFromList !== undefined) {
					fetchMovieInfo(movieFromList)
						.then((json) => {
							if (json.results.length) {
								const movie = json.results.find((obj) => {
									return (obj.title === movieFromList.Name && obj.release_date.indexOf(movieFromList.Year) > -1)
								});
								if (movie !== undefined) {
									const movieInfo = {
										...getState().movieInfo,
										backdrop_url: tmdbApi.img.baseUrl + tmdbApi.img.backdropSize + '/' + movie.backdrop_path,
										dataStatus: 'loaded',
										id: movie.id,
										LetterboxdURI: movieFromList.LetterboxdURI,
										overview: movie.overview,
										poster_url: tmdbApi.img.baseUrl + tmdbApi.img.posterSize + '/' + movie.poster_path,
										Rating: movieFromList.Rating,
										title: movie.title,
										vote_average: movie.vote_average
									}
									dispatch(updateMovieInfo(movieInfo));
								} else {
									throw Error('No movie found');
								}
							} else {
								throw Error('No movie found');
							}
						})
						.catch((error) => {
							dispatch(updateMovieInfoStatus('error'));
							console.log(error.message);
						});
				}
			})
			.catch((error) => {
				dispatch(updateMovieInfoStatus('error'));
				console.log(error.message);
			});
	};
};
const updateMovieInfo = (value) => ({type: MOVIE_INFO_UPDATE, payload: value});
const updateMovieInfoStatus = (value) => ({type: MOVIE_INFO_STATUS_UPDATE, payload: value});

export default (state = initState, action) => {
	switch (action.type) {
		case MOVIE_INFO_UPDATE:
			return action.payload;
		case MOVIE_INFO_STATUS_UPDATE:
			return {...state, dataStatus: action.payload};
		default:
			return state;
	}
};
