import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import PageMovieInfo from './PageMovieInfo';
import PageMovies from './PageMovies';
import PageNotFound from './PageNotFound';
import PageStats from './PageStats';

import formatMovieList from '../helpers/formatMovieList';

import '../css/bootstrap.min.css'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			movieDiary: {
				list: [],
				listError: false,
				listLoading: false
			},
			movieRatings: {
				list: [],
				listError: false,
				listLoading: false
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
	componentDidMount () {
		this.setState({
			movieDiary: {
				...this.state.movieDiary,
				listError: false,
				listLoading: true
			},
			movieRatings: {
				...this.state.movieRatings,
				listError: false,
				listLoading: true
			}
		});
		fetch('https://saviomd.com/movieratings/data/diary.json').then((response) => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
		}).then((json) => {
			const movieList = formatMovieList(json);
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
				movieDiary: {
					...this.state.movieDiary,
					list: movieList,
					listError: false,
					listLoading: false
				},
				moviesPerYearWatched: {
					groups: moviesPerYearWatched,
					max: moviesPerYearWatchedMax
				}
			});
		}).catch((error) => {
			this.setState({
				movieDiary: {
					...this.state.movieDiary,
					listError: true,
					listLoading: false
				}
			});
			console.log(error.message);
		});
		fetch('https://saviomd.com/movieratings/data/ratings.json').then((response) => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
		}).then((json) => {
			const movieList = formatMovieList(json);
			const moviesPerDecadeReleased = movieList.reduce((acc, curr) => {
				const decade = `${curr.Year.toString().substr(0, 3)}0`;
				acc[decade] ? acc[decade]++ : acc[decade] = 1;
				return acc;
			}, {});
			let moviesPerDecadeReleasedMax = 0;
			for (const decade in moviesPerDecadeReleased) {
				moviesPerDecadeReleasedMax = (moviesPerDecadeReleased[decade] > moviesPerDecadeReleasedMax ? moviesPerDecadeReleased[decade] : moviesPerDecadeReleasedMax);
			}
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
				movieRatings: {
					...this.state.movieRatings,
					list: movieList,
					listError: false,
					listLoading: false
				},
				moviesPerDecadeReleased: {
					groups: moviesPerDecadeReleased,
					max: moviesPerDecadeReleasedMax
				},
				moviesPerRatingGiven: {
					groups: moviesPerRatingGiven,
					max: moviesPerRatingGivenMax
				}
			});
		}).catch((error) => {
			this.setState({
				movieRatings: {
					...this.state.movieRatings,
					listError: true,
					listLoading: false
				}
			});
			console.log(error.message);
		});
	}
	render () {
		return (
			<div className="container-fluid">
				<Header />
				<Switch>
					<Route path="/" exact render={() => <PageMovies
						movies={this.state.movieRatings}
						type='ratings'
					/>} />
					<Route path="/diary" render={() => <PageMovies
						movies={this.state.movieDiary}
						type='diary'
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
				<Footer />
			</div>
		)
	}
}

export default App;
