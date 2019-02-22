import React, { Component } from 'react';
// import {
//   Bootstrap, Container, Grid, Row, Col
// } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { loginUser } from '../../actions/authActions';
import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: {}
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/screen');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/screen');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
    console.log(this.state);
  };

  render() {
    return (
      <div className="login-form">
        <div className="form">
          <div className="logo">
            <img src="public/images/login/logo-white.png" alt="logo" />
          </div>
          <form onSubmit={this.submitHandler}>
            <div>
              <input
                type="email"
                id="email"
                value={this.state.email}
                onChange={this.changeHandler}
                placeholder="Email"
                className="input-login"
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                value={this.state.password}
                onChange={this.changeHandler}
                placeholder="Password"
                className="input-login"
              />
            </div>
            <div>
              <button type="submit" className="btn-login">
                Sign In
              </button>
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
