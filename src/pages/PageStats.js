import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Message from '../components/Message';
import ProgressBar from '../components/ProgressBar';

import { loadMovieDiary } from '../reducers/movieDiary';
import { loadMovieRatings } from '../reducers/movieRatings';

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
	componentDidMount() {
		this.props.loadMovieDiary();
		this.props.loadMovieRatings();
	}
	renderMovieStats (movies, source, type) {
		let stats = [];
		if (source.listStatus === 'loading' || source.listStatus === 'error') {
			stats.push(<Message key={source.listStatus} type={source.listStatus} />);
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

export default connect(
	(state) => ({movieDiary: state.movieDiary, movieRatings: state.movieRatings, moviesPerDecadeReleased: state.moviesPerDecadeReleased, moviesPerRatingGiven: state.moviesPerRatingGiven, moviesPerYearWatched: state.moviesPerYearWatched}),
	{loadMovieDiary, loadMovieRatings}
)(PageStats);
