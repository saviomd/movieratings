import React, { useContext } from 'react';

import MovieStats from '../components/MovieStats';
import movieDiaryContext from '../contexts/movieDiaryContext';
import movieRatingsContext from '../contexts/movieRatingsContext';

const PageStats = () => {
	const { moviesPerYearWatched, movieDiaryStatus } = useContext(movieDiaryContext);
	const { moviesPerDecadeReleased, moviesPerRatingGiven, movieRatingsStatus } = useContext(movieRatingsContext);
	return (
		<>
			<h1 className="h4">Stats</h1>
			<div className="row">
				<div className="col-12 col-sm-6 col-md-4 mb-3">
					<div className="border border-secondary p-3 rounded">
						<h1 className="h5">Per year watched</h1>
						<MovieStats
							movies={moviesPerYearWatched}
							moviesStatus={movieDiaryStatus}
							type="moviesPerYearWatched"
						/>
					</div>
				</div>
				<div className="col-12 col-sm-6 col-md-4 mb-3">
					<div className="border border-secondary p-3 rounded">
						<h1 className="h5">Per rating given</h1>
						<MovieStats
							movies={moviesPerRatingGiven}
							moviesStatus={movieRatingsStatus}
							type="moviesPerRatingGiven"
						/>
					</div>
				</div>
				<div className="col-12 col-sm-6 col-md-4 mb-3">
					<div className="border border-secondary p-3 rounded">
						<h1 className="h5">Per decade released</h1>
						<MovieStats
							movies={moviesPerDecadeReleased}
							moviesStatus={movieRatingsStatus}
							type="moviesPerDecadeReleased"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default PageStats;
