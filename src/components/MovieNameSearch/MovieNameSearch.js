import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { MovieDiaryConsumer } from '../../contexts/movieDiaryContext';
import { MovieRatingsConsumer } from '../../contexts/movieRatingsContext';
import { MovieSearchConsumer } from '../../contexts/movieSearchContext';

const MovieNameSearch = ({ type }) => (
	<MovieSearchConsumer>
		{({ movieSearchString, setMovieSearchString }) => (
			<div className="mb-3">
				<div className="input-group input-group-sm mb-1">
					<input id="search-movie" className="form-control" placeholder="Search..." type="text" value={movieSearchString} onChange={(event) => setMovieSearchString(event.target.value)} />
					<span className="input-group-append">
						<button className="btn btn-secondary" type="button" onClick={() => setMovieSearchString('')}>
							<FontAwesomeIcon icon="times" />
						</button>
					</span>
				</div>
				{type === 'Diary' && (
					<MovieDiaryConsumer>
						{({ movieDiaryFiltered }) => (
							<p className="small text-right">{movieDiaryFiltered.length} movies</p>
						)}
					</MovieDiaryConsumer>
				)}
				{type === 'Ratings' && (
					<MovieRatingsConsumer>
						{({ movieRatingsFiltered }) => (
							<p className="small text-right">{movieRatingsFiltered.length} movies</p>
						)}
					</MovieRatingsConsumer>
				)}
			</div>
		)}
	</MovieSearchConsumer>
);

export default MovieNameSearch;
