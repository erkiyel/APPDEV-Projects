import React from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Keyboard Alpha", image: "/assets/keyboard1.jpg" },
  { id: 2, name: "Keyboard Beta", image: "/assets/keyboard2.jpg" },
];

const ProductList = () => {
  return (
    <div className="product-list">
      <h2>Our Products</h2>
      {products.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`} className="product-item">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
