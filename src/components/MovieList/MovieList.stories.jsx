import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';

import MockWrapper from '../MockWrapper';
import MovieList from './MovieList';
import MovieDiaryContext from '../../contexts/movieDiaryContext';
import MovieRatingsContext from '../../contexts/movieRatingsContext';
import movieDiaryMock from '../../../__mocks__/movieDiaryMock';
import movieRatingsMock from '../../../__mocks__/movieRatingsMock';

const movieDiaryProviderState = {
  increaseMovieDiaryPage: null,
  movieDiaryFiltered: movieDiaryMock.movieDiary,
  movieDiaryPaginated: movieDiaryMock.movieDiary,
  movieDiarySearchString: '',
  movieDiaryStatus: movieDiaryMock.movieDiaryStatus,
};
const movieRatingsProviderState = {
  increaseMovieRatingsPage: null,
  movieRatingsFiltered: movieRatingsMock.movieRatings,
  movieRatingsPaginated: movieRatingsMock.movieRatings,
  movieRatingsSearchString: '',
  movieRatingsStatus: movieRatingsMock.movieRatingsStatus,
};

storiesOf('MovieList', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('movieDiary', () => (
    <MovieDiaryContext.Provider value={movieDiaryProviderState}>
      <MovieRatingsContext.Provider value={movieRatingsProviderState}>
        <MockWrapper>
          <MovieList type="Diary" />
        </MockWrapper>
      </MovieRatingsContext.Provider>
    </MovieDiaryContext.Provider>
  ))
  .add('movieRatings', () => (
    <MovieDiaryContext.Provider value={movieDiaryProviderState}>
      <MovieRatingsContext.Provider value={movieRatingsProviderState}>
        <MockWrapper>
          <MovieList type="Ratings" />
        </MockWrapper>
      </MovieRatingsContext.Provider>
    </MovieDiaryContext.Provider>
  ))
