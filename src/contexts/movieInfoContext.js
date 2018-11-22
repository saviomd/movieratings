import React from 'react';

import { fetchMovieInfo } from '../helpers/movieInfoServices';
import tmdbApi from '../helpers/tmdbApi';

const MovieInfoContext = React.createContext();

const MovieInfoConsumer = MovieInfoContext.Consumer;

class MovieInfoStore extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			movieInfo: {
				backdrop_url: tmdbApi.img.fallbackUrl,
				id: '',
				LetterboxdURI: '',
				overview: '',
				poster_url: tmdbApi.img.fallbackUrl,
				Rating: '',
				title: '',
				vote_average: ''
			},
			movieInfoStatus: ''
		}
	}
	componentDidMount() {
		this.loadMovieInfo(this.props.movie);
	}
	componentDidUpdate(prevProps) {
		if (this.props.movie !== prevProps.movie) {
			this.loadMovieInfo(this.props.movie);
		}
	}
	loadMovieInfo(movie) {
		if (movie !== undefined) {
			this.setState({ movieInfoStatus: 'loading' });
			fetchMovieInfo(movie)
				.then((json) => {
					if (json.results.length) {
						const newMovie = json.results.find(obj => (obj.title === movie.Name && obj.release_date.indexOf(movie.Year) > -1));
						if (newMovie !== undefined) {
							this.setState({
								movieInfoStatus: 'loaded',
								movieInfo: {
									backdrop_url: tmdbApi.img.baseUrl + tmdbApi.img.backdropSize + newMovie.backdrop_path,
									id: newMovie.id,
									LetterboxdURI: movie.LetterboxdURI,
									overview: newMovie.overview,
									poster_url: tmdbApi.img.baseUrl + tmdbApi.img.posterSize + newMovie.poster_path,
									Rating: movie.Rating,
									title: newMovie.title,
									vote_average: newMovie.vote_average
								}
							});
						} else {
							throw Error('No movie found');
						}
					} else {
						throw Error('No movie found');
					}
				})
				.catch((error) => {
					this.setState({ movieInfoStatus: 'error' });
					console.log(error.message);
				});
		}
	}
	render() {
		const { children } = this.props;
		const { movieInfo, movieInfoStatus } = this.state;
		return (
			<MovieInfoContext.Provider value={{
				movieInfo,
				movieInfoStatus,
			}}>
				{children}
			</MovieInfoContext.Provider>
		);
	}
};

export {
	MovieInfoContext as default,
	MovieInfoConsumer,
	MovieInfoStore,
};
