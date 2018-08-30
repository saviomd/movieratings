import PropTypes from 'prop-types';
import React from 'react';

import Message from '../components/Message';
import MovieList from '../components/MovieList';
import MovieNameSearch from '../components/MovieNameSearch';

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
		const { movies, type } = this.props;
		const movieListToRender = filterMoviesByName(movies.list, this.state.movieSearchString);
		const movieListStatus = movies.listStatus;
		let html = '';
		if (movieListStatus === 'loading' || movieListStatus === 'error') {
			html = <Message type={movieListStatus} />
		} else if (movieListToRender.length) {
			html = <MovieList movies={movieListToRender} type={type} />
		} else {
			html = <Message type="noMovies" />
		}
		return (
			<React.Fragment>
				<h1 className="h4">{type}</h1>
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
