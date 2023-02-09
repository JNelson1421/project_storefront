import { configureStore, createReducer } from '@reduxjs/toolkit';
import productReducer from '../features/products/productsSlice';
import cartReducer from '../features/cart/CartSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer
  },
});