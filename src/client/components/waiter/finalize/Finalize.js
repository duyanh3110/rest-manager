import React, { Component } from 'react';
import TotalCart from "../cart/Cart";
import './Finalize.css';

export default class Finalize extends Component {
  render() {
    return (
      <div className="container">
        <div className="main">
          <h5 className="title">Finalize</h5>
          <div className="">
            <div className="top-num top-nav">
              <div className="tagNum">
                <p className="name-num">Table</p>
                <div className="round-num"><p>12</p></div>
              </div>
              <div className="tagNum">
                <p className="name-num">Customers</p>
                <div className="round-num"><p>4</p></div>
              </div>
            </div>
            <div className="total-cart">
              <TotalCart />
            </div>
            <div className="formButton">
              <a className="btn-grad btn-waiter">Finalize Order</a>
            </div>
            <p className="back blue toscreen">Not Yet</p>
          </div>
        </div>
      </div>
    );
  }
}
