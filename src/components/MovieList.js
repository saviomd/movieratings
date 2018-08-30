import PropTypes from 'prop-types';
import React from 'react';

import MovieButton from './MovieButton';

const MovieList = ({ movies, type }) => (
	<ul className="list-unstyled">
		{movies.map(movie => (
			<li className="mb-3" key={movie.Id}>
				<MovieButton movie={movie} type={type} />
			</li>
		))}
	</ul>
)

MovieList.propTypes = {
	movies: PropTypes.arrayOf(PropTypes.object).isRequired,
	type: PropTypes.string.isRequired
};

export default MovieList;
