import React, { Component } from 'react';
import FoodType from "../foodType/FoodType";
import Burger from '../../../data/burger.json';
import Pizza from '../../../data/pizza.json';
import Drink from '../../../data/drink.json';
import Dessert from '../../../data/dessert.json';
import { Modal, Button } from 'react-bootstrap';
import './Setting.css';
import { Link } from 'react-router-dom';

export default class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalAddCate: false
    };
  }

  handleCloseModalAddCate = () => {
    this.setState({
      showModalAddCate: false,
    });
  };

  handleShowModalAddCate = () => {
    this.setState({
      showModalAddCate: true,
    });
  };

  render() {
    return (
      <div className="container" style={{ display: 'contents' }}>
        <div className="pika">
          <div className="main cate">
            <h5 className="title">Customize</h5>
            <div className="list-menu">
              <FoodType
                typeOfFood="burger"
                titleFood="Burger"
                food={Burger}/>
              <FoodType
                typeOfFood="pizza"
                titleFood="Pizza"
                food={Pizza}/>
              <FoodType
                typeOfFood="drink"
                titleFood="Drink"
                food={Drink}/>
              <FoodType
                typeOfFood="dessert"
                titleFood="Desert"
                food={Dessert}/>
              <div className="formButton edit">
                <a className="btn-grad cate" onClick={this.handleShowModalAddCate}>New Categories</a>
              </div>
            </div>
          </div>
        </div>

        <Modal show={this.state.showModalAddCate} onHide={this.handleCloseModalAddCate}>
          <Modal.Body>
            <div className="edit-info cate">
              <div className="image-left">
                <img className="edit-img" src="/public/images/button/dessert.png"/>
                <img className="edit-icon" src='/public/images/button/edit_icon.png'/>
              </div>
              <div className="edit-input">
                <input className="name" type="text" placeholder="New Categories"/>
                <input className="price" type="number" placeholder="Amount"/>
              </div>
            </div>
            <div className="two-btn edit">
              <button className="btn-edit del" onClick={this.handleCloseModalAddCate}>Cancel</button>
              <button className="btn-edit save" onClick={this.handleCloseModalAddCate}>Save</button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
