import React, { useEffect, useMemo, useState } from 'react';

import tmdbApi from '../helpers/tmdbApi';
import { fetchMovieRecommendations } from '../helpers/tmdbServices';

const MovieRecommendationsContext = React.createContext();

const initialState = {
	movieRecommendations: [],
	movieRecommendationsStatus: ''
};

const MovieRecommendationsStore = ({ children, movieId }) => {
	const [state, setState] = useState(initialState);

	function loadMovieRecommendations(movieId) {
		setState(prevState => ({
			...prevState,
			movieRecommendationsStatus: 'loading',
		}));
		fetchMovieRecommendations(movieId)
			.then((json) => {
				json.results.forEach(movie => {
					movie.poster_url = (movie.poster_path ? tmdbApi.img.baseUrl + tmdbApi.img.posterSize + movie.poster_path : null);
					movie.tmdbURI = `https://www.themoviedb.org/movie/${movie.id}`;
				});
				setState(prevState => ({
					...prevState,
					movieRecommendations: json.results,
					movieRecommendationsStatus: 'loaded',
				}));
			})
			.catch((error) => {
				setState(prevState => ({
					...prevState,
					movieRecommendationsStatus: 'error',
				}));
				console.log(error.message);
			});
	}

	useEffect(() => {
		loadMovieRecommendations(movieId);
	}, [movieId]);

	const providerValue = useMemo(() => ({ ...state }), [state]);
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
