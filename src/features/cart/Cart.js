import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartComponent from "../../components/CartComponent";

function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  const dispatch = useDispatch();
  const cart =useSelector((state) => state.cart)



  return (
    <div className='products'>
        {cart.productList.length > 0
          ? cart.productList.map((product) => (
            <CartComponent
            key={product.id}
            id={product.id}
            brand={product.brand}
            name={product.name}
            price={product.price}
            img={product.img}
            />
            ))
          : 'Cart is empty'}
    </div>
  );
}

export default Cart;