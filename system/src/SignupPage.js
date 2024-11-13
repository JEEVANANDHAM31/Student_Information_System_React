import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignupPage.css';

function SignupPage() {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isStrongPassword = (password) => password.length >= 8;

  const handleSignup = async (e) => {
    e.preventDefault();
    const { userName, email, password, confirmPassword } = formData;

    if (!isValidEmail(email)) return setMessage("Please enter a valid email address!");
    if (!isStrongPassword(password)) return setMessage("Password must be at least 8 characters long!");
    if (password !== confirmPassword) return setMessage("Passwords don't match!");

    try {
      const response = await axios.post('http://localhost:3001/users', formData);

      if (response.status === 201) {
        setMessage("Signup successful! Redirecting to login...");
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setMessage("Error during signup!");
      }
    } catch (error) {
      setMessage("An error occurred: " + error.message);
    }
  };

  const isFormValid = Object.values(formData).every(Boolean);

  return (
    <div className="form-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        {Object.entries(formData).map(([key, value]) => (
          <div className="form-group" key={key}>
            <label>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</label>
            <input
              type={key.includes('password') ? 'password' : 'text'}
              name={key}
              value={value}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        {message && <p className={message.startsWith("Signup") ? "success" : "error"}>{message}</p>}
        <button type="submit" disabled={!isFormValid}>Sign Up</button>
      </form>
      <p className="toggle-link" style={{ color: "black", display: "inline" }} onClick={() => navigate('/login')}>
  Already have an account?     
</p>
<span style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate('/login')}>
     Log in
</span>
    </div>
  );
}

export default SignupPage;
