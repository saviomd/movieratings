import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Info from './Info';
import MovieList from './MovieList';
import MovieNameSearch from './MovieNameSearch';

import '../css/bootstrap.min.css'

class App extends React.Component {
	constructor() {
		super()
		this.filterMoviesByName = this.filterMoviesByName.bind(this)
	}
	state = {
		movies: []
	}
	componentDidMount () {
		fetch('https://saviomd.com/movieratings/data/ratings.json').then(response => {
			return response.json();
		}).then(json => {
			json.reverse();
			json = json.map(movie => {
				let ratingFormatted = '';
				for (var i = 0; i < movie.Rating; i++) {
					ratingFormatted += ' ⭐';
				};
				movie.RatingFormatted = ratingFormatted;
				return movie;
			});
			this.setState({
				allMovies: json,
				movies: json
			});
		}).catch(function () {
			console.log('erro');
		});
	}
	filterMoviesByName (value) {
		let movies = this.state.allMovies;
		movies = movies.filter(movie => {
			const movieName = movie.Name.toString().toLowerCase();
			return (movieName.includes(value));
		});
		this.setState({
			movies: movies
		});
	}
	render () {
		return (
			<div className="container-fluid">
				<Header />
				<div className="justify-content-center mb-3 row">
					<div className="col-12 col-md-3">
						<Info />
						<MovieNameSearch filterMoviesByName={this.filterMoviesByName} />
					</div>
					<div className="col-12 col-md-6">
						<MovieList movies={this.state.movies} />
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default App
