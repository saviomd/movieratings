import React, { useEffect, useMemo, useReducer } from 'react';

import filterMoviesByName from '../helpers/filterMoviesByName';
import formatMovieList from '../helpers/formatMovieList';
import { fetchMovieRatings } from '../helpers/letterboxdServices';

const MovieRatingsContext = React.createContext();

const initialState = {
	movieRatings: [],
	movieRatingsPage: 1,
	movieRatingsSearchString: '',
	movieRatingsStatus: '',
};

function reducer(state, action) {
	switch (action.type) {
		case 'setMovieRatings':
			return { ...state, movieRatings: action.payload, movieRatingsStatus: 'loaded' };
		case 'setMovieRatingsPage':
			return { ...state, movieRatingsPage: state.movieRatingsPage + 1 };
		case 'setMovieRatingsSearchString':
			return { ...state, movieRatingsSearchString: action.payload.trim().toLowerCase() };
		case 'setMovieRatingsStatus':
			return { ...state, movieRatingsStatus: action.payload };
		default:
			throw new Error();
	}
}

const MovieRatingsStore = ({ children }) => {
	const [state, dispatchMovieRatings] = useReducer(reducer, initialState);

	const movieRatingsFiltered = useMemo(() => filterMoviesByName(state.movieRatings, state.movieRatingsSearchString), [state.movieRatings, state.movieRatingsSearchString]);

	const movieRatingsPaginated = useMemo(() => {
		const size = state.movieRatingsPage * 100;
		return movieRatingsFiltered.slice(0, size);
	}, [movieRatingsFiltered, state.movieRatingsPage]);

	const moviesPerDecadeReleased = useMemo(() => {
		const groups = state.movieRatings.reduce((acc, curr) => {
			const decade = `${curr.Year.toString().substr(0, 3)}0`;
			acc[decade] ? acc[decade]++ : acc[decade] = 1;
			return acc;
		}, {});
		let max = 0;
		for (const decade in groups) {
			max = (groups[decade] > max ? groups[decade] : max);
		}
		return { groups, max };
	}, [state.movieRatings]);

	const moviesPerRatingGiven = useMemo(() => {
		const groups = state.movieRatings.reduce((acc, curr) => {
			const rating = curr.Rating;
			acc[rating] ? acc[rating]++ : acc[rating] = 1;
			return acc;
		}, {});
		let max = 0;
		for (const rating in groups) {
			max = (groups[rating] > max ? groups[rating] : max);
		}
		return { groups, max };
	}, [state.movieRatings]);

	function loadMovieRatings() {
		dispatchMovieRatings({ type: 'setMovieRatingsStatus', payload: 'loading' });
		return fetchMovieRatings()
			.then(json => {
				const movieRatingsFormatted = formatMovieList(json);
				dispatchMovieRatings({ type: 'setMovieRatings', payload: movieRatingsFormatted });
				return movieRatingsFormatted;
			})
			.catch((error) => {
				dispatchMovieRatings({ type: 'setMovieRatingsStatus', payload: 'error' });
				console.log(error.message);
			});
	}

	useEffect(() => {
		loadMovieRatings();
	}, []);

	const providerValue = useMemo(() => ({
		...state,
		dispatchMovieRatings,
		movieRatingsFiltered,
		movieRatingsPaginated,
		moviesPerDecadeReleased,
		moviesPerRatingGiven,
	}), [
		movieRatingsFiltered,
		movieRatingsPaginated,
		moviesPerDecadeReleased,
		moviesPerRatingGiven,
		state,
	]);
	return (
		<MovieRatingsContext.Provider value={providerValue}>
			{children}
		</MovieRatingsContext.Provider>
	);
};

export {
	MovieRatingsContext as default,
	MovieRatingsStore,
};
