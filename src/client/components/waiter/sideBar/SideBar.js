import React, { Component } from 'react';
import './SideBar.css';

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: this.props.navState
    };
  }

  render() {
    let sideNav = "sideNav";
    let sideBar = "sideBar"
    let backgroundNav = "background-nav";
    if (this.state.showNav) {
      sideNav += " show";
      sideBar += " show";
      backgroundNav += " show";
    } else {
      sideNav += " hide";
      sideBar += " hide";
      backgroundNav += " hide";
    }

    return (
      <div className={sideBar}>
        <div className={sideNav}>
          <h5>Sidebar content</h5>
        </div>
        <div className={backgroundNav} onClick={this.toggleNav}></div>
      </div>
    );
  }
}
