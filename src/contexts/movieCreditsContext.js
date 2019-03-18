import React, { useEffect, useMemo, useState } from 'react';

import { fetchMovieCredits } from '../helpers/movieCreditsServices';

const MovieCreditsContext = React.createContext();

const initialState = {
	movieCredits: {
		cast: [],
		crew: [],
		id: ''
	},
	movieCreditsStatus: ''
};

const MovieCreditsStore = ({ children, movieId }) => {
	const [state, setState] = useState(initialState);

	function loadMovieCredits(movieId) {
		setState(prevState => ({
			...prevState,
			movieCreditsStatus: 'loading',
		}));
		fetchMovieCredits(movieId)
			.then((json) => {
				json.cast.forEach(person => {
					person.tmdbURI = `https://www.themoviedb.org/person/${person.id}`;
				});
				json.crew.forEach(person => {
					person.tmdbURI = `https://www.themoviedb.org/person/${person.id}`;
				});
				setState(prevState => ({
					...prevState,
					movieCredits: json,
					movieCreditsStatus: 'loaded',
				}));
			})
			.catch((error) => {
				setState(prevState => ({
					...prevState,
					movieCreditsStatus: 'error',
				}));
				console.log(error.message);
			});
	}

	useEffect(() => {
		loadMovieCredits(movieId);
	}, [movieId]);

	const providerValue = useMemo(() => ({ ...state }), [state]);
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
