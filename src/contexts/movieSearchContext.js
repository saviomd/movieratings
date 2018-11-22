import React from 'react';

const MovieSearchContext = React.createContext();

const MovieSearchConsumer = MovieSearchContext.Consumer;

class MovieSearchStore extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			movieSearchString: ''
		}
		this.setMovieSearchString = this.setMovieSearchString.bind(this);
	}
	setMovieSearchString(value) {
		value.trim().toLowerCase();
		this.setState({
			movieSearchString: value
		});
	}
	render() {
		const { children } = this.props;
		const { movieSearchString } = this.state;
		return (
			<MovieSearchContext.Provider value={{
				setMovieSearchString: this.setMovieSearchString,
				movieSearchString,
			}}>
				{children}
			</MovieSearchContext.Provider>
		);
	}
};

export {
	MovieSearchContext as default,
	MovieSearchConsumer,
	MovieSearchStore,
};
