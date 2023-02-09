import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productsService from './productsService';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const getProducts = createAsyncThunk(
  'products/getAll',
  async () => {
    const products = await productsService.getProducts();
    return products;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default productsSlice.reducer;