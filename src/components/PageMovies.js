import PropTypes from 'prop-types';
import React from 'react';

import Message from './Message';
import MovieList from './MovieList';
import MovieNameSearch from './MovieNameSearch';

import filterMoviesByName from '../helpers/filterMoviesByName';

const propTypes = {
	movies: PropTypes.shape({
		list: PropTypes.arrayOf(PropTypes.object).isRequired,
		listStatus: PropTypes.string.isRequired
	}),
	type: PropTypes.string.isRequired
}

class PageMovies extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			movieSearchString: ''
		}
		this.handleOnChangeMovieNameSearch = this.handleOnChangeMovieNameSearch.bind(this)
	}
	handleOnChangeMovieNameSearch (value) {
		value.trim().toLowerCase();
		this.setState({
			movieSearchString: value
		});
	}
	render () {
		const movieListToRender = filterMoviesByName(this.props.movies.list, this.state.movieSearchString);
		const movieListStatus = this.props.movies.listStatus;
		let html = '';
		if (movieListStatus === 'loading' || movieListStatus === 'error') {
			html = <Message type={movieListStatus} />
		} else if (movieListToRender.length) {
			html = <MovieList movies={movieListToRender} type={this.props.type} />
		} else {
			html = <Message type="noMovies" />
		}
		return (
			<React.Fragment>
				<h1 className="h4">{this.props.type}</h1>
				<div className="row">
					<div className="col-12 col-sm-4">
						<MovieNameSearch handleOnChangeMovieNameSearch={this.handleOnChangeMovieNameSearch} movieCount={movieListToRender.length} movieSearchString={this.state.movieSearchString} />
					</div>
					<div className="col-12 col-sm-8">
						{html}
					</div>
				</div>
			</React.Fragment>
		)
	}
}

PageMovies.propTypes = propTypes;

export default PageMovies;
