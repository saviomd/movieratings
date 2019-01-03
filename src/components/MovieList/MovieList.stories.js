import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';

import MockWrapper from '../MockWrapper';
import MovieList from './MovieList';
import MovieDiaryContext from '../../contexts/movieDiaryContext';
import MovieRatingsContext from '../../contexts/movieRatingsContext';
import movieDiary from '../../../__mocks__/movieDiary';
import movieRatings from '../../../__mocks__/movieRatings';

storiesOf('MovieList', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('movieDiary', () => (
    <MovieDiaryContext.Provider value={{
      movieDiaryFiltered: movieDiary.movieDiary,
      movieDiaryPaginated: movieDiary.movieDiary,
      movieDiaryStatus: movieDiary.movieDiaryStatus,
    }}>
      <MockWrapper>
        <MovieList type="Diary" />
      </MockWrapper>
    </MovieDiaryContext.Provider>
  ))
  .add('movieRatings', () => (
    <MovieRatingsContext.Provider value={{
      movieRatingsFiltered: movieRatings.movieRatings,
      movieRatingsPaginated: movieRatings.movieRatings,
      movieRatingsStatus: movieRatings.movieRatingsStatus,
    }}>
      <MockWrapper>
        <MovieList type="Ratings" />
      </MockWrapper>
    </MovieRatingsContext.Provider>
  ))
