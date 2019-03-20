import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';

import movieInfoContext from '../../../contexts/movieInfoContext';
import MoviePoster from '../..//MoviePoster';

const MovieInfoHeader = () => {
	const { movieInfo } = useContext(movieInfoContext);
	return (
		<>
			<div className="p-3 row">
				<div className="col-6 col-md-4 col-lg-3">
					<MoviePoster poster_url={movieInfo.poster_url} title={movieInfo.title} />
				</div>
				<div className="col text-right">
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
	);
};

export default MovieInfoHeader;
