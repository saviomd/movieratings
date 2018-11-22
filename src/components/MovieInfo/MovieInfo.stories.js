import React from 'react';
import { storiesOf } from '@storybook/react';

import MockWrapper from '../MockWrapper';
import MovieInfo from './MovieInfo';
import MovieInfoContext from '../../contexts/movieInfoContext';
import movieInfo from '../../../data-mocks/movieInfo';

storiesOf('MovieInfo', module)
  .add('default', () => (
    <MovieInfoContext.Provider value={{
      movieInfo: movieInfo.movieInfo,
      movieInfoStatus: movieInfo.movieInfoStatus,
    }}>
      <MockWrapper>
        <MovieInfo />
      </MockWrapper>
    </MovieInfoContext.Provider>
  ))
