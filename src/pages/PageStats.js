import React from 'react';

import MovieStats from '../components/MovieStats';
import { MovieDiaryConsumer } from '../contexts/movieDiaryContext';
import { MovieRatingsConsumer } from '../contexts/movieRatingsContext';

const PageStats = () => (
	<>
		<h1 className="h4">Stats</h1>
		<div className="row">
			<div className="col-12 col-sm-6 col-md-4 mb-3">
				<div className="border border-secondary p-3 rounded">
					<h1 className="h5">Per year watched</h1>
					<MovieDiaryConsumer>
						{({ getMoviesPerYearWatched, movieDiaryStatus }) => (
							<MovieStats
								getMovies={getMoviesPerYearWatched}
								moviesStatus={movieDiaryStatus}
								type="moviesPerYearWatched"
							/>
						)}
					</MovieDiaryConsumer>
				</div>
			</div>
			<div className="col-12 col-sm-6 col-md-4 mb-3">
				<div className="border border-secondary p-3 rounded">
					<h1 className="h5">Per rating given</h1>
					<MovieRatingsConsumer>
						{({ getMoviesPerRatingGiven, movieRatingsStatus }) => (
							<MovieStats
								getMovies={getMoviesPerRatingGiven}
								moviesStatus={movieRatingsStatus}
								type="moviesPerRatingGiven"
							/>
						)}
					</MovieRatingsConsumer>
				</div>
			</div>
			<div className="col-12 col-sm-6 col-md-4 mb-3">
				<div className="border border-secondary p-3 rounded">
					<h1 className="h5">Per decade released</h1>
					<MovieRatingsConsumer>
						{({ getMoviesPerDecadeReleased, movieRatingsStatus }) => (
							<MovieStats
								getMovies={getMoviesPerDecadeReleased}
								moviesStatus={movieRatingsStatus}
								type="moviesPerDecadeReleased"
							/>
						)}
					</MovieRatingsConsumer>
				</div>
			</div>
		</div>
	</>
);

export default PageStats;
