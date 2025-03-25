import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useSession } from "../contexts/SessionContext";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');  

  const { user } = useSession();  
  
  const handleLogout = () => {
    localStorage.removeItem('authToken');  
    navigate('/');  
  };

  const wordCase = (word) => {  
    if (word === undefined) {
      return '';
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <div>
      <Navbar />  
      
      {token && user ? (  
        <div>
          <p>Welcome, {wordCase(user.username)}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
        </div>
      )}
    </div>
  );
};

export default Header;
