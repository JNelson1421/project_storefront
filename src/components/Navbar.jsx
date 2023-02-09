import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Navbar.css"

function Navbar() {
    return (
      <nav className="nav">
        <Link to="/" className="title">
          Shady's Shoes
        </Link>
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/productsPage">Products</Link>
          <Link to="/user">User</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </nav>
    );
  }
  

export default Navbar;