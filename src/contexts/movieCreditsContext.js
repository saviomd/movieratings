import React, { useEffect, useMemo, useReducer } from 'react';

import formatMovieCredits from '../helpers/formatMovieCredits';
import { fetchMovieCredits } from '../helpers/tmdbServices';

const MovieCreditsContext = React.createContext();

const initialState = {
	movieCredits: {
		cast: [],
		crew: [],
		id: ''
	},
	movieCreditsStatus: ''
};

function reducer(state, action) {
	switch (action.type) {
		case 'setMovieCredits':
			return { ...state, movieCredits: action.payload, movieCreditsStatus: 'loaded' };
		case 'setMovieCreditsStatus':
			return { ...state, movieCreditsStatus: action.payload };
		default:
			throw new Error();
	}
}

const MovieCreditsStore = ({ children, movieId }) => {
	const [state, dispatchMovieCredits] = useReducer(reducer, initialState);

	function loadMovieCredits(movieId) {
		dispatchMovieCredits({ type: 'setMovieCreditsStatus', payload: 'loading' });
		fetchMovieCredits(movieId)
			.then((json) => {
				dispatchMovieCredits({ type: 'setMovieCredits', payload: formatMovieCredits(json) });
			})
			.catch((error) => {
				dispatchMovieCredits({ type: 'setMovieCreditsStatus', payload: 'error' });
				console.log(error.message);
			});
	}

	useEffect(() => {
		loadMovieCredits(movieId);
	}, [movieId]);

	const providerValue = useMemo(() => state, [state]);
	return (
		<MovieCreditsContext.Provider value={providerValue}>
			{children}
		</MovieCreditsContext.Provider>
	);
};

export {
	MovieCreditsContext as default,
	MovieCreditsStore,
};
