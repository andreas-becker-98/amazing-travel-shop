import React from 'react';

const StarRating = ({ rating, setRating }) => {
  const handleClick = (index) => {
    setRating(index + 1);
  };

  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span
        key={i}
        onClick={() => handleClick(i)}
        style={{
          cursor: 'pointer',
          color: i < rating ? 'gold' : 'gray',
          fontSize: '30px',
        }}
      >
        ★
      </span>
    );
  }

  return <div>{stars}</div>;
};

export default StarRating;
