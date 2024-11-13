import React, { useState } from 'react'

export default function Reviews() {
  const [review, setReview] = useState('')
  const [title, setTitle] = useState('')
  const [reviews, setReviews] = useState([])

  const handleReviewChange = (e) => {
    setReview(e.target.value)
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmitReview = () => {
    if (review.trim() !== '' && title.trim() !== '') {
      const currentDate = new Date()
      const reviewData = {
        title: title,
        reviewText: review,
        date: currentDate.toLocaleString(),
      }
      setReviews([...reviews, reviewData])
      setReview('')
      setTitle('')
    }
  }

  return (
    <div className="reviews-container">
      <h2>Submit a Game Review</h2>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Enter the review title"
      />
      <textarea
        value={review}
        onChange={handleReviewChange}
        placeholder="Write your review here..."
      />
      <button onClick={handleSubmitReview}>Submit Review</button>
      <div className="reviews-list">
        {reviews.length > 0 ? (
          reviews.map((reviewData, index) => (
            <div key={index} className="review-card">
              <h3>{reviewData.title}</h3>
              <p>{reviewData.reviewText}</p>
              <span className="review-date">Posted on: {reviewData.date}</span>
            </div>
          ))
        ) : (
          <p>No reviews yet. Be the first to add one!</p>
        )}
      </div>
    </div>
  )
}
