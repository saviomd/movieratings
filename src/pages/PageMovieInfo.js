import React, { useContext } from 'react';

import { MovieInfoStore } from '../contexts/movieInfoContext';
import movieRatingsContext from '../contexts/movieRatingsContext';
import Message from '../components/Message';
import MovieInfo from '../components/MovieInfo';

const PageMovieInfo = ({ match }) => {
	const { movieRatings, movieRatingsStatus } = useContext(movieRatingsContext);
	const { movieId } = match.params;
	const movie = movieRatings.find((obj) => (obj.Id === movieId));
	return (
		<>
			{movieRatingsStatus === 'loaded' && (
				<MovieInfoStore movie={movie}>
					<MovieInfo />
				</MovieInfoStore>
			)}
			{(movieRatingsStatus === 'loading' || movieRatingsStatus === 'error') && (
				<Message type={movieRatingsStatus} />
			)}
		</>
	);
};

export default PageMovieInfo;
