import PropTypes from 'prop-types';
import React, { memo, useContext, useEffect, useReducer } from 'react';

import movieDiaryContext from '../../contexts/movieDiaryContext';
import movieRatingsContext from '../../contexts/movieRatingsContext';
import LoadingHandler from '../LoadingHandler';
import MovieButton from '../MovieButton';

const initialState = {
	dispatchMovie: null,
	dispatchMovieType: '',
	moviesFiltered: [],
	moviesPaginated: [],
	moviesStatus: null,
};

function reducer(state, action) {
	switch (action.type) {
		case 'setAll':
			return { ...state, ...action.payload };
		default:
			throw new Error();
	}
}

const MovieList = memo(function MovieList ({ type }) {
	const [state, dispatchMovieList] = useReducer(reducer, initialState);
	const {
		dispatchMovieDiary,
		movieDiaryFiltered,
		movieDiaryPage,
		movieDiaryPaginated,
		movieDiarySearchString,
		movieDiaryStatus,
	} = useContext(movieDiaryContext);
	const {
		dispatchMovieRatings,
		movieRatingsFiltered,
		movieRatingsPage,
		movieRatingsPaginated,
		movieRatingsSearchString,
		movieRatingsStatus,
	} = useContext(movieRatingsContext);

	useEffect(() => {
		let payload;
		if (type === 'Diary') {
			payload = {
				dispatchMovie: dispatchMovieDiary,
				dispatchMovieType: 'setMovieDiaryPage',
				moviesFiltered: movieDiaryFiltered,
				moviesPaginated: movieDiaryPaginated,
				moviesStatus: movieDiaryStatus,
			};
		} else if (type === 'Ratings') {
			payload = {
				dispatchMovie: dispatchMovieRatings,
				dispatchMovieType: 'setMovieRatingsPage',
				moviesFiltered: movieRatingsFiltered,
				moviesPaginated: movieRatingsPaginated,
				moviesStatus: movieRatingsStatus,
			};
		}
		dispatchMovieList({ type: 'setAll', payload });
	}, [
		dispatchMovieDiary,
		dispatchMovieRatings,
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

	return (
		<LoadingHandler dataStatus={state.moviesStatus} hasData={(!!state.moviesFiltered.length)} messageNoData="noMovies">
			<>
				<ul className="list-unstyled">
					{state.moviesPaginated.map(movie => (
						<li className="mb-3" key={movie.Id}>
							<MovieButton movie={movie} type={type} />
						</li>
					))}
				</ul>
				{state.moviesPaginated.length < state.moviesFiltered.length && <div className="mb-3 text-center">
					<button className="btn btn-danger" type="button" onClick={() => state.dispatchMovie({ type: state.dispatchMovieType })}>Show more</button>
				</div>}
			</>
		</LoadingHandler>
	);
});

MovieList.propTypes = {
	type: PropTypes.string.isRequired
};

export default MovieList;
