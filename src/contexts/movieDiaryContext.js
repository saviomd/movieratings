import React, { useEffect, useMemo, useState } from 'react';

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

const MovieDiaryStore = ({ children }) => {
	const [state, setState] = useState(initialState);

	const movieDiaryFiltered = useMemo(() => {
		const { movieDiary, movieDiarySearchString } = state;
		return filterMoviesByName(movieDiary, movieDiarySearchString);
	}, [state.movieDiary, state.movieDiarySearchString]);

	const movieDiaryPaginated = useMemo(() => {
		const { movieDiaryPage } = state;
		const size = movieDiaryPage * 100;
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

	function increaseMovieDiaryPage() {
		const { movieDiaryPage } = state;
		setState(prevState => ({
			...prevState,
			movieDiaryPage: movieDiaryPage + 1,
		}));
	}

	function loadMovieDiary() {
		setState(prevState => ({
			...prevState,
			movieDiaryStatus: 'loading',
		}));
		return fetchMovieDiary()
			.then(json => {
				const movieDiaryFormatted = formatMovieList(json);
				setState(prevState => ({
					...prevState,
					movieDiary: movieDiaryFormatted,
					movieDiaryStatus: 'loaded',
				}));
				return movieDiaryFormatted;
			})
			.catch((error) => {
				setState(prevState => ({
					...prevState,
					movieDiaryStatus: 'error',
				}));
				console.log(error.message);
			});
	}

	function setMovieDiarySearchString(value) {
		value.trim().toLowerCase();
		setState(prevState => ({
			...prevState,
			movieDiarySearchString: value,
		}));
	}

	useEffect(() => {
		loadMovieDiary();
	}, []);

	const providerValue = useMemo(() => ({
		...state,
		increaseMovieDiaryPage,
		movieDiaryFiltered,
		movieDiaryPaginated,
		moviesPerYearWatched,
		setMovieDiarySearchString,
	}), [state]);
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
