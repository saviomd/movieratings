import PropTypes from 'prop-types';
import React, { memo, useContext, useEffect, useState } from 'react';

import movieDiaryContext from '../../contexts/movieDiaryContext';
import movieRatingsContext from '../../contexts/movieRatingsContext';
import LoadingHandler from '../LoadingHandler';
import MovieButton from '../MovieButton';

const MovieList = memo(function MovieList ({ type }) {
	const [state, setState] = useState({
		increasePage: null,
		moviesFiltered: [],
		moviesPaginated: [],
		moviesStatus: null,
	});
	const {
		increaseMovieDiaryPage,
		movieDiaryFiltered,
		movieDiaryPage,
		movieDiaryPaginated,
		movieDiarySearchString,
		movieDiaryStatus,
	} = useContext(movieDiaryContext);
	const {
		increaseMovieRatingsPage,
		movieRatingsFiltered,
		movieRatingsPage,
		movieRatingsPaginated,
		movieRatingsSearchString,
		movieRatingsStatus,
	} = useContext(movieRatingsContext);

	useEffect(() => {
		if (type === 'Diary') {
			setState(prevState => ({
				...prevState,
				increasePage: increaseMovieDiaryPage,
				moviesFiltered: movieDiaryFiltered,
				moviesPaginated: movieDiaryPaginated,
				moviesStatus: movieDiaryStatus,
			}));
		} else if (type === 'Ratings') {
			setState(prevState => ({
				...prevState,
				increasePage: increaseMovieRatingsPage,
				moviesFiltered: movieRatingsFiltered,
				moviesPaginated: movieRatingsPaginated,
				moviesStatus: movieRatingsStatus,
			}));
		}
	}, [
		increaseMovieDiaryPage,
		increaseMovieRatingsPage,
		movieDiaryFiltered,
		movieDiaryPage,
		movieDiaryPaginated,
		movieDiarySearchString,
		movieDiaryStatus,
		movieRatingsFiltered,
		movieRatingsPage,
		movieRatingsPaginated,
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
		<LoadingHandler dataStatus={moviesStatus} hasData={(!!moviesFiltered.length)} messageNoData="noMovies">
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
		</LoadingHandler>
	);
});

MovieList.propTypes = {
	type: PropTypes.string.isRequired
};

export default MovieList;
