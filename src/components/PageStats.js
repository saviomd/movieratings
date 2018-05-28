import PropTypes from 'prop-types';
import React from 'react';

import Message from './Message';
import ProgressBar from './ProgressBar';

const propTypes = {
	movieDiary: PropTypes.shape({
		list: PropTypes.arrayOf(PropTypes.object).isRequired,
		listStatus: PropTypes.string.isRequired
	}),
	movieRatings: PropTypes.shape({
		list: PropTypes.arrayOf(PropTypes.object).isRequired,
		listStatus: PropTypes.string.isRequired
	}),
	moviesPerDecadeReleased: PropTypes.shape({
		groups: PropTypes.object.isRequired,
		max: PropTypes.number.isRequired
	}),
	moviesPerRatingGiven: PropTypes.shape({
		groups: PropTypes.object.isRequired,
		max: PropTypes.number.isRequired
	}),
	moviesPerYearWatched: PropTypes.shape({
		groups: PropTypes.object.isRequired,
		max: PropTypes.number.isRequired
	})
}

class PageStats extends React.Component {
	renderMovieStats (movies, source, type) {
		let stats = [];
		if (source.listStatus === 'loading' || source.listStatus === 'error') {
			stats.push(<Message key={source.listStatus} type={source.listStatus} />);
		} else if (movies.groups) {
			for (const item in movies.groups) {
				const text = (type === 'moviesPerRatingGiven' ? '⭐ '.repeat(item) : item);
				const width = movies.groups[item] * 100 / movies.max;
				stats.unshift(
					<div className="mb-2" key={item}>
						<div className="no-gutters row">
							<div className="col-auto">{text}</div>
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
	}
	render () {
		const moviesPerDecadeReleased = this.renderMovieStats(this.props.moviesPerDecadeReleased, this.props.movieRatings, 'moviesPerDecadeReleased');
		const moviesPerRatingGiven = this.renderMovieStats(this.props.moviesPerRatingGiven, this.props.movieRatings, 'moviesPerRatingGiven');
		const moviesPerYearWatched = this.renderMovieStats(this.props.moviesPerYearWatched, this.props.movieDiary, 'moviesPerYearWatched');
		return (
			<React.Fragment>
				<h1 className="h4">Stats</h1>
				<div className="row">
					<div className="col-12 col-sm-6 col-md-4 mb-3">
						<div className="border border-secondary p-3 rounded">
							<h1 className="h5">Per year watched</h1>
							{moviesPerYearWatched}
						</div>
					</div>
					<div className="col-12 col-sm-6 col-md-4 mb-3">
						<div className="border border-secondary p-3 rounded">
							<h1 className="h5">Per rating given</h1>
							{moviesPerRatingGiven}
						</div>
					</div>
					<div className="col-12 col-sm-6 col-md-4 mb-3">
						<div className="border border-secondary p-3 rounded">
							<h1 className="h5">Per decade released</h1>
							{moviesPerDecadeReleased}
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

PageStats.propTypes = propTypes;

export default PageStats;
