import PropTypes from 'prop-types'
import React from 'react';

import Message from '../components/Message';

import tmdbApi from '../helpers/tmdbApi';

const propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			movieId: PropTypes.string.isRequired
		})
	}),
	movies: PropTypes.shape({
		list: PropTypes.arrayOf(PropTypes.object).isRequired,
		listStatus: PropTypes.string.isRequired
	})
}

class PageMovieInfo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			dataLetterboxd: {
				LetterboxdURI: '',
				Rating: ''
			},
			dataTmdb: {
				apiStatus: '',
				backdrop_url: tmdbApi.img.fallbackUrl,
				id: '',
				overview: '',
				poster_url: tmdbApi.img.fallbackUrl,
				title: '',
				vote_average: ''
			}
		}
	}
	fetchMovieData (props) {
		const { movieId } = props.match.params;
		const listMovie = props.movies.list.find((obj) => {
			return obj.Id === movieId;
		});
		if (listMovie !== undefined) {
			this.setState({
				dataLetterboxd: {
					...this.state.dataLetterboxd,
					LetterboxdURI: listMovie.LetterboxdURI,
					Rating: listMovie.Rating
				},
				dataTmdb: {
					...this.state.dataTmdb,
					apiStatus: 'loading'
				}
			});
			fetch(`${tmdbApi.url}${tmdbApi.pathSearchMovies}?${tmdbApi.key}&query=${listMovie.Name}&year=${listMovie.Year}`).then((response) => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			}).then((json) => {
				if (json.results.length) {
					const movie = json.results.find((obj) => {
						return (obj.title === listMovie.Name && obj.release_date.indexOf(listMovie.Year) > -1)
					});
					if (movie !== undefined) {
						this.setState({
							dataTmdb: {
								apiStatus: 'loaded',
								backdrop_url: tmdbApi.img.baseUrl + tmdbApi.img.backdropSize + '/' + movie.backdrop_path,
								id: movie.id,
								title: movie.title,
								overview: movie.overview,
								poster_url: tmdbApi.img.baseUrl + tmdbApi.img.posterSize + '/' + movie.poster_path,
								vote_average: movie.vote_average
							}
						});
					} else {
						throw Error('No movie found');
					}
				} else {
					throw Error('No movie found');
				}
			}).catch((error) => {
				this.setState({
					dataTmdb: {
						...this.state.dataTmdb,
						apiStatus: 'error'
					}
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
		const dataLetterboxd = this.state.dataLetterboxd;
		const dataTmdb = this.state.dataTmdb;
		const movies = this.props.movies;
		let html = '';
		if (movies.listStatus === 'loading' || dataTmdb.apiStatus === 'loading') {
			html = <Message type='loading' />
		} else if (movies.listStatus === 'error' || dataTmdb.apiStatus === 'error') {
			html = <Message type='error' />
		} else if (dataTmdb.id !== '') {
			html = (
				<div className="border border-secondary rounded">
					<div className="p-3 row">
						<div className="col-6 col-sm-4">
							<img alt={`poster for ${dataTmdb.title}`} className="img-fluid" src={dataTmdb.poster_url} />
						</div>
						<div className="col-6 col-sm-8 text-right">
							<div className="mb-3">
								{dataLetterboxd.Rating} of 5
								<span aria-label="stars" className="ml-1" role="img">⭐</span>
								<div className="small">by me</div>
							</div>
							<div className="mb-3">
								{dataTmdb.vote_average} of 10
								<span aria-label="stars" className="ml-1" role="img">⭐</span>
								<div className="small">by TMDb users</div>
							</div>
						</div>
					</div>
					<h1 className="bg-secondary h3 mb-0 p-3">{dataTmdb.title}</h1>
					<div className="p-3">
						<p className="lead">{dataTmdb.overview}</p>
						<div className="text-right">
							<div className="mb-3">
								<a className="btn btn-danger btn-sm" href={dataLetterboxd.LetterboxdURI} target="_blank" rel="noopener noreferrer">View movie at Letterboxd</a>
							</div>
							<div className="mb-3">
								<a className="btn btn-danger btn-sm" href={`https://www.themoviedb.org/movie/${dataTmdb.id}`} target="_blank" rel="noopener noreferrer">View movie at TMDB</a>
							</div>
						</div>
					</div>
					<img alt={`backdrop for ${dataTmdb.title}`} className="img-fluid rounded-bottom" src={dataTmdb.backdrop_url} />
				</div>
			)
		}
		return (
			<div className="mb-3">
				{html}
			</div>
		)
	}
}

PageMovieInfo.propTypes = propTypes;

export default PageMovieInfo;
