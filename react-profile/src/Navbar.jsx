import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);

    const handleToggle = () => {
        setShowLinks(!showLinks);
    };

    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src="/graduation with helm.jpg" alt="logo.svg" />
                    <button className="nav-toggle" onClick={handleToggle}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <ul className={`links ${showLinks ? 'show-links' : ''}`}>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="index2.html">About</a></li>
                    <li><a href="index3.html">Gallery</a></li>
                </ul>
                <ul className="social-icons">
                    <li><a href="https://www.facebook.com/erckielcazel.olores"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="https://www.instagram.com/erkiyelolores/"><i className="fab fa-instagram"></i></a></li> 
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
