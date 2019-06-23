import React, { useEffect, useMemo, useReducer } from 'react';

import tmdbApi from '../helpers/tmdbApi';
import { fetchMovieRecommendations } from '../helpers/tmdbServices';

const MovieRecommendationsContext = React.createContext();

const initialState = {
	movieRecommendations: [],
	movieRecommendationsStatus: ''
};

function reducer(state, action) {
	switch (action.type) {
		case 'setMovieRecommendations':
			return { ...state, movieRecommendations: action.payload, movieRecommendationsStatus: 'loaded' };
		case 'setMovieRecommendationsStatus':
			return { ...state, movieRecommendationsStatus: action.payload };
		default:
			throw new Error();
	}
}

const MovieRecommendationsStore = ({ children, movieId }) => {
	const [state, dispatchMovieRecommendations] = useReducer(reducer, initialState);

	function loadMovieRecommendations(movieId) {
		dispatchMovieRecommendations({ type: 'setMovieRecommendationsStatus', payload: 'loading' });
		fetchMovieRecommendations(movieId)
			.then((json) => {
				json.results.forEach(movie => {
					movie.poster_url = (movie.poster_path ? tmdbApi.img.baseUrl + tmdbApi.img.posterSize + movie.poster_path : null);
					movie.tmdbURI = `https://www.themoviedb.org/movie/${movie.id}`;
				});
				dispatchMovieRecommendations({ type: 'setMovieRecommendations', payload: json.results });
			})
			.catch((error) => {
				dispatchMovieRecommendations({ type: 'setMovieRecommendationsStatus', payload: 'error' });
				console.log(error.message);
			});
	}

	useEffect(() => {
		loadMovieRecommendations(movieId);
	}, [movieId]);

	const providerValue = useMemo(() => state, [state]);
	return (
		<MovieRecommendationsContext.Provider value={providerValue}>
			{children}
		</MovieRecommendationsContext.Provider>
	);
};

export {
	MovieRecommendationsContext as default,
	MovieRecommendationsStore,
};
