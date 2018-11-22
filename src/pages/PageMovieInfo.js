import React from 'react';

import { MovieInfoStore } from '../contexts/movieInfoContext';
import { MovieRatingsConsumer } from '../contexts/movieRatingsContext';
import Message from '../components/Message';
import MovieInfo from '../components/MovieInfo';

const PageMovieInfo = ({ match }) => (
	<MovieRatingsConsumer>
		{({ movieRatings, movieRatingsStatus }) => {
			if (movieRatingsStatus === 'loaded') {
				const { movieId } = match.params;
				const movie = movieRatings.find((obj) => (obj.Id === movieId));
				return (
					<MovieInfoStore movie={movie}>
						<MovieInfo />
					</MovieInfoStore>
				);
			} else if (movieRatingsStatus === 'loading') {
				return (
					<Message type='loading' />
				);
			} else if (movieRatingsStatus === 'error') {
				return (
					<Message type='error' />
				);
			}
		}}
	</MovieRatingsConsumer>
);

export default PageMovieInfo;
