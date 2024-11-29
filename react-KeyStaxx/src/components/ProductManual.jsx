import React from "react";
import { useParams } from "react-router-dom";

const ProductManual = () => {
  const { productId } = useParams();

  return (
    <div className="product-manual">
      <h2>Product Manual for Keyboard {productId}</h2>
      <p>Complete details about the keyboard, its materials, and usage.</p>
      <textarea placeholder="Write your review here"></textarea>
      <button>Submit Review</button>
    </div>
  );
};

export default ProductManual;
