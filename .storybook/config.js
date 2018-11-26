import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, configure } from '@storybook/react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

library.add(faStar);

const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  require('./welcomeStory');
  req.keys().forEach(file => req(file));
}

addDecorator(
  withInfo({
    header: false,
    inline: true,
    source: true,
  })
);
addDecorator(withKnobs);

configure(loadStories, module);
