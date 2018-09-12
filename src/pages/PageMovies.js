import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';

import Message from '../components/Message';
import MovieList from '../components/MovieList';
import MovieNameSearch from '../components/MovieNameSearch';

import filterMoviesByName from '../helpers/filterMoviesByName';
import {loadMovieDiary} from '../reducers/movieDiary';
import {loadMovieRatings} from '../reducers/movieRatings';

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
	}
	handleOnChangeMovieNameSearch = (value) => {
		value.trim().toLowerCase();
		this.setState({
			movieSearchString: value
		});
	}
	componentDidMount() {
		if (this.props.type === 'Diary') {
			this.props.loadMovieDiary();
		} else if	(this.props.type === 'Ratings') {
			this.props.loadMovieRatings();
		}
	}
	componentDidUpdate(prevProps) {
		if (this.props.type !== prevProps.type) {
			if (this.props.type === 'Diary') {
				this.props.loadMovieDiary();
			} else if	(this.props.type === 'Ratings') {
				this.props.loadMovieRatings();
			}
		}
	}
	render () {
		const { movieDiary, movieRatings, type } = this.props;
		let movies;
		if (type === 'Diary') {
			movies = movieDiary;
		} else if (type === 'Ratings') {
			movies = movieRatings;
		}
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

export default connect(
	(state) => ({movieDiary: state.movieDiary, movieRatings: state.movieRatings}),
	{loadMovieDiary, loadMovieRatings}
)(PageMovies);
