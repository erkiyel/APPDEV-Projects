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
                <ul className="social-icons">
                    <li><a href="https://www.facebook.com/erckielcazel.olores"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="https://www.instagram.com/erkiyelolores/"><i className="fab fa-instagram"></i></a></li> 
                    <li><a href="Gallery.html">Gallery</a></li>
                </ul>   
            </div>
        </nav>
    );
};
export default Navbar;