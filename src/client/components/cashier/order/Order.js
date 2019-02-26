import React, { Component } from 'react';
import TotalCart from "../cartFromWaiter/CartFromWaiter";
import './Order.css';

export default class Order extends Component {
  render() {
    return (
      <div className="container" style={{display: 'initial'}}>
        <div className="pika">
          <div className="main cate">
            <h5 className="title">Cashier</h5>
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
              <div className="formButton" style={{width: '100%'}}>
                <a className="btn-grad btn-waiter">Send To Kitchen</a>
              </div>
              <p className="back red toscreen">Delete Order</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
