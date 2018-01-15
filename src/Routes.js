import React from 'react';
import {Router, BrowserRouter, Route, Switch} from 'react-router-dom';
import {syncHistoryWithStore} from 'react-router-redux';

import store from './Store';
import {Login} from './pages/Login';
import {Register} from './pages/Register';
import {Exception403, Exception404, Exception500} from './pages/Exception';
import BasicLayout from './layouts/BasicLayout';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/403" component={Exception403} />
      <Route path="/500" component={Exception500} />
      <Route component={BasicLayout} />
      <Route component={Exception404} />
    </Switch>
  </BrowserRouter>
);

export default Routes;