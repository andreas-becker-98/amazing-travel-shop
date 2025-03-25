import React, { useState } from 'react';
import StarRating from './StarRating';

const ReviewForm = ({ onAddReview }) => {
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      author,
      comment,
      rating
    };
    onAddReview(newReview);
    setAuthor('');
    setComment('');
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Customer Review</h3>
      <input 
        type="text" 
        placeholder="Your Name" 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)} 
      />
      <textarea 
        placeholder="Write your review..." 
        value={comment} 
        onChange={(e) => setComment(e.target.value)} 
      />
      <StarRating rating={rating} setRating={setRating} />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
