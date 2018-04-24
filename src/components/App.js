import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import PageMovieInfo from './PageMovieInfo';
import PageMovies from './PageMovies';
import PageNotFound from './PageNotFound';

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
			}
		}
	}
	componentDidMount () {
		this.setState({
			movieDiary: {
				...this.state.movieDiary,
				listLoading: true
			},
			movieRatings: {
				...this.state.movieRatings,
				listLoading: true
			}
		});
		fetch('https://saviomd.com/movieratings/data/diary.json').then((response) => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
		}).then((json) => {
			this.setState({
				movieDiary: {
					...this.state.movieDiary,
					list: formatMovieList(json),
					listError: false,
					listLoading: false
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
			this.setState({
				movieRatings: {
					...this.state.movieRatings,
					list: formatMovieList(json),
					listError: false,
					listLoading: false
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
						movieList={this.state.movieRatings.list}
					/>} />
					<Route component={PageNotFound} />
				</Switch>
				<Footer />
			</div>
		)
	}
}

export default App;
