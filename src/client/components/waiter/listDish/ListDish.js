import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Dishes from '../../../data/burger.json';
import Pizzas from '../../../data/pizza.json';
import Drinks from '../../../data/drink.json';
import Desserts from '../../../data/dessert.json';
import './ListDish.css';

export default class ListDish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      foodName: '',
      foodImage: '',
      foodNumber: 0
    };
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
      dishInfo: '',
      foodName: '',
      foodImage: '',
      foodNumber: 0
    });
  };

  handleShowModal = (foodDetail) => {
    this.setState({
      showModal: true,
      foodName: foodDetail.name,
      foodImage: foodDetail.image
    });
  };

  updateInputValue = (evt) => {
    let numberValue;
    if (evt.target.type === 'number') numberValue = parseInt(evt.target.value);
    this.setState({
      foodNumber: numberValue
    });
  };

  subQuantity = () => {
    if (this.state.foodNumber > 0) {
      let newNumber = this.state.foodNumber;
      newNumber--;
      this.setState({
        foodNumber: newNumber
      });
    }
  };

  addQuantity = () => {
    let newNumber = this.state.foodNumber;
    newNumber++;
    this.setState({
      foodNumber: newNumber
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
                <img src={this.state.foodImage} alt="logo" />
                <p className="name">{this.state.foodName}</p>
              </div>
              <div className="top-num top-nav table">
                <div className="tagNum">
                  <p className="name-num">Customers</p>
                </div>
                <div className="tagNum">
                  <div className="round-num" onClick={this.subQuantity}>
                    <p>-</p>
                  </div>
                  <input
                    type="number"
                    value={this.state.foodNumber}
                    onChange={this.updateInputValue}
                  />
                  <div className="round-num" onClick={this.addQuantity}>
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
                <img src={this.state.foodImage} alt="logo" />
                <p className="name">{this.state.foodName}</p>
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
                <img src={this.state.foodImage} alt="logo" />
                <p className="name">{this.state.foodName}</p>
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
                <img src={this.state.foodImage} alt="logo" />
                <p className="name">{this.state.foodName}</p>
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
