import PropTypes from 'prop-types';
import React from 'react';

import MovieButton from './MovieButton';

const propTypes = {
	movies: PropTypes.arrayOf(PropTypes.object).isRequired
}

class MovieList extends React.Component {
	render () {
		const movies = this.props.movies.map((movie) =>
			<MovieButton key={movie.Id} movie={movie} type={this.props.type} />
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
