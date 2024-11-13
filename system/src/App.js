import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import GetStartedPage from './GetStartedPage'; 

const AboutUs = () => <div>About Us Page</div>;
const Contact = () => <div>Contact Page</div>;
const AcademicDetails = () => <div>Academic Details Page</div>;

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/academic-details" element={<AcademicDetails />} />
          <Route path="/get-started" element={<GetStartedPage />} /> {/* New Route */}
          <Route path="/" element={<Navigate to="/get-started" />} /> {/* Redirect to Get Started */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
