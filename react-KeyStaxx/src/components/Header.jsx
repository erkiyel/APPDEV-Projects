import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Company_Profile">Company Profile</Link>
        <Link to="/Products">Products</Link>
        <Link to="/Reviews">Reviews</Link>
        <Link to="/Developers">Developer</Link>
      </nav>
    </header>
  );
};

export default Header;
