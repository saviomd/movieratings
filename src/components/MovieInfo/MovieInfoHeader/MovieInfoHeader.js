import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { MovieInfoConsumer } from '../../../contexts/movieInfoContext';

const MovieInfoHeader = () => (
	<MovieInfoConsumer>
		{({ movieInfo }) => (
			<>
				<div className="p-3 row">
					<div className="col-6 col-sm-4">
						<img alt={`poster for ${movieInfo.title}`} className="img-fluid" src={movieInfo.poster_url} />
					</div>
					<div className="col-6 col-sm-8 text-right">
						<div className="mb-3">
							{movieInfo.Rating} of 5
							<FontAwesomeIcon className="ml-1 text-warning" icon="star" />
							<div className="small">by me</div>
						</div>
						<div className="mb-3">
							{movieInfo.vote_average} of 10
							<FontAwesomeIcon className="ml-1 text-warning" icon="star" />
							<div className="small">by TMDb users</div>
						</div>
					</div>
				</div>
				<h1 className="bg-secondary h3 mb-0 p-3">{movieInfo.title}</h1>
			</>
		)}
	</MovieInfoConsumer>
);

export default MovieInfoHeader;
