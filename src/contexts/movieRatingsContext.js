import React from 'react';

import filterMoviesByName from '../helpers/filterMoviesByName';
import formatMovieList from '../helpers/formatMovieList';
import { fetchMovieRatings } from '../helpers/movieRatingsServices';

const MovieRatingsContext = React.createContext();

class MovieRatingsStore extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			getMovieRatingsFiltered: this.getMovieRatingsFiltered.bind(this),
			getMovieRatingsPaginated: this.getMovieRatingsPaginated.bind(this),
			getMoviesPerDecadeReleased: this.getMoviesPerDecadeReleased.bind(this),
			getMoviesPerRatingGiven: this.getMoviesPerRatingGiven.bind(this),
			increaseMovieRatingsPage: this.increaseMovieRatingsPage.bind(this),
			movieRatings: [],
			movieRatingsPage: 1,
			movieRatingsSearchString: '',
			movieRatingsStatus: '',
			setMovieRatingsSearchString: this.setMovieRatingsSearchString.bind(this),
		}
	}
	componentDidMount() {
		this.loadMovieRatings();
	}
	getMovieRatingsFiltered() {
		const { movieRatings, movieRatingsSearchString } = this.state;
		return filterMoviesByName(movieRatings, movieRatingsSearchString);
	}
	getMovieRatingsPaginated() {
		const { movieRatingsPage } = this.state;
		const size = movieRatingsPage * 100;
		return this.getMovieRatingsFiltered().slice(0, size);
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
	setMovieRatingsSearchString(value) {
		value.trim().toLowerCase();
		this.setState({
			movieRatingsSearchString: value,
		});
	}
	render() {
		const { children } = this.props;
		return (
			<MovieRatingsContext.Provider value={this.state}>
				{children}
			</MovieRatingsContext.Provider>
		);
	}
};

export {
	MovieRatingsContext as default,
	MovieRatingsStore,
};
