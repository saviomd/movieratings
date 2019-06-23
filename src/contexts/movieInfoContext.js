import React, { useEffect, useMemo, useReducer } from 'react';

import { fetchMovieInfo } from '../helpers/tmdbServices';
import tmdbApi from '../helpers/tmdbApi';

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
							const payload = {
								backdrop_url: (newMovie.backdrop_path ? tmdbApi.img.baseUrl + tmdbApi.img.backdropSize + newMovie.backdrop_path : null),
								id: newMovie.id,
								LetterboxdURI: movie.LetterboxdURI,
								overview: newMovie.overview,
								poster_url: (newMovie.poster_path ? tmdbApi.img.baseUrl + tmdbApi.img.posterSize + newMovie.poster_path : null),
								Rating: movie.Rating,
								title: newMovie.title,
								tmdbURI: `https://www.themoviedb.org/movie/${newMovie.id}`,
								vote_average: newMovie.vote_average
							};
							dispatchMovieInfo({ type: 'setMovieInfo', payload });
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
