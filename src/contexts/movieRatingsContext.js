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
			movieRatingsStatus: '',
		}
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
		const { movieRatingsStatus } = this.state;
		return (
			<MovieRatingsContext.Provider value={{
				getMoviesPerDecadeReleased: this.getMoviesPerDecadeReleased,
				getMoviesPerRatingGiven: this.getMoviesPerRatingGiven,
				movieRatings: this.getMoviesFiltered(),
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
