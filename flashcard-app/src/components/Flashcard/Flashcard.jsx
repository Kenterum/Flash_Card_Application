import React, { useState } from 'react';
import './Flashcard.css';

const FlashCard = ({ card, onEdit, onDelete }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
      <div className="card-inner">
        <div className="card-front">
          <div className={`status ${card.status.replace(/\s+/g, '')}`}>{card.status}</div>
          <div className="content">{card.front}</div>
        </div>
        <div className="card-back">
          {card.back}
          <button className="edit-btn" onClick={(e) => { e.stopPropagation(); onEdit(); }}>Edit</button>
          <button className="delete-btn" onClick={(e) => { e.stopPropagation(); onDelete(); }}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
