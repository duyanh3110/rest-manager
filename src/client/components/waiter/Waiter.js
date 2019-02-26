import React, { Component } from 'react';
import './Waiter.css';
import { Link } from 'react-router-dom';

export default class Waiter extends Component {
  render() {
    return (
      <div className="container">
        <div className="main">
          <h5 className="title">Waiter</h5>
          <div className="formButton">
            <Link to="/table" className="btn-grad btn-waiter">
              Start serving
            </Link>
          </div>
          <Link to="/screen" className="back blue toscreen">
            Show Screens
          </Link>
        </div>
      </div>
    );
  }
}
