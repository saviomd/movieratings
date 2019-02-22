import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarAlt, faChartBar, faDizzy, faFrown, faHourglassHalf, faSadTear, faStar, faTimes } from '@fortawesome/free-solid-svg-icons';

import { MovieDiaryStore } from './contexts/movieDiaryContext';
import { MovieRatingsStore } from './contexts/movieRatingsContext';
import Footer from './components/Footer';
import Header from './components/Header';
import PageMovieInfo from './pages/PageMovieInfo';
import PageMovies from './pages/PageMovies';
import PageNotFound from './pages/PageNotFound';
import PageStats from './pages/PageStats';
import SiteInfo from './components/SiteInfo';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

library.add(faCalendarAlt, faChartBar, faDizzy, faFrown, faHourglassHalf, faSadTear, faStar, faTimes);

const App = () => {
	const [state] = useState({
		navLinks: [
			{
				icon: 'star',
				name: 'Ratings',
				path: '/',
			},
			{
				icon: 'calendar-alt',
				name: 'Diary',
				path: '/diary',
			},
			{
				icon: 'chart-bar',
				name: 'Stats',
				path: '/stats',
			},
		],
	});

	return (
		<MovieDiaryStore>
			<MovieRatingsStore>
				<div className="container-fluid">
					<div className="justify-content-center row">
						<div className="col-12 col-md-10">
							<Header navLinks={state.navLinks} />
							<Switch>
								<Route path="/" exact render={() => <PageMovies type='Ratings' />} />
								<Route path="/diary" render={() => <PageMovies type='Diary' />} />
								<Route path="/movie/:movieId" render={({ match }) => <PageMovieInfo match={match} />} />
								<Route path="/stats" component={PageStats} />
								<Route component={PageNotFound} />
							</Switch>
							<SiteInfo />
							<Footer />
						</div>
					</div>
				</div>
			</MovieRatingsStore>
		</MovieDiaryStore>
	);
};

export default App;
