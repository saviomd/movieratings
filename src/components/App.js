import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Diary from './Diary';
import Footer from './Footer';
import Header from './Header';
import MovieInfo from './MovieInfo';
import NotFound from './NotFound';
import Ratings from './Ratings';

import formatMovieList from '../helpers/formatMovieList';

import '../css/bootstrap.min.css'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			movieDiaryList: [],
			movieDiaryListError: false,
			movieDiaryListLoading: false,
			movieRatingsList: [],
			movieRatingsListError: false,
			movieRatingsListLoading: false
		}
	}
	componentDidMount () {
		this.setState({
			movieDiaryListLoading: true,
			movieRatingsListLoading: true
		});
		fetch('https://saviomd.com/movieratings/data/diary.json').then((response) => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
		}).then((json) => {
			this.setState({
				movieDiaryList: formatMovieList(json),
				movieDiaryListError: false,
				movieDiaryListLoading: false
			});
		}).catch((error) => {
			this.setState({
				movieDiaryListError: true,
				movieDiaryListLoading: false
			});
			console.log(error.message);
		});
		fetch('https://saviomd.com/movieratings/data/ratings.json').then((response) => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
		}).then((json) => {
			this.setState({
				movieRatingsList: formatMovieList(json),
				movieRatingsListError: false,
				movieRatingsListLoading: false
			});
		}).catch((error) => {
			this.setState({
				movieRatingsListError: true,
				movieRatingsListLoading: false
			});
			console.log(error.message);
		});
	}
	render () {
		return (
			<div className="container-fluid">
				<Header />
				<Switch>
					<Route path="/" exact render={() => <Ratings movieList={this.state.movieRatingsList} movieListError={this.state.movieRatingsListError} movieListLoading={this.state.movieRatingsListLoading} />} />
					<Route path="/diary" render={() => <Diary movieList={this.state.movieDiaryList} movieListError={this.state.movieDiaryListError} movieListLoading={this.state.movieDiaryListLoading} />} />
					<Route path="/movie/:movieId" render={({ match }) => <MovieInfo match={match} movieList={this.state.movieRatingsList} />} />
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</div>
		)
	}
}

export default App;
