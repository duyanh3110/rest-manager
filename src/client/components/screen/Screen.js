import React, { Component } from 'react';
import './Screen.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class Screen extends Component {
  onLogoutClick(e) {
    e.preventDefault();

    this.props.logoutUser();
    this.props.history.push('/');
  }

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  }

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
          <p className="back red" onClick={this.onLogoutClick.bind(this)}>
            Sign out
          </p>
        </div>
      </div>
    );
  }
}

Screen.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Screen);
