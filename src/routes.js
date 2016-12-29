import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App/App';
import Helloreact from './components/Helloreact/Helloreact';
import About from './components/About/About';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Helloreact} />
    <Route path="/about" component={About} />
  </Route>
);
