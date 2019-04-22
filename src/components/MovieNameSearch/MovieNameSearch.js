import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';

import movieDiaryContext from '../../contexts/movieDiaryContext';
import movieRatingsContext from '../../contexts/movieRatingsContext';

const MovieNameSearch = ({ type }) => {
	const [state, setState] = useState({
		movieSearchString: '',
		moviesFiltered: [],
		setMovieSearchString: null,
	});
	const {
		movieDiaryFiltered,
		movieDiarySearchString,
		movieDiaryStatus,
		setMovieDiarySearchString,
	} = useContext(movieDiaryContext);
	const {
		movieRatingsFiltered,
		movieRatingsSearchString,
		movieRatingsStatus,
		setMovieRatingsSearchString,
	} = useContext(movieRatingsContext);

	useEffect(() => {
		if (type === 'Diary') {
			setState(prevState => ({
				...prevState,
				movieSearchString: movieDiarySearchString,
				moviesFiltered: movieDiaryFiltered,
				setMovieSearchString: setMovieDiarySearchString,
			}));
		} else if (type === 'Ratings') {
			setState(prevState => ({
				...prevState,
				movieSearchString: movieRatingsSearchString,
				moviesFiltered: movieRatingsFiltered,
				setMovieSearchString: setMovieRatingsSearchString,
			}));
		};
	}, [
		movieDiaryFiltered,
		movieDiarySearchString,
		movieDiaryStatus,
		movieRatingsFiltered,
		movieRatingsSearchString,
		movieRatingsStatus,
		setMovieDiarySearchString,
		setMovieRatingsSearchString,
		type,
	]);

	const {
		movieSearchString,
		moviesFiltered,
		setMovieSearchString,
	} = state;
	return (
		<div className="mb-3">
			<div className="input-group mb-1">
				<input id="search-movie" className="form-control" placeholder="Search..." type="text" value={movieSearchString} onChange={(event) => setMovieSearchString(event.target.value)} />
				<span className="input-group-append">
					<button className="btn btn-secondary" type="button" onClick={() => setMovieSearchString('')}>
						<FontAwesomeIcon icon="times" />
					</button>
				</span>
			</div>
			<p className="small text-right">{moviesFiltered.length} movies</p>
		</div>
	);
};

export default MovieNameSearch;
