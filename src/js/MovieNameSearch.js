import React from 'react';

class MovieNameSearch extends React.Component {
	handleChangeMovieNameSearch (event) {
		const {value} = event.target;
		this.setState({
			value: value
		});
	}
	render () {
		return (
			<input className="form-control" placeholder="search for movie..." type="text" onChange={this.handleChangeMovieNameSearch} />
		)
	}
}

export default MovieNameSearch
