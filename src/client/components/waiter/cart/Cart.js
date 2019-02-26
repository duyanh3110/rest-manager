import React, { Component } from 'react';
import Cart from "./cart.json";
import './Cart.css';

export default class TotalCart extends Component {
  render() {
    return (
      <div className="list-dish cart">
        {Cart.map((dish, index) => {
          return (
            <div className="dish-detail top-nav" key={dish.id}>
              <div className="dish-name">
                <img src={dish.image} alt="logo"/>
                <p className="name">{dish.name}</p>
              </div>
              <div className="round-num cart"><p>{dish.amount}</p></div>
            </div>
          )
        })}
      </div>
    );
  }
}
