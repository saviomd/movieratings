import PropTypes from 'prop-types';
import React from 'react';

import { MovieDiaryConsumer } from '../../contexts/movieDiaryContext';
import { MovieRatingsConsumer } from '../../contexts/movieRatingsContext';
import MovieButton from '../MovieButton';
import Message from '../Message';

const renderMovieList = ({ increasePage, moviesFiltered, moviesPaginated, moviesStatus, type }) => {
	let html;
	if (moviesStatus === 'loaded' && moviesFiltered.length) {
		html = (
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
		);
	} else if (moviesStatus === 'loaded' && !moviesFiltered.length) {
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
				{({
					getMovieDiaryFiltered,
					getMovieDiaryPaginated,
					increaseMovieDiaryPage,
					movieDiaryStatus,
				}) => renderMovieList({
					increasePage: increaseMovieDiaryPage,
					moviesFiltered: getMovieDiaryFiltered(),
					moviesPaginated: getMovieDiaryPaginated(),
					moviesStatus: movieDiaryStatus,
					type,
				})}
			</MovieDiaryConsumer>
		)}
		{type === 'Ratings' && (
			<MovieRatingsConsumer>
				{({
					getMovieRatingsFiltered,
					getMovieRatingsPaginated,
					increaseMovieRatingsPage,
					movieRatingsStatus,
				}) => renderMovieList({
					increasePage: increaseMovieRatingsPage,
					moviesFiltered: getMovieRatingsFiltered(),
					moviesPaginated: getMovieRatingsPaginated(),
					moviesStatus: movieRatingsStatus,
					type,
				})}
			</MovieRatingsConsumer>
		)}
	</>
);

MovieList.propTypes = {
	type: PropTypes.string.isRequired
};

export default MovieList;
