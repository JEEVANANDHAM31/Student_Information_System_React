// GetStartedPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GetStartedPage.css';

const GetStartedPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup'); 
  };

  return (
    <div className="get-started-container">
        <h1>Welcome to StudentAtlas</h1>
      <img
        src="https://img.freepik.com/premium-photo/students-studying-library-researching-information_641503-159252.jpg?semt=ais_hybrid"
        alt="Students Studying"
        className="get-started-image"
      />
      <button onClick={handleGetStarted} className="get-started-button">Get Started</button>
    </div>
  );
};

export default GetStartedPage;
