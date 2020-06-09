import React, { useEffect, useMemo, useReducer } from 'react';

import filterMoviesByName from '../helpers/filterMoviesByName';
import formatMovieList from '../helpers/formatMovieList';
import { fetchMovieDiary } from '../helpers/letterboxdServices';

const MovieDiaryContext = React.createContext();

const initialState = {
	movieDiary: [],
	movieDiaryPage: 1,
	movieDiarySearchString: '',
	movieDiaryStatus: '',
};

function reducer(state, action) {
	switch (action.type) {
		case 'setMovieDiary':
			return { ...state, movieDiary: action.payload, movieDiaryStatus: 'loaded' };
		case 'setMovieDiaryPage':
			return { ...state, movieDiaryPage: state.movieDiaryPage + 1 };
		case 'setMovieDiarySearchString':
			return { ...state, movieDiarySearchString: action.payload.toLowerCase() };
		case 'setMovieDiaryStatus':
			return { ...state, movieDiaryStatus: action.payload };
		default:
			throw new Error();
	}
}

const MovieDiaryStore = ({ children }) => {
	const [state, dispatchMovieDiary] = useReducer(reducer, initialState);

	const movieDiaryFiltered = useMemo(() => filterMoviesByName(state.movieDiary, state.movieDiarySearchString), [state.movieDiary, state.movieDiarySearchString]);

	const movieDiaryPaginated = useMemo(() => {
		const size = state.movieDiaryPage * 100;
		return movieDiaryFiltered.slice(0, size);
	}, [movieDiaryFiltered, state.movieDiaryPage]);

	const moviesPerYearWatched = useMemo(() => {
		const groups = state.movieDiary.reduce((acc, curr) => {
			const year = curr.WatchedDate.split('-')[0];
			acc[year] ? acc[year]++ : acc[year] = 1;
			return acc;
		}, {});
		let max = 0;
		for (const year in groups) {
			max = (groups[year] > max ? groups[year] : max);
		}
		return { groups, max };
	}, [state.movieDiary]);

	function loadMovieDiary() {
		dispatchMovieDiary({ type: 'setMovieDiaryStatus', payload: 'loading' });
		return fetchMovieDiary()
			.then(json => {
				const movieDiaryFormatted = formatMovieList(json);
				dispatchMovieDiary({ type: 'setMovieDiary', payload: movieDiaryFormatted });
				return movieDiaryFormatted;
			})
			.catch((error) => {
				dispatchMovieDiary({ type: 'setMovieDiaryStatus', payload: 'error' });
				console.log(error.message);
			});
	}

	useEffect(() => {
		loadMovieDiary();
	}, []);

	const providerValue = useMemo(() => ({
		...state,
		dispatchMovieDiary,
		movieDiaryFiltered,
		movieDiaryPaginated,
		moviesPerYearWatched,
	}), [
		movieDiaryFiltered,
		movieDiaryPaginated,
		moviesPerYearWatched,
		state,
	]);
	return (
		<MovieDiaryContext.Provider value={providerValue}>
			{children}
		</MovieDiaryContext.Provider>
	);
};

export {
	MovieDiaryContext as default,
	MovieDiaryStore,
};
