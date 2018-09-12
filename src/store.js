import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import movieDiaryReducer from './reducers/movieDiary';
import movieInfoReducer from './reducers/movieInfo';
import movieRatingsReducer from './reducers/movieRatings';
import moviesPerDecadeReleasedReducer from './reducers/moviesPerDecadeReleased';
import moviesPerRatingGivenReducer from './reducers/moviesPerRatingGiven';
import moviesPerYearWatchedReducer from './reducers/moviesPerYearWatched';

const reducer = combineReducers({
	movieDiary: movieDiaryReducer,
	movieInfo: movieInfoReducer,
	movieRatings: movieRatingsReducer,
	moviesPerDecadeReleased: moviesPerDecadeReleasedReducer,
	moviesPerRatingGiven: moviesPerRatingGivenReducer,
	moviesPerYearWatched: moviesPerYearWatchedReducer
});

export default createStore(
	reducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
);
