import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from '../pages';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Dashboard />
    </Route>
  </Switch>
);

export default Routes;
