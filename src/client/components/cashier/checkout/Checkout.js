import React, { Component } from 'react';
import TotalCart from "../cartFromWaiter/CartFromWaiter";
import ButtonModal from "../modalConfirm/ModalConfirm";
import '../order/Order.css';

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
              <ButtonModal
                titleModal="Checkout"
                cancelVis={false} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
