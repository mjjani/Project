import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Logo from './assets/logo.png'; // Import your logo image
import './App.css';

function App() {
    return (
        <Router>
            <div>
                {/* Navigation Bar */}
                <nav className="navbar">
                    <div className="navbar-logo">
                        <img src={Logo} alt="Pruthviraj Logo" />
                    </div>
                    <ul className="navbar-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </nav>

                {/* Main Content */}
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/blog" element={<Blog />} />
                    </Routes>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
