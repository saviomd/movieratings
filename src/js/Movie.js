import React from 'react';

class Movie extends React.Component {
	render () {
		const {movie} = this.props;
		return (
			<li className="mb-3">
				<a className="btn btn-secondary btn-block" href={movie.LetterboxdURI} target="_blank" rel="noopener noreferrer">
					<div className="text-left text-truncate">
						{movie.Name}
						<span className="ml-1 small">({movie.Year})</span>
					</div>
					<div className="small text-right">
						{movie.RatingFormatted}
					</div>
				</a>
			</li>
		)
	}
}

export default Movie
