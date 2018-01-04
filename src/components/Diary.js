import React from 'react';

import Info from './Info';
import MovieList from './MovieList';
import MovieNameSearch from './MovieNameSearch';

import filterMoviesByName from '../helpers/filterMoviesByName';
import formatMovieList from '../helpers/formatMovieList';

class Diary extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			movieDiary: [],
			movieDiarySearchString: ''
		}
		this.handleOnChangeMovieNameSearch = this.handleOnChangeMovieNameSearch.bind(this)
	}
	componentDidMount () {
		fetch('https://saviomd.com/movieratings/data/diary.json').then((response) => {
			return response.json();
		}).then((json) => {
			this.setState({
				movieDiary: formatMovieList(json)
			});
		}).catch(function () {
			console.log('error');
		});
	}
	handleOnChangeMovieNameSearch (value) {
		value.trim().toLowerCase();
		this.setState({
			movieDiarySearchString: value
		});
	}
	render () {
		const movieDiaryToRender = filterMoviesByName(this.state.movieDiary, this.state.movieDiarySearchString);
		return (
			<div>
				<div className="justify-content-center mb-3 row">
					<div className="col-12 col-sm-4 col-lg-3">
						<Info />
						<MovieNameSearch handleOnChangeMovieNameSearch={this.handleOnChangeMovieNameSearch} movieCount={movieDiaryToRender.length} movieSearchString={this.state.movieDiarySearchString} />
					</div>
					<div className="col-12 col-sm-8 col-lg-6">
						<MovieList movies={movieDiaryToRender} type="diary" />
					</div>
				</div>
			</div>
		)
	}
}

export default Diary;
