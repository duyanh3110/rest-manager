import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ListDish from '../listDish/ListDish';
import SideBar from '../sideBar/SideBar';
import TotalCartBar from '../totalCartBar/TotalCartBar';
import './Categories.css';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false,
      menu: 'Burger'
    };
  }

  toggleNav = () => {
    this.setState({
      showNav: !this.state.showNav
    });
  };

  onBurgerMenu = () => {
    this.setState({
      menu: 'Burger'
    });
  };

  onPizzaMenu = () => {
    this.setState({
      menu: 'Pizza'
    });
  };

  onDrinkMenu = () => {
    this.setState({
      menu: 'Drink'
    });
  };

  onDessertMenu = () => {
    this.setState({
      menu: 'Dessert'
    });
  };

  render() {
    let sideNav = 'sideNav';
    let sideBar = 'sideBar';
    let backgroundNav = 'background-nav';
    if (this.state.showNav) {
      sideNav += ' show';
      sideBar += ' show';
      backgroundNav += ' show';
    } else {
      sideNav += ' hide';
      sideBar += ' hide';
      backgroundNav += ' hide';
    }

    return (
      <div className="container" style={{ display: 'contents' }}>
        <div className="pika">
          <div className="top-nav">
            <div className="btn-back">
              <Link to="/table">
                <img src="public/images/button/back.png" alt="logo" />
              </Link>
            </div>
            <div className="btn-nav">
              <img src="public/images/button/nav_round.png" alt="logo" onClick={this.toggleNav} />
            </div>
          </div>
          <div className="main cate">
            <ListDish onFoodName={this.state.menu} />
          </div>
        </div>
        <TotalCartBar />

        <div className={sideBar}>
          <div className={sideNav}>
            <h5 className="title side">Categories</h5>
            <div>
              <div className="burger cate-name" onClick={this.onBurgerMenu}>
                <p>Burger</p>
              </div>
              <div className="pizza cate-name" onClick={this.onPizzaMenu}>
                <p>Pizza</p>
              </div>
              <div className="drink cate-name" onClick={this.onDrinkMenu}>
                <p>Drink</p>
              </div>
              <div className="dessert cate-name" onClick={this.onDessertMenu}>
                <p>Dessert</p>
              </div>
            </div>
          </div>
          <div className={backgroundNav} onClick={this.toggleNav} />
        </div>
      </div>
    );
  }
}
