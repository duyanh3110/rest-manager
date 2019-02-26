import React, { Component } from 'react';
import './Waiter.css';

export default class Waiter extends Component {
  render() {
    return (
      <div className="container">
        <div className="main">
          <h5 className="title">Waiter</h5>
          <div className="formButton">
            <a className="btn-grad btn-waiter">Start serving</a>
          </div>
          <p className="back blue toscreen">Show Screens</p>
        </div>
      </div>
    );
  }
}
