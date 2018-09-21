import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { configure } from '@storybook/react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

library.add(faStar);

const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  require('./welcomeStory');
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
