import React from 'react';
import { storiesOf } from '@storybook/react';

import favicon from '../public/img/favicon.png';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <div className="text-center">
      <h1 className="h1">
        Welcome to<br />
        Movie Ratings Storybook
      </h1>
      <img src={favicon} />
    </div>
  ));
