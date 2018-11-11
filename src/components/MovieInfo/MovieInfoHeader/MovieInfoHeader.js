import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

const MovieInfoHeader = ({ movieInfo }) => (
	<>
		<div className="p-3 row">
			<div className="col-6 col-sm-4">
				<img alt={`poster for ${movieInfo.title}`} className="img-fluid" src={movieInfo.poster_url} />
			</div>
			<div className="col-6 col-sm-8 text-right">
				<div className="mb-3">
					{movieInfo.Rating} of 5
					<FontAwesomeIcon className="ml-1 text-warning" icon="star" />
					<div className="small">by me</div>
				</div>
				<div className="mb-3">
					{movieInfo.vote_average} of 10
					<FontAwesomeIcon className="ml-1 text-warning" icon="star" />
					<div className="small">by TMDb users</div>
				</div>
			</div>
		</div>
		<h1 className="bg-secondary h3 mb-0 p-3">{movieInfo.title}</h1>
	</>
);

MovieInfoHeader.propTypes = {
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

export default MovieInfoHeader;
