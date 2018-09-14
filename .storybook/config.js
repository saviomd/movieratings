import { configure } from '@storybook/react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function loadStories() {
  require('../stories/index.js');
}

configure(loadStories, module);
