import PropTypes from 'prop-types';
import React from 'react';

import { MovieDiaryConsumer } from '../../contexts/movieDiaryContext';
import { MovieRatingsConsumer } from '../../contexts/movieRatingsContext';
import MovieButton from '../MovieButton';
import Message from '../Message';

const renderMovieList = ({ movies, moviesStatus, type }) => {
	let html;
	if (moviesStatus === 'loaded' && movies.length) {
		html = (
			<ul className="list-unstyled">
				{movies.map(movie => (
					<li className="mb-3" key={movie.Id}>
						<MovieButton movie={movie} type={type} />
					</li>
				))}
			</ul>
		);
	} else if (moviesStatus === 'loaded' && !movies.length) {
		html = (
			<Message type="noMovies" />
		);
	} else if (moviesStatus === 'loading' || moviesStatus === 'error') {
		html = (
			<Message type={moviesStatus} />
		);
	}
	return html;
};

const MovieList = ({ type }) => (
	<>
		{type === 'Diary' && (
			<MovieDiaryConsumer>
				{({ movieDiary, movieDiaryStatus }) => renderMovieList({ movies: movieDiary, moviesStatus: movieDiaryStatus, type })}
			</MovieDiaryConsumer>
		)}
		{type === 'Ratings' && (
			<MovieRatingsConsumer>
				{({ movieRatings, movieRatingsStatus }) => renderMovieList({ movies: movieRatings, moviesStatus: movieRatingsStatus, type })}
			</MovieRatingsConsumer>
		)}
	</>
);

MovieList.propTypes = {
	type: PropTypes.string.isRequired
};

export default MovieList;
