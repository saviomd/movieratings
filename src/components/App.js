import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Diary from './Diary';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import NotFound from './NotFound';
import Ratings from './Ratings';

import formatMovieList from '../helpers/formatMovieList';

import '../css/bootstrap.min.css'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			movieDiary: [],
			movieRatings: []
		}
	}
	componentDidMount () {
		fetch('https://saviomd.com/movieratings/data/diary.json').then((response) => {
			return response.json();
		}).then((json) => {
			this.setState({
				movieDiary: formatMovieList(json)
			});
		}).catch(function () {
			console.log('error fetch diary');
		});
		fetch('https://saviomd.com/movieratings/data/ratings.json').then((response) => {
			return response.json();
		}).then((json) => {
			this.setState({
				movieRatings: formatMovieList(json)
			});
		}).catch(function () {
			console.log('error fetch ratings');
		});
	}
	render () {
		return (
			<div className="container-fluid">
				<Header />
				<Nav />
				<Switch>
					<Route path="/" exact render={() => <Ratings movieRatings={this.state.movieRatings} />} />
					<Route path="/diary" render={() => <Diary movieDiary={this.state.movieDiary} />} />
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</div>
		)
	}
}

export default App;
