import PropTypes from 'prop-types';
import React from 'react';

import MovieInfoBody from './MovieInfoBody';
import MovieInfoHeader from './MovieInfoHeader';

const MovieInfo = ({ movieInfo }) => (
	<div className="border border-secondary rounded">
		<MovieInfoHeader movieInfo={movieInfo} />
		<MovieInfoBody movieInfo={movieInfo} />
	</div>
);

MovieInfo.propTypes = {
	movieInfo: PropTypes.shape({
		backdrop_url: PropTypes.string.isRequired,
		dataStatus: PropTypes.string.isRequired,
		id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
		LetterboxdURI: PropTypes.string.isRequired,
		overview: PropTypes.string.isRequired,
		poster_url: PropTypes.string.isRequired,
		Rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
		title: PropTypes.string.isRequired,
		vote_average: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
	})
};

export default MovieInfo;
