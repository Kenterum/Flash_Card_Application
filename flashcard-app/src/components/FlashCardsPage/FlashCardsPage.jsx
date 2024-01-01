import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlashCard from '../Flashcard/Flashcard';
import Modal from '../Modal/Modal'; 
import './FlashCardsPage.css';

const FlashCardsPage = () => {
  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [currentCard, setCurrentCard] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios('http://localhost:3000/cards');
      setCards(result.data);
    } catch (error) {
      console.error('Failed to fetch cards:', error);
    }
  };

  const handleAddNewCard = () => {
    setModalMode('add');
    setIsModalOpen(true);
    setCurrentCard({ front: '', back: '', status: 'Want to Learn' });
  };

  const handleSaveCard = async (card) => {
    if (modalMode === 'add') {
      await axios.post('http://localhost:3000/cards', {
        ...card,
        lastModified: new Date().toISOString(),
      });
    } else if (modalMode === 'edit' && currentCard.id) {
      await axios.put(`http://localhost:3000/cards/${currentCard.id}`, {
        ...card,
        lastModified: new Date().toISOString(),
      });
    }
    setIsModalOpen(false);
    fetchData();
  };

  const handleDeleteCard = async (cardId) => {
   
    await axios.delete(`http://localhost:3000/cards/${cardId}`);
    fetchData();
  };

  return (
    <div>
      <h1>Flash Cards</h1>
      <button className="addcard-container"onClick={handleAddNewCard}>Add New Flash Card</button>
      <div className="cards-container">
        {cards.map((card) => (
          <FlashCard
            key={card.id}
            card={card}
            onEdit={() => {
              setModalMode('edit');
              setIsModalOpen(true);
              setCurrentCard(card);
            }}
            onDelete={() => handleDeleteCard(card.id)}
          />
        ))}
      </div>
      {isModalOpen && (
        <Modal
          mode={modalMode}
          card={currentCard}
          onSave={handleSaveCard}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default FlashCardsPage;
