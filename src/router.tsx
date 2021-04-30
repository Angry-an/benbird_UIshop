import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/index';
import ImgChange from './pages/image/index'
import Receive from './pages/react_15_hooks/receiveProps'

function About() {
  return <h2>About</h2>;
}


const Router = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail"> <About /></Route>
      <Route exact path="/imgchange"> <ImgChange /></Route>
      <Route exact path="/toChild" > <Receive /></Route>
    </Switch>
  </HashRouter>
);

export default Router
