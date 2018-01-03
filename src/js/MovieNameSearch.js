import React from 'react';

class MovieNameSearch extends React.Component {
	render () {
		return (
			<div className="mb-3">
				<hr className="border-secondary" />
				<label htmlFor="search-movie">Search:</label>
				<div className="input-group mb-3">
					<input id="search-movie" className="form-control" type="text" value={this.props.movieSearchString} onChange={(event) => this.props.handleOnChangeMovieNameSearch(event.target.value)} />
					<span className="input-group-append">
						<button className="btn btn-secondary" type="button" onClick={() => this.props.handleOnChangeMovieNameSearch('')}>&times;</button>
					</span>
				</div>
				<p className="small text-right">{this.props.movieCount} movies</p>
			</div>
		)
	}
}

export default MovieNameSearch
