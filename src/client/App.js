import React, { Component } from 'react';
import './app.css';
import './components/styles/container.css';
import './components/styles/btnGradient.css';
import {
  Route, Link, Redirect, Switch, BrowserRouter as Router
} from 'react-router-dom';
import Login from './components/auth/Login';
import Screen from './components/screen/Screen';
import Waiter from './components/waiter/Waiter';

const Public = () => <div> This is a public page </div>;

const Private = () => <div> This is a private page </div>;

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/public" component={Public} />
          <Route path="/private" component={Private} />
          <Route path="/screen" component={Screen} />
          <Route path="/waiter" component={Waiter} />
        </Switch>
      </Router>
    );
  }
}
