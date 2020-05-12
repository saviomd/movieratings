import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';

import movieRecommendationsContext from '../../../contexts/movieRecommendationsContext';
import LoadingHandler from '../../LoadingHandler';
import MoviePoster from '../../MoviePoster';

const MovieInfoRecommendations = () => {
	const { movieRecommendations, movieRecommendationsStatus } = useContext(movieRecommendationsContext);
	const verticalListStyle = {
		overflowX: 'scroll',
		WebkitOverflowScrolling: 'touch',
	};
	return (
		<LoadingHandler dataStatus={movieRecommendationsStatus} hasData={!!movieRecommendations.length}>
			<div className="p-3">
				<h2 className="h4">
					Recommendations
					<FontAwesomeIcon className="ml-1 small" icon="external-link-alt" />
				</h2>
				<ul className="flex-nowrap form-row list-unstyled mb-0" style={verticalListStyle}>
					{movieRecommendations.map(movie => (
						<li className="col-5 col-md-3 col-lg-2 mb-3" key={movie.id}>
							<a className="text-danger" href={movie.tmdbURI} rel="noopener noreferrer" target="_blank">
								<MoviePoster poster_url={movie.poster_url} title={movie.title} />
								{movie.title}
							</a>
						</li>
					))}
				</ul>
			</div>
		</LoadingHandler>
	);
};

export default MovieInfoRecommendations;
