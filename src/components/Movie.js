import PropTypes from 'prop-types';
import React from 'react';

class Movie extends React.Component {
	render () {
		const movie = this.props.movie;
		const type = this.props.type;
		let dateText;
		let movieDate;
		if (type === 'diary') {
			dateText = 'watched in ';
			movieDate = new Date(movie.WatchedDate);
		} else if (type === 'ratings') {
			dateText = 'rated in ';
			movieDate = new Date(movie.Date);
		}
		dateText += movieDate.toLocaleDateString('en-GB', {day: '2-digit', month: 'short', year: 'numeric'});
		return (
			<li className="mb-3">
				<a className="btn btn-secondary btn-block" href={movie.LetterboxdURI} target="_blank" rel="noopener noreferrer">
					<div className="text-left text-truncate">
						{movie.Name}
						<span className="ml-1 small">({movie.Year})</span>
					</div>
					<div className="small text-right">
						{movie.RatingFormatted}<br />
						{dateText}
					</div>
				</a>
			</li>
		)
	}
}

Movie.propTypes = {
	movie: PropTypes.shape({
		Date: PropTypes.string.isRequired,
		LetterboxdURI: PropTypes.string.isRequired,
		Name: PropTypes.string.isRequired,
		Rating: PropTypes.number.isRequired,
		RatingFormatted: PropTypes.string.isRequired,
		Year: PropTypes.number.isRequired
	}),
	type: PropTypes.string.isRequired
}

export default Movie;
