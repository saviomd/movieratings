import React, { useContext } from 'react';

import { MovieCreditsStore } from '../../../contexts/movieCreditsContext';
import { MovieRecommendationsStore } from '../../../contexts/movieRecommendationsContext';
import movieInfoContext from '../../../contexts/movieInfoContext';
import MovieBackdrop from '../../MovieBackdrop';
import MovieInfoCastCrew from '../MovieInfoCastCrew';
import MovieInfoRecommendations from '../MovieInfoRecommendations';

const MovieInfoBody = () => {
	const { movieInfo } = useContext(movieInfoContext);
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
			<MovieBackdrop backdrop_url={movieInfo.backdrop_url} title={movieInfo.title} />
			<MovieRecommendationsStore movieId={movieInfo.id}>
				<MovieInfoRecommendations />
			</MovieRecommendationsStore>
		</>
	);
};

export default MovieInfoBody;
