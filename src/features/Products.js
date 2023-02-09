import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from './productsSlice';

function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const data = await dispatch(getProducts());
    setProducts(data.payload);
    console.log(data.payload)
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='products'>
      <div>
        {products.length > 0
          ? products.map((product) => (
              <div key={product.id}>
                {product.name}
              </div>
            ))
          : 'No products available'}
      </div>
      <button onClick={fetchProducts}>Refresh Products</button>
    </div>
  );
}

export default Products;