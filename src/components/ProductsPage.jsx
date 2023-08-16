import React from "react";
import '../css/ProductsPage.css'
import Products from "../features/products/Products";


function ProductsPage () {
    return (
        <div className="products-page">
        <h1>Shoes</h1>
        <Products />
        </div>
    )
};

export default ProductsPage;