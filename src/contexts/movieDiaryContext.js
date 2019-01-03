import React from 'react';

import filterMoviesByName from '../helpers/filterMoviesByName';
import formatMovieList from '../helpers/formatMovieList';
import { fetchMovieDiary } from '../helpers/movieDiaryServices';

const MovieDiaryContext = React.createContext();

const MovieDiaryConsumer = MovieDiaryContext.Consumer;

class MovieDiaryStore extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			getMovieDiaryFiltered: this.getMovieDiaryFiltered.bind(this),
			getMovieDiaryPaginated: this.getMovieDiaryPaginated.bind(this),
			getMoviesPerYearWatched: this.getMoviesPerYearWatched.bind(this),
			increaseMovieDiaryPage: this.increaseMovieDiaryPage.bind(this),
			movieDiary: [],
			movieDiaryPage: 1,
			movieDiaryStatus: '',
			movieSearchString: '',
			setMovieSearchString: this.setMovieSearchString.bind(this),
		}
	}
	componentDidMount() {
		this.loadMovieDiary();
	}
	getMovieDiaryFiltered() {
		const { movieDiary, movieSearchString } = this.state;
		return filterMoviesByName(movieDiary, movieSearchString);
	}
	getMovieDiaryPaginated() {
		const { movieDiaryPage } = this.state;
		const size = movieDiaryPage * 100;
		return this.getMovieDiaryFiltered().slice(0, size);
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
	setMovieSearchString(value) {
		value.trim().toLowerCase();
		this.setState({
			movieSearchString: value,
		});
	}
	render() {
		const { children } = this.props;
		return (
			<MovieDiaryContext.Provider value={this.state}>
				{children}
			</MovieDiaryContext.Provider>
		);
	}
};

export {
	MovieDiaryContext as default,
	MovieDiaryConsumer,
	MovieDiaryStore,
};
