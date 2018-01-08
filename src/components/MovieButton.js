import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const propTypes = {
	movie: PropTypes.shape({
		Id: PropTypes.string.isRequired,
		Date: PropTypes.string.isRequired,
		DateFormatted: PropTypes.string.isRequired,
		LetterboxdURI: PropTypes.string.isRequired,
		Name: PropTypes.string.isRequired,
		Rating: PropTypes.number.isRequired,
		RatingFormatted: PropTypes.string.isRequired,
		WatchedDate: PropTypes.string,
		WatchedDateFormatted: PropTypes.string,
		Year: PropTypes.number.isRequired
	}),
	type: PropTypes.string.isRequired
}

class MovieButton extends React.Component {
	render () {
		const movie = this.props.movie;
		const type = this.props.type;
		let dateText;
		if (type === 'diary') {
			dateText = 'watched in ' + movie.WatchedDateFormatted;
		} else if (type === 'ratings') {
			dateText = 'rated in ' + movie.DateFormatted;
		}
		return (
			<li className="mb-3">
				<Link className="btn btn-secondary btn-block" to={`/movie/${movie.Id}`}>
					<div className="text-left text-truncate">
						{movie.Name}
						<span className="ml-1 small">({movie.Year})</span>
					</div>
					<div className="align-items-end row small">
						<div className="col text-left">
							{movie.RatingFormatted}
						</div>
						<div className="col small text-right">
							{dateText}
						</div>
					</div>
				</Link>
			</li>
		)
	}
}

MovieButton.propTypes = propTypes;

export default MovieButton;
