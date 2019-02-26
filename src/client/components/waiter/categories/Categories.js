import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ListDish from "../listDish/ListDish";
import SideBar from "../sideBar/SideBar";
import './Categories.css';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false,
      showModal: false
    };
  }

  toggleNav = () => {
    this.setState({
      showNav: !this.state.showNav
    })
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  handleShowModal = () => {
    this.setState({ showModal: true });
  }

  render() {
    let sideNav = "sideNav";
    let sideBar = "sideBar"
    let backgroundNav = "background-nav";
    if (this.state.showNav) {
      sideNav += " show";
      sideBar += " show";
      backgroundNav += " show";
    } else {
      sideNav += " hide";
      sideBar += " hide";
      backgroundNav += " hide";
    }

    return (
      <div className="container" style={{display: 'contents'}}>
        <div className="pika">
          <div className="top-nav">
            <div className="btn-back">
              <img src="public/images/button/back.png" alt="logo" />
            </div>
            <div className="btn-nav">
              <img src="public/images/button/back.png" alt="logo" onClick={this.toggleNav}/>
            </div>
          </div>
          <div className="main cate">
            <h5 className="title">Burger</h5>
            <ListDish />
          </div>
        </div>
        <div className="formButton recipe">
          <div className="btn-grad btn-recipe">
            <img src="public/images/button/cancel.png" alt="logo" />
            <p>3 Dishes</p>
            <img src="public/images/button/accept.png" alt="logo" onClick={this.handleShowModal}/>
          </div>
        </div>

        <div className={sideBar}>
          <div className={sideNav}>
            <h5 className="title side">Categories</h5>
            <div>
              <div className="burger cate-name">
                <p>Burger</p>
              </div>
              <div className="pizza cate-name">
                <p>Pizza</p>
              </div>
              <div className="drink cate-name">
                <p>Drink</p>
              </div>
              <div className="dessert cate-name">
                <p>Dessert</p>
              </div>
            </div>
          </div>
          <div className={backgroundNav} onClick={this.toggleNav}></div>
        </div>

        <Modal className="modal" show={this.state.showModal} onHide={this.handleCloseModal}>

          <Modal.Body>
            <p>Finalize Order?</p>
            <div className="formButton modal-btn">
              <a className="btn-grad btn-waiter">Confirm</a>
            </div>
            <p className="back blue toscreen" onClick={this.handleCloseModal}>Not yet</p>
          </Modal.Body>

        </Modal>
      </div>
    );
  }
}
