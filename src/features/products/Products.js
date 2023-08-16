import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from './productsSlice';
import CardComponent from "../../components/CardComponent";

function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchProducts = async () => {
      const data = await dispatch(getProducts());
      setProducts(data.payload);
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <div className='products'>
        {products.length > 0
          ? products.map((product) => (
            <CardComponent
            key={product.id}
            id={product.id}
            brand={product.brand}
            name={product.name}
            price={product.price}
            img={product.img}
            />
            ))
          : 'No products available'}
    </div>
  );
}

export default Products;