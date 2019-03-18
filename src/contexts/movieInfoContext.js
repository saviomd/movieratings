import React, { useEffect, useMemo, useState } from 'react';

import { fetchMovieInfo } from '../helpers/movieInfoServices';
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

const MovieInfoStore = ({ children, movie }) => {
	const [state, setState] = useState(initialState);

	function loadMovieInfo(movie) {
		if (movie !== undefined) {
			setState(prevState => ({
				...prevState,
				movieInfoStatus: 'loading',
			}));
			fetchMovieInfo(movie)
				.then((json) => {
					if (json.results.length) {
						const newMovie = json.results.find(obj => (obj.title === movie.Name && obj.release_date.indexOf(movie.Year) > -1));
						if (newMovie !== undefined) {
							setState(prevState => ({
								...prevState,
								movieInfoStatus: 'loaded',
								movieInfo: {
									backdrop_url: tmdbApi.img.baseUrl + tmdbApi.img.backdropSize + newMovie.backdrop_path,
									id: newMovie.id,
									LetterboxdURI: movie.LetterboxdURI,
									overview: newMovie.overview,
									poster_url: tmdbApi.img.baseUrl + tmdbApi.img.posterSize + newMovie.poster_path,
									Rating: movie.Rating,
									title: newMovie.title,
									tmdbURI: `https://www.themoviedb.org/movie/${newMovie.id}`,
									vote_average: newMovie.vote_average
								}
							}));
						} else {
							throw Error('No movie found');
						}
					} else {
						throw Error('No movie found');
					}
				})
				.catch((error) => {
					setState(prevState => ({
						...prevState,
						movieInfoStatus: 'error',
					}));
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
