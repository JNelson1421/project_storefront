import React from "react";
import { BrowserRouter, Routes, Route, link } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar'
import ProductsPage from './components/ProductsPage';
import User from './components/User';
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/productsPage' element={<ProductsPage />} />
            <Route path='/User' element={<User />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
