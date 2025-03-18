import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart, faUser } from '@fortawesome/free-solid-svg-icons'; // Import specific icons

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">Amazing Travel Shop</Link>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li><Link to="/menpage">Men's</Link></li>
          <li><Link to="/womenpage">Women's</Link></li>
          <li><Link to="/accessories">Accessories</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        {/* User Icon */}
        <Link to="/myaccount" className="user-icon">
          <FontAwesomeIcon icon={faUser} />
        </Link>
        
        {/* Favourite Icon */}
        <Link to="/favourite" className="fav-icon">
          <FontAwesomeIcon icon={faHeart} />
        </Link>

        {/* Cart Icon */}
        <Link to="/cart" className="cart-icon">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
