import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Helloreact from './modules/Helloreact/Helloreact';
import About from './modules/About/About';

export default (
  <Router>
    <div>
      <Route exact path="/" component={Helloreact}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
);
