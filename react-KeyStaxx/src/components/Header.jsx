import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/showcase">Showcase</Link>
        <Link to="/products">Products</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/developers">Developer</Link>
      </nav>
    </header>
  );
};

export default Header;
