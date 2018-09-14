import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router';

library.add(faStar);

import MovieInfo from '../src/components/MovieInfo';
import MovieList from '../src/components/MovieList';
import ProgressBar from '../src/components/ProgressBar';

import movieDiary from '../data-mocks/movieDiary';
import movieInfo from '../data-mocks/movieInfo';
import movieRatings from '../data-mocks/movieRatings';

const Wrapper = (props) => (
  <div className="bg-dark p-3 text-white">
    {props.children}
  </div>
);

storiesOf('MovieInfo', module)
  .add('default', () => (
    <Wrapper>
      <MovieInfo movieInfo={movieInfo} />
    </Wrapper>
  ))

storiesOf('MovieList', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('movieDiary', () => (
    <Wrapper>
      <MovieList movies={movieDiary.list} type="Diary" />
    </Wrapper>
  ))
  .add('movieRatings', () => (
    <Wrapper>
      <MovieList movies={movieRatings.list} type="Ratings" />
    </Wrapper>
  ))

storiesOf('ProgressBar', module)
  .add('50', () => (
    <Wrapper>
      <ProgressBar width="50" />
    </Wrapper>
  ))
  .add('70', () => (
    <Wrapper>
      <ProgressBar width="70" />
    </Wrapper>
  ))
