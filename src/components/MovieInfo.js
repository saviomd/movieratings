import PropTypes from 'prop-types'
import React from 'react';
import { Link } from 'react-router-dom';

import tmdbApi from '../helpers/tmdbApi';

const propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			movieId: PropTypes.string.isRequired
		})
	}),
	movieList: PropTypes.arrayOf(PropTypes.object).isRequired,
}

class MovieInfo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			apiError: false,
			apiLoading: false,
			backdrop_url: tmdbApi.img.fallbackUrl,
			id: '',
			LetterboxdURI: '',
			overview: '',
			poster_url: tmdbApi.img.fallbackUrl,
			Rating: '',
			title: '',
			vote_average: ''
		}
	}
	fetchMovieData (props) {
		const { movieId } = props.match.params;
		const movieListMovie = props.movieList.find((obj) => {
			return obj.Id === movieId;
		});
		if (movieListMovie !== undefined) {
			this.setState({
				apiLoading: true
			});
			fetch(`${tmdbApi.url}${tmdbApi.pathSearchMovies}?${tmdbApi.key}&query=${movieListMovie.Name}&year=${movieListMovie.Year}`).then((response) => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			}).then((json) => {
				if (json.results.length) {
					const movie = json.results.find((obj) => {
						return (obj.title === movieListMovie.Name && obj.release_date.indexOf(movieListMovie.Year) > -1)
					});
					if (movie !== undefined) {
						this.setState({
							apiError: false,
							apiLoading: false,
							backdrop_url: tmdbApi.img.baseUrl + tmdbApi.img.backdropSize + '/' + movie.backdrop_path,
							id: movie.id,
							LetterboxdURI: movieListMovie.LetterboxdURI,
							title: movie.title,
							overview: movie.overview,
							poster_url: tmdbApi.img.baseUrl + tmdbApi.img.posterSize + '/' + movie.poster_path,
							Rating: movieListMovie.Rating,
							vote_average: movie.vote_average
						});
					} else {
						throw Error('No movie found');
					}
				} else {
					throw Error('No movie found');
				}
			}).catch((error) => {
				this.setState({
					apiError: true,
					apiLoading: false
				});
				console.log(error.message);
			});
		}
	}
	componentWillReceiveProps(nextProps) {
		this.fetchMovieData(nextProps);
	}
	componentDidMount() {
		this.fetchMovieData(this.props);
	}
	render () {
		let html = '';
		if (this.state.apiLoading) {
			html = <div className="p-3 text-center">Loading...</div>
		} else if (this.state.apiError) {
			html = <div className="p-3 text-center">Error :(</div>
		} else if (this.state.id !== '') {
			html = <div>
				<div className="border border-secondary rounded">
					<div className="p-3 row">
						<div className="col-6">
							<img alt={`poster for ${this.state.title}`} className="img-fluid" src={this.state.poster_url} />
						</div>
						<div className="col-6 text-right">
							<div className="mb-3">
								{this.state.Rating} of 5
								<span aria-label="stars" className="ml-1" role="img">⭐</span>
								<div className="small">by me</div>
							</div>
							<div className="mb-3">
								{this.state.vote_average} of 10
								<span aria-label="stars" className="ml-1" role="img">⭐</span>
								<div className="small">by TMDb users</div>
							</div>
						</div>
					</div>
					<h1 className="bg-secondary h3 mb-0 p-3">{this.state.title}</h1>
					<div className="p-3">
						<p className="lead">{this.state.overview}</p>
						<div className="text-right">
							<div className="mb-3">
								<a className="btn btn-danger btn-sm" href={this.state.LetterboxdURI} target="_blank" rel="noopener noreferrer">View movie at Letterboxd</a>
							</div>
							<div className="mb-3">
								<a className="btn btn-danger btn-sm" href={`https://www.themoviedb.org/movie/${this.state.id}`} target="_blank" rel="noopener noreferrer">View movie at TMDB</a>
							</div>
						</div>
					</div>
					<img alt={`backdrop for ${this.state.title}`} className="img-fluid rounded-bottom" src={this.state.backdrop_url} />
				</div>
				<div className="p-3 small text-center">
					<img alt="Powered by TMDB" className="mr-1" src={tmdbApi.img.attributionUrl} height="32" />
					<br />
					This product uses the TMDb API but is not endorsed or certified by TMDb.
				</div>
			</div>
		}
		return (
			<div>
				<div className="justify-content-center row">
					<div className="col-12 col-md-9 col-lg-6">
						<Link className="btn btn-danger btn-sm mb-3" to="/">&lt; Home</Link>
						{html}
					</div>
				</div>
			</div>
		)
	}
}

MovieInfo.propTypes = propTypes;

export default MovieInfo;
