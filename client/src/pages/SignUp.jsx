import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../mock/api"; 
import { useSession } from "../contexts/SessionContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
   
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post('/api/signup', { email, password });
      const data = response.data;
      console.log(data)
      
      setUser({
        username: data.username,
        id: data.id,
      });
      localStorage.setItem('user', JSON.stringify(data));
      localStorage.setItem('authToken', data.token);

     
      navigate('/');
    } catch (error) {
      console.error('Signup failed', error);
      alert("Signup failed, please try again.");
    }
  };

  // Inline styles
  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '400px',
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
  };

  return (
    <form onSubmit={handleSubmit} style={formStyles}>
      <h2>Sign Up</h2>
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
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        style={inputStyles}
      />
      <button type="submit" style={buttonStyles}>Sign Up</button>
    </form>
  );
};

export default SignUp;
