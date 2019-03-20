import PropTypes from 'prop-types';
import React from 'react';

const MovieBackdrop = ({ backdrop_url, title }) => {
	const movieBackdropStyle = {
		paddingTop: `${300/533*100}%`,
	};
	return (
		<div className="bg-secondary embed-responsive text-white" style={movieBackdropStyle}>
			{backdrop_url ? (
				<img alt={`Backdrop for ${title}`} className="embed-responsive-item" src={backdrop_url} />
			) : (
				<div className="embed-responsive-item text-center">
					{`No backdrop available for ${title}`}
				</div>
			)}
		</div>
	);
};

MovieBackdrop.propTypes = {
	backdrop_url: PropTypes.string,
	title: PropTypes.string.isRequired,
};

export default MovieBackdrop;
