import PropTypes from 'prop-types';
import React from 'react';

import MovieButton from './MovieButton';

const propTypes = {
	movies: PropTypes.arrayOf(PropTypes.object).isRequired,
	type: PropTypes.string.isRequired
}

class MovieList extends React.Component {
	render () {
		const movies = this.props.movies.map((movie) =>
			<li className="mb-3" key={movie.Id}>
				<MovieButton movie={movie} type={this.props.type} />
			</li>
		);
		return (
			<ul className="list-unstyled">
				{movies}
			</ul>
		)
	}
}

MovieList.propTypes = propTypes;

export default MovieList;
