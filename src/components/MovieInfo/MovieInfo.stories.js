import React from 'react';
import { storiesOf } from '@storybook/react';

import MockWrapper from '../MockWrapper';
import MovieInfo from './MovieInfo';
import movieInfo from '../../../data-mocks/movieInfo';

storiesOf('MovieInfo', module)
  .add('default', () => (
    <MockWrapper>
      <MovieInfo movieInfo={movieInfo} />
    </MockWrapper>
  ))
