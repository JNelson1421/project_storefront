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

export const getProductDetails = createAsyncThunk(
  'products/getById',
  async (id) => {
    const product = await productsService.getProductDetails(id);
    return product;
  }
);


const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getProducts.pending, (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addCase(
        getProducts.fulfilled, (state, action) => {
          state.loading = false;
          state.products = action.payload;
        }
      )
      .addCase(
        getProducts.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error;
        }
      )
      .addCase(
        getProductDetails.pending, (state) => { 
        state.loading = true;
        state.error = null;
        }
      )
      .addCase(
        getProductDetails.fulfilled, (state, action) => {
          state.loading = false;
          state.product = action.payload;
        }
      )
      .addCase(
        getProductDetails.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error;
        }
      )
  },
});

export default productsSlice.reducer;