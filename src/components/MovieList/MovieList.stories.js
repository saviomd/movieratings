import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';

import MockWrapper from '../MockWrapper';
import MovieList from './MovieList';
import MovieDiaryContext from '../../contexts/movieDiaryContext';
import MovieRatingsContext from '../../contexts/movieRatingsContext';
import movieDiary from '../../../data-mocks/movieDiary';
import movieRatings from '../../../data-mocks/movieRatings';

storiesOf('MovieList', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('movieDiary', () => (
    <MovieDiaryContext.Provider value={{
      movieDiary: movieDiary.movieDiary,
      movieDiaryStatus: movieDiary.movieDiaryStatus,
    }}>
      <MockWrapper>
        <MovieList type="Diary" />
      </MockWrapper>
    </MovieDiaryContext.Provider>
  ))
  .add('movieRatings', () => (
    <MovieRatingsContext.Provider value={{
      movieRatings: movieRatings.movieRatings,
      movieRatingsStatus: movieRatings.movieRatingsStatus,
    }}>
      <MockWrapper>
        <MovieList type="Ratings" />
      </MockWrapper>
    </MovieRatingsContext.Provider>
  ))
