import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';

import MockWrapper from '../MockWrapper';
import MovieList from './MovieList';
import MovieDiaryContext from '../../contexts/movieDiaryContext';
import MovieRatingsContext from '../../contexts/movieRatingsContext';
import movieDiaryMock from '../../../__mocks__/movieDiaryMock';
import movieRatingsMock from '../../../__mocks__/movieRatingsMock';

storiesOf('MovieList', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('movieDiary', () => (
    <MovieDiaryContext.Provider value={{
      movieDiaryFiltered: movieDiaryMock.movieDiary,
      movieDiaryPaginated: movieDiaryMock.movieDiary,
      movieDiaryStatus: movieDiaryMock.movieDiaryStatus,
    }}>
      <MockWrapper>
        <MovieList type="Diary" />
      </MockWrapper>
    </MovieDiaryContext.Provider>
  ))
  .add('movieRatings', () => (
    <MovieRatingsContext.Provider value={{
      movieRatingsFiltered: movieRatingsMock.movieRatings,
      movieRatingsPaginated: movieRatingsMock.movieRatings,
      movieRatingsStatus: movieRatingsMock.movieRatingsStatus,
    }}>
      <MockWrapper>
        <MovieList type="Ratings" />
      </MockWrapper>
    </MovieRatingsContext.Provider>
  ))
