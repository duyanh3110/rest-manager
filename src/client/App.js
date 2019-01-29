import React, { Component } from 'react';
import './app.css';
import {
  Route, Link, Redirect, BrowserRouter as Router
} from 'react-router-dom';
import Login from './components/auth/Login';
import Screen from './components/screen/Screen';

const Public = () => <div> This is a public page </div>;

const Private = () => <div> This is a private page </div>;

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/public" component={Public} />
          <Route path="/private" component={Private} />
          <Route path="/screen" component={Screen} />
        </div>
      </Router>
    );
  }
}
