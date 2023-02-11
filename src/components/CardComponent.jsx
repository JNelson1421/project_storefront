import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/CartSlice";
import '../css/CardComponent.css'
import { Link, useNavigate } from "react-router-dom";

const CardComponent = ({ id, brand, name, price, img }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const addToCart = () => {
      dispatch(addItem({ id, brand, name, price, img }));
      navigate('/cart');
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
            Add to Cart
          </button>
        </div>
      </div>
    );
  };
  
  export default CardComponent;