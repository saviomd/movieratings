import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { MovieDiaryConsumer } from '../../contexts/movieDiaryContext';
import { MovieRatingsConsumer } from '../../contexts/movieRatingsContext';
import { MovieSearchConsumer } from '../../contexts/movieSearchContext';

const MovieNameSearch = ({ type }) => (
	<MovieSearchConsumer>
		{({ setMovieSearchString, movieSearchString }) => (
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
						{({ movieDiary }) => (
							<p className="small text-right">{movieDiary.length} movies</p>
						)}
					</MovieDiaryConsumer>
				)}
				{type === 'Ratings' && (
					<MovieRatingsConsumer>
						{({ movieRatings }) => (
							<p className="small text-right">{movieRatings.length} movies</p>
						)}
					</MovieRatingsConsumer>
				)}
			</div>
		)}
	</MovieSearchConsumer>
);

export default MovieNameSearch;
