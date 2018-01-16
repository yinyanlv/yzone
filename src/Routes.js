import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import {Login} from './pages/Login';
import {Register} from './pages/Register';
import {Exception403, Exception404, Exception500} from './pages/Exception';
import BasicLayout from './layouts/BasicLayout';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/403" component={Exception403} exact />
      <Route path="/500" component={Exception500} exact />
      <Route path="/app" component={BasicLayout} />
      <Redirect path="/" to="/app/module-list"  exact />
      <Route component={Exception404} />
    </Switch>
  </BrowserRouter>
);

export default Routes;