import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProductDetails } from '../features/products/productsSlice';
import '../css/ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await dispatch(getProductDetails(id));
      setProduct(data.payload);
    };

    fetchProduct();
  }, [id, dispatch]);

  return (
    <div className="product-details">
      {product ? (
        <>
          <h1>{product.name}</h1>
          <p>{product.brand}</p>
          <p className="price">${product.price}</p>
          <img src={product.img} alt="Product" />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;