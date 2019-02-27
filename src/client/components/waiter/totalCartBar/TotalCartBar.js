import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import TotalCart from "../cart/Cart";
import './TotalCartBar.css';

export default class TotalCartBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFinalModal: false,
      showCancerModal: false,
      showCart: false
    };
  }

  handleCloseFinalModal = () => {
    this.setState({ showFinalModal: false });
  }

  handleshowFinalModal = () => {
    this.setState({ showFinalModal: true });
  }

  handleCloseCancerModal = () => {
    this.setState({ showCancerModal: false });
  }

  handleshowCancerModal = () => {
    this.setState({ showCancerModal: true });
  }

  handleCloseCartModal = () => {
    this.setState({ showCart: false });
  }

  handleshowCartModal = () => {
    this.setState({ showCart: true });
  }

  render() {
    return (
      <div>
        <div className="formButton recipe">
          <div className="btn-grad btn-recipe">
            <img src="public/images/button/cancel.png" alt="logo" onClick={this.handleshowCancerModal}/>
            <p onClick={this.handleshowCartModal}>3 Dishes</p>
            <img src="public/images/button/accept.png" alt="logo" onClick={this.handleshowFinalModal}/>
          </div>
        </div>

        <Modal show={this.state.showFinalModal} onHide={this.handleCloseFinalModal}>
          <Modal.Body>
            <p className="title-modal">Finalize Order?</p>
            <div className="formButton modal-btn">
              <a className="btn-grad btn-waiter">Confirm</a>
            </div>
            <p className="back blue toscreen" onClick={this.handleCloseFinalModal}>Not yet</p>
          </Modal.Body>
        </Modal>

        <Modal show={this.state.showCancerModal} onHide={this.handleCloseCancerModal}>
          <Modal.Body>
            <div className="formButton modal-btn">
              <a className="btn-grad btn-cancel">Cancel Order</a>
            </div>
            <div className="formButton modal-btn">
              <a className="btn-grad btn-continue">Continue Order</a>
            </div>
          </Modal.Body>
        </Modal>

        <Modal dialogClassName="cartTemp" show={this.state.showCart} onHide={this.handleCloseCartModal}>
          <Modal.Body>
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
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
