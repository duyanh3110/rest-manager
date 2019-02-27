import React, { Component } from 'react';
import './Manager.css';
import { Link } from 'react-router-dom';

export default class Manager extends Component {
  render() {
    return (
      <div className="container">
        <div className="main">
          <h5 className="title">Manager</h5>
          <div className="pendingOrder cashier">
            <h6>Today Income</h6>
            <p className="income">&euro; 1246.00</p>
          </div>
          <div className="checkOutWaiting cashier">
            <h6>Monthly Income</h6>
            <p className="income">&euro; 32 587.08</p>
          </div>
          <div className="formButton">
            <Link to="/setting" className="btn-grad btn-waiter">
              Setting
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
