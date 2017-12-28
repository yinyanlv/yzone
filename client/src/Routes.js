import React from 'react';
import {Router, BrowserRouter, Route} from 'react-router-dom';
import {syncHistoryWithStore} from 'react-router-redux';

import store from './Store';

import Portal from './pages/Portal';

const Routes = () => (
  <BrowserRouter>
    <Route path="/" component={Portal} />
  </BrowserRouter>
);

export default Routes;