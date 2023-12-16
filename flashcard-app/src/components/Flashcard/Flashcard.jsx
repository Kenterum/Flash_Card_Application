import React, { useState } from 'react';

const FlashCard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div onClick={flipCard}>
      {isFlipped ? (
        <div>{/* Back of the card content */}</div>
      ) : (
        <div>{/* Front of the card content */}</div>
      )}
    </div>
  );
};

export default FlashCard;
