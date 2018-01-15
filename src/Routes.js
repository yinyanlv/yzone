import React from 'react';
import {Router, BrowserRouter, Route, Switch} from 'react-router-dom';
import {syncHistoryWithStore} from 'react-router-redux';

import store from './Store';

import {Portal} from './pages/Portal';
import {Login} from './pages/Login';
import {Register} from './pages/Register';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  </BrowserRouter>
);

export default Routes;