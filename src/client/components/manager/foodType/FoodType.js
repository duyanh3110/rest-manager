import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './FoodType.css';
export default class FoodType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showListFood: false,
      showModal: false,
      showModalAddFood: false,
      foodImage: '',
      foodName: '',
      foodPrice: 0
    };
  }

  toggleDropDown = () => {
    this.setState({
      showListFood: !this.state.showListFood
    });
  };

  handleCloseModalAddFood = () => {
    this.setState({
      showModalAddFood: false,
    });
  };

  handleShowModalAddFood = () => {
    this.setState({
      showModalAddFood: true,
    });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
      foodImage: '',
      foodName: '',
      foodPrice: 0
    });
  };

  handleShowModal = (foodDetail) => {
    this.setState({
      showModal: true,
      foodImage: foodDetail.image,
      foodName: foodDetail.name,
      foodPrice: foodDetail.price
    });
  };

  render() {
    let styleOfFood = "foodType ";
    styleOfFood += this.props.typeOfFood;
    {this.state.showListFood ? styleOfFood += " show" : styleOfFood += " hide"}

    return (
      <div className={styleOfFood}>
        <div className="banner" onClick={this.toggleDropDown}>
          <img className="arrow" src="public/images/button/arrow_right.png"/>
          <p>{this.props.titleFood}</p>
          <img className="edit" src="public/images/button/edit_white.png"/>
        </div>
        <div className="list-food">
          {this.props.food.map((dish, index) => {
            return (
              <div className="dish-detail top-nav" key={dish.id} onClick={() => this.handleShowModal(dish)}>
                <div className="dish-name">
                  <img src={dish.image} alt="logo"/>
                  <div className="infoFinal">
                    <p className="name">{dish.name}</p>
                  </div>
                </div>
                <div className="dish-price">&euro;{dish.price.toFixed(2)}</div>
              </div>
            )
          })}
          <div className="formButton edit">
            <a className="btn-grad" onClick={this.handleShowModalAddFood}> New dish</a>
          </div>
        </div>


        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <Modal.Body>
            <div className="edit-info">
              <div className="image-left">
                <img className="edit-img" src={this.state.foodImage}/>
                <img className="edit-icon" src='/public/images/button/edit_icon.png'/>
              </div>
              <div className="edit-input">
                <input className="name" type="text" placeholder={this.state.foodName}/>
                <input className="price" type="number" placeholder={this.state.foodPrice.toFixed(2)}/>
              </div>
            </div>
            <div className="two-btn edit">
              <button className="btn-edit del" onClick={this.handleCloseModal}>Delete</button>
              <button className="btn-edit save" onClick={this.handleCloseModal}>Save</button>
            </div>
          </Modal.Body>
        </Modal>

        <Modal show={this.state.showModalAddFood} onHide={this.handleCloseModalAddFood}>
          <Modal.Body>
            <div className="edit-info">
              <div className="image-left">
                <img className="edit-img" src="/public/images/button/dessert.png"/>
                <img className="edit-icon" src='/public/images/button/edit_icon.png'/>
              </div>
              <div className="edit-input">
                <input className="name" type="text" placeholder="New Dish"/>
                <input className="price" type="number" placeholder="0.00"/>
              </div>
            </div>
            <div className="two-btn edit">
              <button className="btn-edit del" onClick={this.handleCloseModalAddFood}>Cancel</button>
              <button className="btn-edit save" onClick={this.handleCloseModalAddFood}>Save</button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
