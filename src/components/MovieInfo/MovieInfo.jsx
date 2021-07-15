import React, { useContext } from 'react';

import movieInfoContext from '../../contexts/movieInfoContext';
import LoadingHandler from '../LoadingHandler';
import MovieInfoBody from './MovieInfoBody';
import MovieInfoHeader from './MovieInfoHeader';

const MovieInfo = () => {
	const { movieInfo, movieInfoStatus } = useContext(movieInfoContext);
	return (
		<LoadingHandler dataStatus={movieInfoStatus} hasData={(movieInfo.id !== '')}>
			<div className="border border-secondary mb-3 rounded">
				<MovieInfoHeader />
				<MovieInfoBody />
			</div>
		</LoadingHandler>
	);
};

export default MovieInfo;
