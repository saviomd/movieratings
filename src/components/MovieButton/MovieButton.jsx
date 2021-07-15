import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const MovieButton = memo(function MovieButton({ movie, type }) {
	let dateText;
	if (type === 'Diary' && movie.WatchedDateFormatted) {
		dateText = `watched in ${movie.WatchedDateFormatted}`;
	} else if (type === 'Ratings' && movie.DateFormatted) {
		dateText = `rated in ${movie.DateFormatted}`;
	}
	return (
		<Link className="btn btn-secondary d-block" to={`/movie/${movie.Id}`}>
			<div className="text-start text-truncate">
				{movie.Name}
				<span className="ms-1 small">({movie.Year})</span>
			</div>
			<div className="align-items-end row small">
				<div className="col text-start text-warning">
					{Array.from(Array(movie.Rating)).map((item, i) => (
						<FontAwesomeIcon key={i} className="me-1" icon="star" />
					))}
				</div>
				<div className="col small text-end">
					{dateText}
				</div>
			</div>
		</Link>
	);
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
