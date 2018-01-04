import PropTypes from 'prop-types';
import React from 'react';

import Info from './Info';
import MovieList from './MovieList';
import MovieNameSearch from './MovieNameSearch';

import filterMoviesByName from '../helpers/filterMoviesByName';

const propTypes = {
	movieRatings: PropTypes.arrayOf(PropTypes.object).isRequired
}

class Ratings extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			movieRatingsSearchString: ''
		}
		this.handleOnChangeMovieNameSearch = this.handleOnChangeMovieNameSearch.bind(this)
	}
	handleOnChangeMovieNameSearch (value) {
		value.trim().toLowerCase();
		this.setState({
			movieRatingsSearchString: value
		});
	}
	render () {
		const movieRatingsToRender = filterMoviesByName(this.props.movieRatings, this.state.movieRatingsSearchString);
		return (
			<div>
				<div className="justify-content-center mb-3 row">
					<div className="col-12 col-sm-4 col-lg-3">
						<Info />
						<MovieNameSearch handleOnChangeMovieNameSearch={this.handleOnChangeMovieNameSearch} movieCount={movieRatingsToRender.length} movieSearchString={this.state.movieRatingsSearchString} />
					</div>
					<div className="col-12 col-sm-8 col-lg-6">
						<MovieList movies={movieRatingsToRender} type="ratings" />
					</div>
				</div>
			</div>
		)
	}
}

Ratings.propTypes = propTypes;

export default Ratings;
