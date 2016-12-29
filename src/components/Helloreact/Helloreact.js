import React, { Component } from 'react';
import { Link } from 'react-router';
import './Helloreact.css';

var Welcome = React.createClass({
  render() {
    return(
      <div>
        <p><img src="assets/images/logo_small.png" alt="React Js"/></p>
        <h1>Hello React !</h1>
        <p>Minimal react boilerplate.</p>
        <Link to={`/about`}>About</Link>
      </div>
    );
  }
});

export default class Helloreact extends Component {
  render() {
    return (
      <div className="WelcomePage">
        <Welcome />
      </div>
    );
  }
}
