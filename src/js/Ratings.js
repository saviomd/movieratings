import React from 'react';

import Info from './Info';
import MovieList from './MovieList';
import MovieNameSearch from './MovieNameSearch';

class Ratings extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			movieRatings: [],
			movieRatingsSearchString: ''
		}
		this.handleOnChangeMovieNameSearch = this.handleOnChangeMovieNameSearch.bind(this)
		this.filterMoviesByName = this.filterMoviesByName.bind(this)
	}
	componentDidMount () {
		fetch('https://saviomd.com/movieratings/data/ratings.json').then((response) => {
			return response.json();
		}).then((json) => {
			json.reverse();
			json = json.map((movie) => {
				let ratingFormatted = '';
				for (var i = 0; i < movie.Rating; i++) {
					ratingFormatted += ' ⭐';
				};
				movie.RatingFormatted = ratingFormatted;
				return movie;
			});
			this.setState({
				movieRatings: json
			});
		}).catch(function () {
			console.log('error');
		});
	}
	handleOnChangeMovieNameSearch (value) {
		value.trim().toLowerCase();
		this.setState({
			movieRatingsSearchString: value
		});
	}
	filterMoviesByName (movieRatings, value) {
		return movieRatings.filter((movie) => {
			const movieName = movie.Name.toString().toLowerCase();
			return (movieName.includes(value));
		});
	}
	render () {
		const movieRatingsToRender = this.filterMoviesByName(this.state.movieRatings, this.state.movieRatingsSearchString);
		return (
			<div>
				<div className="justify-content-center mb-3 row">
					<div className="col-12 col-sm-4 col-lg-3">
						<Info />
						<MovieNameSearch handleOnChangeMovieNameSearch={this.handleOnChangeMovieNameSearch} movieSearchString={this.state.movieRatingsSearchString} />
					</div>
					<div className="col-12 col-sm-8 col-lg-6">
						<MovieList movies={movieRatingsToRender} />
					</div>
				</div>
			</div>
		)
	}
}

export default Ratings
