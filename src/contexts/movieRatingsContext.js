import React, { useEffect, useMemo, useState } from 'react';

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

const MovieRatingsStore = ({ children }) => {
	const [state, setState] = useState(initialState);

	const movieRatingsFiltered = useMemo(() => {
		const { movieRatings, movieRatingsSearchString } = state;
		return filterMoviesByName(movieRatings, movieRatingsSearchString);
	}, [state.movieRatings, state.movieRatingsSearchString]);

	const movieRatingsPaginated = useMemo(() => {
		const { movieRatingsPage } = state;
		const size = movieRatingsPage * 100;
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

	function increaseMovieRatingsPage() {
		const { movieRatingsPage } = state;
		setState(prevState => ({
			...prevState,
			movieRatingsPage: movieRatingsPage + 1,
		}));
	}

	function loadMovieRatings() {
		setState(prevState => ({
			...prevState,
			movieRatingsStatus: 'loading',
		}));
		return fetchMovieRatings()
			.then(json => {
				const movieRatingsFormatted = formatMovieList(json);
				setState(prevState => ({
					...prevState,
					movieRatings: movieRatingsFormatted,
					movieRatingsStatus: 'loaded',
				}));
				return movieRatingsFormatted;
			})
			.catch((error) => {
				setState(prevState => ({
					...prevState,
					movieRatingsStatus: 'error',
				}));
				console.log(error.message);
			});
	}

	function setMovieRatingsSearchString(value) {
		value.trim().toLowerCase();
		setState(prevState => ({
			...prevState,
			movieRatingsSearchString: value,
		}));
	}

	useEffect(() => {
		loadMovieRatings();
	}, []);

	const providerValue = useMemo(() => ({
		...state,
		increaseMovieRatingsPage,
		movieRatingsFiltered,
		movieRatingsPaginated,
		moviesPerDecadeReleased,
		moviesPerRatingGiven,
		setMovieRatingsSearchString,
	}), [state]);
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
