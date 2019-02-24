import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { memo } from 'react';

import LoadingHandler from '../LoadingHandler';
import ProgressBar from '../ProgressBar';

const MovieStats = memo(function MovieStats({ getMovies, moviesStatus, type }) {
	const movies = getMovies();
	return (
		<LoadingHandler dataStatus={moviesStatus} hasData={!!movies.groups} messageNoData="noStats">
			<ul className="list-unstyled">
				{Object.entries(movies.groups).reverse().map(([key, value]) => {
					const text = () => {
						if (type === 'moviesPerRatingGiven') {
							let stars = [];
							for (let i = 0; i < key; i++) {
								stars.push(<FontAwesomeIcon key={i} className="mr-1 text-warning" icon="star" />);
							}
							return stars;
						} else {
							return key;
						}
					};
					const width = value * 100 / movies.max;
					return (
						<li className="mb-2" key={key}>
							<div className="no-gutters row">
								<div className="col-auto">{text()}</div>
								<div className="col font-weight-bold text-right">{value}</div>
							</div>
							<ProgressBar width={width} />
						</li>
					);
				})}
			</ul>
		</LoadingHandler>
	);
});

MovieStats.propTypes = {
	getMovies: PropTypes.func.isRequired,
	moviesStatus: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired
};

export default MovieStats;
