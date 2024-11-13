import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';

function LoginPage() {
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
    rememberMe: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:3001/users`, {
        params: { userName: formData.userName }
      });

      const users = response.data;

      if (users.length && users[0].password === formData.password) {
        if (formData.rememberMe) {
          localStorage.setItem('rememberMe', JSON.stringify(formData));
        }
        navigate('/home');
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      alert('An error occurred during login: ' + error.message);
    }
  };

  const isFormValid = formData.userName && formData.password;

  return (
    <div className="form-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>User Name</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-options">
          <div className="remember-me">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label>Remember Me</label>
          </div>
          <p className="forgot-password" onClick={() => alert('Redirect to Forgot Password Page')}>
            Forgot Password?
          </p>
        </div>
        <button type="submit" disabled={!isFormValid}>Login</button>
      </form>
      <p className="toggle-link" onClick={() => navigate('/signup')}>Don't have an account? Sign up</p>
    </div>
  );
}

export default LoginPage;
