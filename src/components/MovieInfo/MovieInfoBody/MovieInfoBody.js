import React, { useContext } from 'react';

import { MovieCreditsStore } from '../../../contexts/movieCreditsContext';
import movieInfoContext from '../../../contexts/movieInfoContext';
import MovieInfoCastCrew from '../MovieInfoCastCrew';

const MovieInfoBody = () => {
	const { movieInfo } = useContext(movieInfoContext);
	const movieBackdropStyle = {
		paddingTop: `${300/533*100}%`,
	};
	return (
		<>
			<div className="p-3">
				<p className="lead">{movieInfo.overview}</p>
				<MovieCreditsStore movieId={movieInfo.id}>
					<MovieInfoCastCrew />
				</MovieCreditsStore>
				<div className="text-right">
					<div className="mb-3">
						<a className="btn btn-danger btn-sm" href={movieInfo.LetterboxdURI} target="_blank" rel="noopener noreferrer">View movie at Letterboxd</a>
					</div>
					<div className="mb-3">
						<a className="btn btn-danger btn-sm" href={movieInfo.tmdbURI} target="_blank" rel="noopener noreferrer">View movie at TMDB</a>
					</div>
				</div>
			</div>
			<div className="bg-secondary embed-responsive" style={movieBackdropStyle}>
				<img alt={`backdrop for ${movieInfo.title}`} className="embed-responsive-item rounded-bottom" src={movieInfo.backdrop_url} />
			</div>
		</>
	);
};

export default MovieInfoBody;
