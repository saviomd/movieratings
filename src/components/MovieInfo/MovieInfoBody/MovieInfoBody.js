import PropTypes from 'prop-types';
import React from 'react';

const MovieInfoBody = ({ movieInfo }) => (
	<>
		<div className="p-3">
			<p className="lead">{movieInfo.overview}</p>
			<div className="text-right">
				<div className="mb-3">
					<a className="btn btn-danger btn-sm" href={movieInfo.LetterboxdURI} target="_blank" rel="noopener noreferrer">View movie at Letterboxd</a>
				</div>
				<div className="mb-3">
					<a className="btn btn-danger btn-sm" href={`https://www.themoviedb.org/movie/${movieInfo.id}`} target="_blank" rel="noopener noreferrer">View movie at TMDB</a>
				</div>
			</div>
		</div>
		<img alt={`backdrop for ${movieInfo.title}`} className="img-fluid rounded-bottom" src={movieInfo.backdrop_url} />
	</>
);

MovieInfoBody.propTypes = {
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

export default MovieInfoBody;
