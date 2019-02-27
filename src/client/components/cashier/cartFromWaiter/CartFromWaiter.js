import React, { Component } from 'react';
import Cart from "./cartFromWaiter.json";
import './CartFromWaiter.css';

export default class CartFromWaiter extends Component {
  render() {
    return (
      <div className="list-dish cart final">
        {Cart.map((dish, index) => {
          return (
            <div className="dish-detail top-nav" key={dish.id}>
              <div className="dish-name">
                <img src={dish.image} alt="logo"/>
                <div className="infoFinal">
                  <p className="name">{dish.name}</p>
                  <div className="quantity">
                    <p className="price">&euro;{dish.price.toFixed(2)}/</p>
                    <p className="amount"> QTY {dish.amount}</p>
                  </div>
                </div>
              </div>
              <div className="dish-price">&euro;{dish.price.toFixed(2)}</div>
            </div>
          )
        })}
        <div className="total">
          <p>Order Total</p>
          <div className="dish-price">&euro;18.00</div>
        </div>
      </div>
    );
  }
}
