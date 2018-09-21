import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';

import MockWrapper from '../MockWrapper';
import MovieList from './MovieList';
import movieDiary from '../../../data-mocks/movieDiary';
import movieRatings from '../../../data-mocks/movieRatings';

storiesOf('MovieList', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('movieDiary', () => (
    <MockWrapper>
      <MovieList movies={movieDiary.list} type="Diary" />
    </MockWrapper>
  ))
  .add('movieRatings', () => (
    <MockWrapper>
      <MovieList movies={movieRatings.list} type="Ratings" />
    </MockWrapper>
  ))
