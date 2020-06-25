import React, { useEffect, useMemo, useReducer } from 'react';

import { fetchMovieInfo } from '../helpers/tmdbServices';
import tmdbApi from '../helpers/tmdbApi';
import formatMovieInfo from '../helpers/formatMovieInfo';

const MovieInfoContext = React.createContext();

const initialState = {
	movieInfo: {
		backdrop_url: tmdbApi.img.fallbackUrl,
		id: '',
		LetterboxdURI: '',
		overview: '',
		poster_url: tmdbApi.img.fallbackUrl,
		Rating: '',
		title: '',
		vote_average: ''
	},
	movieInfoStatus: ''
};

function reducer(state, action) {
	switch (action.type) {
		case 'setMovieInfo':
			return { ...state, movieInfo: action.payload, movieInfoStatus: 'loaded' };
		case 'setMovieInfoStatus':
			return { ...state, movieInfoStatus: action.payload };
		default:
			throw new Error();
	}
}

const MovieInfoStore = ({ children, movie }) => {
	const [state, dispatchMovieInfo] = useReducer(reducer, initialState);

	function loadMovieInfo(movie) {
		if (movie !== undefined) {
			dispatchMovieInfo({ type: 'setMovieInfoStatus', payload: 'loading' });
			fetchMovieInfo(movie)
				.then((json) => {
					if (json.results.length) {
						const newMovie = json.results.find(obj => (obj.title === movie.Name && obj.release_date.indexOf(movie.Year) > -1));
						if (newMovie !== undefined) {
							dispatchMovieInfo({ type: 'setMovieInfo', payload: formatMovieInfo(movie, newMovie) });
						} else {
							throw Error('No movie found');
						}
					} else {
						throw Error('No movie found');
					}
				})
				.catch((error) => {
					dispatchMovieInfo({ type: 'setMovieInfoStatus', payload: 'error' });
					console.log(error.message);
				});
		}
	}

	useEffect(() => {
		loadMovieInfo(movie);
	}, [movie]);

	const providerValue = useMemo(() => state, [state]);
	return (
		<MovieInfoContext.Provider value={providerValue}>
			{children}
		</MovieInfoContext.Provider>
	);
};

export {
	MovieInfoContext as default,
	MovieInfoStore,
};
