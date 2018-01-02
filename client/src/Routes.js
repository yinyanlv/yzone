import React from 'react';
import {Router, BrowserRouter, Route, Switch} from 'react-router-dom';
import {syncHistoryWithStore} from 'react-router-redux';

import store from './Store';

import {Portal} from './pages/Portal';
import {Login} from './pages/Login';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Portal} exact />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;