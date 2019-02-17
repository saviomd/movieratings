import React, { useContext } from 'react';

import movieInfoContext from '../../../contexts/movieInfoContext';

const MovieInfoBody = () => {
	const { movieInfo } = useContext(movieInfoContext);
	return (
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
};

export default MovieInfoBody;
