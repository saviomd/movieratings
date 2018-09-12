const initState = {
	groups: {},
	max: 0
};

export const MOVIES_PER_RATING_GIVEN_UPDATE = 'MOVIES_PER_RATING_GIVEN_UPDATE';

export const loadMoviesPerRatingGiven = (movieList) => {
	return (dispatch, getState) => {
		const groups = movieList.reduce((acc, curr) => {
			const rating = curr.Rating;
			acc[rating] ? acc[rating]++ : acc[rating] = 1;
			return acc;
		}, {});
		let max = 0;
		for (const rating in groups) {
			max = (groups[rating] > max ? groups[rating] : max);
		}
		dispatch(updateMoviesPerRatingGiven({groups, max}));
	};
};
const updateMoviesPerRatingGiven = (value) => ({type: MOVIES_PER_RATING_GIVEN_UPDATE, payload: value});

export default (state = initState, action) => {
	switch (action.type) {
		case MOVIES_PER_RATING_GIVEN_UPDATE:
			const { groups, max } = action.payload;
			return {...state, groups, max};
		default:
			return state;
	}
};
