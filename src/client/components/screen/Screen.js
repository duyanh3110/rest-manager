import React, { Component } from 'react';
import './Screen.css';

export default class Screen extends Component {
  render() {
    return (
      <div className="container">
        <div className="main">
          <h5 className="title">Screens</h5>
          <div className="listFeature">
            <div className="waiter tagName">
              <p>Waiter</p>
            </div>
            <div className="cashier tagName">
              <p>Cashier</p>
            </div>
            <div className="manager tagName">
              <p>Manager</p>
            </div>
          </div>
          <p className="back red">Sign out</p>
        </div>
      </div>
    );
  }
}
