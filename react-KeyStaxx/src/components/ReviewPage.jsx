// src/components/ReviewPage.jsx
import React, { useState } from "react";

const ReviewPage = () => {
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([
    "Great products, really improved my productivity!",
    "Love the design and feel of my new keyboard.",
  ]);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = () => {
    if (review) {
      setReviews([...reviews, review]);
      setReview("");  // Clear the textarea after submission
    }
  };

  return (
    <div className="review-page">
      <h2>Write a Review</h2>
      <textarea
        placeholder="Write your review here..."
        value={review}
        onChange={handleReviewChange}
      />
      <button onClick={handleSubmit}>Submit Review</button>

      <h3>Previous Reviews:</h3>
      <ul>
        {reviews.map((r, index) => (
          <li key={index}>{r}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewPage;
