import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function AboutContent (){
    return(
      <div>
        <h1>About</h1>
        <p>Minimal react boilerplate.</p>
        <Link to={`/`}>Hello React !</Link>
      </div>
    );
}

export default class About extends Component {
  render() {
    return (
      <div className="AboutPage">
        <AboutContent />
      </div>
    );
  }
}
