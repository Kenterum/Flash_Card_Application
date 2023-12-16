import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlashCard from '../Flashcard/Flashcard';

const FlashCardsPage = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:3000/cards');
      setCards(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Flash Cards</h1>
      <div>
        {cards.map(card => (
          <FlashCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default FlashCardsPage;
