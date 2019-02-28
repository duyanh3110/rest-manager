import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './FoodType.css';
import { connect } from 'react-redux';
import { getCurrentMenu,addfood } from '../../../actions/menuActions';
class FoodType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showListFood: false,
      showModal: false,
      showModalAddFood: false,
      foodImage: '',
      foodName: '',
      foodPrice: 0,
  
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    this.props.getCurrentMenu();
  }

  toggleDropDown = () => {
    this.setState({
      showListFood: !this.state.showListFood
    });
  };

  handleCloseModalAddFood = (name,price,type) => {
    this.setState({
      showModalAddFood: false,
    });
    const foodData = {
      name: this.state.foodName,
      price: this.state.foodPrice,
      type: type
    }
    this.props.addfood(foodData, this.props.history);
    this.props.getCurrentMenu();
    
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

  handleShowDBModal = (foodDetail) => {
    this.setState({
      showModal: true,
      foodImage: 'public/images/burger/All-American.jpg',
      foodName: foodDetail.food_name,
      foodPrice: foodDetail.price
    });
  };

  render() {
    let styleOfFood = "foodType ";
    styleOfFood += this.props.typeOfFood;
    {this.state.showListFood ? styleOfFood += " show" : styleOfFood += " hide"}
    const { menu, loading } = this.props.menu;
    let foodContent;

    if (menu === null || loading) {
      foodContent = 'loading';
    } else if (Object.keys(menu).length > 0){
      foodContent = menu.map(item =>{
        if (this.props.typeOfFood === item.foodtype){
          return(
            <div className="dish-detail top-nav" key={item.food_id} onClick={() => this.handleShowDBModal(item)}>
            <div className="dish-name">
              <img src='public/images/burger/All-American.jpg' alt="logo"/>
              <div className="infoFinal">
                <p className="name">{item.food_name}</p>
              </div>
            </div>
            <div className="dish-price">&euro;{item.price.toFixed(2)}</div>
          </div>
          )
        }
      }
     
        
        // if (this.props.typeOfFood === item.foodtype)
      )
    }

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
          {foodContent}
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
                <input className="name" type="text" name='foodName'  placeholder={this.state.foodName}/>
                <input className="price" type="number" name='foodPrice' placeholder={this.state.foodPrice}/>
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
                <input className="name" type="text" placeholder="New Dish" name='foodName' onChange={this.onChange} value={this.state.foodName}/>
                <input className="price" type="number" placeholder="0.00" name='foodPrice' onChange={this.onChange}  value={this.state.foodPrice}/>
              </div>
            </div>
            <div className="two-btn edit">
              <button className="btn-edit del" onClick={() =>this.handleCloseModalAddFood(this.state.foodName,this.state.foodPrice,this.props.typeOfFood)}>Cancel</button>
              <button className="btn-edit save" onClick={() =>this.handleCloseModalAddFood(this.state.foodName,this.state.foodPrice,this.props.typeOfFood)}>Save</button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.menu
});

export default connect(
  mapStateToProps,
  { getCurrentMenu,addfood }
)(FoodType);
