import React from 'react';
import Movie from './Movie';

class MovieList extends React.Component {
	render () {
		const movies = this.props.movies.map((movie, index) =>
			<Movie key={movie.LetterboxdURI} movie={movie} />
		);
		return (
			<ul className="list-unstyled">
				{movies}
			</ul>
		)
	}
}

export default MovieList
