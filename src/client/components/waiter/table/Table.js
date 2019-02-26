import React, { Component } from 'react';
import './Table.css';

export default class Table extends Component {
  render() {
    return (
      <div className="container">
        <div className="main">
          <h5 className="title">Table</h5>
          <div className="table-num">
            <div className="round-num"><p>1</p></div>
            <div className="round-num"><p>3</p></div>
            <div className="round-num"><p>4</p></div>
            <div className="round-num selected"><p>5</p></div>
            <div className="round-num"><p>6</p></div>
            <div className="round-num"><p>7</p></div>
            <div className="round-num"><p>9</p></div>
            <div className="round-num"><p>10</p></div>
            <div className="round-num"><p>12</p></div>
            <div className="round-num"><p>16</p></div>
          </div>
          <div className="top-num top-nav table">
            <div className="tagNum">
              <p className="name-num">Customers</p>
            </div>
            <div className="tagNum">
              <div className="round-num"><p>-</p></div>
              <input type="number" placeholder="2" />
              <div className="round-num"><p>+</p></div>
            </div>
          </div>
          <div className="formButton">
            <a className="btn-grad btn-waiter">Take Order</a>
          </div>
          <p className="back red toscreen">Cancel</p>
        </div>
      </div>
    );
  }
}
