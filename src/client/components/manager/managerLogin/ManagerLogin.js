import React, { Component } from 'react';
import './ManagerLogin.css';
import { Link } from 'react-router-dom';

export default class ManagerLogin extends Component {
  render() {
    return (
      <div className="container">
        <div className="main">
          <h5 className="title">Manager Login</h5>
          <input className="managerPass" type="password" placeholder="Manager Password"/>
          <div className="formButton">
            <Link to="/manager" className="btn-grad btn-waiter">
              Manager Login
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
