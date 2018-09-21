import React from 'react';
import { storiesOf } from '@storybook/react';

import MockWrapper from '../MockWrapper';
import ProgressBar from './ProgressBar';

storiesOf('ProgressBar', module)
  .add('50', () => (
    <MockWrapper>
      <ProgressBar width="50" />
    </MockWrapper>
  ))
  .add('70', () => (
    <MockWrapper>
      <ProgressBar width="70" />
    </MockWrapper>
  ))
