import React, { useContext } from 'react';

import movieInfoContext from '../../contexts/movieInfoContext';
import MovieInfoBody from './MovieInfoBody';
import MovieInfoHeader from './MovieInfoHeader';
import Message from '../Message';

const MovieInfo = () => {
	const { movieInfo, movieInfoStatus } = useContext(movieInfoContext);
	return (
		<>
			{(movieInfoStatus === 'loaded' && movieInfo.id !== '') && (
				<div className="border border-secondary mb-3 rounded">
					<MovieInfoHeader />
					<MovieInfoBody />
				</div>
			)}
			{(movieInfoStatus === 'loading' || movieInfoStatus === 'error') && (
				<Message type={movieInfoStatus} />
			)}
		</>
	);
};

export default MovieInfo;
