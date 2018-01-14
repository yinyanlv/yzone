import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';

import store from './Store';
import Routes from './Routes';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDom.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();