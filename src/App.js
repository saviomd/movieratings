import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import PageMovieInfo from './pages/PageMovieInfo';
import PageMovies from './pages/PageMovies';
import PageNotFound from './pages/PageNotFound';
import PageStats from './pages/PageStats';
import SiteInfo from './components/SiteInfo';

import formatMovieList from './helpers/formatMovieList';

import './css/bootstrap.min.css'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			movieDiary: {
				list: [],
				listStatus: ''
			},
			movieRatings: {
				list: [],
				listStatus: ''
			},
			moviesPerDecadeReleased: {
				groups: {},
				max: 0
			},
			moviesPerRatingGiven: {
				groups: {},
				max: 0
			},
			moviesPerYearWatched: {
				groups: {},
				max: 0
			}
		}
	}
	fetchMovieDiary = () => {
		this.setState({
			movieDiary: {
				...this.state.movieDiary,
				listStatus: 'loading'
			}
		});
		fetch('https://saviomd.com/movieratings/data/diary.json').then((response) => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
		}).then((json) => {
			this.populateMovieDiary(json);
		}).catch((error) => {
			this.setState({
				movieDiary: {
					...this.state.movieDiary,
					listStatus: 'error'
				}
			});
			console.log(error.message);
		});
	}
	fetchMovieRatings = () => {
		this.setState({
			movieRatings: {
				...this.state.movieRatings,
				listStatus: 'loading'
			}
		});
		fetch('https://saviomd.com/movieratings/data/ratings.json').then((response) => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
		}).then((json) => {
			this.populateMovieRatings(json);
		}).catch((error) => {
			this.setState({
				movieRatings: {
					...this.state.movieRatings,
					listStatus: 'error'
				}
			});
			console.log(error.message);
		});
	}
	populateMovieDiary = (json) => {
		const movieList = formatMovieList(json);
		this.setState({
			movieDiary: {
				...this.state.movieDiary,
				list: movieList,
				listStatus: 'loaded'
			}
		});
		this.populateMoviesPerYearWatched(movieList);
	}
	populateMovieRatings = (json) => {
		const movieList = formatMovieList(json);
		this.setState({
			movieRatings: {
				...this.state.movieRatings,
				list: movieList,
				listStatus: 'loaded'
			}
		});
		this.populateMoviesPerDecadeReleased(movieList);
		this.populateMoviesPerRatingGiven(movieList);
	}
	populateMoviesPerDecadeReleased = (movieList) => {
		const moviesPerDecadeReleased = movieList.reduce((acc, curr) => {
			const decade = `${curr.Year.toString().substr(0, 3)}0`;
			acc[decade] ? acc[decade]++ : acc[decade] = 1;
			return acc;
		}, {});
		let moviesPerDecadeReleasedMax = 0;
		for (const decade in moviesPerDecadeReleased) {
			moviesPerDecadeReleasedMax = (moviesPerDecadeReleased[decade] > moviesPerDecadeReleasedMax ? moviesPerDecadeReleased[decade] : moviesPerDecadeReleasedMax);
		}
		this.setState({
			moviesPerDecadeReleased: {
				groups: moviesPerDecadeReleased,
				max: moviesPerDecadeReleasedMax
			}
		});
	}
	populateMoviesPerRatingGiven = (movieList) => {
		const moviesPerRatingGiven = movieList.reduce((acc, curr) => {
			const rating = curr.Rating;
			acc[rating] ? acc[rating]++ : acc[rating] = 1;
			return acc;
		}, {});
		let moviesPerRatingGivenMax = 0;
		for (const rating in moviesPerRatingGiven) {
			moviesPerRatingGivenMax = (moviesPerRatingGiven[rating] > moviesPerRatingGivenMax ? moviesPerRatingGiven[rating] : moviesPerRatingGivenMax);
		}
		this.setState({
			moviesPerRatingGiven: {
				groups: moviesPerRatingGiven,
				max: moviesPerRatingGivenMax
			}
		});
	}
	populateMoviesPerYearWatched = (movieList) => {
		const moviesPerYearWatched = movieList.reduce((acc, curr) => {
			const year = curr.WatchedDate.split('-')[0];
			acc[year] ? acc[year]++ : acc[year] = 1;
			return acc;
		}, {});
		let moviesPerYearWatchedMax = 0;
		for (const year in moviesPerYearWatched) {
			moviesPerYearWatchedMax = (moviesPerYearWatched[year] > moviesPerYearWatchedMax ? moviesPerYearWatched[year] : moviesPerYearWatchedMax);
		}
		this.setState({
			moviesPerYearWatched: {
				groups: moviesPerYearWatched,
				max: moviesPerYearWatchedMax
			}
		});
	}
	componentDidMount () {
		this.fetchMovieDiary();
		this.fetchMovieRatings();
	}
	render () {
		return (
			<div className="container-fluid">
				<div className="justify-content-center row">
					<div className="col-12 col-md-10">
						<Header />
						<Switch>
							<Route path="/" exact render={() => <PageMovies
								movies={this.state.movieRatings}
								type='Ratings'
							/>} />
							<Route path="/diary" render={() => <PageMovies
								movies={this.state.movieDiary}
								type='Diary'
							/>} />
							<Route path="/movie/:movieId" render={({ match }) => <PageMovieInfo
								match={match}
								movies={this.state.movieRatings}
							/>} />
							<Route path="/stats" render={({ match }) => <PageStats
								movieDiary={this.state.movieDiary}
								movieRatings={this.state.movieRatings}
								moviesPerDecadeReleased={this.state.moviesPerDecadeReleased}
								moviesPerRatingGiven={this.state.moviesPerRatingGiven}
								moviesPerYearWatched={this.state.moviesPerYearWatched}
							/>} />
							<Route component={PageNotFound} />
						</Switch>
						<SiteInfo />
						<Footer />
					</div>
				</div>
			</div>
		)
	}
}

export default App;
