import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

import Message from '../Message';
import ProgressBar from '../ProgressBar';

const MovieStats = ({ getMovies, moviesStatus, type }) => {
	const movies = getMovies();
	let stats = [];
	if (moviesStatus === 'loading' || moviesStatus === 'error') {
		stats.push(<Message key={moviesStatus} type={moviesStatus} />);
	} else if (movies.groups) {
		for (const item in movies.groups) {
			const text = () => {
				if (type === 'moviesPerRatingGiven') {
					let stars = [];
					for (let i = 0; i < item; i++) {
						stars.push(<FontAwesomeIcon key={i} className="mr-1 text-warning" icon="star" />);
					}
					return stars;
				} else {
					return item;
				}
			};
			const width = movies.groups[item] * 100 / movies.max;
			stats.unshift(
				<div className="mb-2" key={item}>
					<div className="no-gutters row">
						<div className="col-auto">{text()}</div>
						<div className="col font-weight-bold text-right">{movies.groups[item]}</div>
					</div>
					<ProgressBar width={width} />
				</div>
			);
		}
	} else {
		stats.push(<Message key="noStats" type="noStats" />);
	}
	return stats;
};

MovieStats.propTypes = {
	getMovies: PropTypes.func.isRequired,
	moviesStatus: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired
};

export default MovieStats;