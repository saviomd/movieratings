import React, { useContext } from 'react';

import { MovieInfoStore } from '../contexts/movieInfoContext';
import movieRatingsContext from '../contexts/movieRatingsContext';
import LoadingHandler from '../components/LoadingHandler';
import MovieInfo from '../components/MovieInfo';

const PageMovieInfo = ({ match }) => {
	const { movieRatings, movieRatingsStatus } = useContext(movieRatingsContext);
	const { movieId } = match.params;
	const movie = movieRatings.find((obj) => (obj.Id === movieId));
	return (
		<LoadingHandler dataStatus={movieRatingsStatus}>
			<MovieInfoStore movie={movie}>
				<MovieInfo />
			</MovieInfoStore>
		</LoadingHandler>
	);
};

export default PageMovieInfo;
