import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Dishes from './dishes.json';
import Pizzas from './pizza.json';
import Drinks from './drink.json';
import Desserts from './dessert.json';
import './ListDish.css';

export default class ListDish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      dishInfo: ''
    };
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
      dishInfo: ''
    });
  };

  handleShowModal = (foodDetail) => {
    this.setState({
      showModal: true,
      dishInfo: foodDetail
    });
  };

  render() {
    const { onFoodName } = this.props;
    // Burger menu
    if (onFoodName === 'Burger') {
      return (
        <div className="list-dish">
          <h5 className="title">Burger</h5>
          {Dishes.map((dish, index) => (
            <div className="dish-detail" key={dish.id} onClick={() => this.handleShowModal(dish)}>
              <img src={dish.image} alt="logo" />
              <p className="name">{dish.name}</p>
            </div>
          ))}

          <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
            <Modal.Body>
              <div className="dish-detail">
                <img src={this.state.dishInfo.image} alt="logo" />
                <p className="name">{this.state.dishInfo.name}</p>
              </div>
              <div className="top-num top-nav table">
                <div className="tagNum">
                  <p className="name-num">Customers</p>
                </div>
                <div className="tagNum">
                  <div className="round-num">
                    <p>-</p>
                  </div>
                  <input type="number" placeholder="2" />
                  <div className="round-num">
                    <p>+</p>
                  </div>
                </div>
              </div>
              <div className="two-btn">
                <img
                  src="public/images/button/cancel_round.png"
                  alt="logo"
                  onClick={this.handleCloseModal}
                />
                <img src="public/images/button/accept_round.png" alt="logo" />
              </div>
            </Modal.Body>
          </Modal>
        </div>
      );
    }
    // Pizza Menu
    if (onFoodName === 'Pizza') {
      return (
        <div className="list-dish">
          <h5 className="title">Pizza</h5>
          {Pizzas.map((dish, index) => (
            <div className="dish-detail" key={dish.id} onClick={() => this.handleShowModal(dish)}>
              <img src={dish.image} alt="logo" />
              <p className="name">{dish.name}</p>
            </div>
          ))}

          <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
            <Modal.Body>
              <div className="dish-detail">
                <img src={this.state.dishInfo.image} alt="logo" />
                <p className="name">{this.state.dishInfo.name}</p>
              </div>
              <div className="top-num top-nav table">
                <div className="tagNum">
                  <p className="name-num">Customers</p>
                </div>
                <div className="tagNum">
                  <div className="round-num">
                    <p>-</p>
                  </div>
                  <input type="number" placeholder="2" />
                  <div className="round-num">
                    <p>+</p>
                  </div>
                </div>
              </div>
              <div className="two-btn">
                <img
                  src="public/images/button/cancel_round.png"
                  alt="logo"
                  onClick={this.handleCloseModal}
                />
                <img src="public/images/button/accept_round.png" alt="logo" />
              </div>
            </Modal.Body>
          </Modal>
        </div>
      );
    }
    // Drink Menu
    if (onFoodName === 'Drink') {
      return (
        <div className="list-dish">
          <h5 className="title">Drink</h5>
          {Drinks.map((dish, index) => (
            <div className="dish-detail" key={dish.id} onClick={() => this.handleShowModal(dish)}>
              <img src={dish.image} alt="logo" />
              <p className="name">{dish.name}</p>
            </div>
          ))}

          <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
            <Modal.Body>
              <div className="dish-detail">
                <img src={this.state.dishInfo.image} alt="logo" />
                <p className="name">{this.state.dishInfo.name}</p>
              </div>
              <div className="top-num top-nav table">
                <div className="tagNum">
                  <p className="name-num">Customers</p>
                </div>
                <div className="tagNum">
                  <div className="round-num">
                    <p>-</p>
                  </div>
                  <input type="number" placeholder="2" />
                  <div className="round-num">
                    <p>+</p>
                  </div>
                </div>
              </div>
              <div className="two-btn">
                <img
                  src="public/images/button/cancel_round.png"
                  alt="logo"
                  onClick={this.handleCloseModal}
                />
                <img src="public/images/button/accept_round.png" alt="logo" />
              </div>
            </Modal.Body>
          </Modal>
        </div>
      );
    }
    // Dessert Menu
    if (onFoodName === 'Dessert') {
      return (
        <div className="list-dish">
          <h5 className="title">Dessert</h5>
          {Desserts.map((dish, index) => (
            <div className="dish-detail" key={dish.id} onClick={() => this.handleShowModal(dish)}>
              <img src={dish.image} alt="logo" />
              <p className="name">{dish.name}</p>
            </div>
          ))}

          <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
            <Modal.Body>
              <div className="dish-detail">
                <img src={this.state.dishInfo.image} alt="logo" />
                <p className="name">{this.state.dishInfo.name}</p>
              </div>
              <div className="top-num top-nav table">
                <div className="tagNum">
                  <p className="name-num">Customers</p>
                </div>
                <div className="tagNum">
                  <div className="round-num">
                    <p>-</p>
                  </div>
                  <input type="number" placeholder="2" />
                  <div className="round-num">
                    <p>+</p>
                  </div>
                </div>
              </div>
              <div className="two-btn">
                <img
                  src="public/images/button/cancel_round.png"
                  alt="logo"
                  onClick={this.handleCloseModal}
                />
                <img src="public/images/button/accept_round.png" alt="logo" />
              </div>
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  }
}
