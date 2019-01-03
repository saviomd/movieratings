import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { MovieDiaryConsumer } from '../../contexts/movieDiaryContext';
import { MovieRatingsConsumer } from '../../contexts/movieRatingsContext';

const renderMovieNameSearch = ({ movieSearchString, moviesFiltered, setMovieSearchString }) => (
	<div className="mb-3">
		<div className="input-group input-group-sm mb-1">
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

const MovieNameSearch = ({ type }) => (
	<>
		{type === 'Diary' && (
			<MovieDiaryConsumer>
				{({
					getMovieDiaryFiltered,
					movieSearchString,
					setMovieSearchString,
				}) => renderMovieNameSearch({
					movieSearchString,
					moviesFiltered: getMovieDiaryFiltered(),
					setMovieSearchString,
				})}
			</MovieDiaryConsumer>
		)}
		{type === 'Ratings' && (
			<MovieRatingsConsumer>
				{({
					getMovieRatingsFiltered,
					movieSearchString,
					setMovieSearchString,
				}) => renderMovieNameSearch({
					movieSearchString,
					moviesFiltered: getMovieRatingsFiltered(),
					setMovieSearchString,
				})}
			</MovieRatingsConsumer>
		)}
	</>
);

export default MovieNameSearch;
