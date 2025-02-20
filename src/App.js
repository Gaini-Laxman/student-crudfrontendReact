import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Ensure these imports point to the correct files
import StudentList from './components/StudentList';  // Correct path to StudentList
import AddStudent from './components/AddStudent';    // Correct path to AddStudent

import './App.css'; // Import the custom CSS file

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <header className="header">
                    <h1>Student Management System</h1>
                </header>

                <nav className="navbar">
                    <ul className="nav-list">
                        <li>
                            <Link to="/" className="nav-link">Student List</Link>
                        </li>
                        <li>
                            <Link to="/add" className="nav-link">Add Student</Link>
                        </li>
                    </ul>
                </nav>

                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<StudentList />} />
                        <Route path="/add" element={<AddStudent />} />
                    </Routes>
                </main>

                <footer className="footer">
                    <p>&copy; 2025 Student Management System</p>
                </footer>
            </div>
        </Router>
    );
};

export default App;
