import React from 'react';

import MovieSearchContext from '../contexts/movieSearchContext';
import filterMoviesByName from '../helpers/filterMoviesByName';
import formatMovieList from '../helpers/formatMovieList';
import { fetchMovieDiary } from '../helpers/movieDiaryServices';

const MovieDiaryContext = React.createContext();

const MovieDiaryConsumer = MovieDiaryContext.Consumer;

class MovieDiaryStore extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			movieDiary: [],
			movieDiaryPage: 1,
			movieDiaryStatus: '',
		}
		this.increaseMovieDiaryPage = this.increaseMovieDiaryPage.bind(this);
		this.getMoviesPerYearWatched = this.getMoviesPerYearWatched.bind(this);
	}
	componentDidMount() {
		this.loadMovieDiary();
	}
	getMoviesFiltered() {
		const { movieSearchString } = this.context;
		const { movieDiary } = this.state;
		return filterMoviesByName(movieDiary, movieSearchString);
	}
	getMoviesPaginated() {
		const { movieDiaryPage } = this.state;
		const size = movieDiaryPage * 100;
		return this.getMoviesFiltered().slice(0, size);
	}
	getMoviesPerYearWatched() {
		const groups = this.state.movieDiary.reduce((acc, curr) => {
			const year = curr.WatchedDate.split('-')[0];
			acc[year] ? acc[year]++ : acc[year] = 1;
			return acc;
		}, {});
		let max = 0;
		for (const year in groups) {
			max = (groups[year] > max ? groups[year] : max);
		}
		return { groups, max };
	}
	increaseMovieDiaryPage() {
		const { movieDiaryPage } = this.state;
		this.setState({ movieDiaryPage: movieDiaryPage + 1 });
	}
	loadMovieDiary() {
		this.setState({ movieDiaryStatus: 'loading' });
		return fetchMovieDiary()
			.then(json => {
				const movieDiaryFormatted = formatMovieList(json);
				this.setState({ movieDiary: movieDiaryFormatted, movieDiaryStatus: 'loaded' });
				return movieDiaryFormatted;
			})
			.catch((error) => {
				this.setState({ movieDiaryStatus: 'error' });
				console.log(error.message);
			});
	}
	render() {
		const { children } = this.props;
		const { movieDiary, movieDiaryStatus } = this.state;
		return (
			<MovieDiaryContext.Provider value={{
				getMoviesPerYearWatched: this.getMoviesPerYearWatched,
				increaseMovieDiaryPage: this.increaseMovieDiaryPage,
				movieDiary,
				movieDiaryFiltered: this.getMoviesFiltered(),
				movieDiaryPaginated: this.getMoviesPaginated(),
				movieDiaryStatus,
			}}>
				{children}
			</MovieDiaryContext.Provider>
		);
	}
};

MovieDiaryStore.contextType = MovieSearchContext;

export {
	MovieDiaryContext as default,
	MovieDiaryConsumer,
	MovieDiaryStore,
};
