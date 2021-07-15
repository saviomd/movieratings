import React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import MockWrapper from '../MockWrapper';
import LoadingHandler from './LoadingHandler';

const dataMock = ['item1', 'item2', 'item3'];

storiesOf('LoadingHandler', module)
  .add('default', () => (
    <MockWrapper>
      <LoadingHandler
        dataStatus={select('Data status', {
          loading: 'loading',
          loaded: 'loaded',
          error: 'error',
        }, 'loaded')}
        hasData={boolean('Has data', true)}
        messageNoData={select('No data message', {
          noData: 'noData',
          noMovies: 'noMovies',
          noStats: 'noStats',
        }, 'noData')}
      >
        <ul>
          {dataMock.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </LoadingHandler>
    </MockWrapper>
  ))
