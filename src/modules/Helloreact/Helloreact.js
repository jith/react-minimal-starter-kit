import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Helloreact.css';

function Welcome (){
    return(
      <div>
        <p><img src="assets/images/logo_small.png" alt="React Js"/></p>
        <h1>Hello React !</h1>
        <p>Minimal react boilerplate.</p>
        <Link to={`/about`}>About</Link>
      </div>
    );
}

export default class Helloreact extends Component {
  render() {
    return (
      <div className="WelcomePage">
        <Welcome />
      </div>
    );
  }
}
