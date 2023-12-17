import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import ContactPage from './components/ContactPage/ContactPage';
import FlashCardsPage from './components/FlashCardsPage/FlashCardsPage';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/flashcards">Open FlashCard</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/flashcards" element={<FlashCardsPage />} />
      </Routes>
    </div>
  );
}

export default App;
