import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem, deleteItem } from "../features/cart/CartSlice";
import '../css/CardComponent.css'
import { Link, useNavigate } from "react-router-dom";

const CartComponent = ({ id, brand, name, price, img }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const addToCart = () => {
      dispatch(addItem({ id, brand, name, price, img }));
    };

    const decreaseItem = () => {
        dispatch(removeItem({ id, brand, name, price, img }));
      };
      
      const deleteProduct = () => {
        dispatch(deleteItem({ id, brand, name, price, img }));
      };
  
    return (
      <div className="card">
        <img src={img} alt="Product" />
        <div className="brand">{brand}</div>
        <div className="name">{name}</div>
        <div className="price">${price}</div>
        <div className="buttons">
        <Link to={{
          pathname: `/product-details/${id}`,
          state: { id, brand, name, price, img }
        }} className="details-button">
          Details
        </Link>
          <button className="cart-button" onClick={addToCart}>
            Increase Quantity
          </button>
          <button className="cart-button" onClick={decreaseItem}>
            Decrease Quantity
          </button>
          <button className="cart-button" onClick={deleteProduct}>
            Delete Item
          </button>
        </div>
      </div>
    );
  };
  
  export default CartComponent;