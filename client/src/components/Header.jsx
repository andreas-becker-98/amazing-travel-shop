import React from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useSession } from "../contexts/SessionContext";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');

  const { user } = useSession();
  
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('./login');
  };

  const wordCase = (word) => {  
    if (word === undefined) {
      return '';
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <div>
      <Navbar />
      <Link to="/">Home</Link>
        {token ? (
          <>
            <Link to="/profile">{wordCase(user.username)}'s Courses</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
          </>
        )}
    </div>
  );
};

export default Header;
