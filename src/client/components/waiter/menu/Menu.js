import React, { Component } from 'react';
import './Menu.css';

// eslint-disable-next-line react/prefer-stateless-function
class Menu extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="content">
          <div className="back-btn">
            <img src="public/images/button/back.png" alt="logo" />
          </div>
          <h5 className="title">Categories</h5>
          <div className="row">
            <div className="col-6 cate-item">
              <img src="public/images/menu/burger.png" alt="logo" width="285px" height="285px" />
              <div className="cate-item-name">Burger</div>
            </div>
            <div className="col-6 cate-item">
              <img src="public/images/menu/pizza.png" alt="logo" width="285px" height="285px" />
              <div className="cate-item-name">Pizza</div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 cate-item">
              <img src="public/images/menu/drink.png" alt="logo" width="285px" height="285px" />
              <div className="cate-item-name">Drink</div>
            </div>
            <div className="col-6 cate-item">
              <img src="public/images/menu/dessert.png" alt="logo" width="285px" height="285px" />
              <div className="cate-item-name">Dessert</div>
            </div>
          </div>
          <div className="receipt">
            <img src="public/images/button/cancel.png" alt="logo" />
            <div className="receipt-text">3 Dishes</div>
            <img src="public/images/button/accept.png" alt="logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
