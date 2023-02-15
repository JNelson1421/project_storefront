import React from "react";
import '../css/ProductsPage.css';
import Cart from '../features/cart/Cart';



function CartPage () {
    return (
        <div className="products-page">
        <h1>This is the cart</h1>
        <Cart/>
        </div>
    )
};

export default CartPage;