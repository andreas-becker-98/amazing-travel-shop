import React from 'react';
import StarRating from './StarRating';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <strong>{review.author}</strong> - {review.comment}
              <StarRating rating={review.rating} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewList;
