import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar'
import ProductsPage from './components/ProductsPage';
import User from './components/User';
import ProductDetails from "./components/ProductDetails";
import "./App.css";
import CartPage from "./components/CartPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/productsPage' element={<ProductsPage />} />
            <Route path='/product-details/:id' element={<ProductDetails />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/User' element={<User />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;