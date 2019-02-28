import React, { Component } from 'react';
import './Cashier.css';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

export default class Cashier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showKitchenModal: false
    };
  }

  handleCloseKitchenModal = () => {
    this.setState({ showKitchenModal: false });
  };

  handleshowKitchenModal = () => {
    this.setState({ showKitchenModal: true });
  };

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
                <Link to="/order">
                  <div className="round-num selected">
                    <p>5</p>
                  </div>
                </Link>
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
                <p onClick={this.handleshowKitchenModal}>Send All To Kitchen</p>
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
                <Link to="/checkout">
                  <div className="round-num selected">
                    <p>5</p>
                  </div>
                </Link>
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

        <Modal show={this.state.showKitchenModal} onHide={this.handleCloseKitchenModal}>
          <Modal.Body>
            <p className="title-modal">Send To Kitchen ?</p>
            <div className="formButton modal-btn">
              <a className="btn-grad btn-waiter" onClick={this.handleCloseKitchenModal}>
                Confirm
              </a>
            </div>
            <p className="back blue toscreen" onClick={this.handleCloseKitchenModal}>
              Not yet
            </p>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
