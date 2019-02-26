import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ModalConfirm.css';

export default class TotalCartBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showKitchenModal: false,
      showCancerModal: false,
      cancelOrNot: this.props.cancelVis
    };
  }

  handleCloseKitchenModal = () => {
    this.setState({ showKitchenModal: false });
  }

  handleshowKitchenModal = () => {
    this.setState({ showKitchenModal: true });
  }

  handleCloseCancerModal = () => {
    this.setState({ showCancerModal: false });
  }

  handleshowCancerModal = () => {
    this.setState({ showCancerModal: true });
  }

  render() {
    return (
      <div>
        <div className="formButton" style={{width: '100%'}}>
          <a className="btn-grad btn-waiter" onClick={this.handleshowKitchenModal}>{this.props.titleModal}</a>
        </div>
        {this.state.cancelOrNot ?
        <p className="back red toscreen" onClick={this.handleshowCancerModal}>Delete Order</p> :
        <div></div>}

        <Modal show={this.state.showKitchenModal} onHide={this.handleCloseKitchenModal}>
          <Modal.Body>
            <p className="title-modal">{this.props.titleModal}</p>
            <div className="formButton modal-btn">
              <a className="btn-grad btn-waiter">Confirm</a>
            </div>
            <p className="back blue toscreen" onClick={this.handleCloseKitchenModal}>Not yet</p>
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
      </div>
    );
  }
}
