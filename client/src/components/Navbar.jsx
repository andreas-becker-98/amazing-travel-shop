import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../contexts/CartContext";
import "../styles/CartCount.css";

const Navbar = () => {
  const { CartItemCount } = useCart(); // Use the correct function name
  const cartItemCount = CartItemCount(); // Call the function to get the count
  
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          Amazing Travel Shop
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          {/* Men's Dropdown */}
          <li className="dropdown">
            <Link to="/menpage">Men's</Link>
            <div className="dropdown-content">
              <Link to={{
                pathname: "/menpage",
                search: "?category=Jackets"
              }}>Jackets</Link>
              <Link to={{
                pathname: "/menpage",
                search: "?category=Backpacks"
              }}>Backpacks</Link>
              <Link to={{
                pathname: "/menpage",
                search: "?category=Trail+Vests"
              }}>Trail Vests</Link>
            </div>
          </li>

          {/* Women's Dropdown */}
          <li className="dropdown">
            <Link to="/womenpage">Women's</Link>
            <div className="dropdown-content">
              <Link to={{
                pathname: "/womenpage",
                search: "?category=Jackets"
              }}>Jackets</Link>
              <Link to={{
                pathname: "/womenpage",
                search: "?category=Backpacks"
              }}>Backpacks</Link>
              <Link to={{
                pathname: "/womenpage",
                search: "?category=Trail+Vests"
              }}>Trail Vests</Link>
            </div>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        {/* User Icon */}
        <Link to="/myaccount" className="user-icon">
          <FontAwesomeIcon icon={faUser} />
        </Link>

        {/* Favourite Icon */}
        {
          /*
          Currently not used

            <Link to="/favourite" className="fav-icon">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          */
        }

        {/* Cart Icon */}
        <Link to="/cart" className="cart-icon">
          <FontAwesomeIcon icon={faCartShopping} />
          {cartItemCount > 0 && (
            <span className="cart-count">{cartItemCount}</span> 
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
