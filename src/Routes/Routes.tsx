import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import {MiniCard} from '~/component/Minicard';
import {Home} from '~/Screens/Home';
import {Login} from '~/Screens/Login';

export const Routes = () => {
  return (
    <Switch>
      <Route exact component={Login} path="/login" />
      <Route exact component={Home} path="/home" />
      <Route exact component={MiniCard} path="/minicard" />

      <Redirect to="login" />
    </Switch>
  );
};
