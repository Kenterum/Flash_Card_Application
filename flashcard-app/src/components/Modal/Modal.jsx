import React, { useState, useEffect } from 'react';
import './Modal.css'; 

const Modal = ({ mode, card, onSave, onClose }) => {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');
  const [status, setStatus] = useState('Want to Learn');
  const [error, setError] = useState(''); 

  useEffect(() => {
    if (mode === 'edit') {
      setFront(card.front);
      setBack(card.back);
      setStatus(card.status);
    }
    setError(''); 
  }, [card, mode]);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!front.trim() || !back.trim()) {
      setError('Please fill in both sides of the card.');
      return; 
    }

    onSave({ front, back, status });
    setError(''); 
  };

  const handleClose = () => {
    setError(''); 
    onClose(); 
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        {error && <div className="error">{error}</div>} 
        <form onSubmit={handleSubmit}>
          <label>Front:</label>
          <input className="front-txt" type="text" value={front} onChange={(e) => setFront(e.target.value)} />
          <label>Back:</label>
          <input className="back-txt" type="text" value={back} onChange={(e) => setBack(e.target.value)} />
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Noted">Noted</option>
            <option value="Want to Learn">Want to Learn</option>
            <option value="Learned">Learned</option>
          </select>
          <button type="submit">{mode === 'add' ? 'Add Card' : 'Save Changes'}</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
