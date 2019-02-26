import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import TotalCart from "../cart/Cart";
import './Finalize.css';

export default class Finalize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  handleshowModal = () => {
    this.setState({ showModal: true });
  }

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
              <a className="btn-grad btn-waiter" onClick={this.handleshowModal}>Finalize Order</a>
            </div>
            <p className="back red toscreen">Not Yet</p>
          </div>
        </div>

        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <Modal.Body onClick={this.handleCloseModal}>
            <p className="title-modal">Order Placed</p>
            <div className="formButton modal-btn">
              <a className="btn-grad btn-waiter">Confirm</a>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
