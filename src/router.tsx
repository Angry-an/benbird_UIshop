import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/index';

function About() {
  return <h2>About</h2>;
}


const Router = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail"> <About /></Route>
    </Switch>
  </HashRouter>
);

export default Router
