import React, { Component } from 'react';
import './Cashier.css';
import { Link } from 'react-router-dom';

export default class Cashier extends Component {
  render() {
    return (
      <div className="container" style={{ display: 'initial' }}>
        <div className="pika">
          <div className="main cate">
            <h5 className="title">Cashier</h5>
            <div className="pendingOrder cash">
              <h6>Pending Orders</h6>
              <div className="table-num">
                <div className="round-num">
                  <p>1</p>
                </div>
                <div className="round-num">
                  <p>3</p>
                </div>
                <div className="round-num">
                  <p>4</p>
                </div>
                <div className="round-num selected">
                  <p>5</p>
                </div>
                <div className="round-num">
                  <p>6</p>
                </div>
                <div className="round-num">
                  <p>7</p>
                </div>
                <div className="round-num">
                  <p>9</p>
                </div>
                <div className="round-num">
                  <p>10</p>
                </div>
                <div className="round-num">
                  <p>12</p>
                </div>
                <div className="round-num">
                  <p>16</p>
                </div>
              </div>
              <div className="send-kitchen">
                <p>Send All To Kitchen</p>
              </div>
            </div>
            <div className="checkOutWaiting cash">
              <h6>Checkout Waiting</h6>
              <div className="table-num">
                <div className="round-num">
                  <p>1</p>
                </div>
                <div className="round-num">
                  <p>3</p>
                </div>
                <div className="round-num">
                  <p>4</p>
                </div>
                <div className="round-num selected">
                  <p>5</p>
                </div>
                <div className="round-num">
                  <p>6</p>
                </div>
                <div className="round-num">
                  <p>7</p>
                </div>
                <div className="round-num">
                  <p>9</p>
                </div>
                <div className="round-num">
                  <p>10</p>
                </div>
                <div className="round-num">
                  <p>12</p>
                </div>
                <div className="round-num">
                  <p>16</p>
                </div>
              </div>
            </div>
            <div style={{ width: '30.5em' }}>
              <Link to="/screen">
                <p className="back blue toscreen">Show Screen</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
