import formatMovieList from '../helpers/formatMovieList';
import { fetchMovieRatings } from '../helpers/movieRatingsServices';
import { loadMoviesPerDecadeReleased } from './moviesPerDecadeReleased';
import { loadMoviesPerRatingGiven } from './moviesPerRatingGiven';

const initState = {
	list: [],
	listStatus: ''
};

export const MOVIE_RATINGS_UPDATE = 'MOVIE_RATINGS_UPDATE';
export const MOVIE_RATINGS_STATUS_UPDATE = 'MOVIE_RATINGS_STATUS_UPDATE';

export const loadMovieRatings = () => {
	return (dispatch, getState) => {
		if (getState().movieRatings.list.length) {
			return new Promise((resolve) => resolve(getState().movieRatings.list));
		} else {
			dispatch(updateMovieRatingsStatus('loading'));
			return fetchMovieRatings()
				.then(json => {
					const movieList = formatMovieList(json);
					dispatch(updateMovieRatings(movieList));
					dispatch(loadMoviesPerDecadeReleased(movieList));
					dispatch(loadMoviesPerRatingGiven(movieList));
					return movieList;
				})
				.catch((error) => {
					dispatch(updateMovieRatingsStatus('error'));
					console.log(error.message);
				});
		}
	};
};
const updateMovieRatings = (value) => ({type: MOVIE_RATINGS_UPDATE, payload: value});
const updateMovieRatingsStatus = (value) => ({type: MOVIE_RATINGS_STATUS_UPDATE, payload: value});

export default (state = initState, action) => {
	switch (action.type) {
		case MOVIE_RATINGS_UPDATE:
			return {...state, list: action.payload, listStatus: 'loaded'};
		case MOVIE_RATINGS_STATUS_UPDATE:
			return {...state, listStatus: action.payload};
		default:
			return state;
	}
};
