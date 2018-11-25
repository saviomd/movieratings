import React from 'react';

import MovieSearchContext from '../contexts/movieSearchContext';
import filterMoviesByName from '../helpers/filterMoviesByName';
import formatMovieList from '../helpers/formatMovieList';
import { fetchMovieRatings } from '../helpers/movieRatingsServices';

const MovieRatingsContext = React.createContext();

const MovieRatingsConsumer = MovieRatingsContext.Consumer;

class MovieRatingsStore extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			movieRatings: [],
			movieRatingsPage: 1,
			movieRatingsStatus: '',
		}
		this.increaseMovieRatingsPage = this.increaseMovieRatingsPage.bind(this);
		this.getMoviesPerDecadeReleased = this.getMoviesPerDecadeReleased.bind(this);
		this.getMoviesPerRatingGiven = this.getMoviesPerRatingGiven.bind(this);
	}
	componentDidMount() {
		this.loadMovieRatings();
	}
	getMoviesFiltered() {
		const { movieSearchString } = this.context;
		const { movieRatings } = this.state;
		return filterMoviesByName(movieRatings, movieSearchString);
	}
	getMoviesPaginated() {
		const { movieRatingsPage } = this.state;
		const size = movieRatingsPage * 100;
		return this.getMoviesFiltered().slice(0, size);
	}
	getMoviesPerDecadeReleased() {
		const groups = this.state.movieRatings.reduce((acc, curr) => {
			const decade = `${curr.Year.toString().substr(0, 3)}0`;
			acc[decade] ? acc[decade]++ : acc[decade] = 1;
			return acc;
		}, {});
		let max = 0;
		for (const decade in groups) {
			max = (groups[decade] > max ? groups[decade] : max);
		}
		return { groups, max };
	}
	getMoviesPerRatingGiven() {
		const groups = this.state.movieRatings.reduce((acc, curr) => {
			const rating = curr.Rating;
			acc[rating] ? acc[rating]++ : acc[rating] = 1;
			return acc;
		}, {});
		let max = 0;
		for (const rating in groups) {
			max = (groups[rating] > max ? groups[rating] : max);
		}
		return { groups, max };
	}
	increaseMovieRatingsPage() {
		const { movieRatingsPage } = this.state;
		this.setState({ movieRatingsPage: movieRatingsPage + 1 });
	}
	loadMovieRatings() {
		this.setState({ movieRatingsStatus: 'loading' });
		return fetchMovieRatings()
			.then(json => {
				const movieRatingsFormatted = formatMovieList(json);
				this.setState({ movieRatings: movieRatingsFormatted, movieRatingsStatus: 'loaded' });
				return movieRatingsFormatted;
			})
			.catch((error) => {
				this.setState({ movieRatingsStatus: 'error' });
				console.log(error.message);
			});
	}
	render() {
		const { children } = this.props;
		const { movieRatings, movieRatingsStatus } = this.state;
		return (
			<MovieRatingsContext.Provider value={{
				getMoviesPerDecadeReleased: this.getMoviesPerDecadeReleased,
				getMoviesPerRatingGiven: this.getMoviesPerRatingGiven,
				increaseMovieRatingsPage: this.increaseMovieRatingsPage,
				movieRatings,
				movieRatingsFiltered: this.getMoviesFiltered(),
				movieRatingsPaginated: this.getMoviesPaginated(),
				movieRatingsStatus,
			}}>
				{children}
			</MovieRatingsContext.Provider>
		);
	}
};

MovieRatingsStore.contextType = MovieSearchContext;

export {
	MovieRatingsContext as default,
	MovieRatingsConsumer,
	MovieRatingsStore,
};
