import React, { useState, useEffect } from "react";
import "./ReviewPage.css";

const ReviewPage = () => {
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([
    "Amazing product! My typing speed has greatly improved.",
    "The build quality is fantastic, highly recommend!"
  ]);

  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem("reviews"));
    if (savedReviews) {
      setReviews(savedReviews);
    }
  }, []);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = () => {
    if (review) {
      const updatedReviews = [...reviews, review];
      setReviews(updatedReviews);
      setReview("");
      localStorage.setItem("reviews", JSON.stringify(updatedReviews));
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
