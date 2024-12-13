import React from 'react';
import { useParams } from 'react-router-dom';
import productManuals from './productManuals'; 
import './ProductManual.css';

const ProductManual = () => {
  const { productId } = useParams();
  const product = productManuals.find((product) => product.id === parseInt(productId)); // Find the product using the id

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product-manual">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <div className="details">
        <p><strong>Keycap Type:</strong> {product.details.keycapType}</p>
        <p><strong>Switch Type:</strong> {product.details.switchType}</p>
        <p><strong>Color:</strong> {product.details.color}</p>
        <p><strong>Usage:</strong> {product.details.usage}</p>
        <p><strong>Care Tips:</strong> {product.details.careTips}</p>
        <p><strong>USB Ports Required:</strong> {product.details.usbPortsRequired}</p>
      </div>
    </div>
  );
};

export default ProductManual;
