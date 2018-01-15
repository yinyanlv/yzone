import React from 'react';
import {Router, BrowserRouter, Route, Switch} from 'react-router-dom';
import {syncHistoryWithStore} from 'react-router-redux';

import store from './Store';
import {Login} from './pages/Login';
import {Register} from './pages/Register';
import {ModuleList} from './pages/ModuleList';
import {Exception403, Exception404, Exception500} from './pages/Exception';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/module-list" component={ModuleList} />
      <Route path="/403" component={Exception403} />
      <Route path="/500" component={Exception500} />
      <Route path="/*" component={Exception404} />
    </Switch>
  </BrowserRouter>
);

export default Routes;