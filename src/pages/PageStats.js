import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import MovieStats from '../components/MovieStats';

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
	render () {
		return (
			<React.Fragment>
				<h1 className="h4">Stats</h1>
				<div className="row">
					<div className="col-12 col-sm-6 col-md-4 mb-3">
						<div className="border border-secondary p-3 rounded">
							<h1 className="h5">Per year watched</h1>
							<MovieStats
								movies={this.props.moviesPerYearWatched}
								source={this.props.movieDiary}
								type="moviesPerYearWatched"
							/>
						</div>
					</div>
					<div className="col-12 col-sm-6 col-md-4 mb-3">
						<div className="border border-secondary p-3 rounded">
							<h1 className="h5">Per rating given</h1>
							<MovieStats
								movies={this.props.moviesPerRatingGiven}
								source={this.props.movieRatings}
								type="moviesPerRatingGiven"
							/>
						</div>
					</div>
					<div className="col-12 col-sm-6 col-md-4 mb-3">
						<div className="border border-secondary p-3 rounded">
							<h1 className="h5">Per decade released</h1>
							<MovieStats
								movies={this.props.moviesPerDecadeReleased}
								source={this.props.movieRatings}
								type="moviesPerDecadeReleased"
							/>
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
