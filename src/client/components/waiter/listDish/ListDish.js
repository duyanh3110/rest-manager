import React, { Component } from 'react';
import Dishes from "./dishes.json";
import './ListDish.css';

export default class ListDish extends Component {
  render() {
    return (
      <div className="list-dish">
        {Dishes.map((dish, index) => {
          return (
            <div className="dish-detail" key={dish.id}>
              <img src={dish.image} alt="logo"/>
              <p className="name">{dish.name}</p>
            </div>
          )
        })}
      </div>
    );
  }
}
