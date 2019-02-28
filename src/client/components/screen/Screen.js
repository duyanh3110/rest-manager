import React, { Component } from 'react';
import './Screen.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class Screen extends Component {
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="container">
        <div className="main">
          <h5 className="title">Screens</h5>
          <div className="listFeature">
            <div className="waiter tagName">
              <Link to="/waiter">
                <p>Waiter</p>
              </Link>
            </div>
            <div className="cashier tagName">
              <Link to="/cashier">
                <p>Cashier</p>
              </Link>
            </div>
            <div className="manager tagName">
              <Link to="/managerlogin">
                <p>Manager</p>
              </Link>
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
