import React from 'react';

class MovieNameSearch extends React.Component {
	handleOnChange (event) {
		const value = event.target.value.trim().toLowerCase();
		this.props.filterMoviesByName(value);
	}
	render () {
		return (
			<div className="mb-3">
				<hr className="border-secondary" />
				<input className="form-control" placeholder="search for movie..." type="text" onChange={(event) => this.handleOnChange(event)} />
			</div>
		)
	}
}

export default MovieNameSearch
