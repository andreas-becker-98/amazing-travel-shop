import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "../contexts/SessionContext"; 
import axios from "../mock/api"; 

const defaultUser = {
  email: 'admin@amazingtravelshop',
  password: 'Hiking123!',
};

const MyAccount = () => {
  const [email, setEmail] = useState(defaultUser.email);
  const [password, setPassword] = useState(defaultUser.password);
  const navigate = useNavigate();
  const { setUser, setToken } = useSession(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth', { email, password });
      const data = response.data;

      setUser({
        username: data.username,
        id: data.id,
      });

      setToken(data.token);

      navigate('/');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  // Inline styles
  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '400px',
    height: '320px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: 'whitesmoke',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    border: '2px solid black',
  };

  const inputStyles = {
    marginBottom: '15px',
    padding: '10px',
    width: '350px',
    borderRadius: '4px',
    border: '2px solid black',
  };

  const buttonStyles = {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: '2px solid black',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '25px',  // Space between buttons
  };

  const signUpButtonStyles = {
    padding: '10px 20px',
    backgroundColor: '#28a745', // Green color for sign up
    color: 'white',
    border: '2px solid black',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyles}>
      <h2>My Account</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={inputStyles}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={inputStyles}
      />
      <button type="submit" style={buttonStyles}>Login</button>
      {/* Sign Up Button */}
      <button 
        type="button" 
        onClick={() => navigate('/signup')} 
        style={signUpButtonStyles}>
        Sign Up
      </button>
    </form>
  );
};

export default MyAccount;
