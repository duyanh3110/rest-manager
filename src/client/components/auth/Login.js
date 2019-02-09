import React, { Component } from 'react';
import {Bootstrap, Container, Grid, Row, Col} from 'react-bootstrap';
import './Login.css';

export default class LogIn extends Component {
  state = {
    email: '',
    password: ''
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="login-form">
        <div className="form">
          <div className="logo">
            <img src="public/images/logo-white.png" alt="logo" />
          </div>
          <form onSubmit={this.submitHandler}>
            <div>
              <input
                type="email"
                id="email"
                onChange={this.changeHandler}
                placeholder="Email"
                className="input-login"
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                onChange={this.changeHandler}
                placeholder="Password"
                className="input-login"
              />
            </div>
            <div>
              <button className="btn-login">Sign In</button>
            </div>
          </form>
          <div className="sign-up">
            <a href="#">Create a new account</a>
          </div>
        </div>
      </div>
    );
  }
}
