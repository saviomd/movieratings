import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';

import movieDiaryContext from '../../contexts/movieDiaryContext';
import movieRatingsContext from '../../contexts/movieRatingsContext';
import MovieButton from '../MovieButton';
import Message from '../Message';

const MovieList = ({ type }) => {
	const [state, setState] = useState({
		increasePage: null,
		moviesFiltered: [],
		moviesPaginated: [],
		moviesStatus: null,
	});
	const {
		getMovieDiaryFiltered,
		getMovieDiaryPaginated,
		increaseMovieDiaryPage,
		movieDiaryPage,
		movieDiarySearchString,
		movieDiaryStatus,
	} = useContext(movieDiaryContext);
	const {
		getMovieRatingsFiltered,
		getMovieRatingsPaginated,
		increaseMovieRatingsPage,
		movieRatingsPage,
		movieRatingsSearchString,
		movieRatingsStatus,
	} = useContext(movieRatingsContext);
	useEffect(() => {
		if (type === 'Diary') {
			setState(prevState => ({
				...prevState,
				increasePage: increaseMovieDiaryPage,
				moviesFiltered: getMovieDiaryFiltered(),
				moviesPaginated: getMovieDiaryPaginated(),
				moviesStatus: movieDiaryStatus,
			}));
		} else if (type === 'Ratings') {
			setState(prevState => ({
				...prevState,
				increasePage: increaseMovieRatingsPage,
				moviesFiltered: getMovieRatingsFiltered(),
				moviesPaginated: getMovieRatingsPaginated(),
				moviesStatus: movieRatingsStatus,
			}));
		}
	}, [
		movieDiaryPage,
		movieDiarySearchString,
		movieDiaryStatus,
		movieRatingsPage,
		movieRatingsSearchString,
		movieRatingsStatus,
		type,
	]);
	const {
		increasePage,
		moviesFiltered,
		moviesPaginated,
		moviesStatus,
	} = state;
	return (
		<>
			{(moviesStatus === 'loaded' && !!moviesFiltered.length) && (
				<>
					<ul className="list-unstyled">
						{moviesPaginated.map(movie => (
							<li className="mb-3" key={movie.Id}>
								<MovieButton movie={movie} type={type} />
							</li>
						))}
					</ul>
					{moviesPaginated.length < moviesFiltered.length && <div className="mb-3 text-center">
						<button className="btn btn-danger" type="button" onClick={increasePage}>Show more</button>
					</div>}
				</>
			)}
			{(moviesStatus === 'loaded' && !moviesFiltered.length) && (
				<Message type="noMovies" />
			)}
			{(moviesStatus === 'loading' || moviesStatus === 'error') && (
				<Message type={moviesStatus} />
			)}
		</>
	);
};

MovieList.propTypes = {
	type: PropTypes.string.isRequired
};

export default MovieList;
