import PropTypes from 'prop-types';
import React from 'react';

const MoviePoster = ({ poster_url, title }) => {
	const moviePosterStyle = {
		paddingTop: `${450/300*100}%`,
	};
	return (
		<div className="bg-secondary embed-responsive text-white" style={moviePosterStyle}>
			{poster_url ? (
				<img alt={`Poster for ${title}`} className="embed-responsive-item" src={poster_url} />
			) : (
				<div className="embed-responsive-item text-center">
					{`No poster available for ${title}`}
				</div>
			)}
		</div>
	);
};

MoviePoster.propTypes = {
	poster_url: PropTypes.string,
	title: PropTypes.string.isRequired,
};

export default MoviePoster;
