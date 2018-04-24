import PropTypes from 'prop-types';
import React from 'react';

import ProgressBar from './ProgressBar';
import Nav from './Nav';

const propTypes = {
	movieDiary: PropTypes.shape({
		list: PropTypes.arrayOf(PropTypes.object).isRequired,
		listError: PropTypes.bool.isRequired,
		listLoading: PropTypes.bool.isRequired
	}),
	movieRatings: PropTypes.shape({
		list: PropTypes.arrayOf(PropTypes.object).isRequired,
		listError: PropTypes.bool.isRequired,
		listLoading: PropTypes.bool.isRequired
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
		if (source.listLoading) {
			stats.push(<div className="text-center" key="loading">Loading...</div>);
		} else if (source.listError) {
			stats.push(<div className="text-center" key="error">Error :(</div>);
		} else if (movies.groups) {
			for (const item in movies.groups) {
				const text = (type === 'moviesPerRatingGiven' ? '⭐ '.repeat(item) : item);
				const width = movies.groups[item] * 100 / movies.max;
				stats.unshift(
					<div className="mb-2" key={item}>
						<div className="row">
							<div className="col-auto">{text}</div>
							<div className="col font-weight-bold text-right">{movies.groups[item]}</div>
						</div>
						<ProgressBar width={width} />
					</div>
				);
			}
		} else {
			stats.push(<div className="text-center" key="none">No stats to show</div>);
		}
		return stats;
	}
	render () {
		const moviesPerDecadeReleased = this.renderMovieStats(this.props.moviesPerDecadeReleased, this.props.movieRatings, 'moviesPerDecadeReleased');
		const moviesPerRatingGiven = this.renderMovieStats(this.props.moviesPerRatingGiven, this.props.movieRatings, 'moviesPerRatingGiven');
		const moviesPerYearWatched = this.renderMovieStats(this.props.moviesPerYearWatched, this.props.movieDiary, 'moviesPerYearWatched');
		return (
			<div>
				<Nav />
				<div className="justify-content-center mb-3 row">
					<div className="col-12 col-md-4 col-lg-3 mb-3">
						<div className="border border-secondary p-3 rounded">
							<h1 className="h5">Per year watched</h1>
							{moviesPerYearWatched}
						</div>
					</div>
					<div className="col-12 col-md-4 col-lg-3 mb-3">
						<div className="border border-secondary p-3 rounded">
							<h1 className="h5">Per rating given</h1>
							{moviesPerRatingGiven}
						</div>
					</div>
					<div className="col-12 col-md-4 col-lg-3 mb-3">
						<div className="border border-secondary p-3 rounded">
							<h1 className="h5">Per decade released</h1>
							{moviesPerDecadeReleased}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

PageStats.propTypes = propTypes;

export default PageStats;
