import React from 'react';

import { MovieInfoConsumer } from '../../contexts/movieInfoContext';
import MovieInfoBody from './MovieInfoBody';
import MovieInfoHeader from './MovieInfoHeader';
import Message from '../Message';

const MovieInfo = () => (
	<MovieInfoConsumer>
		{({ movieInfo, movieInfoStatus }) => {
			let html;
			if (movieInfoStatus === 'loaded' && movieInfo.id !== '') {
				html = (
					<div className="border border-secondary mb-3 rounded">
						<MovieInfoHeader />
						<MovieInfoBody />
					</div>
				);
			} else if (movieInfoStatus === 'loading') {
				html = (
					<Message type='loading' />
				);
			} else if (movieInfoStatus === 'error') {
				html = (
					<Message type='error' />
				);
			}
			return html;
		}}
	</MovieInfoConsumer>
);

export default MovieInfo;
