import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarAlt, faChartBar, faDizzy, faFrown, faHourglassHalf, faSadTear, faStar, faTimes } from '@fortawesome/free-solid-svg-icons';

import { MovieDiaryStore } from './contexts/movieDiaryContext';
import { MovieRatingsStore } from './contexts/movieRatingsContext';
import { MovieSearchStore } from './contexts/movieSearchContext';
import Footer from './components/Footer';
import Header from './components/Header';
import PageMovieInfo from './pages/PageMovieInfo';
import PageMovies from './pages/PageMovies';
import PageNotFound from './pages/PageNotFound';
import PageStats from './pages/PageStats';
import SiteInfo from './components/SiteInfo';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

library.add(faCalendarAlt, faChartBar, faDizzy, faFrown, faHourglassHalf, faSadTear, faStar, faTimes);

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			navLinks: [
				{
					icon: 'star',
					name: 'Ratings',
					path: '/'
				},
				{
					icon: 'calendar-alt',
					name: 'Diary',
					path: '/diary'
				},
				{
					icon: 'chart-bar',
					name: 'Stats',
					path: '/stats'
				}
			]
		}
	}
	render () {
		return (
			<MovieSearchStore>
				<MovieDiaryStore>
					<MovieRatingsStore>
						<div className="container-fluid">
							<div className="justify-content-center row">
								<div className="col-12 col-md-10">
									<Header navLinks={this.state.navLinks} />
									<Switch>
										<Route path="/" exact render={() => <PageMovies type='Ratings' />} />
										<Route path="/diary" render={() => <PageMovies type='Diary' />} />
										<Route path="/movie/:movieId" render={({ match }) => <PageMovieInfo match={match} />} />
										<Route path="/stats" render={() => <PageStats />} />
										<Route component={PageNotFound} />
									</Switch>
									<SiteInfo />
									<Footer />
								</div>
							</div>
						</div>
					</MovieRatingsStore>
				</MovieDiaryStore>
			</MovieSearchStore>
		)
	}
}

export default App;
