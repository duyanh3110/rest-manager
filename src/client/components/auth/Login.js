import React, { Component } from 'react';
import './Login.css';

export default class LogIn extends Component {
  state = {
    email: '',
    password: ''
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitHandler}>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.changeHandler}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.changeHandler}/>
          </div>
          <div className="input-field">
            <button className="btn waves-effect waves-teal">Login</button>
          </div>
        </form>
      </div>
    )
  }
}
