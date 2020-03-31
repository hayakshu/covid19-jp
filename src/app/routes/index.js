import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard, Faq, NotFound } from '../../pages';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Dashboard />
    </Route>
    <Route path="/faq">
      <Faq />
    </Route>
    <Route>
      <NotFound />
    </Route>
  </Switch>
);

export default Routes;
