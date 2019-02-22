import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const MovieButton = memo(function MovieButton({ movie, type }) {
	let dateText;
	if (type === 'Diary') {
		dateText = `watched in ${movie.WatchedDateFormatted}`;
	} else if (type === 'Ratings') {
		dateText = `rated in ${movie.DateFormatted}`;
	}
	let stars = [];
	for (let i = 0; i < movie.Rating; i++) {
		stars.push(<FontAwesomeIcon key={i} className="mr-1" icon="star" />);
	}
	return (
		<Link className="btn btn-secondary btn-block" to={`/movie/${movie.Id}`}>
			<div className="text-left text-truncate">
				{movie.Name}
				<span className="ml-1 small">({movie.Year})</span>
			</div>
			<div className="align-items-end row small">
				<div className="col text-left text-warning">
					{stars}
				</div>
				<div className="col small text-right">
					{dateText}
				</div>
			</div>
		</Link>
	)
});

MovieButton.propTypes = {
	movie: PropTypes.shape({
		Id: PropTypes.string.isRequired,
		Date: PropTypes.string.isRequired,
		DateFormatted: PropTypes.string.isRequired,
		LetterboxdURI: PropTypes.string.isRequired,
		Name: PropTypes.string.isRequired,
		Rating: PropTypes.number.isRequired,
		WatchedDate: PropTypes.string,
		WatchedDateFormatted: PropTypes.string,
		Year: PropTypes.number.isRequired
	}),
	type: PropTypes.string.isRequired
};

export default MovieButton;
