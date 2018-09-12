import formatMovieList from '../helpers/formatMovieList';
import {fetchMovieDiary} from '../helpers/movieDiaryServices';
import {loadMoviesPerYearWatched} from './moviesPerYearWatched';

const initState = {
	list: [],
	listStatus: ''
};

export const MOVIE_DIARY_UPDATE = 'MOVIE_DIARY_UPDATE';
export const MOVIE_DIARY_STATUS_UPDATE = 'MOVIE_DIARY_STATUS_UPDATE';

export const loadMovieDiary = () => {
	return (dispatch, getState) => {
		if (getState().movieDiary.list.length) {
			return new Promise((resolve) => resolve(getState().movieDiary.list));
		} else {
			dispatch(updateMovieDiaryStatus('loading'));
			return fetchMovieDiary()
				.then(json => {
					const movieList = formatMovieList(json);
					dispatch(updateMovieDiary(movieList));
					dispatch(loadMoviesPerYearWatched(movieList));
					return movieList;
				})
				.catch((error) => {
					dispatch(updateMovieDiaryStatus('error'));
					console.log(error.message);
				});
		}
	};
};
const updateMovieDiary = (value) => ({type: MOVIE_DIARY_UPDATE, payload: value});
const updateMovieDiaryStatus = (value) => ({type: MOVIE_DIARY_STATUS_UPDATE, payload: value});

export default (state = initState, action) => {
	switch (action.type) {
		case MOVIE_DIARY_UPDATE:
			return {...state, list: action.payload, listStatus: 'loaded'};
		case MOVIE_DIARY_STATUS_UPDATE:
			return {...state, listStatus: action.payload};
		default:
			return state;
	}
};
