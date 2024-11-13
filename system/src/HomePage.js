import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
    const [showNav, setShowNav] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');
    const navigate = useNavigate();

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    const handleLogout = () => {
        localStorage.removeItem('rememberMe');
        navigate('/login');
    };

    const handleProfileClick = () => {
        setCurrentPage('profile');
        setShowNav(false);
    };

    const handleAcademicClick = () => {
        setCurrentPage('academic');
        setShowNav(false);
    };

    const handleHomeClick = () => {
        setCurrentPage('home');
        setShowNav(false);
    };

    // Define courses with image URLs and YouTube links
    const courses = [
        { id: 1, name: "Java", description: "Learn Java Programming", image: "https://logowik.com/content/uploads/images/java-symbol3728.logowik.com.webp", video: "https://www.youtube.com/watch?v=eIrMbAQSU34" },
        { id: 2, name: "Data Structures", description: "Master Data Structures", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9JnqocMYj9Ehk81H-wbD7ZtWcyCkh8r4TWA&s", video: "https://www.youtube.com/watch?v=bum_19loj9A" },
        { id: 3, name: "C++", description: "C++ Basics and Advanced", image: "https://logowik.com/content/uploads/images/911_c_logo.jpg", video: "https://www.youtube.com/watch?v=mUQZ1qmKlLY" },
        { id: 4, name: "Web Development", description: "Complete Web Development", image: "https://logowik.com/content/uploads/images/react.jpg", video: "https://www.youtube.com/watch?v=3qBXWUpoPHo" },
        { id: 5, name: "Python", description: "Python for Beginners", image: "https://logowik.com/content/uploads/images/python4089.logowik.com.webp", video: "https://www.youtube.com/watch?v=rfscVS0vtbw" },
        { id: 6, name: "Node.js", description: "Learn Node.js from Scratch", image: "https://logowik.com/content/uploads/images/nodejs.jpg", video: "https://www.youtube.com/watch?v=RLtyhwFtXQA" },
        // Additional courses...
    ];

    return (
        <div className="home-container">
            <header className="header">
                <div className="profile-section">
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" className="profile-pic" />
                    <h3 className="profile-name">JEEVANANDHAM S</h3>
                </div>
                <nav className="header-nav">
                    <ul>
                        <li onClick={handleHomeClick}>Home</li>
                        <li onClick={() => setCurrentPage('courses')}>Courses</li>
                        <li onClick={handleAcademicClick}>Academic Details</li>
                        <li onClick={handleProfileClick}>My Profile</li>
                        <li onClick={handleLogout}>Logout</li>
                    </ul>
                </nav>
            </header>
            <div className="content">
                <div className="content-body">
                    {currentPage === 'home' && (
                        <div className="main-content">
                            <h2>Welcome to StudentAtlas</h2>
                            <p>Your one-stop solution for managing your academic life!</p>

                            <section className="announcements">
                                <h3>Latest Announcements</h3>
                                <ul>
                                    <li>🔔 Final exams will be held from December 10th to December 15th.</li>
                                    <li>📅 Spring semester registration opens on November 1st.</li>
                                    <li>📚 New course materials are now available for download.</li>
                                    <li>🏆 Join the upcoming coding competition on November 20th.</li>
                                </ul>
                            </section>

                            <section className="quick-links">
                                <h3>Quick Links</h3>
                                <div className="links-grid">
                                    <div className="link-item" onClick={() => setCurrentPage('courses')}>
                                        <h4>My Courses</h4>
                                        <p>View and manage your enrolled courses.</p>
                                    </div>
                                    <div className="link-item" onClick={handleAcademicClick}>
                                        <h4>Academic Details</h4>
                                        <p>Check your academic records and progress.</p>
                                    </div>
                                    <div className="link-item" onClick={handleProfileClick}>
                                        <h4>My Profile</h4>
                                        <p>Update your profile information.</p>
                                    </div>
                                    <div className="link-item" onClick={() => alert('Redirect to Contact Us Page')}>
                                        <h4>Contact Support</h4>
                                        <p>Get help from our support team.</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}
                    {currentPage === 'profile' && (
                        <div className="profile-container">
                            <h2>My Profile</h2>
                            <p><strong>Name:</strong> JEEVANANDHAM S</p>
                            <p><strong>Email:</strong> jeevan@example.com</p>
                            <p><strong>Contact:</strong> 8787564532</p>
                            <h3>Enrolled Courses</h3>
                            <div className="courses-container">
                                {courses.slice(0, 6).map((course) => (
                                    <div className="course-card" key={course.id}>
                                        <img src={course.image} alt={course.name} />
                                        <h4>{course.name}</h4>
                                        <p>Completion: {Math.floor(Math.random() * 100)}%</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {currentPage === 'academic' && (
                        <div>
                            <h2>Academic Details</h2>
                            <p>Degree: B.E(CSE)</p>
                            <p>Institution: SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY</p>
                            <p>Year of Graduation: 2027</p>
                        </div>
                    )}
                    {currentPage === 'courses' && (
                        <div className="courses-container">
                            <h2>Available Courses</h2>
                            <div className="course-grid">
                                {courses.map((course) => (
                                    <div className="course-card" key={course.id}>
                                        <img src={course.image} alt={course.name} />
                                        <h4>{course.name}</h4>
                                        <p>{course.description}</p>
                                        <button onClick={() => window.open(course.video, '_blank')}>
                                            Learn
                                        </button>
                                        <p>Completion: {Math.floor(Math.random() * 100)}%</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default HomePage;
