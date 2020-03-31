import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard, FAQ } from '../../pages';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Dashboard />
    </Route>
    <Route path="/faq">
      <FAQ />
    </Route>
  </Switch>
);

export default Routes;
